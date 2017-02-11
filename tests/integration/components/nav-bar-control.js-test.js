import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-bar-control.js', 'Integration | Component | nav bar control.js', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-bar-control.js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav-bar-control.js}}
      template block text
    {{/nav-bar-control.js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
