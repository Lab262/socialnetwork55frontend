import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('visit-us-detail-container', 'Integration | Component | visit us detail container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{visit-us-detail-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#visit-us-detail-container}}
      template block text
    {{/visit-us-detail-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
