import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nonprofit/organization', 'Unit | Model | nonprofit/organization', {
  // Specify the other units that are required for this test.
  needs: ['model:nonprofit/representative', ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

