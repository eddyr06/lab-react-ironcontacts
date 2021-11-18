import React from 'react'

const SortByPopularity = (props) => {
    let newArr = [...props.test]
      const sortPopularity = () => {
      let orderedArr = newArr.sort((a, b) => {
                return b.popularity - a.popularity
                })
    props.name(orderedArr)
  }
    
    return (
    <th><button onClick={sortPopularity}>Sort by popularity</button></th>

     )
}
 
export default SortByPopularity