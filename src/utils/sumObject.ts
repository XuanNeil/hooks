const salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
   No: "Name",
};
let sum = 0;
for (const key in salaries) {
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   if (typeof salaries[key] === "number") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      sum += salaries[key];
   }
}
