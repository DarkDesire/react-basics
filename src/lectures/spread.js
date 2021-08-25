let oldArr = [1,2,3]
let newArr = [4,5,6]

let newNextArr = oldArr.concat(newArr)
let newNextArr2 = [...oldArr, ...newArr]
console.log(newNextArr)
console.log(newNextArr2)

let objectA = {
  name: "John",
  age: 42,
}
let objectB = {
  gender: "M"
}
let objectC = {...objectA, ...objectB}
// there is no concat
console.log(objectC)

const showValues = (...arrgs) => {
    for (var i=0; i<arrgs.length; i++) {
      console.log(arrgs[i])
    }
}
showValues("apple", "orange")