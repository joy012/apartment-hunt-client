import React, { useState } from 'react';

const AddHouse = () => {
    const [house, setHouse] = useState({});
    const [file, setFile] = useState(null);

    const handleHouse = e => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', house.service);
        formData.append('price', house.price);
        formData.append('address', house.location);
        formData.append('bath', house.bath);
        formData.append('bed', house.bed);

        fetch('https://apartment-hunt-spa.herokuapp.com/addApartment', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('one new House is added successfully!');
                }
            })

        e.target.reset();
        e.preventDefault();
    }
    const handleBlur = e => {
        const newInfo = { ...house };
        newInfo[e.target.name] = e.target.value;
        setHouse(newInfo);
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    return (
        <form className="p-5" onSubmit={handleHouse}>
            <div className="row align-items-center">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="title">Service Title</label>
                        <input onBlur={handleBlur} type="text" name='service' className="form-control" id="title" placeholder="Enter Title.." required />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input onBlur={handleBlur} type="number" name='price' className="form-control" id="price" placeholder="Price" required />
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="location">Locaiton</label>
                        <input onBlur={handleBlur} type="text" name='address' className="form-control" id="location" placeholder="Enter Locaiton" required />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="bed">No Of Bedroom</label>
                        <input onBlur={handleBlur} type="number" name='bed' className="form-control" id="bed" placeholder="No of bed." required />
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="bath">No Of Bathroom</label>
                        <input onBlur={handleBlur} type="number" name='bath' className="form-control" id="bath" placeholder="No of bath." required />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="img">Thumbnail</label>
                        <input onChange={handleFileChange} type="file" name="file" className="form-control-file" id="img" />
                    </div>
                </div>
            </div>

            <input className='btn btn-success px-5' type="submit" value="Submit" />
        </form>
    );
};

export default AddHouse;