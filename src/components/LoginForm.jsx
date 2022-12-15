import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { logIn } from 'redux/auth/operations';
import { AuthFormContainer } from 'components/AuthFormContainer/AuthFormContainer';
import {
  CommonInput,
  CommonLink,
  CommonParagraph,
} from 'components/Shared/CommonElementsStyled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    dispatch(
      logIn({
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
    <AuthFormContainer title="Login" hint="Enter your credentials">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <CommonInput
          id="email"
          label="Email"
          size="small"
          fullWidth
          variant="outlined"
          required
          type="email"
          name="email"
        />

        <CommonInput
          id="password"
          label="Password"
          size="small"
          fullWidth
          variant="outlined"
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
        <CommonParagraph>
          {"Don't have an account yet? Please, "}
          <CommonLink to="/register">register</CommonLink>
        </CommonParagraph>

        <Button fullWidth type="submit" variant="contained">
          Login
        </Button>
      </form>
    </AuthFormContainer>
  );
};
