import React from 'react'

const Selectbox = ({ui_item, field_type, required, data_type, id, label, field_placeholder,options}) => {
  return (
   <>
   <div className='mb-3'>
   <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
    <select className="form-select" aria-label="Default select example">
  <option>Select Country</option>
  {options.length>0 && options.map((option,i)=>
      <option value={option.value} key={i} >{option.label}</option>
  )}
</select>
</div>
</>
  )
}

export default Selectbox
