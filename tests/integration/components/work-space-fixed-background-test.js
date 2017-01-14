import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('work-space-fixed-background', 'Integration | Component | work space fixed background', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{work-space-fixed-background}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#work-space-fixed-background}}
      template block text
    {{/work-space-fixed-background}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
