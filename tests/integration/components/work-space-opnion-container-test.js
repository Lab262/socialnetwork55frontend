import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('work-space-opnion-container', 'Integration | Component | work space opnion container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{work-space-opnion-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#work-space-opnion-container}}
      template block text
    {{/work-space-opnion-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
