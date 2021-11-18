import React from 'react'
import DeleteLine from './DeleteLine'
import Main from './Main'

const ShowContacts = (props) => {

    return (
        <tbody>{props.name.map((contact) => {
          return (
            <tr>
                  <td><img src={contact.pictureUrl} style={{ height: 100, width: 70 }} alt={contact.name}/></td>
                  <td>{contact.name }</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <DeleteLine name={props.name} test={props.test} contactName={contact.name}/>
            </tr>)
        })}
        
        </tbody>
    )
}

export default ShowContacts;



