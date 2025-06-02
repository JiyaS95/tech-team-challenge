import React from 'react';
import members from './members_details.json';
import './Members.css'; // we'll make this file for styling

function Members() {
  return (
    <div className="members-container">
      <h1>F!ROSH Orientation Committee</h1>
      <div className="member-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.picture} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;