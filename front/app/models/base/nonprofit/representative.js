/* eslint-disable */
// This base model was auto-generated by export_app
// PLEASE DO NOT EDIT
// you can make changes in app/models/nonprofit/representative.js
// or regenerate this file by running
// `./manage.py export nonprofit/representatives`

  import Model from 'ember-data/model';


import attr from 'ember-data/attr';



export default Model.extend({
  
    date: attr('nullable'),
  
    name: attr('string'),
  
    email: attr('string'),
  
    phone_number: attr('string'),
  
    other_phone_number: attr('string'),
  
    __str__: attr('string'),
  
  
});
