import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    let { selectedContact } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h2>More Details</h2>
                  <img src={selectedContact.picture.large} />
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Name:
                      {selectedContact.name.first}
                    </li>
                    <li className="list-group-item">
                      DOB:
                      {selectedContact.dob.date}
                    </li>

                    <li className="list-group-item">
                      Phone:
                      {selectedContact.phone}
                    </li>
                    <li className="list-group-item">
                      Country:
                      {selectedContact.location.country}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactCard;
