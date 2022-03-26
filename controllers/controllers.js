
const getContacts = (request,response)=>{
    const contacts = [
        {
            name:"walid",
            email:"walid@gmail.com",
            phone:"985555555",
            type:"Work",
            address:"ISET GAFSA"
        },
        {
            name:"ali",
            email:"walid@gmail.com",
            phone:"985555555",
            type:"Friend",
            address:"Tunis"
        },
        {
            name:"ahmed",
            email:"walid@gmail.com",
            phone:"985555555",
            type:"Family",
            address:"Sousse"
        }
    ];

    return response
        .status(200)
        .json(contacts);
}

const createContact = (request,response)=>{
    const message = {
        message : 'Contact created'
    }
    response.send(message);
}

const updateContact = (request,response) =>{
    const message = {
        message : 'Contact updated'
    }
    response.send(message);
}

const deleteContact = (request,response) =>{
    const message = {
        message : 'Contact deleted'
    }
    response.send(message);
}

const readContact = (request,response) =>{
    const id = request.param('id');
    const contact = {
        id: id,
        name:"ahmed",
        email:"walid@gmail.com",
        phone:"985555555",
        type:"Family",
        address:"Sousse"
    }
    response.send(contact);
}
module.exports={
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    readContact
}