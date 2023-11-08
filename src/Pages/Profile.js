import React, { useState } from 'react';
import '../styles/style.css'; 

function Profile() {
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '555-123-4567',
  });

  // Define state for form fields
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);

  // Handle form submission
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Update the user profile data
    setUserData({ firstName, lastName, email, phone });
  };

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button className="cta-button" type="submit">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
