import { isMessage } from "../src";

describe("isMessage() tests", function () {
  test("valid message", () => {
    expect(
      isMessage({
        id: 131,
        teamId: "12gh",
        channelId: "12gh",
        userId: "12gh",
        body: "hello, world",
      })
    ).toEqual(true);
  });
  test("invalid message", () => {
    expect(
      isMessage({
        description: "message description",
        messages: [],
        name: "general",
      })
    ).toEqual(false);
  });
});

