import React from 'react';
import { useNavigate } from 'react-router-dom';

const  NavigateBackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };

    return (
        <button onClick={goBack}>Navigate Back</button>
    )
}

export default NavigateBackButton;
