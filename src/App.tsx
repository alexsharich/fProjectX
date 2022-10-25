import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [state, setState] = useState([{ name: '', id: undefined }]);

  const getUsers = () => {
    axios.get('http://localhost:7542/users').then((res) => setState(res.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = () => {
    axios.post('http://localhost:7542/users').then((res) => {
      getUsers();
    });
  };

  return (
    <div className='App'>
      <h1>FPROJECTX</h1>
      <button onClick={addUser}>Add User</button>
      <div>{state && state.map((u) => <p key={u.id}>{u.name}</p>)}</div>
    </div>
  );
}

export default App;
