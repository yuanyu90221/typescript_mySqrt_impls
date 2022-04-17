import { mySqrt } from "./mySqrt";

describe('mySqrt', () => {
  it('mySqrt(4) === 2', () => {
    expect(mySqrt(4)).toEqual(2);
  });
  it('mySqrt(8) === 2', () => {
    expect(mySqrt(8)).toEqual(2);
  });
});