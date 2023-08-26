import React, { useState } from 'react';

const NameInput = ({ onNameAdd }) => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAddName = () => {
        if (name.trim() !== '') {
            onNameAdd(name);
            setName('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter a name"
            />
            <button onClick={handleAddName}>Add Name</button>
        </div>
    );
};

export default NameInput;
