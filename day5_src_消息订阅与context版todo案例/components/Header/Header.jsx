import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./Header.css";
export default class Header extends Component {
	handle = e => {
		// 获取输入的数据
		const todoName = e.target.value.trim();
		// 判断是否是回车键或有输入任务名称
		if (e.keyCode !== 13 || !todoName) return;
		// 调用传过来的函数
		// this.props.addTodo(todoName);
		// 发布addTodo消息订阅
		PubSub.publish("addTodo",todoName);
		e.target.value = "";
	};
	render() {
		return (
			<div className="todo-header">
				<input type="text" onKeyUp={this.handle} />
			</div>
		);
	}
}
