import { useState } from 'react';

function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [randomName, setRandomName] = useState('');

  const addName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  };

  const generateRandomName = () => {
    if (names.length > 0) {
      const randomIndex = Math.floor(Math.random() * names.length);
      setRandomName(names[randomIndex]);
    }
  };

  return (
    <div className="w-50 mx-auto bg-info p-5 mt-5 rounded-4">
      <h1 className="text-center mb-3">Random Name Picker</h1>
      <div>
        <h4 className='mb-3'> Names are : {names.join(", ")}</h4>
        <input
          className='w-75 p-2 rounded-2'
          type="text"
          placeholder="Enter a name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button className='px-4 py-2 ms-3 btn btn-success btn-sm' onClick={addName}>Add</button>
      </div>
      <div>
        <button className='btn btn-success mt-3' onClick={generateRandomName}>Generate Random Name</button>
      </div>
      {randomName && <h5 className="mt-3">Today Class will take Name is : {randomName}</h5>}
    </div>
  );
}

export default App;

