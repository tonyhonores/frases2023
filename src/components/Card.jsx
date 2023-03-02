import React from 'react';

const Card = ({ userInfo }) => {
  const fullName = `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`;

  return (
    <div>
      {/* foto, name , ciuidad */}
      <div>
        <img src={userInfo.picture.mediun} alt={userInfo.name.first} />
      </div>
      <h1>{fullName}</h1>
      <p>City : {userInfo.location.city}</p>
    </div>
  );
};
