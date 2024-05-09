import React, { FC } from 'react';
import { AddContactSection } from './AddContact.styled';

interface AddContactProps {}

const AddContact: FC<AddContactProps> = () => (
 <AddContactSection>
   <form id="contactForm">
        <div className="form-group">
            <label>Name:</label>
            <input type="text" id="contactName" name="contactName" placeholder="Enter name" />
        </div>
        <button type="submit" className="btn">Add</button>
    </form>
 </AddContactSection>
);

export default AddContact;
