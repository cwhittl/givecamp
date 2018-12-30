import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nonprofit/invoiceline', 'Unit | Model | nonprofit/invoiceline', {
  // Specify the other units that are required for this test.
  needs: ['model:nonprofit/invoice', 'model:products/product', ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

