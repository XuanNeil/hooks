/*
 * method trả về một mảng gồm các cặp thuộc tính chuỗi khóa [key, value] có thể liệt kê của riêng một đối tượng nhất định.
 * Điều này cũng giống như lặp với loop for ... in, ngoại trừ vòng lặp for ... in cũng liệt kê các thuộc tính trong chuỗi nguyên mẫu.
 *
 * return: a array của các cặp thuộc tính chuỗi có khóa [key, value] có thể liệt kê của riêng đối tượng đã cho.
 *
 * syntax: Object.entries(obj)
 */

const objectSomething = {
   a: "someString",
   b: 42,
};

console.log(Object.entries(objectSomething)); // [[ "a", "someString" ],[ "b", 42 ]]

for (const [key, value] of Object.entries(objectSomething)) {
   console.log(`${key}: ${value}`);
   // a: someString
   // b: 42
}

Object.entries(objectSomething).forEach(([key, value]) => console.log(`${key}: ${value}`));
// a: someString
// b: 42
