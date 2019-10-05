import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Styled, css } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "gatsby-theme-blog/src/components/layout";
import SEO from "gatsby-theme-blog/src/components/seo";
import Footer from "gatsby-theme-blog/src/components/home-footer";

const PostsQuery = graphql`
  query PostsQueryShadowed {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          ... on MdxBlogPost {
            fields {
              index
            }
          }
        }
      }
    }
  }
`;
const sortPostsByIndex = (currentPost, nextPost) =>
  currentPost.node.fields.index - nextPost.node.fields.index;

const Posts = ({ location }) => {
  const results = useStaticQuery(PostsQuery);
  const posts = results.allBlogPost.edges;
  const siteTitle = results.site.siteMetadata.title;
  const socialLinks = results.site.siteMetadata.social;
  const sortedPosts = posts.sort(sortPostsByIndex);

  return (
    <Layout location={location} title={siteTitle}>
      <main>
        {sortedPosts.map(({ node }) => {
          const title = node.title || node.slug;
          const keywords = node.keywords || [];
          return (
            <Fragment key={node.slug}>
              <SEO title="Home" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: `none`
                    }}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          );
        })}
      </main>
      <Footer socialLinks={socialLinks} />
    </Layout>
  );
};

export default Posts;
