import React from "react"
import SubList from "../components/SubList"
import SubForm from "../components/SubForm"
import "./SignIn.css";

function Main (props) {
	return (
		<div className="App row">
			<div className="col-sm left-side"></div>
			<div className="col-sm right-side">
				<SubList
				subscriptions={props.subscriptions}
				removeSub={props.removeSub} />
				<SubForm
				addSub={props.addSub}/>
			</div>
		</div>
	)
}

export default Main