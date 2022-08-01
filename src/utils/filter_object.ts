/* eslint-disable @typescript-eslint/no-explicit-any */

// Reference:  https://github.com/sindresorhus/filter-obj

export function includeKeys(object: any, predicate?: any) {
   const result = {};

   if (Array.isArray(predicate)) {
      for (const key of predicate) {
         if (isEnumerable.call(object, key)) {
            const descriptor = Object.getOwnPropertyDescriptor(object, key);
            Object.defineProperty(result, key, descriptor as PropertyDescriptor);
         }
      }
   } else {
      // `for ... of Reflect.ownKeys()` is faster than `for ... of Object.entries()`.
      for (const key of Reflect.ownKeys(object)) {
         if (isEnumerable.call(object, key)) {
            const value = object[key];
            if (predicate(key, value, object)) {
               const descriptor = Object.getOwnPropertyDescriptor(object, key);
               Object.defineProperty(result, key, descriptor as PropertyDescriptor);
            }
         }
      }
   }

   return result;
}
const { propertyIsEnumerable: isEnumerable } = Object.prototype;

export function excludeKeys(object: any, predicate: any) {
   if (Array.isArray(predicate)) {
      const set = new Set(predicate);
      return includeKeys((object: any, key: string) => !set.has(key));
   }

   return includeKeys(
      object,
      (key: string, value: any, object: any) => !predicate(key, value, object),
   );
}

const object = {
   foo: true,
   bar: false,
};

const newObject1 = includeKeys(object, (key: string, value: boolean) => value);
console.log(newObject1); //=> {foo: true}

const newObject2 = includeKeys(object, ["bar"]);
console.log(newObject2); //=> {bar: false}

const newObject3 = excludeKeys(object, (key: string, value: boolean) => value);
console.log(newObject3); //=> {bar: false}

const newObject4 = excludeKeys(object, ["bar"]);
console.log(newObject4); //=> {foo: true}
