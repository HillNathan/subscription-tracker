import React from "react"
import SubList from "../components/SubList"
import SubForm from "../components/SubForm"

function Main (props) {
    return (
    <div className="container">
        <SubList
            subscriptions={props.subscriptions}
            removeSub={props.removeSub} />
        <SubForm
            addSub={props.addSub}/>
    </div>
    )
}

export default Main