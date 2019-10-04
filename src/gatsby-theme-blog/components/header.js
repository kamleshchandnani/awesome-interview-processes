import React from "react";
import { Link } from "gatsby";
import { css, useColorMode, Styled } from "theme-ui";
import Switch from "gatsby-theme-blog/src/components/switch";
import Bio from "gatsby-theme-blog/src/components/bio";
import sun from "gatsby-theme-blog/assets/sun.png";
import moon from "gatsby-theme-blog/assets/moon.png";
/** @jsx jsx */
import { jsx } from "theme-ui";

const rootPath = `${__PATH_PREFIX__}/`;

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        sx={{
          color: "primary"
        }}
        css={css({
          my: 0
        })}
      >
        <Styled.a
          as={Link}
          css={{
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`
          }}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    );
  } else {
    return (
      <Styled.h2
        as="p"
        css={css({
          my: 0
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h2>
    );
  }
};

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4
    }}
  />
);

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4
    }}
  />
);

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `baseline`,
            mb: 4
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <Switch
            aria-label="Toggle dark mode"
            css={css({
              bg: `black`
            })}
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  );
};
