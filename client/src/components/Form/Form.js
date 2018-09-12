import styled from "styled-components";
export default styled.form`
   display: flex;
   flex-direction: column;
   & > * {
      margin: 20px 0;
      &:first-child {
         margin-top: 0;
      }
      &:last-child {
         margin-bottom: 0;
      }
   }
`;
