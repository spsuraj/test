'use strict';
// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/contacts', (request,response)=>{
    if(!contacts){
        response.status(404).json({message: 'No contacts found'});
    }
    response.json(contacts)
});

app.get('/api/contacts/:id',(request,response) => {
    debugger
    const requestId = request.params.id;

    let contact = contacts.filter(contact => {
        return contact.id == requestId;
        
    });

    if (!contact){
        response.status(404).json({message: 'No contact found'});
    }

    response.json(contact[0])
});

app.post('/api/contacts',(request,response) => {

    const contact = {
        id: contacts.length + 1,
        firstName: request.body.firstName,
        lastName : request.body.lastName,
        email: request.body.email,
        site: request.body.site
    }

    contacts.push(contact);

    response.json(contacts)

});

app.put('/api/contacts/:id',(request,response) => {

    const requestId = request.params.id;

    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    })[0];

    const index = contacts.indexOf(contact);

    const keys = Object.keys(request.body);

    keys.forEach(key => {
        contact[key] = request.body[key];
        
    });

    contacts[index] = contact;

    response.json(contacts[index]);

});

app.delete('api/contacts/:id',(request,response) => {
debugger
    const requestId = request.params.id;

    let contact = contacts.filter(contact => {
        return contact.id == requestId;
    })[0];

    const index = contacts.indexOf(contact);

    contacts.splice(index, 1);

    response.json({message:`User with ${requestId} is deleted `});

});


const hostname = 'localhost';
const port = 3001;

// const server = http.createServer((request,response)=>{
//  response.statusCode = 200;
//  response.setHeader('content-Type', 'text/plain');
//  response.end('Hello world \n')
// });

app.listen(port, hostname, () => {
 console.log(`Server is running at http://${hostname}:${port}`) 
});