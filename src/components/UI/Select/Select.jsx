import React from 'react';

const Select = ({options,defaultValue,value,selectChange}) => {
    return (
        <select
            value={value}
            onChange={(e)=>{selectChange(e.target.value)}}
        >
            <option disabled value="0">{defaultValue}</option>
            {
                options.map((option)=>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }

        </select>
    );
};

export default Select;