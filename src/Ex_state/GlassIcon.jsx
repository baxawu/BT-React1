import React from 'react'
import data from './dataGlasses.json'

export default function GlassIcon({onChangeGlass}) {
  return data.map((icon)=> {
    return (
      <div className="d-flex mt-3" onClick={() => onChangeGlass(icon.url)}>
        <img src={icon.url} alt={icon.name} width="80px" />
      </div>
    );
  })
}
