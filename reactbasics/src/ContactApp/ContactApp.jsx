import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
class ContactApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      selectedContact: {},
    };
  }
  componentDidMount() {
    let url =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(url)
      .then((response) => {
        //Success repsonse
        this.setState({
          contacts: response.data,
        });
      })
      .catch();
  }
  pullData = (contact) => {
    console.log("Parent Comp: Method invoking & Name:", contact.name.first);
    this.setState({ selectedContact: contact });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <h1>Contact App</h1>
              {/*    <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
              <ContactList
                contacts={this.state.contacts}
                pullData={this.pullData}
              />
            </div>
            <div className="col-md-4">
              {Object.keys(this.state.selectedContact).length > 0 ? (
                <React.Fragment>
                  <ContactCard selectedContact={this.state.selectedContact} />
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactApp;
