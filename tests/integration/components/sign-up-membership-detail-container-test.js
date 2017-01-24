import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sign-up-membership-detail-container', 'Integration | Component | sign up membership detail container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sign-up-membership-detail-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sign-up-membership-detail-container}}
      template block text
    {{/sign-up-membership-detail-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
