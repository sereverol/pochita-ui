//const url = 'https://server-movil-2.herokuapp.com/'
const urlx = 'http://192.168.1.101:8000/'
const headers = { 'Content-Type': 'application/json' }


const send = async (method, endpoint, body) => {
    let response;

    (body == null) 
    ? response = await fetch(url + endpoint , { method, mode: 'cors', headers })
    : response = await fetch(url + endpoint , { method, mode: 'cors', headers, body: JSON.stringify(body) });
    
    return await response.json(); 
}

const api = async (method, dir, body) => {
    let response;

    (body == null) 
    ? response = await fetch(urlx + endpoint , { method, mode: 'cors', headers })
    : response = await fetch(dir, { method, mode: 'cors', headers, body: JSON.stringify(body) });
    
    return await response.json(); 
}


export default {
    send,
    api
}