import React from 'react'

function UsersListItem({entity}) {
    const style = {
    background: entity.favouriteColour
  };

  return (
    <li style={style}>
        <img
            src={entity.profileImage}
            alt={entity.firstName + " " + entity.lastName}
        />
        <h3>{entity.firstName} {entity.lastName}</h3>
        <p>Email: {entity.email}</p>       
    </li>
  )
}

export default UsersListItem