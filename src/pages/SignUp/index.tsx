import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import { Link } from '../../components/organisms/navigation/style';
import SignTemplate from '../../templates/SignTemplate'
import { StyledForm } from './../SignIn/style';

type RegisterInputs = {
  username: string,
  password: string,
  email: string,
  name: string,
};

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm<RegisterInputs>({criteriaMode: "all"});

  const onSubmit: SubmitHandler<RegisterInputs> = data => {
    console.log(data);
  };


  return (
    <SignTemplate type="sign-up">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input 
            id="name" 
            label="Imię"  
            type="text"
            register={register({ required: "*This field is required" })} 
            error = {errors.name}
          />
          <Input 
            id="username" 
            label="Nazwa użytkownika"  
            type="text"
            register={register({ required: "*This field is required" })} 
            error = {errors.username}
          />
          <Input 
            id="password" 
            type="password"
            label="Hasło"
            register={register({ required: "*This field is required" })} 
            error={errors.password}
          />
          <Input 
            id="email" 
            type="email"
            label="E-mail"
            register={register({ required: "*This field is required" })} 
            error={errors.email}
          />
          <br />
          <Button type="submit"><b>Zarejestruj</b></Button>
          <Link to="/sign-in">
            <p>Mam już konto. Chcę sie zalogować!</p>
          </Link>
        </StyledForm>
    </SignTemplate>
  )
}

export default SignUp
