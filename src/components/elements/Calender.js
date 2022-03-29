import React from 'react'

const Calender = ({ ui_item, field_type, required, data_type, id, label, field_placeholder, field_value, options ,attribute}) => {
  return (
      <>
    <div className="container">
  <div className="row">
    <div className="col-sm-6">
      <div className="form-group">
        <div className="input-group date" id="datetimepicker1">
          <input type="text" className="form-control" />
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-calendar" />
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default Calender
