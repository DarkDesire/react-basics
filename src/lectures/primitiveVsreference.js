// primitive: the value is stored with assigny-by-value
// reference: the value is stored with assign-by-reference

// String: primitive
var name = "Sam"
var namecopy = name
console.log('name',name)
console.log('namecopy',namecopy)
name = "Mary"
console.log('name',name)
console.log('namecopy',namecopy)

// reference
const user = {
    name: "Mike"
}
const usercopy = user
console.log('user',user)
console.log('usercopy',usercopy)
user.name = "Mary"
console.log('user',user)
console.log('usercopy',usercopy)


const rightUsercopy = {...user, name = "Mary"}

// but SPREAD(...) not deep copy of object! 

var innerCharacter = {race: "Human"}
const testSpreadObj1 = {character: innerCharacter}
const testSpreadObj2 = {... testSpreadObj1}
console.log(testSpreadObj2.character.race)
innerCharacter.race = "Dwarf"
console.log(testSpreadObj2.character.race)