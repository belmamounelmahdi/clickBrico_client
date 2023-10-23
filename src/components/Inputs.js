import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Inputs({name, placeholder, value, type, icon, handelChange, errors}) {
    return (
    <div className="relative mx-auto">
    <FontAwesomeIcon className="absolute left-2 top-3 text-gray-500" icon={icon}></FontAwesomeIcon>
    <input className="peer bg-gray-100 p-2 pl-8 w-full max-w-lg focus:outline-sky-600" value={value} type={type} name={name} onChange={handelChange} required placeholder={placeholder} errors={errors}/>
        {
            errors && ( <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {errors}
        </p>)
        }
    </div>
    )
}

export default Inputs