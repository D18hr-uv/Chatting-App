import React from "react";

const Input = ({
    label = '',
    name = '',
    type = 'text',
    className ='',
    isRequired = true,
    placeholder= '',
    value='',
    onChange= () => {},
})=>{
    return (
        <div className="w-1/2">
            <label for ={name} className="block mb-2 text-sm font-medium text-gray-800">{label}</label>
            <input type="text" id="first_name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className} `
    } placeholder={placeholder} required = {isRequired} value = {value} onChange={onChange}></input>
        </div>
    )
}
export default Input