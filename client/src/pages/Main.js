import React from "react"
import SubList from "../components/SubList"
import SubForm from "../components/SubForm"
import "./SignIn.css";

function Main (props) {
	return (
		<div className="input-fields">
			<SubList
			subscriptions={props.subscriptions}
			removeSub={props.removeSub} />
			<SubForm
			addSub={props.addSub}/>
		</div>
	)
}

export default Main