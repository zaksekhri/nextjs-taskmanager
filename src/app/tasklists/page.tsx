'use client';
import React, { useContext } from 'react';
import {useState} from 'react';



import { useRouter } from 'next/navigation';


export default function signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()



  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const loginUser = async (event:any) => {
    event.preventDefault();
    const check = await fetch("/api/auth/signin", {method:"POST",body: JSON.stringify({email:email,password:password})})
    if (check.ok){
      router.push("./")
    }

  };
  return (
    <>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailChange} placeholder="test@mail.com"/>

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="123"/>

        <button type="submit">Signin</button>
      </form>
    </>
  );
}