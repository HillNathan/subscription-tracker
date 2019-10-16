import React, {Component} from "react"
import SubList from "../components/SubList"
import SubForm from "../components/SubForm"

class Main extends Component {
    
    render () {
        return (
        <div className="container">
            <SubList/>
            <SubForm/>
        </div>
        )
    }
}

export default Main