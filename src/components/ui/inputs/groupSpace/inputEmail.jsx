// import React from 'react'
// import { regEmail } from '../../../../services/servise';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }


// const InputEmail = (props) => {
//     const errors = props.errors
//     const register = props.register
//     const label = props.label
//     const defaultValue = props.defaultValue



//     return (
//         <>
//             <div className="col-span-6">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                    {label}
//                 </label>
//                 <input   defaultValue={defaultValue}
//                 {...register('email', { required: true, minLength: 2, maxLength: 35, pattern: regEmail })}
//                     id="email"
//                     name="email"
//                     type="text"
//                     autoComplete="email"
//                     className={classNames(errors.email ? "relative block w-full appearance-none rounded-t-md  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                         :
//                         "relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm")}

//                 />
//                 {errors.email && <p className='text-white font-bold bg-red-800 text-center rounded-b-md  border-gray-300  py-1'>Enter valid email</p>}
//             </div>





//         </>
//     )
// }

// export default InputEmail

import React from 'react';
import { TextField, FormControl } from '@mui/material';
import { regEmail } from '../../../../services/servise';

const InputEmail = (props) => {
  const errors = props.errors;
  const register = props.register;
  const label = props.label;
  const defaultValue = props.defaultValue;


  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">

      <TextField
        {...register('email', {
          required: true,
          minLength: 2,
          maxLength: 35,
          pattern: regEmail,
        })}
        // className='input_email'
        id="standard-password-input"
        label="email"
        type="email"
        name="email"

        // autoComplete="current-password"
        variant="standard"
        error={Boolean(errors.email)}
        helperText={errors.email ? 'Enter valid email' : ''}
      />
    </FormControl>

    // <TextField
    //   label={label}
    //   defaultValue={defaultValue}
    //   {...register('email', {
    //     required: true,
    //     minLength: 2,
    //     maxLength: 35,
    //     pattern: regEmail,
    //   })}
    //   id="email"
    //   name="email"
    //   type="text"
    //   autoComplete="email"
    //   variant="outlined"
    //   error={Boolean(errors.email)}
    //   helperText={errors.email ? 'Enter valid email' : ''}
    // />


  );
};

export default InputEmail;