exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type BlogPost implements Node @nodeInterface {
      date: Date @dateformat
    }
    type MdxBlogPost implements Node @infer {
      fields: MdxBlogPostFields
    }
    type MdxBlogPostFields @infer {
      index: Int
    }
  `;
  createTypes(typeDefs);
  createTypes(
    schema.buildObjectType({
      name: `MdxBlogPost`,
      fields: {
        date: { type: `Date`, extensions: { dateformat: {} } }
      },
      interfaces: [`Node`, `BlogPost`]
    })
  );
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MdxBlogPost`) {
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: "index",
      value: parent.frontmatter.index
    });
  }
};
