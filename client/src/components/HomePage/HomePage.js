import React, { Component } from "react";
import { connect } from "react-redux";
import GameList from "../GameList/GameList";
import { HomePageLayout } from "./HomePageLayout";
import { HomePageContent } from "./HomePageContent";
import { getGamesAction } from "../../actions/gameActions";

class HomePage extends Component {
   componentDidMount() {
      this.props.getGames();
   }

   render() {
      const { games } = this.props;

      return (
         <HomePageLayout>
            <HomePageContent>
               <GameList title="Featured games" subtitle="Some games we think are pretty neat" games={games || []} />
               <GameList title="Latest uploads" subtitle="The latest and greatest" games={games || []} />
            </HomePageContent>
         </HomePageLayout>
      );
   }
}

const mapStateToProps = state => {
   return { games: state.games.games };
};

const mapDispatchToProps = dispatch => ({
   getGames: () => dispatch(getGamesAction())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(HomePage);
