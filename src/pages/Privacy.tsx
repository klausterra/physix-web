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
          cálculo de baselines, tendências, correlações, insights, composição corporal,
          registro de treinos e cálculo de recordes acontecem no seu aparelho. Depois do
          login, os recursos de saúde e treino funcionam sem conexão à internet.
        </p>
        <p>
          <strong>Recursos opcionais em nuvem:</strong> a conta (login com Google) é
          usada para identificar você e para os recursos sociais. Além disso, existem
          recursos <strong>opcionais, desligados por padrão</strong>, que só enviam dados
          depois do seu consentimento específico: o backup e sincronização de treinos
          (seção 5), o Treinador IA (seção 6), o envio de séries de saúde (seção 3) e as
          notificações no aparelho (seção 4).
          Fora os dados necessários para a conta e o perfil, nenhum dado de saúde ou de
          treino é enviado sem o seu consentimento, que pode ser revogado a qualquer
          momento.
        </p>
      </>
    ),
  },
  {
    title: '2. Dados Processados Apenas no Aparelho',
    body: (
      <>
        <p>
          As categorias abaixo <strong>não saem do seu dispositivo</strong> por padrão.
          Elas são lidas via Health Connect ou registradas por você, processadas
          localmente e armazenadas no próprio aparelho. Algumas delas só são enviadas à
          nuvem se você ativar um dos recursos opcionais descritos nas seções 3, 5 e 6:
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
            <strong>Treinos e rotinas:</strong> treinos registrados, rotinas, pastas e
            exercícios personalizados ficam no aparelho, a menos que você ative o backup
            de treinos (seção 5).
          </li>
          <li>
            <strong>Sempre locais:</strong> recordes pessoais (recalculados no aparelho a
            partir dos treinos), fotos, o programa do Treinador e o histórico das
            conversas com o Treinador IA não são enviados por nenhum recurso de backup.
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
            <strong>Credenciais de acesso:</strong> o login é feito apenas com a Conta do
            Google, via Firebase Authentication. Recebemos somente o identificador, o
            e-mail, o nome e a foto do perfil; o Physix não recebe nem armazena sua senha.
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
          <li>
            <strong>Backup de treinos (somente com sua autorização):</strong> detalhado
            na seção 5.
          </li>
          <li>
            <strong>Token de push (somente com as notificações ligadas):</strong> o
            identificador de instalação do aparelho e o token do serviço de mensagens,
            detalhados na seção 4.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Notificações no aparelho (push)',
    body: (
      <>
        <p>
          As notificações no aparelho são <strong>opcionais e desligadas por padrão</strong>.
          Elas só passam a valer quando você ativa a opção no aplicativo e concede a
          permissão de notificações do Android.
        </p>
        <p>
          <strong>Para que servem:</strong> avisar de interações no seu conteúdo — novo
          seguidor, curtida no seu treino, comentário, resposta e menção.
        </p>
        <p>
          <strong>O que é enviado:</strong>
        </p>
        <ul>
          <li>
            o <strong>token do aparelho</strong> (identificador de instalação gerado pelo
            serviço de mensagens), guardado em{' '}
            <code>physix/data/fcm_tokens</code> junto com a plataforma e a data de
            atualização;
          </li>
          <li>
            uma <strong>cópia das suas preferências de notificação</strong>, guardada em{' '}
            <code>physix/data/notification_prefs</code>;
          </li>
          <li>
            o <strong>texto da notificação</strong> (título e corpo fixos, gerados no
            aplicativo ou no servidor) enviado ao serviço de mensagens no momento da
            interação.
          </li>
        </ul>
        <p>
          <strong>Quem processa:</strong> o <strong>Google Firebase Cloud Messaging
          (FCM)</strong> entrega a notificação ao aparelho. O envio é disparado por Cloud
          Functions do Physix quando alguém interage com o seu conteúdo.
        </p>
        <p>
          <strong>O que não é enviado:</strong> o conteúdo da notificação não inclui
          dado de saúde nem o texto das suas mensagens.
        </p>
        <p>
          <strong>Transferência internacional:</strong> o Firebase Cloud Messaging é
          operado pelo Google e pode processar os dados do token e o texto da notificação
          fora do Brasil. Essa transferência internacional (LGPD, art. 33) ocorre com base
          no seu consentimento e nas garantias contratuais de proteção de dados do Google
          Cloud.
        </p>
        <p>
          <strong>Como desligar:</strong> você pode desativar as notificações nas
          preferências do aplicativo a qualquer momento. Desligar <strong>remove o token
          do aparelho</strong> e interrompe novos envios, mas <strong>não apaga o
          histórico já salvo</strong> — as notificações antigas continuam visíveis na
          central do aplicativo até você excluí-las ou excluir a conta.
        </p>
      </>
    ),
  },
  {
    title: '5. Backup e Sincronização de Treinos (opcional)',
    body: (
      <>
        <p>
          O backup de treinos é <strong>opcional e desligado por padrão</strong>. Ele só
          é ativado depois que você aceita o consentimento específico apresentado no
          aplicativo (versão <code>workout-sync-v1</code>).
        </p>
        <p>
          <strong>O que é enviado:</strong>
        </p>
        <ul>
          <li>
            treinos concluídos — exercícios, séries, cargas, repetições, esforço
            percebido (RPE) e notas;
          </li>
          <li>rotinas, pastas de rotinas e exercícios personalizados.</li>
        </ul>
        <p>
          <strong>O que não é enviado por este recurso:</strong> recordes pessoais (não
          são armazenados na nuvem; o aplicativo os recalcula no aparelho), fotos, o
          programa do Treinador, o histórico de conversas com o Treinador IA e dados lidos
          do Health Connect.
        </p>
        <p>
          <strong>Medidas corporais:</strong> peso, percentual de gordura e
          circunferências registrados manualmente ou importados por você só são incluídos
          no backup se você der, adicionalmente, o <strong>consentimento separado para
          dados de saúde</strong> (dado pessoal sensível — LGPD, art. 11, I). Medidas
          vindas do Health Connect nunca são enviadas por este recurso.
        </p>
        <p>
          <strong>Finalidade:</strong> guardar uma cópia de segurança dos seus treinos e
          permitir restaurá-los e mantê-los sincronizados entre os aparelhos em que você
          entra com a mesma conta. Treinos baixados da nuvem para um aparelho não são
          gravados no Health Connect.
        </p>
        <p>
          <strong>Onde ficam:</strong> Google Firebase (Cloud Firestore), região{' '}
          <code>southamerica-east1</code> (São Paulo, Brasil), em área acessível apenas
          pela sua conta.
        </p>
        <p>
          <strong>Base legal:</strong> consentimento (LGPD, art. 7º, I) e, para medidas
          corporais, consentimento específico e destacado (LGPD, art. 11, I).
        </p>
        <p>
          <strong>Retenção:</strong> os dados ficam guardados até você desativar o backup
          e apagar os dados da nuvem, ou excluir a conta. Quando você exclui um treino ou
          rotina, pode permanecer na nuvem um registro de exclusão (marcador sem o
          conteúdo do treino), usado para que a exclusão chegue aos seus outros
          aparelhos, até a exclusão total dos seus dados da nuvem ou da conta.
        </p>
        <p>
          <strong>Importação assistida:</strong> o desenvolvedor só importa dados para o
          seu backup mediante solicitação expressa sua.
        </p>
        <p>
          <strong>Como apagar:</strong> no aplicativo, pela opção “Apagar dados da
          nuvem” ou pela exclusão da conta; ou por e-mail para{' '}
          <a href="mailto:klausqterra@gmail.com">klausqterra@gmail.com</a>. Desativar o
          backup interrompe novos envios; os dados já enviados permanecem até que você
          os apague.
        </p>
      </>
    ),
  },
  {
    title: '6. Treinador IA (opcional)',
    body: (
      <>
        <p>
          O Treinador IA oferece conversas e um briefing diário gerados por inteligência
          artificial. O recurso é <strong>opcional</strong>, depende do seu consentimento
          (versão <code>ai-v1</code>) e pode estar desativado ou indisponível no
          aplicativo.
        </p>
        <p>
          <strong>Como funciona:</strong> o aplicativo envia sua solicitação a Cloud
          Functions do Physix (Google Cloud), que chamam o modelo Google Gemini por meio
          do Vertex AI e devolvem a resposta ao aparelho.
        </p>
        <p>
          <strong>O que é enviado:</strong>
        </p>
        <ul>
          <li>suas mensagens e um resumo dos seus treinos e do seu programa;</li>
          <li>
            <strong>somente com o consentimento adicional de saúde</strong> (versão{' '}
            <code>ai-health-v1</code>, dado pessoal sensível — LGPD, art. 11, I):
            resumos de sono, frequência cardíaca, passos e composição corporal.
          </li>
        </ul>
        <p>
          <strong>Transferência internacional:</strong> o modelo é acessado pelo endpoint
          global do Vertex AI, por isso o processamento pode ocorrer em servidores do
          Google fora do Brasil. Essa transferência internacional (LGPD, art. 33) ocorre
          com base no seu consentimento específico e nas garantias contratuais de
          proteção de dados do Google Cloud.
        </p>
        <p>
          <strong>Uso pelo Google:</strong> conforme os termos do Vertex AI para
          clientes, o conteúdo enviado não é usado pelo Google para treinar seus modelos.
        </p>
        <p>
          <strong>O que fica guardado:</strong>
        </p>
        <ul>
          <li>
            o histórico das conversas fica <strong>apenas no seu aparelho</strong>;
          </li>
          <li>
            no servidor ficam somente contadores de cota de uso e registros técnicos sem o
            conteúdo das mensagens, associados a um identificador pseudonimizado (hash com
            salt) em vez do seu identificador de conta, por até 90 dias;
          </li>
          <li>
            se você denunciar uma resposta, guardamos o trecho denunciado para análise e
            melhoria da segurança do recurso, por até 90 dias.
          </li>
        </ul>
        <p>
          <strong>Limites:</strong> as respostas da IA são informativas e{' '}
          <strong>não constituem diagnóstico, prescrição ou orientação médica</strong>.
          Ações sugeridas pelo Treinador IA (por exemplo, ajustes de treino) só são
          aplicadas depois da sua confirmação.
        </p>
        <p>
          <strong>Base legal e revogação:</strong> consentimento (LGPD, art. 7º, I) e,
          para dados de saúde, consentimento específico e destacado (LGPD, art. 11, I).
          Você pode revogar os consentimentos a qualquer momento nas configurações do
          aplicativo; a revogação interrompe novos envios.
        </p>
      </>
    ),
  },
  {
    title: '7. Compromissos de Não Compartilhamento',
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
          <li>
            <strong>Sem treinamento de modelos de terceiros:</strong> o conteúdo enviado
            ao Treinador IA não é usado pelo Google para treinar modelos (seção 6).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '8. Operadores de Infraestrutura',
    body: (
      <>
        <p>
          Para oferecer login, sincronização, backup de treinos, o Treinador IA e as
          notificações no aparelho, usamos serviços do <strong>Google Cloud</strong>
          (Firebase Authentication, Cloud Firestore, Cloud Functions, Firebase Cloud
          Messaging e Vertex AI / Gemini). O Google atua como operador
          de infraestrutura, processando os dados apenas para nos prestar o serviço, sob
          os termos de proteção de dados do Google Cloud.
        </p>
        <p>
          Firestore fica na região de São Paulo (<code>southamerica-east1</code>). O
          modelo de IA é acessado pelo endpoint global do Vertex AI e o Firebase Cloud
          Messaging pode processar dados fora do Brasil, conforme as seções 4 e 6.
        </p>
        <p>
          Não há outros terceiros recebendo seus dados. O aplicativo não possui SDKs de
          redes sociais, redes de anúncios ou ferramentas de rastreamento.
        </p>
      </>
    ),
  },
  {
    title: '9. Permissões Solicitadas',
    body: (
      <>
        <ul>
          <li>
            <code>Health Connect</code> (leitura e gravação): consentimento explícito no
            painel de permissões do sistema Android.
          </li>
          <li>
            <code>INTERNET</code>: usada exclusivamente para autenticação, recursos
            sociais, sincronização e backup opcionais, o Treinador IA e o envio das
            notificações. Depois do login, os recursos locais continuam funcionando sem
            ela.
          </li>
          <li>
            <code>POST_NOTIFICATIONS</code>: usada para mostrar notificações no aparelho
            (treino ativo e avisos de interação no seu conteúdo). É pedida pelo sistema
            Android e pode ser revogada a qualquer momento nas configurações do aparelho
            — sem ela, o aplicativo não mostra esses avisos.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '10. Retenção e Exclusão de Dados',
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
            remove o perfil, os dados sociais, as séries de saúde, o backup de treinos e
            o token de push do Firestore <strong> imediatamente</strong>, e em seguida
            encerra a conta de autenticação.
          </li>
          <li>
            <strong>Backup de treinos:</strong> pode ser apagado a qualquer momento pela
            opção “Apagar dados da nuvem”, sem excluir a conta (detalhes na seção 5).
          </li>
          <li>
            <strong>Treinador IA:</strong> o histórico de conversas fica no aparelho e é
            removido com os dados do aplicativo; no servidor não há conteúdo das
            conversas, apenas os registros descritos na seção 6.
          </li>
          <li>
            <strong>Notificações no aparelho:</strong> o token e as preferências podem
            ser removidos a qualquer momento desligando as notificações no aplicativo
            (detalhes na seção 4). O histórico das notificações já recebidas permanece no
            aparelho até você apagá-lo nas configurações do Android, excluir a conta ou
            desinstalar o aplicativo.
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
    title: '11. Segurança',
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
    title: '12. Seus Direitos (LGPD)',
    body: (
      <>
        <p>
          Em conformidade com a Lei Geral de Proteção de Dados, você tem direito a
          confirmação de tratamento, acesso, correção, portabilidade e eliminação dos seus
          dados. O aplicativo oferece exportação completa em arquivo e exclusão definitiva
          dentro do próprio app, sem necessidade de solicitação por e-mail.
        </p>
        <p>
          Quando o tratamento se baseia em consentimento (backup de treinos, envio de
          dados de saúde, Treinador IA e notificações no aparelho), você pode revogá-lo a
          qualquer momento nas configurações do aplicativo, sem afetar o tratamento
          realizado antes da revogação.
        </p>
        <p>
          Para exercer qualquer outro direito, use o contato abaixo.
        </p>
      </>
    ),
  },
  {
    title: '13. Isenção de Diagnóstico Médico',
    body: (
      <p>
        O Physix é um painel informativo pessoal para acompanhamento de bem-estar,
        evolução física e tendências de estilo de vida. As estimativas de bioimpedância,
        os scores de equilíbrio e as respostas do Treinador IA não substituem parecer
        médico profissional, exames laboratoriais clínicos ou diagnóstico médico.
      </p>
    ),
  },
  {
    title: '14. Alterações nesta Política',
    body: (
      <p>
        Mudanças materiais nesta política são comunicadas dentro do aplicativo antes de
        entrar em vigor. A data de última atualização no topo desta página indica a
        versão vigente.
      </p>
    ),
  },
  {
    title: '15. Contato do Desenvolvedor',
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
        <p className="date">Versão 2026-10-02 · Última atualização: 2 de outubro de 2026</p>

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
