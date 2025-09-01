
import React from 'react'

function PublicationHistoryList({publications}) {
  return (
        <ul>
          {publications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
  )
}

export default PublicationHistoryList