import React from 'react'
import Radiobutton from './elements/Radiobutton';
import Textinput from './elements/Textinput';
import Selectbox from './elements/Selectbox';
import Calender from './elements/Calender';
const Element = ({ field: { ui_item, field_type, required, data_type, id, label, field_placeholder, field_value, options ,attribute} }) => {

   switch (ui_item) {
       case 'textbox':
           return(<Textinput 
            ui_item={ui_item}
            required={required}
            data_type={data_type}
            id={id}  
            label={label} 
            field_placeholder={field_placeholder}/>)
           
        case 'radiobutton':
            return(<Radiobutton
                ui_item={ui_item}
                required={required}
                data_type={data_type}
                id={id}  
                label={label} 
                field_placeholder={field_placeholder}
                attribute={attribute}/>)

        case 'dropdown':
            return(<Selectbox
            ui_item={ui_item}
            required={required}
            data_type={data_type}
            id={id}  
            label={label} 
            field_placeholder={field_placeholder}
            options={options}/>)

        case 'calender':
            return(<Calender
            ui_item={ui_item}
            required={required}
            data_type={data_type}
            id={id}  
            label={label} 
            field_placeholder={field_placeholder}/>)
   
       default:
           return null;
   }
}

export default Element
