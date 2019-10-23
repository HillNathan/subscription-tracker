import React from "react";
import SubList from "../components/SubList";
import SubForm from "../components/SubForm";
import PaddingDiv from "../components/PaddingDiv"
import "../pages/Subscription/style.css";
import Logo from "../components/Logo"

function Main(props) {
  return (
    <div className="App row">
      <div className="container">
        <PaddingDiv height={30} />
        <div className="col-sm">
          <Logo />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 subscription form-holder">
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
