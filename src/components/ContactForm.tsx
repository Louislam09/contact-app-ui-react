import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useCreateContact } from '../hooks/useCreateContact';
import { useGetGroups } from '../hooks/useGetGroups';
import { IGroup } from '../interface';
import MultiSelect from './app/MultiSelect';

interface ContactFormProps {}

interface IFormError {
    firstName: string;
    lastName: string;
    phone: string;
}

 
const ContactForm: React.FC<ContactFormProps> = () => {
    const history = useHistory();
    const {data: groups,loading} = useGetGroups();
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        groups: []
    }

    const [form, setForm] = useState(initialState);
    const [passValidation, setValid] = useState(false);
    const [groupList, setGroupList] = useState<IGroup[]>();

    const [formError, setFormError] = useState<IFormError>({
        firstName: "",
        lastName: "",
        phone: ""
    });

    const { firstName, lastName, phone} = form;

    const onCompletedHandle = () => {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Contact created successfuly"
        });
        history.push("/");
    }

    const onErrorHandle = (error:any) => {
        Swal.fire({
            icon: "error",
            title: "error",
            text: error.message
        })
    }

    const [createContact ] = useCreateContact(form,onCompletedHandle,onErrorHandle);

    /**
     * Handles form state
     * @param {React.FormEvent<HTMLInputElement|HTMLSelectElement>} name value
     */
    const onChange = ({ currentTarget: {name,value} }: React.FormEvent<HTMLInputElement|HTMLSelectElement>) => {
        setForm((cv:any) => ({...cv, [name]: value}))
    }

    const validateForm = () => {
        setFormError({ firstName: "", lastName: "", phone: "" });
        setValid(true);

        if(firstName === ""){
            setFormError((cv: IFormError) => ({ ...cv, firstName: "First Name is required" }));
            setValid(false);
        };

        if(lastName === ""){
            setFormError((cv: IFormError) => ({ ...cv, lastName: "Last Name is required" }));
            setValid(false);
        };

        if(phone === ""){
            setFormError((cv: IFormError) => ({ ...cv, phone: "Phone is required" }));
            setValid(false);
        };
    }

    /**
     * Submit the form
     * @param {any} e 
     */
    const onsubmit = (e:any) => {
        e.preventDefault();
        validateForm()
   
        if(passValidation){
            createContact();
        }
    }

    useEffect(() => {
        setGroupList(groups?.groups)
    }, [loading,groups?.groups]);

    return (  
        <div className="contact__form__container">
            <div className="contact__form__top">
                <Link to={"/"}>
                    <i className='bx bx-arrow-back'></i>
                </Link >
                <h1 className="contact__form__title">Contact Form</h1>
            </div>
            <form>
                <div className="form__group">
                    <i className='bx bxs-contact'  style={{color: `${formError.firstName? "#FF004E" : "white"}`}}></i>
                    <input type="text" name="firstName" placeholder="firstName" onKeyUp={validateForm} onChange={onChange} defaultValue={form.firstName} />
                    {formError.firstName && <div className="form__error">{formError.firstName}</div>}
                </div>
                <div className="form__group">
                    <i className='bx bxs-contact' style={{color: `${formError.lastName? "#FF004E" : "white"}`}}></i>
                    <input type="text" name="lastName" placeholder="LastName" onKeyUp={validateForm} onChange={onChange}/>
                    {formError.lastName && <div className="form__error">{formError.lastName}</div>}
                </div>
                <div className="form__group">
                     <i className='bx bx-mobile' style={{color: `${formError.phone? "#FF004E" : "white"}`}}></i>
                    <input type="text"  name="phone" placeholder="Phone" onKeyUp={validateForm} onChange={onChange}/>
                    {formError.phone && <div className="form__error">{formError.phone}</div>}
                </div>
                <div className="form__group">
                    <i className='bx bx-mail-send'></i>
                    <input type="text" name="email" placeholder="Email" onChange={onChange}/>
                </div>
                <div className="form__group">
                    <i className='bx bx-street-view' ></i>
                    <input type="text" name="address" placeholder="Adddress" onChange={onChange}/>
                </div>

                <MultiSelect options={groupList} setData={setForm}/>

                <div className="contact__form__action form__group">
                    <button className="add__contact" onClick={onsubmit}>Add Contact</button>
                </div>
            </form>
        </div>
    );
}
 
export default ContactForm;

