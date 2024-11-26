import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Importando o useRouter para o redirecionamento
import styles from "../styles/Home.module.css";

export default function Home() {
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const [senha, setSenha] = useState(""); // Estado para armazenar a senha
  const router = useRouter(); // Usado para redirecionamento

  // Função de submit do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que a página seja recarregada

    
    if (email === "usuario@exemplo.com" && senha === "123") {
      
      router.push("/dashboard");
    } else {
      // Caso contrário, exibe um alerta
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Image
          src="/logo.png" // Certifique-se de que o arquivo está em "public/logo.png"
          alt="Logo do Projeto Organiza"
          width={150}
          height={150}
        />
        <h1>Projeto Organiza</h1>
      </div>

      {/* Form Container */}
      <main className={styles.formContainer}>
        <h2>Seja Bem-vindo!</h2>
        <p>Acesse sua conta</p>

        <form onSubmit={handleSubmit} className={styles.formBox}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de email
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado de senha
            required
          />

          <button type="submit" className={styles.btn}>Entrar</button>

          <div className={styles.footer}>
            <p><a href="/recuperar">Esqueceu a senha?</a></p>
            <p>Não tem conta? <a href="/cadastro">Cadastre-se</a></p>
          </div>
        </form>
      </main>
    </div>
  );
}
