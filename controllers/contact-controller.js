const Post = require('../models/post');
const createPath = require('../utility/createPath');
const Contacts = require('../models/contacts.js');


const getContact = (req, res) => {
   const title = 'Contacts'
   Contacts
      .find()
      .then((links) => res.render(createPath('contact'), { title, links }))
      .catch((err) => {
         console.log(err)
         res.render(createPath('error'), { title: 'Error' })
      });
}

module.exports = {
   getContact
}