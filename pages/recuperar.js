import Image from "next/image";
import styles from "../styles/Recuperar.module.css";

export default function Recuperar() {
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
        <h2>Recuperar Senha</h2>
        <p>Informe os dados abaixo para redefinir sua senha.</p>

        <form action="#" method="POST" className={styles.formBox}>
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

          <label htmlFor="senha">Nova Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua nova senha" required />

          <button type="submit" className={styles.btn}>Criar Nova Senha</button>

          <div className={styles.footer}>
            <p><a href="/login">Voltar ao login</a></p>
          </div>
        </form>
      </main>
    </div>
  );
}
