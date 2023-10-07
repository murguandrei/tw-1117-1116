let student = {
    name: 'Adrian',
    yearsOld: 24,
    printName: () => {
        console.log(student.name)
    },
    printName2: function() {
        console.log(this.name);
    }
}

//console.log(student.name);
//console.log(student['name'])

student.firstName = 'Lungu'

console.log(student)

// student.printName()
// student.printName2()


// console.log(Object.keys(student))
// console.log(Object.values(student))
