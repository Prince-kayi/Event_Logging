import { API_URL } from './Constants'
/**
 * Function to that makes request to a specific end point
 * @param {String} path An endpoint to make request
 * @param {data} the Data that needs to be sent
 */
export function apiPostCall(path, data, headerParams) {
    return new Promise((resolve, reject) => {
        fetch(API_URL + path, {
            method: 'POST', // We only use post request here since our API is designed to only accept this method
            headers: {
                Accept: 'text/html,application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + data.token,
                ...headerParams
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(jsonData => {
                return resolve(jsonData);
            })
            .catch((error) => {
                return reject(error);

            });
    });
}