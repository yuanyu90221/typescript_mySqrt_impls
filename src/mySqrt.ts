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