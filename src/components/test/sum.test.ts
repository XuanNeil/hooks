import { sum } from "@src/components/test/sum";

test("Check sum: ", () => {
   expect(sum(1, 2)).toBe(3);
});
