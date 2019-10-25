import React from "react";
import SubList from "../../components/SubList";
import SubForm from "../../components/SubForm";
import PageHeader from "../../components/PageHeader"
import Logo from "../../components/Logo"

import "./style.css";

function Main(props) {
  return (
    <div className="App">
      <Logo />
      <div className="container">
        <PageHeader headerText = "Subscriptions" />
        <div className="row justify-content-center">
          <div className="col-10 subscription form-holder">
            <SubList
              subscriptions={props.subscriptions}
              removeSub={props.removeSub}
            />
            <SubForm addSub={props.addSub} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
