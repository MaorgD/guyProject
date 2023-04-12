import React from 'react';
import { TextField } from '@mui/material';
import { regPassword } from '../../../../services/servise';

const InputPassword = (props) => {
  const errors = props.errors;
  const register = props.register;
  const label = props.label;
  const defaultValue = props.defaultValue;

  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      {...register('password', {
        required: true,
        // minLength: 8,
        pattern: regPassword,
      })}
      id="password"
      name="password"
      type="password"
      autoComplete="new-password"
      variant="outlined"
      error={Boolean(errors.password)}
      helperText={errors.password ? 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character' : ''}
    />
  );
};

export default InputPassword;