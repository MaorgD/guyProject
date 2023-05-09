import React from 'react'
import { TextField, FormControl } from '@mui/material';

const InputFirstName = (props) => {
    const errors = props.errors
    const register = props.register
    const label = props.label
    const className = props.className
    const defaultValue = props.defaultValue



    return (
        <TextField
            {...register('firstName', {
                required: true,
                minLength: 2,
                maxLength: 35,
            })}
            id="standard-password-input"
            label={label}
            type="text"
            name="firstName"
            fullWidth
            autoFocus
            variant="standard"
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? 'Enter valid name' : ''}
        />
    )
}

export default InputFirstName





