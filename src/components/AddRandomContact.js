import React from 'react'
import { contacts } from '../contact'



const AddContactToArray = (props) => {
    
    const RandomizeContact = () => {
        console.log(props.name)
        let random = Math.floor(Math.random() * contacts.length)
        props.name(props.test.concat(contacts[random]))
        
    }


    return (
        <th><button onClick={RandomizeContact}>Add Random Contact</button></th>
        
    )

    
}

export default AddContactToArray