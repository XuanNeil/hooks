/**
 * method return 1 boolean cho biết liệu đối tượng có thuộc tính được chỉ định làm thuộc tính của chính nó hay không (trái ngược với việc kế thừa nó).
 * Lưu ý: Object.hasOwn() được khuyên dùng hơn hasOwnProperty(), trong các trình duyệt mà nó được hỗ trợ.
 *
 * Syntax: hasOwnProperty(prop)
 *
 * parameters:
 *  - prop: String name or Symbol of the property.
 *
 * return value: Boolean
 *  - true: nếu đối tượng có thuộc tính được chỉ định là thuộc tính riêng (own property).
 *  - false: Nguoc lai.
 */

/*eslint-disable @typescript-eslint/no-explicit-any*/
export const objectEmpty: any = {};
objectEmpty.property1 = 42;

// eslint-disable-next-line no-prototype-builtins
console.log(objectEmpty.hasOwnProperty("property1"));
// expected output: true

// eslint-disable-next-line no-prototype-builtins
console.log(objectEmpty.hasOwnProperty("toString"));
// expected output: false

// eslint-disable-next-line no-prototype-builtins
console.log(objectEmpty.hasOwnProperty("hasOwnProperty"));
// expected output: false

const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
// eslint-disable-next-line no-prototype-builtins
fruits.hasOwnProperty(3); // true ('Orange')
// eslint-disable-next-line no-prototype-builtins
fruits.hasOwnProperty(4); // false - not defined
