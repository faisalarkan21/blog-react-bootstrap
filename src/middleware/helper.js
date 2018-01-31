export const isEmpty = prop => (
  Object.keys(prop).length === 0 && prop.constructor === Object
);

