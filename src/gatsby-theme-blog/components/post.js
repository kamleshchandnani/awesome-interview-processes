import { Styled, css } from "theme-ui";

import PostFooter from "gatsby-theme-blog/src/components/post-footer";
import Layout from "gatsby-theme-blog/src/components/layout";
import SEO from "gatsby-theme-blog/src/components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Footer from "gatsby-theme-blog/src/components/home-footer";
/** @jsx jsx */
import { jsx } from "theme-ui";

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { 
        title,
        social
      }
    }
  },
  location,
  previous,
  next
}) => (
  <Layout location={location} title={title} socialLinks={social}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1
        sx={{
          color: "primary"
        }}
        css={css({
          mb: 4
        })}
      >
        {post.title}
      </Styled.h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
    <Footer socialLinks={social} />
  </Layout>
);

export default Post;
