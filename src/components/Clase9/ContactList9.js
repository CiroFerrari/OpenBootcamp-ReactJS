import React, {useState} from 'react';
import Contact9 from "./Contact9";

export default function ContactList9() {

  const [contactos, setContactos] = useState([
    {
      name: 'Franco',
      status: 'Conectado'
    },
    {
      name: 'Yamile',
      status: 'Desconectado'
    }
  ])

  function addContact(contact) {
    let tempList = [...contactos]
    tempList.push(contact)
    setContactos(tempList)
  }

  function removeContact(index) {
    let tempList = [...contactos]
    tempList.splice(index, 1)
    setContactos(tempList)
  }

  function changeStatus(contact) {
    let index = contactos.indexOf(contact)
    let tempList = [...contactos]
    tempList[index] = {name: 'hola'}
    setContactos(tempList)
  }

  return (
    <section>
      <p>Hola</p>
      <Contact9 contactos={contactos} add={addContact} remove={removeContact} change={changeStatus}></Contact9>
    </section>

  )
}