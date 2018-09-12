import React, { Component } from "react";
import styled from "styled-components";

class Input extends Component {
   render() {
      const { label, ...props } = this.props;
      return (
         <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            {label && <StyledLabel>{label}</StyledLabel>}
            <StyledInput {...props} />
         </div>
      );
   }
}

const StyledLabel = styled.label`
   color: rgba(0, 0, 0, 0.6);
   padding-left: 4px;
`;

const StyledInput = styled.input`
   border-color: #333;
   border-width: 0 0 1px 0;
   background: transparent;
   font-size: 1.1rem;
   padding: 4px;
`;

export default Input;
