import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GameTileStyle = styled(Link)`
   width: 300px;
   height: 240px;
   color: #f3f3f3;
   background: ${props => `url("${props.thumbnail}")`};
   background-color: #333;
   transition: box-shadow 400ms;
   text-decoration: none;

   &:hover {
      box-shadow: 0px 5px 10px #aaa;
   }
`;

const GameTileTitle = styled.span`
   color: white;
   font-size: 1.1rem;
   &:hover {
      text-decoration: underline;
   }
`;

const GameTileAuthor = styled.span`
   color: rgba(255, 255, 255, 0.7);
   font-size: 0.9rem;
`;

const GameTileDescription = styled.span`
   margin-top: 10px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 0.9rem;
`;

const GameTileContent = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   justify-content: flex-end;
   width: 100%;
   height: 100%;
   padding: 5px;
   background: linear-gradient(to top, black, rgba(0, 0, 0, 0));
`;

const GameTile = ({ game }) => {
   return (
      <GameTileStyle to={`/game/${game.id}`} thumbnail={game.thumbnail}>
         <GameTileContent>
            <GameTileTitle to={`/game/${game.id}`}>{game.title}</GameTileTitle>
            <GameTileAuthor>{game.author}</GameTileAuthor>
            <GameTileDescription>{game.description}</GameTileDescription>
         </GameTileContent>
      </GameTileStyle>
   );
};

export default GameTile;
