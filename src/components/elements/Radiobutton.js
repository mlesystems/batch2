import React from 'react'

const Radiobutton = ({ui_item, field_type, required, data_type, id, label, field_placeholder,attribute}) => {
  return (
      <>
    <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
    <div className='mb-3'>
    
     <div className="btn-group" role="group" aria-label="Basic outlined example">
   
     
  {attribute.map((option,i)=><button type="button" className="btn btn-outline-primary" key={i}>{option.label}</button>)}
</div>
</div>

</>
  )
}

export default Radiobutton
