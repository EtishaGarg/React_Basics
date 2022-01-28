import React from 'react'

function Person(props) {
    //We can also pass in destructured prop i.e. {person} instead of props
    return (
        <div>
            <h2>Hi! I'm {props.person.name}, I'm {props.person.age} years old and I know {props.person.skill}</h2>
        </div>
    )
}

export default Person
