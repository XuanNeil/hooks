/**
 * static method return boolean.
 * - Nếu đối tượng được chỉ định có thuộc tính được chỉ định là thuộc tính của chính nó. -> return: true
 * - Nếu thuộc tính được kế thừa hoặc không tồn tại. -> return: false
 *
 * Lưu ý: Object.hasOwn() được dùng để thay thế cho Object.hasOwnProperty().
 *
 * Syntax: hasOwnProperty(prop)
 *
 * parameter:
 * - prop: String or Symbol of the property.
 *
 * Return value:
 * - return true: nếu đối tượng có thuộc tính được chỉ định là thuộc tính riêng. (own property).
 * - return false: Nguoc lai
 */

export const objectHasOwn = {
   prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// expected output: true

console.log(Object.hasOwn(object1, "toString"));
// expected output: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// expected output: false

const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
