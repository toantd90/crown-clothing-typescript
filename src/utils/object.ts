const isObjectEmpty = (obj: Object) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export { isObjectEmpty };
