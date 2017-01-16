import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('knowledge-events-content-item', 'Integration | Component | knowledge events content item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{knowledge-events-content-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#knowledge-events-content-item}}
      template block text
    {{/knowledge-events-content-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
