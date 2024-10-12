import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UserForm.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMedia', socialMedia);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      await axios.post('http://localhost:5000/api/submit', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Submission successful!');
      setName('');
      setSocialMedia('');
      setImages([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>User Submission Form</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="socialMedia">Social Media Handle:</label>
        <input
          type="text"
          id="socialMedia"
          value={socialMedia}
          onChange={(e) => setSocialMedia(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="images">Upload Images:</label>
        <input
          type="file"
          id="images"
          onChange={(e) => setImages(e.target.files)}
          multiple
          accept="image/*"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;