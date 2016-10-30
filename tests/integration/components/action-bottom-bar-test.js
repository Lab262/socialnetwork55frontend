import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('action-bottom-bar', 'Integration | Component | action bottom bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{action-bottom-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#action-bottom-bar}}
      template block text
    {{/action-bottom-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
