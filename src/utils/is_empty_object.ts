/*eslint-disable @typescript-eslint/no-explicit-any */

export const isEmpty2yObject = (object: any) => {
   if (typeof object !== "object") return;
   return !!Object.keys(object).length;
};

const person = {
   firstName: "Ha",
   lastName: "Xuan",
   age: 20,
};

isEmpty2yObject(person); // true
