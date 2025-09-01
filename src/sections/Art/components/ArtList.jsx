import React from 'react'
import ArtListItem from './ArtListItem'

function ArtList({data, url}) {
  return (
    <ul className="art-list">
        {Array.isArray(data) && data.map((item, index) => (
            <ArtListItem key={index} entity={item} url={url}/>
        ))}        
    </ul>
  )
}

export default ArtList