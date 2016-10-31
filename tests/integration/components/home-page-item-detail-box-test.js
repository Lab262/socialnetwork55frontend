import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-page-item-detail-box', 'Integration | Component | home page item detail box', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-page-item-detail-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#home-page-item-detail-box}}
      template block text
    {{/home-page-item-detail-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
