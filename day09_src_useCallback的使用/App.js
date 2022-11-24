import React, { useState, useCallback } from "react";

export default function App() {
	const [count, setCount] = useState(0);

	const addCountHandle = useCallback(() => {
		setCount(count => {
			return count + 1;
		});
	}, []);

	return (
		<>
			<div>
				<p>{count}</p>
				<button onClick={addCountHandle}>点击count+1</button>
			</div>
		</>
	);
}
