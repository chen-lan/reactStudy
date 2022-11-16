import React,{Component} from "react";
import context from "../js/context";

const {Consumer} = context;

export default class Far extends Component{
    render(){
        return (
            <Consumer>
                {
                    (data)=>{
                        return <div>{data}</div>
                    }
                }
            </Consumer>
        )
    }
}