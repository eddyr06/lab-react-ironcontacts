import '../App.css';
import '../index.css';
import contacts from '../contacts.json';
import React, { useState } from 'react'
import ShowContacts from './ShowContacts'
import AddContactToArray from './AddRandomContact'
import SortByName from './SortByName'
import SortByPopularity from './SortByPopularity'



let contact = []
for (let i = 0; i < 5; i++){
  contact.push(contacts[i])
}



function App() {
  const [contactArr, setContactArr] = useState(contact)
  // ... is to clone an array that is a hook.
  let newArr = [...contactArr]
  
//   const setRandomContact = () => {
//     let random = Math.floor(Math.random() * contacts.length)
//     setContactArr(contactArr.concat(contacts[random]))
//   }

//     const sortName = () => {
//     let newArr = [...contactArr]
//     let orderedArr = newArr.sort((a, b) => {
//                   let nameA = a.name.toUpperCase()
//                   let nameB = b.name.toUpperCase()
//                   if (nameA < nameB) {
//                     return -1
//                   } if (nameA > nameB) {
//                     return 1
//                   }
//                   return 0
//     })
//     setContactArr(orderedArr);
//   }
  
//   const sortPopularity = () => {
//       let orderedArr = newArr.sort((a, b) => {
//                 return b.popularity - a.popularity
//                 })
//     setContactArr(orderedArr)
//   }


//     const deleteLine = (name) => {
//     let newArr = [...contactArr]
//     newArr = newArr.filter((celeb) => {
//       return celeb.name !== name;
//     })

//     setContactArr(newArr)
//   }


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>

          <tr>
            {/* <th><button onClick={AddRandomContact}>Add Random Contact</button></th> */}
            <AddContactToArray name={setContactArr} test={contactArr}/>
            <SortByName name={setContactArr} test={contactArr} />
            <SortByPopularity name={setContactArr} test={contactArr}/>
          </tr>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
              <ShowContacts name={contactArr} test={setContactArr}/>
      </table>
    </div>
  );
}

export default App;













