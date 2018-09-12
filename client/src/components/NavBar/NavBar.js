import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import StyledNavLink from "../StyledNavLink/StyledNavLink";
import Header, { HeaderLeft, HeaderRight } from "../Header/Header";
import Brand from "../Brand/Brand";
import NavBarButton from "./NavBarButton";

const NavBar = ({ onLogIn, onSignUp, onLogOut, isAuthenticated, email }) => {
   return (
      <Header>
         <HeaderLeft>
            <NavLink to="/">
               <Brand>dicey</Brand>
            </NavLink>
            <StyledNavLink to="/browse">Browse</StyledNavLink>
            <StyledNavLink to="/upload">Upload</StyledNavLink>
         </HeaderLeft>
         {!isAuthenticated ? (
            <HeaderRight>
               <NavBarButton onClick={onLogIn}>Log&nbsp;In</NavBarButton>
               <NavBarButton onClick={onSignUp}>Sign&nbsp;Up</NavBarButton>
            </HeaderRight>
         ) : (
            <HeaderRight>
               <span>{email}</span>
               <NavBarButton onClick={onLogOut}>Log&nbsp;out</NavBarButton>
            </HeaderRight>
         )}
      </Header>
   );
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   email: state.auth.email
});

export default withRouter(connect(mapStateToProps)(NavBar));
