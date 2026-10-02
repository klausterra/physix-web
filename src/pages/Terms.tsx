import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// ponytail: reaproveita a folha de estilo das páginas legais (Privacy.css). Se as duas
// páginas divergirem de layout, extrair um legal.css compartilhado.
import './Privacy.css'

const sections = [
  {
    title: '1. O que é o Physix',
    body: (
      <>
        <p>
          O <span className="hl">Physix</span> é um aplicativo pessoal de acompanhamento
          de treino, composição corporal e bem-estar. Ele lê dados do Samsung Health por
          meio do Health Connect, processa as informações no próprio aparelho e mostra
          painéis, tendências e recordes em português.
        </p>
        <p>
          O Physix <strong>não é um serviço de saúde</strong>, não é plano de saúde, não
          é prontuário e não substitui avaliação médica. Os índices exibidos (equilíbrio,
          sono, bioimpedância) são <strong>estimativas informativas</strong> com foco em
          tendência, não diagnóstico.
        </p>
        <p>
          O app é desenvolvido por Klaus Quirino Terra (pacote{' '}
          <code>br.com.klausterra.projetosaude</code>). Ao instalar e usar o Physix, você
          concorda com estes Termos de Uso e com a{' '}
          <Link to="/privacidade">Política de Privacidade</Link>.
        </p>
      </>
    ),
  },
  {
    title: '2. Conta e acesso',
    body: (
      <>
        <p>
          O acesso é feito <strong>apenas com a Conta do Google</strong>, via Firebase
          Authentication. Não há cadastro com e-mail e senha nem uso anônimo: sem sessão
          ativa, o aplicativo permanece na tela inicial.
        </p>
        <ul>
          <li>
            Você é responsável por manter a segurança da sua Conta do Google e do
            aparelho onde o Physix está instalado.
          </li>
          <li>
            Você é responsável pelo conteúdo que publica e pelas ações realizadas com a
            sua conta.
          </li>
          <li>
            O Physix não recebe nem armazena a sua senha; recebemos apenas identificador,
            e-mail, nome e foto do perfil do Google, conforme a Política de Privacidade.
          </li>
          <li>
            Você pode excluir a sua conta a qualquer momento dentro do aplicativo. As
            instruções também estão na <Link to="/suporte">página de Suporte</Link>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Conteúdo do usuário e conduta',
    body: (
      <>
        <p>
          No Physix você pode publicar treinos e publicações, seguir outras pessoas e
          participar de desafios. O conteúdo que você publica nesses espaços fica visível
          a outros usuários autenticados — é isso que permite a interação social.
        </p>
        <p>
          Você mantém a titularidade do seu conteúdo e concede ao Physix apenas a
          permissão necessária para armazená-lo e exibi-lo dentro do aplicativo para as
          pessoas que você escolher alcançar.
        </p>
        <p>
          <strong>Não é permitido</strong> publicar ou praticar:
        </p>
        <ul>
          <li>assédio, ameaça, discurso de ódio ou perseguição a outras pessoas;</li>
          <li>conteúdo ilegal, ofensivo, sexual envolvendo menores ou enganoso;</li>
          <li>spam, golpes, divulgação de produtos ou serviços não autorizados;</li>
          <li>
            uso de dados de outra pessoa sem autorização, incluindo dados de saúde e
            imagens;
          </li>
          <li>
            tentativa de burlar limites técnicos, acessar contas alheias ou
            comprometer o funcionamento do serviço.
          </li>
        </ul>
        <p>
          O aplicativo oferece <strong>denúncia</strong> de conteúdo e{' '}
          <strong>bloqueio</strong> de outros usuários. Conteúdo que viole estas regras
          pode ser removido e a conta responsável, suspensa ou excluída. Denúncias e
          problemas de conduta também podem ser enviados pelo canal da{' '}
          <Link to="/suporte">página de Suporte</Link>.
        </p>
      </>
    ),
  },
  {
    title: '4. Recursos opcionais e consentimento',
    body: (
      <>
        <p>
          Alguns recursos são <strong>opcionais e desligados por padrão</strong>. Eles só
          passam a valer depois da sua autorização específica apresentada no aplicativo,
          que pode ser revogada a qualquer momento nas configurações:
        </p>
        <ul>
          <li>
            <strong>Backup e sincronização de treinos na nuvem</strong> (consentimento{' '}
            <code>workout-sync-v1</code>): guarda uma cópia dos seus treinos, rotinas e
            exercícios personalizados para restaurar e manter sincronizado entre
            aparelhos.
          </li>
          <li>
            <strong>Envio de séries de saúde para a nuvem:</strong> métricas como peso,
            HRV e sono podem ser gravadas nas suas coleções privadas, com consentimento
            separado para dado sensível.
          </li>
          <li>
            <strong>Treinador IA</strong> (consentimentos <code>ai-v1</code> e, se
            aplicável, <code>ai-health-v1</code>): conversas e briefing diário gerados
            por inteligência artificial a partir dos seus treinos e, com o consentimento
            adicional de saúde, de resumos de sono, frequência cardíaca, passos e
            composição corporal.
          </li>
          <li>
            <strong>Notificações no aparelho:</strong> avisos de novo seguidor, curtida,
            comentário, resposta e menção, somente depois de você ligar a opção e
            conceder a permissão do Android.
          </li>
        </ul>
        <p>
          Os recursos de saúde e treino continuam funcionando no aparelho sem internet
          depois do login. Detalhes de dados coletados, finalidade, base legal, retenção e
          revogação estão na <Link to="/privacidade">Política de Privacidade</Link>.
        </p>
      </>
    ),
  },
  {
    title: '5. Serviços de terceiros',
    body: (
      <>
        <p>
          Conta, recursos sociais, backup opcional, Treinador IA e notificações usam
          serviços do <strong>Google Cloud</strong> (Firebase Authentication, Cloud
          Firestore, Cloud Functions, Firebase Cloud Messaging e Vertex AI / Gemini),
          além do <strong>Health Connect</strong> no aparelho. O uso desses serviços
          segue também os termos das respectivas plataformas.
        </p>
        <p>
          O Physix não exibe anúncios, não vende dados e não integra redes de anúncios
          nem rastreadores comportamentais.
        </p>
      </>
    ),
  },
  {
    title: '6. Limitação de responsabilidade',
    body: (
      <>
        <p>
          O Physix é disponibilizado <strong>no estado em que se encontra</strong>, sem
          garantia de funcionamento ininterrupto, de ausência de erros ou de exatidão dos
          cálculos e estimativas. Leituras do Health Connect, estimativas de
          bioimpedância e respostas do Treinador IA podem conter imprecisões.
        </p>
        <p>
          Na medida permitida pela legislação aplicável, o desenvolvedor não responde por
          danos indiretos, lucros cessantes ou decisões tomadas exclusivamente com base
          nas informações do aplicativo.
        </p>
        <p>
          Você é responsável por manter cópias do que for importante para você e por não
          usar o Physix como único meio de guardar informação crítica de saúde ou treino.
        </p>
      </>
    ),
  },
  {
    title: '7. Saúde, emergências e o Treinador IA',
    body: (
      <>
        <p>
          O Physix <strong>não fornece diagnóstico, prescrição nem orientação médica</strong>{' '}
          e não substitui a avaliação de um profissional de saúde, exames laboratoriais
          ou acompanhamento clínico.
        </p>
        <p>
          As respostas do <strong>Treinador IA</strong> são informativas e geradas
          automaticamente. Elas podem estar incompletas ou incorretas e não devem ser
          tratadas como recomendação médica. Ações sugeridas pela IA só são aplicadas
          depois da sua confirmação, e você decide se as segue.
        </p>
        <p>
          Antes de iniciar ou mudar um programa de exercícios, especialmente em caso de
          condição de saúde, lesão, gestação ou uso de medicamentos, procure orientação
          profissional.
        </p>
        <p>
          <strong>Em caso de emergência, ligue 192 (SAMU)</strong> ou procure o serviço de
          emergência mais próximo. Não use o aplicativo para pedir ajuda emergencial.
        </p>
      </>
    ),
  },
  {
    title: '8. Alterações destes Termos',
    body: (
      <p>
        Estes Termos podem ser atualizados para refletir mudanças no aplicativo, na
        legislação ou nas regras das plataformas. Mudanças materiais são comunicadas
        dentro do aplicativo antes de entrar em vigor. A data de última atualização no
        topo desta página indica a versão vigente. Continuar usando o Physix depois da
        atualização significa que você concorda com os novos termos.
      </p>
    ),
  },
  {
    title: '9. Legislação aplicável',
    body: (
      <p>
        Estes Termos são regidos pelas leis do <strong>Brasil</strong>, incluindo a Lei
        Geral de Proteção de Dados (LGPD) no que se refere a dados pessoais. Eventuais
        conflitos serão resolvidos no foro competente segundo a legislação brasileira.
      </p>
    ),
  },
  {
    title: '10. Contato',
    body: (
      <>
        <p>
          Para dúvidas sobre estes Termos, conduta na parte social ou funcionamento do
          aplicativo, use o canal de contato da <Link to="/suporte">página de Suporte</Link>.
        </p>
        <p>
          <strong>Desenvolvedor:</strong> Klaus Quirino Terra
        </p>
      </>
    ),
  },
]

export default function Terms() {
  useEffect(() => {
    document.title = 'Termos de Uso — Physix'
  }, [])

  return (
    <div className="privacy">
      <div className="glow glow-a" />
      <main className="privacy-inner">
        <Link to="/" className="back">
          ← Voltar
        </Link>

        <span className="badge">Termos e Condições de Uso</span>
        <h1>Termos de Uso — Physix</h1>
        <p className="date">Versão 2026-10-02 · Última atualização: 2 de outubro de 2026</p>

        {sections.map((s) => (
          <article key={s.title} className="section">
            <h2>{s.title}</h2>
            {s.body}
          </article>
        ))}

        <footer className="footer">
          © 2026 Physix · Todos os direitos reservados.
          <br />
          <Link to="/privacidade">Política de Privacidade</Link> ·{' '}
          <Link to="/suporte">Suporte</Link>
        </footer>
      </main>
    </div>
  )
}
