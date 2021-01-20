import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const MyRent = () => {
    const [houses, setHouses] = useState([]);
    const email = sessionStorage.getItem('email');
    const history = useHistory();
    
    useEffect(() => {
        fetch('https://apartment-hunt-spa.herokuapp.com/userBooking?email=' + email, {
            method: "GET",
            headers: {
                authorization: `Bearer ${sessionStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setHouses(data));
    }, [email])

    const viewDetails = (id) => {
        history.push(`/apartment/${id}`)
    }

    return (
        <div className="table-container table-responsive  mt-3 mb-5 mr-4 p-3">
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">House Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        houses.map(house =>
                            <tr>
                                <td>{house.service}</td>
                                <td>${house.price}</td>
                                <td><p onClick={()=>viewDetails(house._id)} className="btn theme-bg  px-3 ml-auto">View details</p></td>
    
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyRent;