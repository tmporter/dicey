import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeStyle = {
   color: "rgba(255, 255, 255, 1)",
   textDecoration: "underline"
};

const StyledNavLink = props => {
   return <NavLink activeStyle={activeStyle} className={props.className} {...props} />;
};

export default styled(StyledNavLink)`
   color: rgba(255, 255, 255, 0.7);
   &:hover {
      text-decoration: underline;
   }
`;
