import React, { useEffect, useState } from 'react';

import './SelectFilter.scss'

export function SelectFilter({ options, initialValue = 'all', register, onSelect }) {
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };



    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        setDropdownOpen(false);
        onSelect(value === "all" ? "" : value);
    };

    return (
        <>
            <div className={`custom-select ${isDropdownOpen ? 'open' : ''}`}>
                <div className="selected-value" onClick={toggleDropdown}>
                    {selectedValue}
                </div>
                <ul className={`options-list ${isDropdownOpen ? 'open' : ''}`}>
                    <li
                        className="option"
                        onClick={() => handleOptionSelect('all')}

                    >
                        All
                    </li>
                    {
                        options.map((option) => (
                            <li
                                key={option.id}
                                className="option"
                                onClick={() => handleOptionSelect(option.name)}
                            >
                                {option.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}



