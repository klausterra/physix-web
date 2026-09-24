import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Privacy.css'

const sections = [
  {
    title: '1. Visão Geral da Arquitetura',
    body: (
      <>
        <p>
          O aplicativo <span className="hl">Physix</span> (desenvolvido por Klaus
          Quirino Terra, pacote <code>br.com.klausterra.projetosaude</code>) usa uma
          arquitetura <span className="hl">híbrida, com o aparelho como fonte de
          verdade</span>.
        </p>
        <p>
          <strong>Processamento local (sempre):</strong> leitura do Health Connect,
          cálculo de baselines, tendências, correlações, insights, composição corporal
          e captura da balança Bluetooth acontecem inteiramente no seu aparelho. O
          aplicativo funciona por completo sem conexão à internet.
        </p>
        <p>
          <strong>Sincronização opcional em nuvem:</strong> quando você cria uma conta,
          parte dos dados é sincronizada para permitir login em vários aparelhos e os
          recursos sociais. A nuvem é usada apenas para o que você ativa explicitamente.
          Nenhum dado é enviado sem o seu consentimento.
        </p>
      </>
    ),
  },
  {
    title: '2. Dados Processados Apenas no Aparelho',
    body: (
      <>
        <p>
          As categorias abaixo <strong>nunca saem do seu dispositivo</strong> por padrão.
          Elas são lidas via Health Connect, processadas localmente e armazenadas em banco
          criptografado no próprio aparelho:
        </p>
        <ul>
          <li>
            <strong>Health Connect:</strong> passos, frequência cardíaca, frequência
            cardíaca de repouso, saturação de oxigênio (SpO2), pressão arterial, sessões
            de sono e sessões de exercícios (por exemplo, origem Samsung Health).
          </li>
          <li>
            <strong>Composição corporal:</strong> peso, IMC, percentual de gordura, massa
            magra, percentual de músculo esquelético, hidratação, massa óssea, taxa
            metabólica basal e impedância.
          </li>
          <li>
            <strong>Dispositivos Bluetooth (BLE):</strong> comunicação com a balança de
            bioimpedância CS20E para captura de peso e impedância no momento da pesagem.
            O app declara <code>neverForLocation</code> e não acessa sua localização
            geográfica.
          </li>
        </ul>
        <p>
          <strong>Envio opcional para a nuvem:</strong> você pode optar por sincronizar
          as séries de saúde (peso, HRV, sono) para backup e uso em outros aparelhos.
          Essa opção vem <strong>desligada por padrão</strong> e só passa a valer com sua
          autorização expressa, que pode ser revogada a qualquer momento nas configurações.
        </p>
      </>
    ),
  },
  {
    title: '3. Dados Sincronizados em Nuvem',
    body: (
      <>
        <p>
          Quando você cria uma conta, os dados abaixo são armazenados no Google Cloud
          (Firebase Authentication e Cloud Firestore), com servidores localizados em São
          Paulo, Brasil:
        </p>
        <ul>
          <li>
            <strong>Credenciais de acesso:</strong> endereço de e-mail e senha. A senha
            nunca é armazenada em texto legível — é gerenciada pelo Firebase
            Authentication com hash criptográfico. Se você entrar com a Conta do Google,
            recebemos apenas o identificador, nome e foto do perfil.
          </li>
          <li>
            <strong>Perfil público:</strong> nome de usuário (@), nome de exibição,
            biografia, link e avatar — os campos que você escolhe preencher e que ficam
            visíveis para outros usuários do aplicativo.
          </li>
          <li>
            <strong>Recursos sociais:</strong> treinos publicados, publicações, relações
            de seguir/seguidor e participações em desafios. Esses dados são visíveis a
            outros usuários autenticados, porque é isso que permite a interação social.
          </li>
          <li>
            <strong>Séries de saúde (somente com sua autorização):</strong> quando você
            ativa a sincronização de saúde, as métricas do item 2 também são gravadas.
            Essas coleções têm regras de segurança que permitem leitura
            <strong> exclusivamente pelo próprio dono</strong> — nenhum outro usuário, nem
            mesmo em recursos sociais, acessa seus dados de saúde.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Compromissos de Não Compartilhamento',
    body: (
      <>
        <ul>
          <li>
            <strong>Sem venda de dados:</strong> seus dados nunca são vendidos, alugados
            ou cedidos a anunciantes, corretores de dados ou terceiros.
          </li>
          <li>
            <strong>Sem publicidade:</strong> o aplicativo não exibe anúncios e não usa
            seus dados de saúde ou perfil para publicidade ou definição de perfil
            comportamental.
          </li>
          <li>
            <strong>Sem rastreamento entre apps:</strong> não integramos SDKs de
            analytics comportamental nem identificadores de publicidade
            (<code>AD_ID</code>).
          </li>
          <li>
            <strong>Sem uso de dados de saúde para marketing:</strong> métricas
            fisiológicas jamais alimentam comunicação promocional.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Operadores de Infraestrutura',
    body: (
      <>
        <p>
          Para oferecer login e sincronização, usamos serviços do <strong>Google
          Cloud</strong> (Firebase Authentication e Cloud Firestore). O Google atua como
          operador de infraestrutura, processando os dados apenas para nos prestar o
          serviço, sob os termos de proteção de dados do Google Cloud.
        </p>
        <p>
          Não há outros terceiros recebendo seus dados. O aplicativo não possui SDKs de
          redes sociais, redes de anúncios ou ferramentas de rastreamento.
        </p>
      </>
    ),
  },
  {
    title: '6. Permissões Solicitadas',
    body: (
      <>
        <ul>
          <li>
            <code>BLUETOOTH_SCAN</code> e <code>BLUETOOTH_CONNECT</code>: detectar e
            receber a pesagem da balança CS20E. Declarado com{' '}
            <code>neverForLocation</code> para garantir que sua localização nunca seja
            acessada.
          </li>
          <li>
            <code>Health Connect</code> (leitura e gravação): consentimento explícito no
            painel de permissões do sistema Android.
          </li>
          <li>
            <code>INTERNET</code>: usada exclusivamente para autenticação e
            sincronização. O aplicativo continua funcional sem ela.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '7. Retenção e Exclusão de Dados',
    body: (
      <>
        <p>Você mantém controle total sobre seus dados:</p>
        <ul>
          <li>
            <strong>Dados locais:</strong> persistem apenas enquanto o aplicativo
            estiver instalado. Limpar os dados nas configurações do Android ou
            desinstalar remove tudo imediatamente.
          </li>
          <li>
            <strong>Exclusão de conta no aplicativo:</strong> o botão de excluir conta
            remove o perfil, os dados sociais e as séries de saúde do Firestore
            <strong> imediatamente</strong>, e em seguida encerra a conta de
            autenticação.
          </li>
          <li>
            <strong>Prazo máximo:</strong> eventual resíduo em backups ou registros de
            sistema é eliminado em até 30 dias.
          </li>
          <li>
            <strong>Health Connect:</strong> registros gravados por nós podem ser
            visualizados ou excluídos a qualquer momento nas configurações do próprio
            Health Connect.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '8. Segurança',
    body: (
      <>
        <p>
          Todo tráfego entre o aplicativo e a nuvem é criptografado em trânsito (TLS).
          Os dados em repouso são criptografados pelo Google Cloud. As regras de acesso do
          banco impõem que cada usuário só leia e escreva os próprios documentos, com
          exceção dos campos de perfil que você opta por tornar públicos.
        </p>
        <p>
          O armazenamento local usa o sandbox do Android e o backup automático está
          desativado (<code>allowBackup=false</code>), impedindo que dados de saúde saiam
          em cópias de segurança do sistema.
        </p>
      </>
    ),
  },
  {
    title: '9. Seus Direitos (LGPD)',
    body: (
      <>
        <p>
          Em conformidade com a Lei Geral de Proteção de Dados, você tem direito a
          confirmação de tratamento, acesso, correção, portabilidade e eliminação dos seus
          dados. O aplicativo oferece exportação completa em arquivo e exclusão definitiva
          dentro do próprio app, sem necessidade de solicitação por e-mail.
        </p>
        <p>
          Para exercer qualquer outro direito, use o contato abaixo.
        </p>
      </>
    ),
  },
  {
    title: '10. Isenção de Diagnóstico Médico',
    body: (
      <p>
        O Physix é um painel informativo pessoal para acompanhamento de bem-estar,
        evolução física e tendências de estilo de vida. As estimativas de bioimpedância e
        os scores de equilíbrio não substituem parecer médico profissional, exames
        laboratoriais clínicos ou diagnóstico médico.
      </p>
    ),
  },
  {
    title: '11. Alterações nesta Política',
    body: (
      <p>
        Mudanças materiais nesta política são comunicadas dentro do aplicativo antes de
        entrar em vigor. A data de última atualização no topo desta página indica a
        versão vigente.
      </p>
    ),
  },
  {
    title: '12. Contato do Desenvolvedor',
    body: (
      <>
        <p>
          Para dúvidas sobre esta política, exercício de direitos ou solicitações
          relacionadas a dados:
        </p>
        <p>
          <strong>Desenvolvedor:</strong> Klaus Quirino Terra
          <br />
          <strong>E-mail:</strong>{' '}
          <a href="mailto:klausqterra@gmail.com">klausqterra@gmail.com</a>
        </p>
      </>
    ),
  },
]

export default function Privacy() {
  useEffect(() => {
    document.title = 'Política de Privacidade — Physix'
  }, [])

  return (
    <div className="privacy">
      <div className="glow glow-a" />
      <main className="privacy-inner">
        <Link to="/" className="back">
          ← Voltar
        </Link>

        <span className="badge">Privacidade e Proteção de Dados</span>
        <h1>Política de Privacidade — Physix</h1>
        <p className="date">Última atualização: 24 de setembro de 2026</p>

        {sections.map((s) => (
          <article key={s.title} className="section">
            <h2>{s.title}</h2>
            {s.body}
          </article>
        ))}

        <footer className="footer">© 2026 Physix · Todos os direitos reservados.</footer>
      </main>
    </div>
  )
}
