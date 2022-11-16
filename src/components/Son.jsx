import React,{Component} from "react";
import context from "../js/context";

export default class Son extends Component{
    static contextType = context;
    render(){
        return (
            <div>
                {this.context}
            </div>
        )
    }
}