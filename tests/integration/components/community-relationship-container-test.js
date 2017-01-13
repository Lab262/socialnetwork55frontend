import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('community-relationship-container', 'Integration | Component | community relationship container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{community-relationship-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#community-relationship-container}}
      template block text
    {{/community-relationship-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
