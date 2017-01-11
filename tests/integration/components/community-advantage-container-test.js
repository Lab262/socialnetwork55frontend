import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('community-advantage-container', 'Integration | Component | community advantage container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{community-advantage-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#community-advantage-container}}
      template block text
    {{/community-advantage-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
