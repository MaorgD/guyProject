import React from 'react';
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { regPassword } from '../../../services/servise';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const InputPassword = (props) => {
  const errors = props.errors;
  const register = props.register;
  const defaultValue = props.defaultValue;
  const label = props.label
  const show = props.show

  const [showPassword, setShowPassword] = React.useState(show);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <FormControl sx={{width:'100%'}} variant="standard">
      <InputLabel error={Boolean(errors.password)} htmlFor="standard-adornment-password">{label}</InputLabel>
      <Input
      color="info"
        {...register('password', {
          required: true,
          minLength: 8,
          pattern: regPassword,
        })}
        defaultValue={defaultValue}
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {Boolean(errors.password) && <FormHelperText error id="component-error-text">Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character</FormHelperText>}

    </FormControl>


  );
};

export default InputPassword;