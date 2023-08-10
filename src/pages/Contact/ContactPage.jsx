import React from "react";
import Panel from "../../components/Contact/Panel";
import Forms from "../../components/Contact/Forms";
import Info from "../../components/Contact/Info";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Panel />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Info />
        </div>
        <div className="col">
          <Forms />
        </div>
        <div className="col-md-8">fnjebfbewfjkekfnek</div>
      </div>
    </div>
  );
};
export default ContactPage;