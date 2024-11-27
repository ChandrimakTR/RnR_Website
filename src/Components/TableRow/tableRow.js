import React, { useState } from 'react';
import './styles.css';

const TableRow = ({ name, submissionDate, location, manager, businessUnit, nominationDetails }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <tr className="table-row">
                <td>{name}</td>
                <td>{submissionDate}</td>
                <td>{location}</td>
                <td>{manager}</td>
                <td>{businessUnit}</td>
                <td>{nominationDetails}</td>
                <td>
                    <button className="dropdown-icon" onClick={toggleDropdown}>
                        ▼
                    </button>
                </td>
            </tr>
            {isDropdownOpen && (
                <tr className="dropdown-form">
                    <td colSpan="7">
                        <form >
                            <h2 className="table-form-title">Fill in Basic Details</h2>
                            <div className="table-form-section">
                                <h3 className="table-form-section-title">User Details</h3>
                                <div className="table-form-group">
                                    <label htmlFor="nominatingManager">Nominating Manager</label>
                                    <input type="text" id="nominatingManager" name="nominatingManager" />
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="nominatingType">Nominating Type</label>
                                    <input type="text" id="nominatingType" name="nominatingType" />
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="period">Period</label>
                                    <input type="text" id="period" name="period" />
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="location">Location <span className="required">*</span></label>
                                    <select id="location" name="location">
                                        <option value="">Select a city</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                    </select>
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="leadershipMember">Leadership Member <span className="required">*</span></label>
                                    <select id="leadershipMember" name="leadershipMember">
                                        <option value="">Select a member</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-form-section">
                                <h3 className="table-form-section-title">Nominee Details</h3>
                                <div className="table-form-group">
                                    <label htmlFor="employeeId">Employee ID <span className="info-icon">i
                                        <span className="tooltip-text">Enter Employee ID to search for Employee details</span>
                                    </span></label>
                                    <div className="input-with-icon">
                                        <input type="text" id="employeeId" name="employeeId" />
                                        <button type="button" className="search-icon">
                                            🔍
                                        </button>
                                    </div>
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="employeeName">Employee Name</label>
                                    <input type="text" id="employeeName" name="employeeName" />
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="designation">Designation</label>
                                    <input type="text" id="designation" name="designation" />
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="teamBu">Team/BU</label>
                                    <input type="text" id="teamBu" name="teamBu" />
                                </div>
                            </div>
                            <div className="table-form-section">
                                <h3 className="table-form-section-title">Nomination Details</h3>
                                <div className="table-form-group">
                                    <label htmlFor="nominationReason">Nomination Reason</label>
                                    <textarea id="nominationReason" name="nominationReason"></textarea>
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="category">Category</label>
                                    <select id="category" name="category">
                                        <option value="Category 1">Category 1</option>
                                        <option value="Category 2">Category 2</option>
                                        <option value="Category 3">Category 3</option>
                                    </select>
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="evidence">Evidence</label>
                                    <input type="file" id="evidence" name="evidence" />
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="citation">Citation</label>
                                    <textarea id="citation" name="citation"></textarea>
                                </div>
                                <div className="table-form-group">
                                    <label htmlFor="photo">Photo</label>
                                    <input type="file" id="photo" name="photo" />
                                </div>
                            </div>
                            <div className="table-form-buttons">
                                <button type="button" className="btn table-save-button">Save</button>
                                <button type="submit" className="btn table-submit-button">Submit</button>
                            </div>
                        </form>
                    </td>
                </tr>
            )}
        </>
    );
};

export default TableRow;