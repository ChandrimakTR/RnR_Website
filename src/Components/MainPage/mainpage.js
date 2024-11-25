import React, { useState } from 'react';
import './styles.css';

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

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
                <h2>Fill in Basic Details</h2>
                    <div className="form-group">
                        <label htmlFor="nominatingManager">Nominating Manager</label>
                        <input type="text" id="nominatingManager" name="nominatingManager" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nominatingType">Nominating Type</label>
                        <input type="text" id="nominatingType" name="nominatingType" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="period">Period</label>
                        <input type="text" id="period" name="period" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="leadershipMember">Leadership Member</label>
                        <input type="text" id="leadershipMember" name="leadershipMember" />
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="btn save-button" style={{marginRight: '-3px'}}>Save</button>
                        <button type="button" className="btn next-button">Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainPage;