const isObjectEmpty = (obj: any) =>
  !obj || (obj && Object.keys(obj).length === 0 && obj.constructor === Object);

export { isObjectEmpty };
