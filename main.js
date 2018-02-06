console.log('main.js loaded');

const BASE_URL= 'http://api.reactprototypes.com'; 
const API_KEY= '?key=testuser1234';

axios.get(BASE_URL + '/todos' + API_KEY).then((resp)=>{
    console.log('Resp: '+ resp);
}).catch((err)=>{
    console.log('Error: '+ err);
});

const newItem= {
    title: 'Here is my new Item', 
    details: 'Here are the details for my todo item'
};

axios.post(BASE_URL + '/todos' + API_KEY, newItem).then((resp)=>{
    console.log('Add response: ' + resp);
}).catch((err)=>{
    console.log('Add error is: ' + err); 
});