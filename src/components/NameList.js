import React from 'react'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Tom',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clarck',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Dianna',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => (
        <h2>
            I am {person.name} my age is {person.age} and my skill is {person.skill}
        </h2>
    ))
    return <div>{personList}</div>

}

export default NameList


