import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  return (
    <>
      <AddUser />
      <UsersList users={[{ name: 'Ross', age: 27 }]} />
    </>
  );
};

export default App;
