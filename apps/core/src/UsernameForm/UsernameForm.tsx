import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import './UsernameForm.scss';

type FormData = {
  username: string;
};

type Props = {
  onUsernameChange: (username: string) => void;
};

export const UsernameForm = ({ onUsernameChange }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(({ username }: FormData) =>
    onUsernameChange(username)
  );

  return (
    <form className="user-form" onSubmit={onSubmit}>
      <TextField
        inputRef={register}
        label="GitHub username"
        name="username"
        variant="outlined"
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};
