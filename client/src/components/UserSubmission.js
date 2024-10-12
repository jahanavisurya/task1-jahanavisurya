import React from 'react';
import '../styles/UserSubmission.css'

const UserSubmission = ({ submission }) => {
  return (
    <div className="user-submission">
      <h3>{submission.name}</h3>
      <p>Social Media: {submission.social_media}</p>
      <div className="image-grid">
        {submission.images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:5000/uploads/${image}`}
            alt={`Uploaded by ${submission.name}`}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default UserSubmission;