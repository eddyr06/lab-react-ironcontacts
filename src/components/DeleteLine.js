import React from 'react'

const DeleteLine = (props) => {
    
    const deleteArray = (name) => {
        let newArr = [...props.name]
        newArr = newArr.filter((celeb) => {
            console.log('celeb', celeb.name)
            console.log('props', name)
            return celeb.name !== name;
        })
        
        console.log(newArr)
    props.test(newArr)
    }
    
    
    return (
    <td><button onClick={() => deleteArray(props.contactName)}>Delete</button></td>

    )
}

export default DeleteLine