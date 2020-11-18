import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/logos/Logo.png';
import MyRent from './MyRent';
import AllUserList from './AllUserList';
import AddHouse from './AddHouse';
import './DashBoard.css';

const Dashboard = () => {
    const location = useLocation();

    return (
        <div className='container px-0 ax-auto'>
            <div className='row mt-3 align-items-center justify-content-around my-0 my-sm-4'>
                <div className="col-4 px-4">
                    <img src={logo} className="d-block w-50 mx-auto mx-sm-0" alt="" />
                </div>
                <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h4 className="text-center">DashBoard</h4>
                </div>
                <div className='col-4 mx-auto mx-sm-0 text-center text-sm-left'>
                    <h5 className="text-right">{sessionStorage.getItem('name')}</h5>
                </div>
            </div>
            {/* {
                !loggedInUser.role &&
                <div class="d-flex align-items-center">
                    <strong>Loading...</strong>
                    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                </div>
            } */}
            <div className="row full-height">
                <div className="col-sm-3">
                    <nav className="nav flex-column my-5 mx-auto">

                        <Link to='#booking' className="my-4 text-dark"><i class="fas fa-suitcase"></i> Booking List</Link>
                        <Link to='#addHouse' className="mb-4 text-dark"><i class="fas fa-plus"></i> Add House</Link>
                        <Link to='#myRent' className="mb-4 text-dark"><i class="fas fa-home"></i> My Rent</Link>
                        <Link to='/' className="text-dark"><i class="fas fa-arrow-left"></i> Home</Link>

                    </nav>
                </div>
                <div className="col-sm-9 p-0 p-md-5" style={{ backgroundColor: "#F4F7FC", borderRadius: '16px' }}>
                    {
                        location.hash === '#myRent' &&
                        <MyRent />
                    }

                    {
                        location.hash === '#booking' &&
                        <AllUserList />
                    }

                    {
                        location.hash === '#addHouse' &&
                        <AddHouse />
                    }
                </div>
            </div>
        </div>
    );
};


export default Dashboard;