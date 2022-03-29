import React from 'react'

const Textinput = ({ui_item, field_type, required, data_type, id, label, field_placeholder}) => {
  return (
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  )
}

export default Textinput
