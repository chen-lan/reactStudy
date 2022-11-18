import React,{Component} from "react";

import PubSub from "pubsub-js";

// import context from "../js/context";

export default class Son extends Component{
    // static contextType = context;
    render(){
        PubSub.subscribe("car",(topic,data)=>{
            console.log("Son",topic,data);
        })
        PubSub.subscribe("news",(topic,data)=>{
            console.log("Son",topic,data);
        })
        return (
            // <div>
            //     {this.context}
            // </div>
            <div>AAA</div>
        )
    }
}