import React, { Component } from "react";

import PubSub from "pubsub-js";

import Far from "./components/Far";
import Son from "./components/Son";
// import context from "./js/context";
// const {Provider} = context;
export default class App extends Component {
	
	state = {
		desc: '',
		isAgree: '',
		city: '',
		sex: '',
	  }

	handle = (key)=> (e)=>{
		if(e.target.type === "checkbox") return this.setState({[key]:e.target.checked});
		this.setState({[key]:e.target.value});
	}
	render() {
		PubSub.subscribe("news",(topic,data)=>{
			console.log("App",topic,data);
		})
		const carID = PubSub.subscribe("car",(topic,data)=>{
			console.log("App",topic,data);
		})
		return (
			<div>
				<div>
					<textarea
					name="desc"
					id=""
					cols="30"
					rows="10"
					value={this.state.desc}
					onChange={this.handle('desc')}
					></textarea>
					<input
					type="checkbox"
					name="isAgree"
					checked={this.state.isAgree}
					onChange={this.handle('isAgree')}
					/>
					{/* select的value属性值如何和option的value相同,则对应的option会被选中 */}
					<select
					name="city"
					id=""
					value={this.state.city}
					onChange={this.handle('city')}
					>
					<option value="sz">深圳</option>
					<option value="gz">广州</option>
					<option value="bj">北京</option>
					</select>
					<br />
					男:
					<input
					type="radio"
					name="sex"
					value="male"
					onChange={this.handle('sex')}
					/>
					女:
					<input
					type="radio"
					name="sex"
					value="female"
					onChange={this.handle('sex')}
					/>
				</div>

				{/* <input type="text" ref={appRef} />
				<button onClick={()=>{
					console.log(appRef.current);
					appRef.current.focus()
				}} >按钮</button> */}
				<input type="text" ref={(node)=>{
					console.log(node);
					this.node = node;
				}} />
				<button onClick={()=>{
					this.node.focus()
				}} >按钮</button>

				<hr/>
				<hr/>
				<button onClick={()=>{
					// 发布car话题消息
					PubSub.publish("car",["奥迪","奔驰","宝马"]);
				}}>发布car话题消息</button>
				<hr/>
				{/* <Provider value={[1,2,3,4]}>
					<Far></Far>
					<Son></Son>
				</Provider> */}
				<Far></Far>
				<Son/>
				<button onClick={()=>{
					PubSub.unsubscribe(carID);
				}}>取消car订阅的消息</button>
				{/* 取消car类的订阅 */}
				<button onClick={()=>{
					PubSub.unsubscribe("car");
				}}>取消car订阅</button>
				{/* 取消所有订阅 */}
				<button onClick={()=>{
					PubSub.clearAllSubscriptions("car");
				}}>取消car订阅</button>
			</div>
		);
	}
}
