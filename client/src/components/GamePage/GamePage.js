import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getGameAction } from "../../actions/gameActions";

const GamePageLayout = styled.div`
   margin: 0 20px;
`;

class GamePage extends Component {
   componentDidMount() {
      const { match, getGame } = this.props;
      getGame(match.params.id);
   }

   render() {
      const { game } = this.props;
      if (game) {
         return (
            <GamePageLayout>
               <h1>{game.title}</h1>
               <h3>by {game.author}</h3>
               <p>{game.description}</p>
            </GamePageLayout>
         );
      } else {
         return <h2>Sorry. We couldn't find a game with that name. :(</h2>;
      }
   }
}

const mapStateToProps = state => ({
   game: state.games.game
});

const mapDispatchToProps = dispatch => ({
   getGame: gameId => dispatch(getGameAction(gameId))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(GamePage);
