import Ember from 'ember';

export function objectHaveProperty(property, namedArgs) {

  if(namedArgs.object.hasOwnProperty(property)) {
    return true;
  }
  return false;
}

export default Ember.Helper.helper(objectHaveProperty);
