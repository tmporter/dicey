import React, { Component } from "react";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Form from "../Form/Form";
import { logInAction } from "../../actions/logInActions";
import { signUpAction } from "../../actions/signUpActions";

import "react-tabs/style/react-tabs.css";

Modal.setAppElement("#root");

const modalStyle = {
   content: {
      width: 400,
      height: 600,
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
   }
};

class LogInModal extends Component {
   state = {
      email: "",
      password: "",
      name: ""
   };

   handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   handleLogIn = event => {
      event.preventDefault();

      const { email, password } = this.state;

      // todo: validation

      this.props.logInAction(email, password);
   };

   handleSignUp = event => {
      event.preventDefault();

      const { email, password, name } = this.state;

      // todo: validation

      this.props.signUpAction(email, password, name);
   };

   render() {
      const { email, password, name } = this.state;
      const { isOpen, onAfterOpen, onRequestClose, isSignUp, isFetching, isAuthenticated, message } = this.props;

      if (isAuthenticated) {
         return <Redirect to="/" />;
      }

      return (
         <Modal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            style={modalStyle}
            contentLabel="LogInModal"
         >
            <Tabs defaultIndex={isSignUp ? 1 : 0}>
               <TabList>
                  <Tab>Log In</Tab>
                  <Tab>Sign Up</Tab>
               </TabList>

               <TabPanel>
                  <Form onSubmit={this.handleLogIn}>
                     <label>Email</label>
                     <input name="email" value={email} onChange={this.handleInputChange} />
                     <label>Password</label>
                     <input name="password" value={password} onChange={this.handleInputChange} />
                     <button type="submit">Log in</button>
                  </Form>
                  {isFetching && <p>Loading...</p>}
               </TabPanel>
               <TabPanel>
                  <Form onSubmit={this.handleSignUp}>
                     <label>Email</label>
                     <input name="email" value={email} onChange={this.handleInputChange} />
                     <label>Password</label>
                     <input name="password" value={password} onChange={this.handleInputChange} />
                     <label>Full name</label>
                     <input name="name" value={name} onChange={this.handleInputChange} />
                     <button type="submit">Sign up</button>
                  </Form>
                  {isFetching && <p>Loading...</p>}
               </TabPanel>
            </Tabs>
            {message && <p>{message}</p>}
         </Modal>
      );
   }
}

const mapStateToProps = state => ({
   isFetching: state.auth.isFetching,
   isAuthenticated: state.auth.isAuthenticated,
   message: state.auth.message
});

export default connect(
   mapStateToProps,
   { logInAction, signUpAction }
)(LogInModal);
