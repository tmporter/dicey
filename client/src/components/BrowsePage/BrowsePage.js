import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import GameList from "../GameList/GameList";
import Sidebar from "../Sidebar/Sidebar";
import { getGamesAction } from "../../actions/gameActions";

const BrowsePageLayout = styled.div`
   display: flex;
`;

const BrowsePageContent = styled.div`
   margin: 0 20px;
`;

class BrowsePage extends Component {
   componentDidMount() {
      this.props.getGames();
   }

   render() {
      const { games } = this.props;
      return (
         <BrowsePageLayout>
            <Sidebar>yo</Sidebar>
            <BrowsePageContent>
               <GameList title="Browse" games={games || []} />
            </BrowsePageContent>
         </BrowsePageLayout>
      );
   }
}

const mapStateToProps = state => ({
   games: state.games.games
});

const mapDispatchToProps = dispatch => ({
   getGames: () => dispatch(getGamesAction())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(BrowsePage);
