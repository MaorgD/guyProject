import React from 'react'

const CheckBox = (props) => {
    const setNew = props.setNew
    const isNew = props.isNew
    const label = props.label

    return (
        <>
            <div className="flex items-center col-span-6 sm:col-span-2">
                <input onClick={() => {
                    if (isNew) { setNew(false) }
                    else { setNew(true) }
                }
                } id="checked-checkbox" type="checkbox" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500
                                              dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {label}</label>
            </div>
        </>
    )
}

export default CheckBox