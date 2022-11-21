// import Home from "../pages/Home";
// import About from "../pages/About";
// import News from "../pages/News";
// import Message from "../pages/Message";
// import Detail from "../pages/Detail";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const News = lazy(() => import("../pages/News"));
const Message = lazy(() => import("../pages/Message"));
const Detail = lazy(() => import("../pages/Detail"));

function suspense(Comp) {
	return (
		<Suspense fallback={<div style={{ color: "red", fontSize: 30 }}>正在加载...</div>}>
			<Comp></Comp>
		</Suspense>
	);
}

const arr = [
	{
		path: "/",
		element: suspense(Home),
	},
	{
		path: "/home",
		element: suspense(Home),
		children: [
			{
				path: "/home/news",
				element: suspense(News),
			},
			{
				path: "/home/message",
				element: suspense(Message),
				children: [
					{
						path: "/home/message/:id",
						element: suspense(Detail),
					},
				],
			},
		],
	},
	{
		path: "/about",
		element: suspense(About),
	},
];
export default arr;
