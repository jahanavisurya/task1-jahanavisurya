import React from 'react';
import UserForm from './components/UserForm';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <UserForm />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default App;
