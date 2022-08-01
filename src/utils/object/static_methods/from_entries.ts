/*
 * method chuyển đổi danh sách các cặp khóa-giá trị thành một đối tượng.
 *  syntax: Object.fromEntries(iterable);
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const entries = new Map([
   ["foo", "bar"],
   ["baz", 42],
]);

const convertToObject = Object.fromEntries(entries);
console.log("convertToObject", convertToObject); // { foo: "bar", bar: 42 }

const entries2 = [
   ["firstName", "Ha"],
   ["lastName", "Xuan"],
   ["age", 40],
];

const convertToObject2 = Object.fromEntries(entries2);
console.log("convertToObject2", convertToObject2); // { firstName: "Ha", lastName: "Xuan", age: 40 }
