"use client";

import loginUserAction from "@/actions/login-action";
import "@/components/loginForm/index.scss";
import Link from "next/link";
import { useState } from "react";
import ButtonComponent from "../button";
import ErrorMessage from "../helper/errorMessage";
import InputComponent from "../input";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClickSubmitForm = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    if (username !== "" && password !== "") {
      const res = await loginUserAction(username, password);
      if (res.ok) {
        window.location.href = "/conta";
      } else {
        setErrors(res.error);
      }
    }
    setIsLoading(false);
  };

  return (
    <form>
      <div>
        <InputComponent
          label="Usuario"
          required={true}
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Digite seu usuario..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputComponent
          label="Senha"
          required={true}
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors && <ErrorMessage error={errors} />}
      <ButtonComponent
        label="Entrar"
        disabled={isLoading}
        loadingLabel="Entrando..."
        handleClick={handleClickSubmitForm}
      />
      <div className="perdeu-senha-container">
        <Link className="perdeu-senha-link" href={"/login/perdeu"}>
          Perdeu sua senha?
        </Link>
      </div>
      <div className="cadastrar-container">
        <h2 className="subtitle-cadastro">Cadastre-se</h2>
        <p>Ainda não tem uma conta? Cadastre-se agora no site.</p>
        <Link className="button" href={"/login/criar"}>
          Cadastrar
        </Link>
      </div>
    </form>
  );
}
