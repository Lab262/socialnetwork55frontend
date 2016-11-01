import Ember from 'ember';

export function objectHaveProperty(property, namedArgs) {
  // console.log(elem)
  // console.log(namedArgs.object.email)
  console.log(namedArgs.object.hasOwnProperty(property))

  if(namedArgs.object.hasOwnProperty(property)) {
    return true
  }
  return false;
};

export default Ember.Helper.helper(objectHaveProperty);
