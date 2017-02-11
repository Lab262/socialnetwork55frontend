import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navbar-responsive-mobile', 'Integration | Component | navbar responsive mobile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{navbar-responsive-mobile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#navbar-responsive-mobile}}
      template block text
    {{/navbar-responsive-mobile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
