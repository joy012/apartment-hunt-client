import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';


const ApartmentForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => { 
        // history.push({ 
        //     pathname: '/dashboard',
        // });
    }
        
    return (
        
        <form className="bg-light p-3" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <div className="form-group"> 
                <input name="name" class="form-control" type="text" placeholder= 'Full name' ref={register({ required: true })} />
                {errors.name && <span className='error'>*Required</span>}
                </div>

                <div className="form-group">    
                <input name="phone" className="form-control" type="number" placeholder= 'Phone' ref={register({ required: true })} />
                {errors.phone && <span className='error'>*Required</span>}
                </div>
                
                <div className="form-group">     
                    <input name="adminEmail" className="form-control" type="email" placeholder= 'Enter New Admin Email' ref={register({ required: true })} />
                    {errors.adminEmail && <span className='error'>*Required</span>}
                </div>

                <div className="form-group">     
                        <textarea className="form-control" rows="4" placeholder='Your message'></textarea>
                </div>
            </div>

            <button className="btn text-white theme-bg px-5" type='submit' >Send</button>
        </form>
   
    );
};

export default ApartmentForm;