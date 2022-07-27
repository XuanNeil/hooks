/*
 * method copies all properties riêng có thể liệt kê từ một hoặc nhiều source objects to a target object.
 * return: trả về target object modified (sua doi).
 *
 * syntax: Object.assign(target, ...sources)
 * description:
 *  - Các thuộc tính trong target object overwritten bởi các thuộc tính trong nguồn nếu chúng có cùng một key.
 *  - Thuộc tính của các nguồn sau này overwritte lên các thuộc tính trước đó.
 * Note: Object.assign() does not throw on null or undefined sources.
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const assignObject = Object.assign(target, source);

// log
console.log("target", target); // target: { a: 1, b: 3, c: 4 } // target bị thay đổi
console.log("source", source); // source: { b: 3, c: 4 }
console.log("assignObject", assignObject); // assignObject: { a: 1, b: 3, c: 4 }

//1. clone an object.
const obj = { a: 1 };
const cloneObject = Object.assign({}, obj);
console.log("cloneObject", cloneObject); // {a: 1}

// 2. Merging object.
const object1 = { a: 1 };
const object2 = { b: 2 };
const object3 = { c: 3 };
const mergeObject = Object.assign(object1, object2, object3);
console.log("object1", object1); // { a: 1, b: 2, c: 3 }; object 1 bị thay đổi
console.log("mergeObject", mergeObject); // { a: 1, b: 2, c: 3 };

// 3. Merging object with same properties.
const obj1 = { a: 1, b: 1, c: 1 };
const obj2 = { b: 2, c: 2 };
const obj3 = { c: 3 };
const mergeObjectWithSameProperty = Object.assign({}, obj1, obj2, obj3);
console.log("mergeObjectWithSameProperty", mergeObjectWithSameProperty); // { a: 1, b: 2, c: 3 }

// copying accessors.
const copyObj = {
   foo: 1,
   get bar() {
      return 2;
   },
};

let copy = Object.assign({}, copyObj);
console.log(copy); // { foo: 1, bar: 2 } // The value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors

/* eslint-disable @typescript-eslint/no-explicit-any */
function completeAssign(target: any, ...sources: any[]) {
   sources.forEach((source) => {
      const descriptors = Object.keys(source).reduce((descriptors, key) => {
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-ignore
         descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
         return descriptors;
      }, {});

      // By default, Object.assign copies enumerable Symbols, too
      Object.getOwnPropertySymbols(source).forEach((sym) => {
         const descriptor = Object.getOwnPropertyDescriptor(source, sym);
         if (descriptor?.enumerable) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            descriptors[sym] = descriptor;
         }
      });
      Object.defineProperties(target, descriptors);
   });
   return target;
}

copy = completeAssign({}, copyObj);
console.log(copy); // { foo:1, get bar() { return 2 } }
