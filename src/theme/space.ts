const ratio = 2;

interface ISpace {
   [key: string]: string | number;
}

export const space: ISpace = {
   px: "1px",
};

for (let i = 0; i <= 100; i++) {
   space[i] = `${ratio * i}px`;
}
