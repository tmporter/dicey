import styled from "styled-components";

const Button = styled.button`
   border: 2px solid black;
   padding: 6px 15px;
   border-radius: 50px;
   color: black;
   background: rgba(0, 0, 0, 0);
   margin: 5px;
   font-size: 1rem;

   transition: background-color 200ms ease-out, color 200ms ease-out;

   &:hover {
      background: rgba(0, 0, 0, 0.1);
   }
`;

export default Button;
