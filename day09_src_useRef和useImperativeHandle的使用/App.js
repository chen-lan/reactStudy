import React, { useRef } from "react";
import FancyInput from "./components/FancyInput";

function App() {
	const inputRef = useRef();
	return (
		<div>
			<button
				onClick={() => {
					console.log(inputRef.current.focus());
				}}>
				按钮
			</button>
			<FancyInput ref={inputRef}></FancyInput>
		</div>
	);
}

export default App;
