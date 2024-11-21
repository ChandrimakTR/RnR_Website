import React, { useState } from 'react';
import './styles.css';

const TableRow = ({ name, submissionDate, location, manager, businessUnit, nominationDetails, reviewDetails }) => {
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <tr className="table-row">
            <td>{name}</td>
            <td>{submissionDate}</td>
            <td>{location}</td>
            <td>{manager}</td>
            <td>{businessUnit}</td>
            <td>{nominationDetails}</td>
            <td>
                <button className="options-button" onClick={toggleOptions}>...</button>
                {showOptions && (
                    <ul className="options-menu">
                        <li>Delete</li>
                        <li>Edit</li>
                        <li>Approve</li>
                    </ul>
                )}
            </td>
        </tr>
    );
};

export default TableRow;