/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { Styled } from "theme-ui";
import BioContent from "./bio-content.js";

const Bio = () => (
  <Styled.div>
    <BioContent />
  </Styled.div>
);

export default Bio;
