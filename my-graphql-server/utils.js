
import fetch from "node-fetch";


export const customFetch = (endpointUrl, param) => {
	return fetch(`${endpointUrl}/${param || ''}`, {
		method: 'POST',
		"Access-Control-Allow-Origin": "*",
}).then((res) => res.json());
}