import React from 'react'
import SignTemplate from './../../templates/SignTemplate';
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm } from './style'
import Input from '../../components/atoms/Input'
import Button from '../../components/atoms/Button';
import { Link } from '../../components/organisms/navigation/style';

type LoginInputs = {
  username: string,
  password: string,
};


const SignIn = () => {
  const { register, handleSubmit, errors } = useForm<LoginInputs>({criteriaMode: "all"});

  const onSubmit: SubmitHandler<LoginInputs> = data => {
    console.log(data);
  };

  return (
    <SignTemplate type="sign-in">
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input 
          id="username" 
          label="Login"  
          type="text"
          register={register({ required: "*This field is required" })} 
          error = {errors.username}
        />
        {}
        <Input 
          id="password" 
          type="password"
          label="Hasło"
          register={register({ required: "*This field is required" })} 
          error={errors.password}
        />
        <br />
        <Button type="submit"><b>Zaloguj</b></Button>
        <Link to="/sign-up">
          <p>Nie masz jeszce konta? Kliknij tu aby stworzyc nowe</p>
        </Link>
      </StyledForm>
    </SignTemplate>
  )
}

export default SignIn;
