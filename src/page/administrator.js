import React, { Component } from "react";
import Auth from "@aws-amplify/auth";
import Login from "../components/login";
import { API, graphqlOperation } from "aws-amplify";
import { listGallerys } from "../graphql/queries";
import CreateBriefcase from "../components/createBriefcase";
import UpdateBriefcase from "../components/updateBriefcase";

class Administrator extends Component {
  constructor(props) {
    super(props);
    this.auth = this.auth.bind(this);
    this.state = {
      loggedIn: false,
      err: false,
      section: true,
    };
  }

  async componentDidMount() {
    let existToken = localStorage.getItem('CognitoIdentityServiceProvider.k38fqmdpqt4jasnuh8c8n2o3h.mauricio.idToken');
    if (existToken){
      this.setState({loggedIn:true})
    }
    const data = await API.graphql(graphqlOperation(listGallerys));
    console.log('list gallery',data.data.listGallerys.items)
  }

  auth(state) {
    Auth.signIn(state.user, state.password)
      .then((success) => {
        console.log("success", success);
        this.setState({ loggedIn: true });
      })
      .catch((err) => {
        console.log("err", err);
        this.setState({ err: true });
      });
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <div>
            <p>crear nuevo portafolio</p>
            <p>agregar fotos a un portafolio</p>
          </div>
          <div>
            {this.state.section ? <CreateBriefcase /> : <UpdateBriefcase />}
          </div>
        </div>
      );
    } else {
      return <Login auth={this.auth} />;
    }
  }
}

export default Administrator;
