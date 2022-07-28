/* eslint-disable @typescript-eslint/no-explicit-any */

export function multiplyNumeric(obj: any, count?: number) {
   if (!count) {
      count = 1;
   }

   for (const key in obj) {
      if (typeof obj[key] === "number") {
         obj[key] *= count;
      }
   }

   return obj;
}

// example
multiplyNumeric({ firstName: "Neil", age: 20 }, 2);
