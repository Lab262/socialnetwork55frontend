import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('community-our-team-container', 'Integration | Component | community our team container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{community-our-team-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#community-our-team-container}}
      template block text
    {{/community-our-team-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
