import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserSubmission from './UserSubmission';
import '../styles/dashboard.css';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/submissions');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
    const interval = setInterval(fetchSubmissions, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="submissions-list">
        {submissions.map((submission) => (
          <UserSubmission key={submission.id} submission={submission} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;