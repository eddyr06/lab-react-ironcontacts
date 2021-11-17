// import logo from './logo.svg';
import './App.css';
import './index.css';
import contacts from './contacts.json';
import React, {useState} from 'react'


let contact = []
for (let i = 0; i < 5; i++){
  contact.push(contacts[i])
}

const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

filterItems(contact, 'jo') // ['apple', 'grapes']


function App() {
  const [contactArr, setContactArr] = useState(contact)
  // const [contactArr, setContactArr] = React.useState(contact)
  let array1 = contactArr
  let array2 = contacts[Math.floor(Math.random() * contacts.length)]
  let array3 = array1.concat(array2)
  // ... is to clone an array that is a hook.
  let newArr = [...contactArr]

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>

          <tr>
            <th><button
              onClick={(e) => setContactArr(
                array3)}
            >Add Random Contact
            </button></th>
            <th><button
              onClick={(e) => setContactArr(
                newArr.sort(function (a, b) {
                  let nameA = a.name.toUpperCase()
                  let nameB = b.name.toUpperCase()
                  if (nameA < nameB) {
                    return -1
                  } if (nameA > nameB) {
                    return 1
                  }
                  return 0
                })
              )
              }
            >Sort by name</button></th>
          <th><button
            onClick={(e) => setContactArr(
            // contact.sort(function (a, b) {
//   return b.popularity - a.popularity
// });
              newArr.sort(function (a, b) {
                return b.popularity - a.popularity
              })
            )}
            >Sort by popularity</button></th>
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
                  <td><button
                      onClick={(e) => setContactArr(
                      )}
                      
                      >Delete</button>
                  </td>
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