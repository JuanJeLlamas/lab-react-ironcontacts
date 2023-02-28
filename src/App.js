import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import React, {useState} from 'react';

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const displayAwardsInfo = (wonOscar, wonEmmy) => {
    if (wonOscar && wonEmmy) {
      return (
        <>
          <td><span role="img" aria-label="trophy">🏆</span></td>
          <td><span role="img" aria-label="trophy">🏆</span></td>
        </>
      );
    } else if (wonOscar) {
      return <td><span role="img" aria-label="trophy">🏆</span></td>;
    } else if (wonEmmy) {
      return <td><span role="img" aria-label="trophy">🏆</span></td>;
    } else {
      return <td></td>;
    }
  };


const addRandomContact= () => {
 
const randomContact =  contacts[Math.floor(Math.random() * contacts.length)];

setContactList([...contactList, randomContact])


}


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table style={{ margin: "15px" ,border: "1px solid black", padding: "30px", backgroundColor: "lightblue" }}>
          <thead>
          
            <th style={{border:"20px"}}>Picture</th>

            <th>Name</th>

            <th>Popularity</th>

            <th>Won an Oscar</th>

            <th>Won an Emmy</th>
          
         </thead>
        <tbody>

          {contactList.map((contact) => (
            <tr key={contact.id}>

<hr />
              <td>
                <hr />
                <img src={contact.pictureUrl} width="100px" alt={contact.name} />
                
              </td>
<hr />
              <td>{contact.name}</td>
              {/* redondeo a dos decimales tofixed2 */}
              <td>{contact.popularity.toFixed(2)}</td>

              {displayAwardsInfo(contact.wonOscar, contact.wonEmmy)}
              </tr>
          
          ))}
    </tbody>
    </table>
    </div>
  );
}

export default App;
