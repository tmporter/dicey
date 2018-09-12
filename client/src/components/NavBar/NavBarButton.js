import Button from "../Button/Button";

export default Button.extend`
   border-color: white;
   color: white;
   background-color: rgba(255, 255, 255, 0);
   &:hover {
      color: palevioletred;
      background-color: rgba(255, 255, 255, 1);
   }
`;
