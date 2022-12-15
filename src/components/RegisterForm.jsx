import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { register } from 'redux/auth/operations';
import { AuthFormContainer } from 'components/AuthFormContainer/AuthFormContainer';
import { CommonInput } from 'components/Shared/CommonElementsStyled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <AuthFormContainer title="Login" hint="Create your account">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <CommonInput
          size="small"
          fullWidth
          variant="outlined"
          label="Username"
          required
          type="text"
          name="name"
        />
        <CommonInput
          size="small"
          fullWidth
          variant="outlined"
          label="Email"
          required
          type="email"
          name="email"
        />

        <CommonInput
          id="password"
          size="small"
          fullWidth
          variant="outlined"
          label="Password"
          required
          type={show ? 'text' : 'password'}
          name="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={handleClick}
                  edge="end"
                >
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button fullWidth type="submit" variant="contained">
          Register
        </Button>
      </form>
    </AuthFormContainer>
  );
};
