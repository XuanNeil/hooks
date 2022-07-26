/*
 * method trả về một array các tên thuộc tính có thể liệt kê của một đối tượng nhất định, được lặp lại theo thứ tự giống như một vòng lặp thông thường.
 *
 * syntax: Object.keys(obj)
 * parameters:
 *   - obj: Đối tượng mà các thuộc tính riêng của liệt kê sẽ được trả về.
 * return: an Array các chuỗi đại diện cho tất cả các thuộc tính có thể liệt kê của đối tượng đã cho.
 */

const objectKey = {
   a: "someString",
   b: 42,
   c: false,
};

const listKeyObject = Object.keys(objectKey);
console.log("listKeyObject", listKeyObject); // ["a", "b", "c"]

// simple array
const simpleArray = ["a", "b", "c"];
const listSimpleKey = Object.keys(simpleArray);
console.log("listSimpleKey", listSimpleKey); // [ "0",  "1", "2" ]

//array-like object
const arrayLikeObject = { 0: "a", 1: "b", 2: "c" };
const listArrayLikeKey = Object.keys(arrayLikeObject);
console.log("listArrayLikeKey", listArrayLikeKey); // [ "0", "1", "2" ]
