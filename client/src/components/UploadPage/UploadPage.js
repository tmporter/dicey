import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { addGameAction } from "../../actions/gameActions";
import { connect } from "react-redux";
import { generateGameUrl } from "../../helpers/gameHelpers";
import { Formik } from "formik";
import PageLayout from "../PageLayout/PageLayout";
import Form from "../Form/Form";
import UploadButton from "./UploadButton";
import Input from "../Input/Input";
import ButtonBar, { ButtonBarRight } from "../ButtonBar/ButtonBar";

class UploadPage extends Component {
   state = {
      // newGame: {
      //    title: "",
      //    author: "",
      //    description: "",
      //    thumbnail: ""
      // },
      shouldRedirectToGame: false,
      redirectUrl: ""
   };

   handleSubmit = values => {
      console.log(values);
   };

   // handleSubmit = e => {
   //    e.preventDefault();

   //    const { title, author, description, thumbnail } = this.state;
   //    const { addGame } = this.props;

   //    const formData = new FormData(e.target);

   //    addGame({ title, author, description, thumbnail });

   //    this.setState({
   //       shouldRedirectToGame: true,
   //       redirectUrl: `/game/${generateGameUrl(title)}`
   //    });
   // };

   render() {
      const { shouldRedirectToGame, redirectUrl } = this.state;

      if (shouldRedirectToGame) {
         return <Redirect to={redirectUrl} from="/upload" />;
      }

      return (
         <PageLayout>
            <div style={{ gridArea: "main" }}>
               <h2>Tell us about your game!</h2>
               <Formik
                  initialValues={{
                     title: "",
                     description: "",
                     thumbnail: "",
                     gameFile: undefined
                  }}
                  validate={values => {
                     console.log("==== VALIDATING");
                     let errors = {};
                     if (!values.title) {
                        errors.title = "Required";
                     }
                     return errors;
                  }}
                  onSubmit={values => {
                     console.log("==== SUBMITTING");
                     console.log(values);
                  }}
                  render={({ values, errors, touched, handleChange, handleSubmit, setFieldValue, isSubmitting }) => (
                     <Form onSubmit={handleSubmit}>
                        <Input value={values.title} label="Title" name="title" onChange={handleChange} />
                        {touched.title && errors.title && <p>{errors.title}</p>}
                        <Input
                           value={values.description}
                           label="Description"
                           name="description"
                           onChange={handleChange}
                        />
                        <Input value={values.thumbnail} label="Thumbnail" name="thumbnail" onChange={handleChange} />
                        <Input
                           name="gameFile"
                           type="file"
                           value={values.gameFile}
                           autoComplete="off"
                           onChange={event => {
                              const { files } = event.currentTarget;
                              setFieldValue("gameFile", files[0]);
                           }}
                        />
                        <ButtonBar>
                           <ButtonBarRight>
                              <UploadButton
                                 color="palevioletred"
                                 style={{ width: 100 }}
                                 type="submit"
                                 disabled={isSubmitting}
                              >
                                 Upload
                              </UploadButton>
                           </ButtonBarRight>
                        </ButtonBar>
                     </Form>
                  )}
               />
            </div>
         </PageLayout>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   addGame: game => dispatch(addGameAction(game))
});

export default connect(
   null,
   mapDispatchToProps
)(UploadPage);
