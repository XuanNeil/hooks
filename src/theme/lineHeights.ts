const radio = 20;

interface ILineHeights {
   [key: string]: number | string;
}

export const lineHeights: ILineHeights = {
   normal: "normal",
   none: 1,
   shorter: 1.25,
   short: 1.375,
   base: 1.5,
   tall: 1.625,
   taller: "2",
};

for (let i = 0; i <= 15; i++) {
   lineHeights[i] = `${i * radio}%`;
}
