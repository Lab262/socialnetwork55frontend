import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('knowledge-detail-content', 'Integration | Component | knowledge detail content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{knowledge-detail-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#knowledge-detail-content}}
      template block text
    {{/knowledge-detail-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
