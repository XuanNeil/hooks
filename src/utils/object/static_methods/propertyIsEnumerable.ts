/*
 * method cho biết liệu thuộc tính được chỉ định có thể liệt kê được hay không và có phải là thuộc tính riêng của đối tượng hay không.
 * syntax: propertyIsEnumerable(prop)
 * parameter:
 *   prop: The name of the property cần kiểm tra.
 * return:
 *   return boolean.
 *
 * Description:
 *  - Mọi đối tượng đều có phương thức propertyIsEnumerable.
 *  - Phương thức này có thể xác định liệu thuộc tính được chỉ định trong một đối tượng có thể được liệt kê bằng vòng lặp for ... in hay không.
 *  - Ngoại trừ các thuộc tính được kế thừa thông qua chuỗi nguyên mẫu (prototype chain).
 *  - Nếu đối tượng không có thuộc tính được chỉ định, phương thức này trả về false.
 *
 * Note:
 *  - Hãy nhớ rằng các property liệt kê được lặp lại bởi các vòng lặp for ... in, ngoại trừ các Symbol.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
const newObject: any = {};
const array1 = [];
newObject.property1 = 42;
array1[0] = 42;

// eslint-disable-next-line no-prototype-builtins
console.log(newObject?.propertyIsEnumerable("property1")); // expected output: true

// eslint-disable-next-line no-prototype-builtins
console.log(array1.propertyIsEnumerable(0)); // expected output: true

// eslint-disable-next-line no-prototype-builtins
console.log(array1.propertyIsEnumerable("length")); // expected output: false
