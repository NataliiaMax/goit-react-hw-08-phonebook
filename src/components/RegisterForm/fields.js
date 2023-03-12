// import { Schema } from 'mongoose';
// const uniqueValidator = require('mongoose-unique-validator');
// new Schema({
const fields = {
  name: {
    // type: String,
    type:"string",
    name: 'name',
    required: true,
    label: 'Name',
    placeholder: 'User name',
    // unique: true,
  },
  email: {
    type: 'string',
    name: 'email',
    required: true,
    label: 'Email',
    placeholder: 'User  email',
    // unique: true,
  },
  password: {
    type: 'string',
    name: 'password',
    required: true,
    label: 'Password',
    placeholder: 'User password',
    // bcrypt: true,
  },
};

// fields.plugin(uniqueValidator, {
//     type: 'mongoose-unique-validator',
//     message: 'Error, expected {PATH} to be unique.'
// });

export default fields;
