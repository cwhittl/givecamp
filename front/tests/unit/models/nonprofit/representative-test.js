import { moduleForModel, test } from 'ember-qunit';

moduleForModel('nonprofit/representative', 'Unit | Model | nonprofit/representative', {
  // Specify the other units that are required for this test.
  needs: ['model:nonprofit/application', ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

