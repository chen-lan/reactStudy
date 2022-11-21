import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const arr = [
	{
		path: "/",
		element: <Home></Home>,
	},
	{
		path: "/home",
		element: <Home></Home>,
		children: [
			{
				path: "/home/news",
				element: <News></News>,
			},
			{
				path: "/home/message",
				element: <Message></Message>,
				children: [
					{
						path: "/home/message/:id",
						element: <Detail></Detail>,
					},
				],
			},
		],
	},
	{
		path: "/about",
		element: <About></About>,
	},
];
export default arr;
