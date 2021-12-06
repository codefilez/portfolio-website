import { humanFriendlyDate } from "./TimestampUtility";
import * as assert from "assert";

test(`should be December 30, 2020`, () => {
  const timestamp = `2020-12-30T07:13:13.542001Z`;
  const actual = humanFriendlyDate(timestamp);
  const expected = `December 30, 2020`;
  assert.equal(actual, expected);
});
