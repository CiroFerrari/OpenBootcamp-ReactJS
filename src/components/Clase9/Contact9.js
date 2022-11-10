import React from 'react';

export default function Contact9({contactos, add, remove, change}) {

  return (
    <section>
      {
        contactos.length > 0 ?
          contactos.map(contacto =>
            <article key={contacto.name}>
              <p>Name: {contacto.name}</p>
              <p>Status: <button>{contacto.status}</button></p>
            </article>
          )
          :
          <p>No hay contactos</p>
      }
    </section>

  )
}