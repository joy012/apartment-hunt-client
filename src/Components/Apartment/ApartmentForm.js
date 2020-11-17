import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


const ApartmentForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [userInfo, setUserInfo] = useState({})
    const history = useHistory();

    const handleBlur = (e) => {
            const newUserInfo = { ...userInfo };
            newUserInfo[e.target.name] = e.target.value;
            setUserInfo(newUserInfo);
    }
    const handleAddUser = e => {
        const formData = new FormData();
        formData.append('name', userInfo.service);
        formData.append('email',userInfo.email); 
        formData.append('phone', userInfo.phone);
        formData.append('message', userInfo.message);

        fetch('https://apartment-hunt-spa.herokuapp.com/addUserBooking', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('one new House is added successfully!');
                    history.push('/dashboard#myRent');
                }
            })

        e.target.reset();
        e.preventDefault();
    }
        
    return (
        
        <form className="bg-light p-3" onSubmit={handleAddUser}>

            <div className="form-group">
                <div className="form-group"> 
                <input name="name" onBlur={handleBlur} className="form-control" type="text" placeholder= 'Full name' ref={register({ required: true })} />
                {errors.name && <span className='error'>*Required</span>}
                </div>

                <div className="form-group">    
                <input name="phone" onBlur={handleBlur} className="form-control" type="number" placeholder= 'Phone' ref={register({ required: true })} />
                {errors.phone && <span className='error'>*Required</span>}
                </div>
                
                <div className="form-group">     
                    <input name="email" onBlur={handleBlur} className="form-control" type="email" placeholder= 'Enter New Admin Email' ref={register({ required: true })} />
                    {errors.adminEmail && <span className='error'>*Required</span>}
                </div>

                <div className="form-group">     
                        <textarea className="form-control" name="message" onBlur={handleBlur} rows="4" placeholder='Your message'></textarea>
                </div>
            </div>

            <button className="btn text-white theme-bg px-5" type='submit' >Send</button>
        </form>
   
    );
};

export default ApartmentForm;