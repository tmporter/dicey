import React from "react";
import styled from "styled-components";
import GameTile from "../GameTile/GameTile";

const GameListStyle = styled.div`
   display: flex;
   margin-bottom: 40px;
   & > * {
      margin: 0 7px;
      &:first-child {
         margin-left: 0px;
      }
      &:last-child {
         margin-right: 0px;
      }
   }
`;

const GameListTitle = styled.h2`
   margin-bottom: 0px;
`;

const GameListSubtitle = styled.span`
   font-size: 0.9rem;
   display: inline-block;
   margin-bottom: 4px;
`;

const GameList = ({ title, subtitle, games }) => {
   return (
      <div>
         <GameListTitle>{title}</GameListTitle>
         <GameListSubtitle>{subtitle}</GameListSubtitle>
         <GameListStyle>
            {games.map(game => {
               return <GameTile key={game.id} game={game} />;
            })}
         </GameListStyle>
      </div>
   );
};

export default GameList;
