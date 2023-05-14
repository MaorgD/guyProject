import { TextField } from '@mui/material'
import React from 'react'

const InputDate = (props) => {
    const errors = props.errors
    const register = props.register
    const label = props.label
    const classNameStyle = props.classNameStyle
    const labelStyle = props.labelStyle ? props.labelStyle : "block text-sm font-medium text-gray-700"
    const defaultValue = props.defaultValue

    return (
        <>
          <TextField
            {...register('dateOfBirth')}
            label={label}
            type="date"
            name="dateOfBirth"
            fullWidth
            autoFocus={true}
            variant="standard"
            error={Boolean(errors.dateOfBirth)}
            helperText={errors.dateOfBirth ? 'Enter Date Of Birth' : ''}
        />

        </>
    )
}

export default InputDate