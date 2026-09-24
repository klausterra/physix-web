import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    title: 'Como estou hoje?',
    body: 'Recuperação, HRV, frequência cardíaca de repouso, peso e gordura em uma única tela. Sem precisar interpretar dezenas de números isolados.',
    tone: 'cyan',
  },
  {
    title: 'Comparado a mim mesmo',
    body: 'Baseline pessoal de 7, 30 e 90 dias. O Physix compara você com a sua própria média — não com uma média genérica de estranhos.',
    tone: 'lime',
  },
  {
    title: 'Composição corporal',
    body: 'Peso, IMC, percentual de gordura, massa magra, água, massa óssea, TMB e gasto energético diário. Estimativas por bioimpedância, com foco na tendência.',
    tone: 'violet',
  },
  {
    title: 'Funciona sem internet',
    body: 'Leitura do Health Connect, cálculos, histórico e a balança CS20E por Bluetooth operam no seu aparelho. Login e backup em nuvem são opcionais.',
    tone: 'cyan',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Physix — Painel pessoal de saúde'
  }, [])

  return (
    <div className="home">
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      <main className="home-inner">
        <header className="hero">
          <img src="/icon.png" alt="Ícone do Physix" className="hero-icon" />
          <h1>Physix</h1>
          <p className="tagline">Sua saúde, com contexto.</p>
          <p className="lede">
            Painel pessoal longitudinal de saúde, composição corporal e recuperação.
            Lê seus dados do Samsung Health via Health Connect, processa tudo{' '}
            <strong>localmente no aparelho</strong> e mostra como você está em relação
            à sua própria média.
          </p>
          <div className="cta">
            <a
              href="https://play.google.com/apps/internaltest/4701648029867067629"
              className="btn btn-primary"
            >
              Testar no Android
            </a>
            <Link to="/privacidade" className="btn btn-ghost">
              Política de Privacidade
            </Link>
          </div>
        </header>

        <section className="features">
          {features.map((f) => (
            <article key={f.title} className={`card tone-${f.tone}`}>
              <h2>{f.title}</h2>
              <p>{f.body}</p>
            </article>
          ))}
        </section>

        <section className="privacy-band">
          <h2>Privacidade em primeiro lugar</h2>
          <p>
            Dados de saúde são sensíveis. O Physix processa e armazena tudo no seu
            aparelho por padrão — leitura do Health Connect, composição corporal,
            tendências e a balança Bluetooth funcionam sem internet. Nenhum dado de
            saúde é enviado para a nuvem sem a sua autorização expressa.
          </p>
          <p className="fineprint">
            Conta e recursos sociais usam o Google Cloud (Firebase) com servidores em São
            Paulo. A sincronização de métricas de saúde é opcional e vem desligada.
          </p>
          <Link to="/privacidade" className="link-arrow">
            Ler a política completa →
          </Link>
        </section>

        <footer className="footer">
          <p>
            Physix · <span className="muted">br.com.klausterra.projetosaude</span>
          </p>
          <p className="muted small">
            Índices de composição corporal são estimativas por bioimpedância e não
            constituem diagnóstico médico.
          </p>
        </footer>
      </main>
    </div>
  )
}
