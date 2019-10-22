import React from "react";
import SubList from "../components/SubList";
import SubForm from "../components/SubForm";
import PaddingDiv from "../components/PaddingDiv"
import "../pages/Subscription/style.css";

function Main(props) {
  return (
    <div className="App row">
      <div className="container">
			<PaddingDiv height={30} />
        <div className="row justify-content-center">
				<div className="col-sm subscription"></div>
				<div className="col-sm subscription form-holder">
				<SubList
          subscriptions={props.subscriptions}
          removeSub={props.removeSub}
        />
        <SubForm addSub={props.addSub} />
				</div>
				<div className="col-sm subscription"></div>
				</div>
			</div>
    </div>
  );
}

export default Main;
