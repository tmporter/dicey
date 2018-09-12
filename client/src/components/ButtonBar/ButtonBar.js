import styled from "styled-components";

export default styled.div`
   display: flex;
`;

const ButtonBarSegment = styled.div`
   display: flex;
   width: 100%;
   height: 100%;
`;

export const ButtonBarLeft = ButtonBarSegment.extend``;

export const ButtonBarRight = ButtonBarSegment.extend`
   justify-content: flex-end;
`;
