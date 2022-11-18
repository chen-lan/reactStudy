import React,{Component} from "react";

import PubSub from "pubsub-js";

// import context from "../js/context";

// const {Consumer} = context;

export default class Far extends Component{
    render(){
        return (
            // <Consumer>
            //     {
            //         (data)=>{
            //             return <div>{data}</div>
            //         }
            //     }
                
            // </Consumer>
            <div>
                <button onClick={()=>{
                    PubSub.publish("news","海珠疫情严重的很");
                }}>发布news话题消息</button>
            </div>
        )
    }
}