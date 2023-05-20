const fs = require("fs/promises");
const path = require("path");
// const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath)


async function listContacts () {
const data = await fs.readFile(contactsPath);
return JSON.parse(data);
}

async function getContactById(contactId){
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    return result
}

module.exports = {
    listContacts,
    getContactById,
}