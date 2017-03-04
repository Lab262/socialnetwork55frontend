import Ember from 'ember';
import DS from 'ember-data';
import ParseAdapter from 'ember-parse-adapter/adapters/application';

export default ParseAdapter.extend({

  host: 'http://localhost:1337/parse'

})
