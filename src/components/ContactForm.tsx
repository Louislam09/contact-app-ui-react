import React from 'react';


export interface ContactFormProps {
    
}
 
const ContactForm: React.FC<ContactFormProps> = () => {
    return (  
        <div className="contact__form__container">
            <div className="contact__form__top">
                <h1 className="contact__form__title">Add Contact</h1>
            </div>
            <form>
                <div className="form__group">
                    <i className='bx bxs-contact'></i>
                    <input type="text"  placeholder="firstName"/>
                </div>
                <div className="form__group">
                    <i className='bx bxs-contact'></i>
                    <input type="text"  placeholder="LastName"/>
                </div>
                <div className="form__group">
                    <i className='bx bx-mail-send'></i>
                    <input type="text" id="firstName" placeholder="Email"/>
                </div>
                <div className="form__group">
                     <i className='bx bx-mobile' ></i>
                    <input type="text" id="firstName" placeholder="Phone"/>
                </div>
                <div className="form__group">
                    <i className='bx bx-street-view' ></i>
                    <input type="text" id="firstName" placeholder="Adddress"/>
                </div>
                <div className="form__group">
                    <i className='bx bx-group'></i>
                    <select name="groups" defaultValue="0">
                        <option disabled value="0">Groups</option>
                        <option value="1">Friends</option>
                        <option value="2">People</option>
                        <option value="3">Family</option>
                    </select>
                </div>

                <div className="contact__form__action">
                    <button className="add__contact">Add Contact</button>
                </div>
            </form>
        </div>
    );
}
 
export default ContactForm;