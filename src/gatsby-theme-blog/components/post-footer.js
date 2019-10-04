import React from "react";
import { Link } from "gatsby";
import { css, Styled, Flex } from "theme-ui";

const Footer = ({ previous, next }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3
    })}
  >
    <Styled.hr />
    {(previous || next) && (
      <Flex
        as="ul"
        css={{
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
);

export default Footer;
