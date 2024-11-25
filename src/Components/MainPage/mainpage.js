import React, { useState } from 'react';
import './styles.css';

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState('Basic Details');
    const [location, setLocation] = useState('');
    const [leadershipMember, setLeadershipMember] = useState('');

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleLeadershipMemberChange = (event) => {
        setLeadershipMember(event.target.value);
    };

    const cities = [
        'Bangalore/Delhi',
        'Hyderabad/Mumbai',
        'Ahmedabad',
    ];

    return (
        <div className="image-container">
            <div className="center-box">
                <ul className="list">
                    {['Basic Details', 'Nominee Details', 'Nomination Details', 'Nomination Category', 'Nomination Evidences', 'Citation and Photo'].map((item, index) => (
                        <li
                            key={index}
                            className={`list-item ${selectedItem === item ? 'selected' : ''}`}
                            onClick={() => handleSelect(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <form className="form">
                    {selectedItem === 'Basic Details' && (
                        <>
                             <h2>User Details</h2>
                    <div className="form-group">
                        <label htmlFor="nominatingManager">Nominating Manager</label>
                        <input type="text" id="nominatingManager" name="nominatingManager" disabled={true} value={'ABC'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nominatingType">Nomination Type</label>
                        <input type="text" id="nominatingType" name="nominatingType" disabled={true} value={'Quaterly'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="period">Period</label>
                        <input type="text" id="period" name="period" disabled={true} value={'Q1 2024'}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <select id="location" name="location" value={location} onChange={handleLocationChange}>
                            <option value="">Select a city</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="leadershipMember">Leadership Member</label>
                        <select id="leadershipMember" name="leadershipMember" value={leadershipMember} onChange={handleLeadershipMemberChange}>
                            <option value="">Select a member</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="btn save-button" style={{marginRight: '-3px'}}>Save</button>
                        <button type="button" className="btn next-button">Next</button>
                    </div>

                        </>
                    )}
                    {selectedItem === 'Nominee Details' && (
                        <>
                        <h2>Nominee Details</h2>
                            <div className="form-group">
                                <label htmlFor="nomineeName">Employee ID</label>
                                <input type="text" id="nomineeName" name="nomineeName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nomineeEmail">Employee Name</label>
                                <input type="email" id="nomineeEmail" name="nomineeEmail" disabled={true}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nomineeEmail">Designation</label>
                                <input type="email" id="nomineeEmail" name="nomineeEmail" disabled={true}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="nomineeEmail">Team/BU</label>
                                <input type="email" id="nomineeEmail" name="nomineeEmail" disabled={true}/>
                            </div>
                        </>
                    )}
                    {selectedItem === 'Nomination Details' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="nominationReason">Nomination Reason</label>
                                <textarea id="nominationReason" name="nominationReason"></textarea>
                            </div>
                        </>
                    )}
                    {selectedItem === 'Nomination Category' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select id="category" name="category">
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                    <option value="Category 3">Category 3</option>
                                </select>
                            </div>
                        </>
                    )}
                    {selectedItem === 'Nomination Evidences' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="evidence">Evidence</label>
                                <input type="file" id="evidence" name="evidence" />
                            </div>
                        </>
                    )}
                    {selectedItem === 'Citation and Photo' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="citation">Citation</label>
                                <textarea id="citation" name="citation"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Photo</label>
                                <input type="file" id="photo" name="photo" />
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default MainPage;