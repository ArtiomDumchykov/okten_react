import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const BackButton:FC = () => {
    const navigate = useNavigate();
    
    return (
        <button
            style={{
                position: "fixed",
                left: "25px",
                border: "1px solid black",
                padding: "5px 10px",
            }}
            onClick={() => navigate(-1)}
        >
            Back
        </button>
    )
}
