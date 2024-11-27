import React, { useState, useEffect } from 'react';
import './styles.css';

const MainPage = () => {
    const [location, setLocation] = useState('');
    const [leadershipMember, setLeadershipMember] = useState('');
    const [period, setPeriod] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [category, setCategory] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState({
        employeeName: '',
        designation: '',
        teamBu: ''
    });
    const [user, setUser] = useState({
        userName: 'User Name'
    });

    const [nominationObject, setNominationObject] = useState({});
    const [okrOption, setOkrOption] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleLeadershipMemberChange = (event) => {
        setLeadershipMember(event.target.value);
    };

    const handleEmployeeIdChange = (event) => {
        setEmployeeId(event.target.value);
    };

    const handleOkrOptionChange = (event) => {
        console.log('Selected OKR Option:', event.target.innerHTML);
        setOkrOption(event.target.innerHTML);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.innerHTML);
    };
    const handleSearch = async () => {
        // Implement search functionality here
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${employeeId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEmployeeDetails({
                employeeName: data.name,
                designation: data.company.bs,
                teamBu: data.company.name
            });
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };

    const cities = [
        'Bangalore',
        'Hyderabad',
        'Ahmedabad',
    ];

    const determinePeriod = () => {
        const date = new Date();
        const month = date.getMonth(); // getMonth() returns 0-11
        const year = date.getFullYear();
        let quarter;

        if (month >= 0 && month <= 2) {
            quarter = 'Q1';
        } else if (month >= 3 && month <= 5) {
            quarter = 'Q2';
        } else if (month >= 6 && month <= 8) {
            quarter = 'Q3';
        } else {
            quarter = 'Q4';
        }

        setPeriod(`${quarter} ${year}`);
    };

    useEffect(() => {
        determinePeriod();
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        const nominationData = {
            nominatingManager: user.userName,
            nominatingType: document.getElementById('nominatingType').value,
            period: period,
            location: location,
            leadershipMember: leadershipMember,
            employeeId: employeeId,
            employeeName: employeeDetails.employeeName,
            designation: employeeDetails.designation,
            teamBu: employeeDetails.teamBu,
            nominationReason: document.getElementById('nominationReason').value,
            employeeEfforts: document.getElementById('employeeEfforts').value,
            category: category,
            evidence: document.getElementById('evidence').files[0],
            citation: document.getElementById('citation').value,
            photo: document.getElementById('photo').files[0]
        };
        setNominationObject(nominationData);
        console.log('Nomination Object:', nominationData);
    };

    return (
        <div className="image-container">
            <div className="center-box">
                <form className="form">
                    <h2>Nomination Form</h2>
                    <div className="form-section">
                        <h3>User Details</h3>
                        <div className="form-group">
                            <label htmlFor="nominatingManager">Nominating Manager</label>
                            <input type="text" id="nominatingManager" name="nominatingManager" value={user.userName} disabled={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nominatingType">Nominating Type</label>
                            <input type="text" id="nominatingType" name="nominatingType" disabled={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="period">Period</label>
                            <input type="text" id="period" name="period" value={period} readOnly disabled={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location <span className="required">*</span></label>
                            <select id="location" name="location" value={location} onChange={handleLocationChange} required>
                                <option value="">Select a city</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="leadershipMember">Leadership Member <span className="required">*</span></label>
                            <select id="leadershipMember" name="leadershipMember" value={leadershipMember} onChange={handleLeadershipMemberChange} required>
                                <option value="">Select a member</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>Nominee Details</h3>
                        <div className="form-group">
                            <label htmlFor="employeeId">Employee ID <span className="required">*</span><span className="info-icon_main">i
                                <span className="tooltip-text">Enter Employee ID to search for Employee details</span>
                            </span></label>
                            <div className="input-with-icon">
                                <input type="text" id="employeeId" name="employeeId" value={employeeId} onChange={handleEmployeeIdChange} required/>
                                <button type="button" className="search-icon" onClick={handleSearch}>
                                    🔍
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" id="employeeName" name="employeeName" value={employeeDetails.employeeName} readOnly disabled={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" id="designation" name="designation" value={employeeDetails.designation} readOnly disabled={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="teamBu">Team/BU</label>
                            <input type="text" id="teamBu" name="teamBu" value={employeeDetails.teamBu} readOnly disabled={true} />
                        </div>
                    </div>
                    <div className="form-section">
                        <h3>Nomination Details</h3>
                        <div className="form-group">
                            <label htmlFor="nominationReason">OKR 2024:<span className="required">*</span></label>
                            <div className="okr-options-vertical">
                                {['Application of AI with Confidence',
                             'Trusted Customer Experience', 
                             'Expand Our Global Reach', 
                             'Learn, Grow and Thrive'].map((option, index) => {
                                return (
                                    <div 
                                key={option}
                                value={option}
                                className={`okr-option ${okrOption === option ? 'selected' : ''}`} 
                                onClick={(e) => handleOkrOptionChange(e)}>{option}
                                </div>
                                );
                            })}
                            </div>
                            </div>
                                
                        <div className="form-group">    
                            <label htmlFor="employeeEfforts">Efforts of the Employee:<span className="required">*</span></label>
                            <textarea id="employeeEfforts" name="employeeEfforts" required
                            placeholder='Description of actions / efforts of the employee with respect to the focus area(s) which are over & beyond their regular duties'></textarea>
                             <small className="textarea-info">max 500 words</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="benefitsDescription">Description of Benefits:</label>
                            <textarea id="benefitsDescription" name="benefitsDescription"
                            placeholder='Description of benefits, Bangalore location/'></textarea>
                             <small className="textarea-info">max 500 words</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category:</label>
                            <select id="category" name="category">
                            <option value="">Select a Category</option>
                                <option value="Category 1" onClick={(e) => handleCategoryChange(e)}>Process Excellence - Individual Contributor</option>
                                <option value="Category 2" onClick={(e) => handleCategoryChange(e)}>Male Ally</option>
                                <option value="Category 3" onClick={(e) => handleCategoryChange(e)}>Women who made a difference</option>
                                <option value="Category 4" onClick={(e) => handleCategoryChange(e)}>Innovation Trail Blazer</option>
                                <option value="Category 5" onClick={(e) => handleCategoryChange(e)}>Customer Centricity</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="details">Details:</label>
                            <textarea id="details" name="details"></textarea>
                            <small className="textarea-info">max 500 words</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeAppreciation">Appreciation of the Employees Contribution:</label>
                            <textarea id="employeeAppreciation" name="employeeAppreciation"></textarea>
                            <small className="textarea-info">max 500 words</small>
                        </div>
                    </div>
                    <div className="form-section">
                    <h3>Attach Files</h3>
                    <div className="form-group">
                            <label htmlFor="evidence">Evidence</label>
                            <input type="file" id="evidence" name="evidence" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="citation">Citation</label>
                            <textarea id="citation" name="citation"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="photo">Photo</label>
                            <input type="file" id="photo" name="photo" />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="btn save-button">Save</button>
                        <button type="submit" className="btn submit-button" onClick={(e) => onSubmit(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainPage;