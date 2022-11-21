import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
	const { id } = useParams();
	return <h5>detail的内容~~~{id}</h5>;
}
