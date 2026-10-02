import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
// ponytail: reaproveita a folha de estilo das páginas legais (Privacy.css).
import './Privacy.css'

const faq: { q: string; a: ReactNode }[] = [
  {
    q: 'Não recebo os dados do Health Connect',
    a: (
      <>
        <p>
          Verifique se o Samsung Health (ou outro app de origem) está sincronizando e se
          as permissões de leitura do Health Connect foram concedidas para o Physix. Abra
          o Health Connect, confira as categorias permitidas e toque em sincronizar.
        </p>
        <p>
          Sem dado novo na origem, o Physix não tem o que ler. Se as permissões estiverem
          corretas e ainda assim faltar informação, envie uma mensagem com os detalhes.
        </p>
      </>
    ),
  },
  {
    q: 'Como instalar ou atualizar o aplicativo',
    a: (
      <p>
        O Physix está em teste no Android pelo Play Store. Instale pelo link de teste
        disponível na <Link to="/">página inicial</Link>. Para atualizar, abra a ficha do
        aplicativo no Play Store e toque em atualizar; habilitar atualizações automáticas
        evita ficar em versão antiga.
      </p>
    ),
  },
  {
    q: 'Como desligar o Treinador IA',
    a: (
      <p>
        Abra as configurações do aplicativo e desative o Treinador IA. Isso interrompe
        novos envios ao modelo e desliga o briefing diário. O histórico das conversas
        fica no aparelho. Se você também autorizou o uso de dados de saúde na IA, revogue
        esse consentimento separadamente nas mesmas configurações.
      </p>
    ),
  },
  {
    q: 'Como desligar as notificações',
    a: (
      <p>
        Desative a opção de notificações nas preferências do aplicativo — isso remove o
        token do aparelho e interrompe novos envios. Você também pode bloquear as
        notificações do Physix nas configurações do Android. Notificações já recebidas
        continuam na central até você apagá-las.
      </p>
    ),
  },
  {
    q: 'Como pedir a exclusão dos meus dados',
    a: (
      <p>
        O aplicativo permite excluir a conta, apagar o backup de treinos da nuvem
        (“Apagar dados da nuvem”) e limpar os dados locais desinstalando o app ou limpando
        o armazenamento nas configurações do Android. Para pedir a exclusão por e-mail,
        escreva para <a href="mailto:klausqterra@gmail.com">klausqterra@gmail.com</a> do
        endereço da sua Conta do Google.
      </p>
    ),
  },
  {
    q: 'Como revogar consentimentos opcionais',
    a: (
      <p>
        Backup de treinos, envio de séries de saúde, Treinador IA e notificações podem
        ser desligados a qualquer momento nas configurações do aplicativo. A revogação
        interrompe novos envios, sem afetar o que já foi processado antes. Detalhes em{' '}
        <Link to="/privacidade">Política de Privacidade</Link>.
      </p>
    ),
  },
]

export default function Support() {
  useEffect(() => {
    document.title = 'Suporte — Physix'
  }, [])

  return (
    <div className="privacy">
      <div className="glow glow-a" />
      <main className="privacy-inner">
        <Link to="/" className="back">
          ← Voltar
        </Link>

        <span className="badge">Ajuda e Atendimento</span>
        <h1>Suporte — Physix</h1>
        <p className="date">Versão 2026-10-02 · Última atualização: 2 de outubro de 2026</p>

        <article className="section">
          <h2>1. Como falar com o suporte</h2>
          <p>
            O canal de atendimento é por e-mail:{' '}
            <a href="mailto:klausqterra@gmail.com">klausqterra@gmail.com</a>. Respondemos{' '}
            <strong>o mais breve possível</strong>, conforme a disponibilidade.
          </p>
        </article>

        <article className="section">
          <h2>2. O que incluir na mensagem</h2>
          <p>Para agilizar o atendimento, envie:</p>
          <ul>
            <li>a versão do aplicativo (aparece nas configurações do Physix);</li>
            <li>o modelo do aparelho e a versão do Android;</li>
            <li>uma descrição do problema, com o passo a passo do que aconteceu;</li>
            <li>
              se possível, capturas de tela ou o texto do erro exibido.
            </li>
          </ul>
          <p>
            Use o endereço de e-mail da sua Conta do Google para conseguirmos localizar a
            conta, quando for necessário.
          </p>
        </article>

        <article className="section">
          <h2>3. Excluir a conta</h2>
          <p>
            A exclusão da conta é feita dentro do aplicativo, na opção de excluir conta.
            Ela remove o perfil, o conteúdo social, as séries de saúde, o backup de treinos
            e o token de notificações, e em seguida encerra a conta de autenticação.
          </p>
          <p>
            Se não conseguir acessar o aplicativo, peça a exclusão por e-mail a partir do
            endereço da sua Conta do Google. Mais detalhes na{' '}
            <Link to="/privacidade">Política de Privacidade</Link>.
          </p>
        </article>

        <article className="section">
          <h2>4. Revogar consentimentos</h2>
          <p>
            Backup de treinos, envio de séries de saúde, Treinador IA e notificações são
            opcionais e podem ser desligados a qualquer momento nas configurações do
            aplicativo. A revogação interrompe novos envios, sem afetar o tratamento
            realizado antes. Consulte a{' '}
            <Link to="/privacidade">Política de Privacidade</Link> para saber onde
            revogar cada consentimento.
          </p>
        </article>

        <article className="section">
          <h2>5. Perguntas frequentes</h2>
          {faq.map((item) => (
            <div key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              {item.a}
            </div>
          ))}
        </article>

        <footer className="footer">
          © 2026 Physix · Todos os direitos reservados.
          <br />
          <Link to="/privacidade">Política de Privacidade</Link> ·{' '}
          <Link to="/termos">Termos de Uso</Link>
        </footer>
      </main>
    </div>
  )
}
