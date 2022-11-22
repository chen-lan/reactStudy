import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

export default function Message() {
	const navigate = useNavigate();
	function addMessageHandle() {
		navigate("/home/message/detail/4", {
			state: { xxx: "哈哈哈" },
		});
	}
	function changeMessageHandle() {
		navigate("/home/message/detail/5", {
			state: { yyy: "呵呵呵" },
			replace: true,
		});
	}
	return (
		<div>
			<ul>
				<li>
					<Link to="/home/message/1">message001</Link>
				</li>
				<li>
					<Link to="/home/message/2">message002</Link>
				</li>
				<li>
					<Link to="/home/message/3">message003</Link>
				</li>
			</ul>
			<button onClick={addMessageHandle}>添加</button>
			<button onClick={changeMessageHandle}>替换</button>
			<Outlet></Outlet>
		</div>
	);
}
