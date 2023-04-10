import React, { useState } from 'react';
import img1 from './settings.png';
import donate from './income.png';
import search from './search.png';
import user from './user.png';
import notifs from './notifications.png';
import info from './info.png';
import page1 from './DonorList';
import './Home.css';

const Home = () => {

    return(
        <>
            <div class="side-menu">
        <div class="brand-name">
            <h1>Admin Panel</h1>
        </div>
        <ul>
            <li><img src={img1} alt=""/>&nbsp; <span>Dashboard</span></li>
            <a href="./DonorList"><li><img src={img1} alt=""/>&nbsp; <span></span>Donors</li></a>
            <li><img src={img1} alt=""/>&nbsp; <span></span>MiddleMan</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Regions</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Categories</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Help-desk</li>
            <li><img src={img1} alt=""/>&nbsp; <span></span>Settings</li>
        </ul>
    </div>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="search">
                    <input type="text" placeholder="Search.."/>
                    <button type="submit"><img src={search} alt=""/></button>
                </div>
                <div class="user">
                    <a href="#" class="btn">Admin View</a>
                    <img src={notifs} alt=""/>
                    <div class="img-case">
                        <img src={user} alt=""/> 
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="cards">
                <div class="card">
                    <div class="box">
                        <h1>2098</h1>
                        <h3>Donations</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>154</h1>
                        <h3>Notable Donors</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>23</h1>
                        <h3>Regions</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <h1>23</h1>
                        <h3>Volunteers</h3>
                    </div>
                    <div class="icon-case">
                        <img src={donate} alt=""/>
                    </div>
                </div>
            </div>
            <div class="content-2">
                <div class="recent-payments">
                <div class="title">
                    <h2>Donation Requests</h2>
                    <a href="#" class="btn">View All</a>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Category</th>
                        <th>Assign</th>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Dhanbad</td>
                        <td>Stationary</td>
                        <td><a href="#" class="btn">Accept</a></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Dhanbad</td>
                        <td>Stationary</td>
                        <td><a href="#" class="btn">Accept</a></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Dhanbad</td>
                        <td>Stationary</td>
                        <td><a href="#" class="btn">Accept</a></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Dhanbad</td>
                        <td>Stationary</td>
                        <td><a href="#" class="btn">Accept</a></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Dhanbad</td>
                        <td>Stationary</td>
                        <td><a href="#" class="btn">Accept</a></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>Dhanbad</td>
                        <td>Stationary</td>
                        <td><a href="#" class="btn">Accept</a></td>
                    </tr>
                </table>
                </div>
                <div class="new-students">
                    <div class="title">
                        <h2>Pending Approval</h2>
                        <a href="#" class="btn">Approve</a>
                    </div>
                    <table>
                        <tr>
                            <th>InCharge</th>
                            <th>Region</th>
                            <th>Details filled</th>
                        </tr>
                        <tr>
                            <td><img src={user} alt=""/></td>
                            <td>Bokaro</td>
                            <td><img src={info} alt=""/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Home