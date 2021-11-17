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
  // const [contactArr, setContactArr] = React.useState(contact)
  let array1 = contactArr
  let array2 = contacts[Math.floor(Math.random() * contacts.length)]

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>

          <button
            onClick={(e) => setContactArr(
              array1.concat(array2))}
          >Add Random Contact
          </button>

          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{contactArr.map((contact) => {
          return (
            <tr>
                  <td><img src={contact.pictureUrl} style={{ height: 100, width: 70 }} alt={contact.name}/></td>
                  <td>{contact.name }</td>
                  <td>{contact.popularity}</td>
            </tr>)
        }) }</tbody>
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