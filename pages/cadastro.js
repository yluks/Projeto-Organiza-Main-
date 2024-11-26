import Image from "next/image";
import styles from "../styles/Cadastro.module.css";

export default function Cadastro() {
  return (
    <div className={styles.mainContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Image
          src="/logo.png"
          alt="Logo do Projeto Organiza"
          width={150}
          height={150}
        />
        <h1>Projeto Organiza</h1>
        <p>Bem-vindo ao sistema de cadastro</p>
        <p><a href="/login">Já tem uma conta? Faça login</a></p>
      </div>

      {/* Form Container */}
      <main className={styles.formContainer}>
        <h2>Crie sua conta</h2>
        <form action="#" method="POST" className={styles.formBox}>
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />

          <button type="submit" className={styles.btn}>Cadastrar</button>
        </form>
      </main>
    </div>
  );
}
