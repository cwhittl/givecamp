/* eslint-disable */
// This base model was auto-generated by export_app
// PLEASE DO NOT EDIT
// you can make changes in app/models/accounting/invoiceline.js
// or regenerate this file by running
// `./manage.py export accounting/invoicelines`

import Model from 'ember-data/model';

import attr from 'ember-data/attr';


import { belongsTo } from 'ember-data/relationships';


export default Model.extend({
  
    quantity: attr('number'),
  
    position: attr('number'),
  
    __str__: attr('string'),
  
  
    invoice: belongsTo('accounting/invoice', {
      async: true,
      inverse: 'lines',
    }),
  
    product: belongsTo('products/product', {
      async: true,
      inverse: null,
    }),
  
});
