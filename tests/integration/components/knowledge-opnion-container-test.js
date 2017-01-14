import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('knowledge-opnion-container', 'Integration | Component | knowledge opnion container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{knowledge-opnion-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#knowledge-opnion-container}}
      template block text
    {{/knowledge-opnion-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
