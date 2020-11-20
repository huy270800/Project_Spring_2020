const axios = require('axios');
const readline = require('readline');
const server = require('./server.json');
const pizzas = require('./pizza.json');
const salads = require('./salad.json');
const stores = require('./StoreList.json');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//enter admin password in command console
var inputPassword = "";
new Promise((resolve, reject) => {
    rl.question('Please enter the Admin password:', (answer) => {
        resolve(answer);
        rl.close();
    });
})
.then((response) => {
    inputPassword = response;
    //do axios request for every pizza
    return Promise.all(pizzas.pizzas.map(pizza =>
        axios({
            method: "post",
            url: server.address + "/products/pizzas",
            auth: {
                username: 'Admin',
                password: inputPassword
            },
            data: pizza
        })
    ))
})
.then((response) => {
    console.log('pizzas done!')
    //do axios request for every salad
    return Promise.all(salads.salad.map(sal =>
        axios({
            method: "post",
            url: server.address + "/products/salads",
            auth: {
                username: 'Admin',
                password: inputPassword
            },
            data: sal
        })
    ))
})
.then ((response) => {
    console.log('salads done!')
    //do stores
    return Promise.all(stores.StoreList.map(store =>
        axios({
            method: "post",
            url: server.address + "/locations",
            auth: {
                username: 'Admin',
                password: inputPassword
            },
            data: store
        })
    ))
})
.then((response) => {
    console.log('locations done!');
})
.catch(error => {
    console.error(error);
})