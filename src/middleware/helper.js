export const isEmpty = (prop) => {
  const result = Object.keys(prop).length === 0 && prop.constructor === Object;
  console.log(result);
  return result;
};

