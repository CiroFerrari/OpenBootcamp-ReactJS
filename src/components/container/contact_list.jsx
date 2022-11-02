import React from 'react';
import { STATUS } from '../../models/status.enum';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {

    const defaultContact = new Contact('Example Name', 'Example Last Name', 'Example Email', true);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your Contacts:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
