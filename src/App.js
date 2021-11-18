// import logo from './logo.svg';
import './App.css';
import './index.css';
import contacts from './contacts.json';
import React, {useState} from 'react'


let contact = []
for (let i = 0; i < 5; i++){
  contact.push(contacts[i])
}



function App() {
  const [contactArr, setContactArr] = useState(contact)
  // ... is to clone an array that is a hook.
  let newArr = [...contactArr]
  
  const setRandomContact = () => {
    let random = Math.floor(Math.random() * contacts.length)
    setContactArr(contactArr.concat(contacts[random]))
  }

  const sortName = () => {
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
    setContactArr(orderedArr);
  }
  
  const sortPopularity = () => {
      let orderedArr = newArr.sort((a, b) => {
                return b.popularity - a.popularity
                })
    setContactArr(orderedArr)
  }


  const deleteLine = (name) => {
    newArr = newArr.filter((celeb) => {
      return celeb.name !== name;
    })

    setContactArr(newArr)
  }


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>

          <tr>
            <th><button onClick={setRandomContact}>Add Random Contact</button></th>
            <th><button onClick={sortName}>Sort by name</button></th>
            <th><button onClick={sortPopularity}>Sort by popularity</button></th>
          </tr>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{contactArr.map((contact) => {
          return (
            <tr>
                  <td><img src={contact.pictureUrl} style={{ height: 100, width: 70 }} alt={contact.name}/></td>
                  <td>{contact.name }</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td><button onClick={() => deleteLine(contact.name)}>Delete</button></td>
            </tr>)
        })}
        
        </tbody>
      </table>
    </div>
  );
}

export default App;













// const TableInfo = (props) => {

//   return (
//     <tr>
//       <td><img src={props.contact.pictureUrl} style={{ height: 100, width: 70 }} alt={contact.name}/></td>
//             <td>{props.contact.name }</td>
//             <td>{props.contact.popularity}</td>
//     </tr>
// )

// }