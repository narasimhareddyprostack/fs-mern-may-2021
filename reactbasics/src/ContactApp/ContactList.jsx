import React, { Component } from "react";

class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  selectedContact = (contact) => {
    console.log(contact.name.first);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover table-primary table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.contacts != null ? (
                    <React.Fragment>
                      {this.props.contacts.map((contact) => {
                        return (
                          <tr
                            key={contact.login.uuid}
                            onClick={this.selectedContact.bind(this, contact)}
                          >
                            <td>{contact.login.uuid.slice(32, 36)}</td>
                            <td>{contact.name.first}</td>
                            <td>{contact.email}</td>
                            <td>{contact.location.city}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactList;
