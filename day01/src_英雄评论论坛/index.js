import React from "react";
// import ReactDOM from 'react-dom/client'; react@18写法
import ReactDOM from "react-dom";

const list = [
	{ id: 1, name: "jack", content: "rose, you jump i jump" },
	{ id: 2, name: "rose", content: "jack, you see you, one day day" },
	{ id: 3, name: "tom", content: "jack,。。。。。" },
];
const div = (
	<div>
		<div>
			{list.length ? (
				<ul>
					<h1>英雄评论论坛</h1>
					{list.map(item => {
						return (
							<li key={item.id}>
								<a
									href="javascript:;"
									onClick={function (e) {
										// e.preventDefault();
										console.log(e.target.innerText);
									}}>
									<h3>{item.name}</h3>
									<p>{item.content}</p>
								</a>
							</li>
						);
					})}
				</ul>
			) : (
				<h1>暂无评论</h1>
			)}
		</div>
	</div>
);

// 渲染组件页面
ReactDOM.render(div, document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);
