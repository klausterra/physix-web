import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Privacy.css'

const sections = [
  {
    title: '1. Visão Geral e Princípio Offline-First',
    body: (
      <>
        <p>
          O aplicativo <span className="hl">Physix</span> (desenvolvido por Klaus
          Quirino Terra, pacote <code>br.com.klausterra.projetosaude</code>) foi
          desenvolvido com a privacidade como pilar fundamental.
        </p>
        <p>
          O aplicativo adota a arquitetura <span className="hl">100% local
          (offline-first)</span>. Não mantemos servidores externos de nuvem, banco de
          dados remoto ou plataformas proprietárias de analytics. Todos os seus
          registros permanecem exclusivamente no armazenamento interno do seu próprio
          dispositivo Android.
        </p>
      </>
    ),
  },
  {
    title: '2. Dados Coletados e Finalidade',
    body: (
      <>
        <p>
          O Physix acessa e processa as seguintes categorias de dados biométricos e
          fisiológicos exclusivamente para cálculo de baselines pessoais e exibição de
          painéis informativos:
        </p>
        <ul>
          <li>
            <strong>Health Connect:</strong> leitura de passos, frequência cardíaca,
            frequência cardíaca de repouso, saturação de oxigênio (SpO2), pressão
            arterial, sessões de sono e sessões de exercícios originadas do seu
            ecossistema (por exemplo, Samsung Health).
          </li>
          <li>
            <strong>Composição corporal:</strong> peso, índice de massa corporal (IMC),
            percentual de gordura corporal, massa magra, percentual de músculo
            esquelético, hidratação corporal, massa óssea e taxa metabólica basal.
          </li>
          <li>
            <strong>Escrita no Health Connect:</strong> gravação local do peso e
            percentual de gordura capturados diretamente de balanças inteligentes
            (quando autorizado expressamente pelo usuário).
          </li>
          <li>
            <strong>Dispositivos Bluetooth (BLE):</strong> comunicação direta com a
            balança de bioimpedância modelo CS20E via Bluetooth Low Energy
            exclusivamente para captura de peso e impedância durante o momento em que
            você sobe na balança. O aplicativo não coleta nem rastreia sua localização
            geográfica.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Política de Não Compartilhamento com Terceiros',
    body: (
      <>
        <p>
          Em conformidade rígida com as Políticas para Desenvolvedores do Google Play e
          os Termos do Health Connect:
        </p>
        <ul>
          <li>
            <strong>Sem venda de dados:</strong> seus dados de saúde nunca são vendidos
            a terceiros, anunciantes ou corretores de dados.
          </li>
          <li>
            <strong>Sem publicidade direcionada:</strong> não utilizamos seus dados
            médicos ou fisiológicos para publicidade, marketing ou definição de perfil
            comportamental.
          </li>
          <li>
            <strong>Sem transferência para nuvem:</strong> seus dados de saúde não são
            transmitidos para nenhum servidor externo.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Permissões Solicitadas',
    body: (
      <>
        <p>
          O aplicativo solicita apenas as permissões indispensáveis para seu
          funcionamento local:
        </p>
        <ul>
          <li>
            <code>BLUETOOTH_SCAN</code> e <code>BLUETOOTH_CONNECT</code>: para detectar
            e receber a pesagem da balança CS20E nas proximidades. Declarado com{' '}
            <code>neverForLocation</code> para garantir que sua localização nunca seja
            acessada.
          </li>
          <li>
            Permissões de leitura e gravação do <code>Health Connect</code>: exibidas no
            painel de permissões do sistema Android para consentimento explícito.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Retenção e Exclusão de Dados',
    body: (
      <>
        <p>Você tem total controle sobre seus dados:</p>
        <ul>
          <li>
            Os dados locais persistem apenas enquanto o aplicativo permanecer instalado
            no seu dispositivo.
          </li>
          <li>
            Para excluir todos os registros locais imediatamente, basta limpar os dados
            do aplicativo nas Configurações do Android ou desinstalar o Physix.
          </li>
          <li>
            Registros gravados no Health Connect podem ser visualizados, alterados ou
            excluídos a qualquer momento diretamente nas configurações de privacidade do
            Health Connect do Android.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Isenção de Diagnóstico Médico',
    body: (
      <p>
        O Physix é um painel informativo pessoal para acompanhamento de bem-estar,
        evolução física e tendências de estilo de vida. As estimativas de bioimpedância
        e scores de equilíbrio não substituem parecer médico profissional, exames
        laboratoriais clínicos ou diagnóstico médico.
      </p>
    ),
  },
  {
    title: '7. Contato do Desenvolvedor',
    body: (
      <>
        <p>Para dúvidas sobre esta política ou sobre o funcionamento do aplicativo:</p>
        <p>
          <strong>Desenvolvedor:</strong> Klaus Quirino Terra
          <br />
          <strong>E-mail:</strong> klausqterra@gmail.com
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
