import React from 'react';

const RandomManButton = ({ names }) => {
    const handleRandomMan = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        alert(`Random Man: ${names[randomIndex]}`);
    };

    return (
        <button onClick={handleRandomMan}>Get Random Man</button>
    );
};

export default RandomManButton;
