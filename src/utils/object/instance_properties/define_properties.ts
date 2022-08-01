/**
 * method defines new or modifies existing properties directly on an object (phương thức xác định mới hoặc sửa đổi các thuộc tính hiện có trực tiếp trên một đối tượng).
 * return: trả về object.
 *
 * syntax: Object.defineProperties(obj, props)
 *
 * parameters:
 *   - obj: Đối tượng để xác định hoặc sửa đổi thuộc tính.
 *   - props:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const object: any = {};

Object.defineProperties(object, {
   property1: {
      value: 20,
      writable: true,
   },
   property2: {},
});
console.log(object.property1);
