import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('work-space-plans-description-container', 'Integration | Component | work space plans description container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{work-space-plans-description-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#work-space-plans-description-container}}
      template block text
    {{/work-space-plans-description-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
