import React, {useContext} from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

export const Login = () => {

	const {setIsAuth} = useContext(AuthContext)

	const login = (e)=>{
		e.preventDefault()
		setIsAuth(true)
		localStorage.setItem('ulbiAuth', true)
	}	

	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={login}>
				<MyInput type='text' placeholder='Введите логин' />
				<MyInput type='password' placeholder='Введите пароль' />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	);
};
