import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form'

import styles from "./Login.module.scss";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()

const {register, handleSubmit, setError, formState:{errors, isValid}} =useForm({
  defaultValues:{
    email:'test@test.by',
    password:'1234567'
  },
  mode: 'onChange'
})

const onSubmit = (values)=>{
dispatch(fetchAuth(values))
}

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="Email"
        error= {Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        type='email'
        {...register('email',{required:'Email is requirded ...'})}
        fullWidth
      />
      <TextField className={styles.field}
       label="Password"
       error= {Boolean(errors.email?.message)}
       helperText={errors.password?.message}
       type='password'
       {...register('password',{required:'Password is requirded ...'})}
        fullWidth />
      <Button type='submit' size="large" variant="contained" fullWidth>
        Войти
      </Button>
      </form>
    </Paper>
  );
};
