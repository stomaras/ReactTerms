import React from 'react'
import Person from './Person'

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
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>

}

export default NameList


