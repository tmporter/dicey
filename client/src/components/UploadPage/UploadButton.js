import Button from "../Button/Button";

export default Button.extend`
   border-color: rgb(219, 112, 147);
   color: palevioletred;
   background-color: rgba(219, 112, 147, 0);
   &:hover {
      color: white;
      background-color: rgba(219, 112, 147, 1);
   }
`;
