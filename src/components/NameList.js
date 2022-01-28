import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name,index) => <h2 key = {index}>{index} {name}</h2>)
    return (
        <div>{nameList}</div>
    )

    //Another example
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 26,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 34,
    //         skill: 'Angular'
    //     },
    //     {
    //         id:3,
    //         name: 'Diana',
    //         age: 27,
    //         skill: 'Vue'
    //     }
    // ]
    // const personList = persons.map(person => <Person key = {person.id} person = {person}/>)
    // return <div>{personList}</div>
}

export default NameList
