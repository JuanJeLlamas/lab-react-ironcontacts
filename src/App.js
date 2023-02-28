import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import React, {useState} from 'react';
const startingList = contacts.slice(0, 5)

function App() {
  const [contactList, setContactList] = useState(startingList);

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
// const Borrado = (id) =>{
// const filterContacts = contactList.filt
// }

const addRandomContact= () => {
 
const randomContact =  contacts[Math.floor(Math.random() * contacts.length)];

setContactList([...contactList, randomContact])


}
const sortByName = () =>  {
    
  const contactsClone = [...contactList];


  contactsClone.sort((elem2, elem1) => {
    return elem2.name.localeCompare(elem1.name)
  })

  setContactList( contactsClone )

}

const sortByPopularity = () => {
  const forName = [...contactList].sort((elem2, elem1) => elem1.popularity - elem2.popularity);
  setContactList(forName);
}
  

return (
    <div style={{backgroundColor:"darkcyan"}}className="App">
      
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button> <div>
  <button onClick={sortByName}>Sort by name</button>
  <button onClick={sortByPopularity}>Sort by popularity</button>

</div>

      <table style={{ margin: "40px" ,border: "3px solid black", backgroundColor: "lightblue" }}>

          <thead>
          
            <th >Picture</th>

            <th>Name</th>

            <th>Popularity</th>

            <th>Won an Oscar</th>

            <th>Won an Emmy</th>

            <th> Action </th>
          
         </thead>
        <tbody>

          {contactList.map((contact) => (
            <tr key={contact.id}>


              <td>
                <hr />
                <img src={contact.pictureUrl} width="60px" alt={contact.name} />
                
              </td>

              <td>{contact.name}</td>
              {/* redondeo a dos decimales tofixed2 */}
              <td>{contact.popularity.toFixed(2)}</td>

              {displayAwardsInfo(contact.wonOscar, contact.wonEmmy)}
              <td>
                {/* <button onClick={Borrado}>Delete</button> */}
              </td>
              </tr>
          
          ))}
    </tbody>
    </table>
    </div>
  );
}

export default App;
