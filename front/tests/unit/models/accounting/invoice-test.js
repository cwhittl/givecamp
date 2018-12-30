import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nonprofit/invoice', 'Unit | Model | nonprofit/invoice', {
  // Specify the other units that are required for this test.
  needs: ['model:nonprofit/invoiceline', 'model:crm/company', ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

