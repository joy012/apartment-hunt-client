import React, { useEffect, useState } from 'react';
import './AllUserList.scss';

const AllUserList = () => {
    const [allUser, setAllUser] = useState([]);
    useEffect(() => {
        fetch('https://apartment-hunt-spa.herokuapp.com/allbooking')
            .then(res => res.json())
            .then(data => {
                setAllUser(data);
            })
    }, [])

    return (
        <div className="table-container table-responsive  mt-3 mb-5 mr-4 p-3">
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        !allUser.length &&
                        <div class="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                        </div>
                    } */}
                    {
                        allUser.map(user =>
                            <tr>
                                <td>{user.service}</td>
                                <td>{user.email}</td>
                                <td>{user.service}</td>
                                <td>{user.details}</td>
                                <td >
                                    <button className="btn btn-danger">Pending</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUserList;