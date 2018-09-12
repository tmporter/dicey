import styled from "styled-components";

const Header = styled.header`
   width: 100%;
   height: 60px;
   display: flex;
   background: linear-gradient(to right, #db7093, #f9b5ac);
   /* background: palevioletred; */
   color: white;
   align-items: center;
   padding: 0 20px;

   & a {
      text-decoration: none;
      color: white;
   }
`;

export default Header;

const HeaderSection = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 100%;

   & > * {
      margin: 7px;
      &:first-child {
         margin-left: 0;
      }
      &:last-child {
         margin-right: 0;
      }
   }
`;

export const HeaderLeft = HeaderSection.extend``;

export const HeaderRight = HeaderSection.extend`
   justify-content: flex-end;
`;
