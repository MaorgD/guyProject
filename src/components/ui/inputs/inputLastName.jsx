import React from 'react'
import { TextField, FormControl } from '@mui/material';

const InputLastName = (props) => {
    const errors = props.errors
    const register = props.register
    const label = props.label
    const className = props.className
    const defaultValue = props.defaultValue



    return (
        <TextField
            {...register('lastName', {
                required: true,
                minLength: 2,
                maxLength: 35,
            })}
            id="standard-password-input"
            label={label}
            type="text"
            name="lastName"
            fullWidth
            autoFocus
            variant="standard"
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? 'Enter valid name' : ''}
        />
    )
}

export default InputLastName





