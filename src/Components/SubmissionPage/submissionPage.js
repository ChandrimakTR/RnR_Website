import React, { useState } from 'react';
import './styles.css';
import TableRow from '../TableRow/tableRow';

const SubmissionPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const tableData = [
        { name: 'John Doe', submissionDate: '2023-01-01', location: 'New York', manager: 'Jane Smith', businessUnit: 'Sales', nominationDetails: 'Outstanding Performance', reviewDetails: 'Reviewed' },
        { name: 'Alice Johnson', submissionDate: '2023-01-02', location: 'Los Angeles', manager: 'Bob Brown', businessUnit: 'Marketing', nominationDetails: 'Excellent Leadership', reviewDetails: 'Pending' },
        // Add more records as needed
    ];

    const handleSearch = () => {
        // Implement search functionality here
    };

    const handleRefresh = () => {
        // Implement refresh functionality here
    };

    return (
        <div className="submission-page">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
                <button onClick={handleRefresh} className="refresh-button">Refresh</button>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Submission Date</th>
                        <th>Location</th>
                        <th>Manager</th>
                        <th>Business Unit</th>
                        <th>Nomination Details</th>
                        <th style={{ width: '20px' }}>Review Details</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((record, index) => (
                        <TableRow
                            key={index}
                            name={record.name}
                            submissionDate={record.submissionDate}
                            location={record.location}
                            manager={record.manager}
                            businessUnit={record.businessUnit}
                            nominationDetails={record.nominationDetails}
                            reviewDetails={record.reviewDetails}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmissionPage;