import { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import styles from "../styles/Dashboard.module.css";
import Chart from 'chart.js/auto';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado, caso contrário, redirecionar para a página de login
    const isAuthenticated = localStorage.getItem('auth'); // Exemplo de verificação no localStorage

    if (!isAuthenticated) {
      router.push('/login'); // Redireciona para login se não estiver autenticado
    } else {
      // Se autenticado, inicializar o gráfico
      const ctx = document.getElementById('barChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
          datasets: [{
            label: 'Visão Geral',
            data: [5, 10, 15, 7, 8, 12, 9], // Dados fictícios para o exemplo
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className="w-full p-5 flex justify-center items-center">
          <Image
            className="rounded-2xl"
            src="/logo.jpeg" // Certifique-se de que a logo está na pasta 'public'
            alt="Organiza Logo"
            width={200}
            height={200}
          />
        </div>
        <nav>
          <ul>
            <li><a href="/dashboard" className={styles.navLink}>Painel Principal</a></li>
            <li><a href="/receitas-despesas" className={styles.navLink}>Receitas e Despesas</a></li>
            <li><a href="/orcamento" className={styles.navLink}>Orçamento</a></li>
            <li><a href="/investimento" className={styles.navLink}>Investimento</a></li>
            <li><a href="/configuracoes" className={styles.navLink}>Configurações</a></li>
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <h1 className={styles.title}>Painel Principal</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-600">Saldo Total</h2>
            <p className="text-2xl font-bold">R$ 5.574,00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-600">Gasto Total</h2>
            <p className="text-2xl font-bold">R$ 3.050,00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-600">Dinheiro Poupado</h2>
            <p className="text-2xl font-bold">R$ 682,00</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-600 mb-4">Visão Geral</h2>
          <canvas id="barChart"></canvas>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-600">Resultado Líquido</h2>
            <p className="text-2xl font-bold">R$ 5.150,00</p>
            <p className="text-green-600">+10%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-600">Despesas</h2>
            <p className="text-2xl font-bold">R$ 1.300,00</p>
            <p className="text-red-600">+6%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
