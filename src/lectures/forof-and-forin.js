const fruitsObject = {
  apple: 13,
  orange: 17,
  banana: 15
}
// for in - objects
for (const key in fruitsObject) {
  console.log(fruitsObject[key])
}
// for of - array, string, TypedArray, Map, Set
const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}