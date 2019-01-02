/* eslint-disable */
// This base model was auto-generated by export_app
// PLEASE DO NOT EDIT
// you can make changes in app/models/nonprofit/representative.js
// or regenerate this file by running
// `./manage.py export nonprofit/representatives`

  import Model from 'ember-data/model';


import attr from 'ember-data/attr';


import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  
    identity: attr('nullable'),
  
    version_start_date: attr('nullable'),
  
    version_end_date: attr('nullable'),
  
    version_birth_date: attr('nullable'),
  
    date: attr('nullable'),
  
    name: attr('string'),
  
    email: attr('string'),
  
    phone_number: attr('string'),
  
    other_phone_number: attr('string'),
  
    role: attr('string'),
  
    attending_event: attr('boolean'),
  
    shirt_size: attr('string'),
  
    __str__: attr('string'),
  
  
    application: belongsTo('nonprofit/application', {
      async: true,
      inverse: 'representatives',
    }),
  
});
