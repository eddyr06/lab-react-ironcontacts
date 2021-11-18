import React from 'react'


const SortByName = (props) => {
    
    const sortingName = () => {
        let newArr = [...props.test]
        let orderedArr = newArr.sort((a, b) => {
            let nameA = a.name.toUpperCase()
            let nameB = b.name.toUpperCase()
            if (nameA < nameB) {
                return -1
            } if (nameA > nameB) {
                return 1
            }
            return 0
        })
        props.name(orderedArr);
    }

    return (
    <th><button onClick={sortingName}>Sort by name</button></th>

    )
}
export default SortByName