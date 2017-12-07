
/**
 *
 * Using one parameter component
 *  @param {*} value
 */

const required = value =>
  (value ? undefined : 'Pengisian dibutuhkan.');
const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Email tidak valid' : undefined);


/*

Curried function (double arrow function) without arrow functions

https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript

let add = function (x) {
  return function (y) {
    return x + y;
  };
};

*/

/**
 * Using two parameter with curried function (double arrow function)
 * min need assign first
 * @param {*} min
 * @param {*} value
 *
 */

const minLength = min => value => (
  value && value.length < min ? `Minimal ${min} karakter.` : undefined
);

const minLength6 = minLength(6);

/**
 *
 * @param {*} value -> only one component on focus
 * @param {*} allValues -> all component with same validate
 */

const passwordConfirm = (value, allValues) => (
  allValues.password === allValues.passwordConfirm ? undefined : 'Password tidak sama.'
);


export {
  required, minLength, email, minLength6, passwordConfirm,
};

