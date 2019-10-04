const withDefaults = require(`gatsby-theme-blog-core/utils/default-options`);
const crypto = require(`crypto`);

const mdxResolverPassthrough = fieldName => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName
  });
  return result;
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes(`type BlogPost implements Node @nodeInterface {
      date: Date @dateformat
      index: Int
  }`);

  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
      fields: {
        date: { type: `Date`, extensions: { dateformat: {} } },
        index: { type: `Int` }
      },
      interfaces: [`Node`, `BlogPost`]
    })
  );
};

// exports.onCreateNode = async ({ node, actions, getNode, createNodeId }, themeOptions) => {
//   const { createNode, createParentChildLink } = actions;
//   const { contentPath, basePath } = withDefaults(themeOptions);

//   // Make sure it's an MDX node
//   if (node.internal.type !== `Mdx`) {
//     return;
//   }

//   // Create source field (according to contentPath)
//   const fileNode = getNode(node.parent);
//   const source = fileNode.sourceInstanceName;
//   console.log("######from shadowed file", { type: node.internal.type, source, contentPath });
//   if (node.internal.type === `Mdx` && source === "content/companies") {
//     // let slug;
//     // if (node.frontmatter.slug) {
//     //   if (path.isAbsolute(node.frontmatter.slug)) {
//     //     // absolute paths take precedence
//     //     slug = node.frontmatter.slug;
//     //   } else {
//     //     // otherwise a relative slug gets turned into a sub path
//     //     slug = urlResolve(basePath, node.frontmatter.slug);
//     //   }
//     // } else {
//     //   // otherwise use the filepath function from gatsby-source-filesystem
//     //   const filePath = createFilePath({
//     //     node: fileNode,
//     //     getNode,
//     //     basePath: contentPath
//     //   });

//     //   slug = urlResolve(basePath, filePath);
//     // }

//     const fieldData = {
//       index: node.frontmatter.index
//       // title: node.frontmatter.title,
//       // tags: node.frontmatter.tags || [],
//       // slug,
//       // date: node.frontmatter.date,
//       // keywords: node.frontmatter.keywords || []
//     };
//     console.log("######from shadowed file", fieldData);
//     const mdxBlogPostId = createNodeId(`${node.id} >>> Shadowed MdxBlogPost`);
//     await createNode({
//       ...fieldData,
//       // Required fields.
//       id: node.frontmatter.index,
//       parent: node.id,
//       children: [],
//       internal: {
//         type: `MdxBlogPost`,
//         contentDigest: crypto
//           .createHash(`md5`)
//           .update(JSON.stringify(fieldData))
//           .digest(`hex`),
//         content: JSON.stringify(fieldData),
//         description: `Mdx implementation of the BlogPost interface`
//       }
//     });
//     createParentChildLink({ parent: node, child: getNode(mdxBlogPostId) });
//   }
// };
