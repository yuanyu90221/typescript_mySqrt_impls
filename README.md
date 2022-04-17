# typescript_mySqrt_impls

This repo is for implementation integer version of square root function

## Description

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

## implementation

```typescript
export const mySqrt = (x: number): number => {
  let upperBound = x;
  let lowerBound = 1;
  while (upperBound > lowerBound) {
    let mid = Math.floor((lowerBound + upperBound)/2);
    let square = mid * mid;
    if (square > x) {
      upperBound = mid - 1;
    } else if (square < x) {
      lowerBound = mid + 1;
    } else if (square === x) {
      return mid;
    }
  }
  let mid = Math.floor((lowerBound + upperBound)/2);
  let square = mid * mid;
  return (square > x)? mid - 1: mid;
}
```