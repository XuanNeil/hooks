interface IUser {
   name: string;
   age: number;
   isAdmin: boolean;
}

const user: IUser = {
   name: "John",
   age: 30,
   isAdmin: true,
};

for (const key in user) {
   // keys
   console.log(key); // name, age, isAdmin
   // values for the keys
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   console.log(user[key]); // John, 30, true
}
