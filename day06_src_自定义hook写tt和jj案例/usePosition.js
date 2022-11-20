import { useState, useEffect } from "react";

// 自己定义hook
export default function usePosition() {
	// 数组形式解构
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	// 使用useEffect来控制组件的更新
	useEffect(() => {
		// 外面模拟的是挂载或更新阶段
		window.addEventListener("mousemove", handle);
		return () => {
			window.removeEventListener("mousemove", handle);
		};
	}, []); // 如果数组中的数据不发生改变则就不会执行外面的挂载或更新

	function handle(e) {
		// 获取鼠标的位置，并将位置设置在state中
		let x = e.clientX;
		let y = e.clientY;
		setX(x);
		setY(y);
	}
	return { x, y };
}
