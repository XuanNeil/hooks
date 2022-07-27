/*eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-ignore
const isEmptyObject = (object: any) => {
   if (typeof object !== "object") return;
   for (const key in object) {
      return false;
   }
   return true;
};

const isEmpty2yObject = (object: any) => {
   if (typeof object !== "object") return;
   return !!Object.keys(object).length;
};
