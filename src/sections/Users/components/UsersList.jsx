import React from 'react'
import UsersListItem from './UsersListItem'

function UsersList({data}) {
  return (
    <div>
        <ul className="users-list">
            {data.map((item, index) => (
                <UsersListItem key={index} entity={item}/>
            ))}
        </ul>
    </div>
  )
}

export default UsersList