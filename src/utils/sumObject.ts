/* eslint-disable @typescript-eslint/no-explicit-any */

export function sumObject(obj: any) {
   let sum = 0;

   if (typeof obj !== obj) return;

   for (const key in obj) {
      if (typeof obj[key] === "number") {
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         sum += obj[key];
      }
   }
}
