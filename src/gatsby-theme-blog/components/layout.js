import React from "react";
import { css, Styled } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 3
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
);
