import Ember from 'ember';

export function arrayHaveTrueValue(property,namedArgs) {

  let arrayWithTrueValues = namedArgs.array.filter(function (obj) {
        return obj === true;
    });

  if(arrayWithTrueValues.length > 0) {
    return true;
  }
    return false;
}

export default Ember.Helper.helper(arrayHaveTrueValue);
