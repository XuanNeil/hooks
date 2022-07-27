function multiplyNumeric(obj: any, count?: number) {
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
