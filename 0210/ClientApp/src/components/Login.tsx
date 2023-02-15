import { useState,ChangeEvent } from "react";
import axios from "axios";


export const Login = () => {
  
  const [mail, setText] = useState("");
  const [pw, setText2] = useState("");

 // テキストボックス入力時の処理
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    
    setText(e.target.value);
  };

  const handleChangeInput2 = (e: ChangeEvent<HTMLInputElement>) => {
    
    setText2(e.target.value);
  };

  // ログインボタンクリック時の処理
  const handleAdd = async () => {
  
    const LoginResult = { Mail: mail, PassWord : pw };

    try {
      const { data } = await axios.get("api/login/1");

       console.log(data);
       if(LoginResult.Mail == data.mail && LoginResult.PassWord == data.passWord){
        require("../index2.tsx");
       }
       

    } catch (e) {

      console.error(e);
    }
     
  };

  return (
    <div>
      <h1>ログイン画面</h1>
      <div>mail:<input type="text" onChange={handleChangeInput} value={mail} /></div>
      <div>password:<input type="password" onChange={handleChangeInput2} value={pw} /></div>
      <button onClick={handleAdd}>ログイン</button>
         
    </div>
  );
};