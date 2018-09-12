import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import BrowsePage from "../BrowsePage/BrowsePage";
import UploadPage from "../UploadPage/UploadPage";
import GamePage from "../GamePage/GamePage";
import FourOhFourPage from "../FourOhFourPage/FourOhFourPage";
import LogInModal from "../LogInModal/LogInModal";
import NavBar from "../NavBar/NavBar";
import { connect } from "react-redux";
import { logOutAction } from "../../actions/logOutActions";

class App extends Component {
   state = {
      showLogInModal: false,
      isSignUp: false
   };

   openLogInModal = () => {
      this.setState({ showLogInModal: true, isSignUp: false });
   };

   openSignUpModal = () => {
      this.setState({ showLogInModal: true, isSignUp: true });
   };

   handleLogOut = () => {
      this.props.logOutAction();
   };

   closeModal = () => {
      this.setState({ showLogInModal: false });
   };

   render() {
      const { showLogInModal, isSignUp } = this.state;
      const { isAuthenticated } = this.props;

      return (
         <div>
            <NavBar
               isAuthenticated={isAuthenticated}
               onLogIn={this.openLogInModal}
               onSignUp={this.openSignUpModal}
               onLogOut={this.handleLogOut}
            />
            <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/browse" component={BrowsePage} />
               <Route path="/upload" component={UploadPage} />
               <Route path="/game/:id" component={GamePage} />
               <Route component={FourOhFourPage} />
            </Switch>
            <LogInModal isOpen={showLogInModal} onRequestClose={this.closeModal} isSignUp={isSignUp} />
         </div>
      );
   }
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(
   connect(
      mapStateToProps,
      { logOutAction }
   )(App)
);
