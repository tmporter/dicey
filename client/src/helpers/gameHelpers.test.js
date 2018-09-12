import { generateGameUrl } from "./gameHelpers";

describe("generateGameUrl", () => {
   it("returns lowercase and replaces spaces with hyphens", () => {
      const url = generateGameUrl("Nice StRanGe lOng tItle");
      expect(url).toBe("nice-strange-long-title");
   });

   it("replaces concurrent whitespace with a single hyphen", () => {
      const url = generateGameUrl("title with  concurrent   whitespace");
      expect(url).toBe("title-with-concurrent-whitespace");
   });
});
