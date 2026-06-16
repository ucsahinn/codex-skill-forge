# &#128736; AI Skill Create - README completa em português do Brasil

<p align="center">
  &#127760; <strong>Documenta&#231;&#227;o:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Este arquivo é uma porta de entrada completa em português do Brasil, não um resumo curto. Ele cobre objetivo, limites, uso, validação, segurança e publicação.
>
> README canônico em inglês: [README.md](README.md)

Kit público de skill e plugin para Codex focado em criar, validar e empacotar skills de alta qualidade.

Comece pelo README canônico quando precisar da descrição em inglês mais atual. Use esta página para ler o mesmo contrato operacional em português do Brasil.

## Estado e sinais de confiança

|Área | Detalhe|
|--- | ---|
|Status | Repositório público: ucsahinn/ai-skill-create|
|Fonte da verdade | [README canônico em inglês](README.md)|
|Usuários | Usuários de Codex criando skills reutilizáveis.; Mantenedores preparando repositórios públicos de skills.|
|Validação | O frontmatter de SKILL.md é válido e a descrição de acionamento aparece no início.; Plugin JSON e agents/openai.yaml opcional são parseados corretamente.|
|Segurança | Inclui um pacote de plugin em plugins/ai-skill-create.; Mantém o SKILL.md de runtime enxuto e move orientação profunda para references.|

## O que este repositório é

- Uma skill de Codex pronta para uso público que ajuda a criar outras skills de Codex.
- Um repositório compatível com plugin, com skill, references, scripts, templates e docs.
- Um conjunto de validação para anatomia de skill, progressive disclosure, geração segura e checks de instalação.
- Uma referência para mantenedores empacotarem uma skill para que outros usuários possam inspecionar e instalar.

## O que ele não é

- Não é um lugar para guardar prompts privados ou material fonte de clientes.
- Não é um despejo genérico de prompts sem validação.
- Não substitui a documentação oficial atual de Codex ou Agent Skills.
- Não é um instalador que deve executar limpeza destrutiva.

## Para quem é

- Usuários de Codex criando skills reutilizáveis.
- Mantenedores preparando repositórios públicos de skills.
- Revisores checando segurança, acionamento e qualidade de empacotamento.
- Usuários de Windows que precisam de fluxos de instalação e validação amigáveis para PowerShell.

## Início rápido

1. Clone ou atualize o repositório.
2. Leia README, segurança e mapa de documentação.
3. Execute as validações adequadas.
4. Stage somente os arquivos alterados de forma explícita.
5. Antes de push ou release, revise remoto, segredos e links novamente.

## Guia de decisão

- Skill apenas com instruções -> manter SKILL.md enxuto e evitar scripts.
- Trabalho determinístico repetido -> adicionar scripts e validá-los.
- Material de referência grande -> colocar em references e rotear a partir de SKILL.md.
- Caminho de instalação público necessário -> empacotar como plugin e documentar o uso do Skills CLI.

## Mapa do repositório

|Caminho | Por que importa|
|--- | ---|
|[plugins/ai-skill-create/skills/ai-skill-create/SKILL.md](plugins/ai-skill-create/skills/ai-skill-create/SKILL.md) | ponto de entrada real da skill de Codex|
|[plugins/ai-skill-create/skills/ai-skill-create/references/](plugins/ai-skill-create/skills/ai-skill-create/references/) | conhecimento carregado por progressive disclosure|
|[plugins/ai-skill-create/skills/ai-skill-create/scripts/](plugins/ai-skill-create/skills/ai-skill-create/scripts/) | helpers determinísticos de scaffold e validação|
|[templates/](templates/) | arquivos iniciais para skills e plugins gerados|
|[tests/forward-prompts/](tests/forward-prompts/) | prompts realistas para forward testing|
|[docs/](docs/) | guias de instalação, validação, plugin e repositório público|
|[scripts/](scripts/) | validação do repo e helpers de install dry-run|

## Fluxo de trabalho

1. Entender a skill solicitada a partir de exemplos e restrições do usuário.
2. Fazer apenas as perguntas de esclarecimento necessárias.
3. Escolher nome da skill, layout de pastas, references, scripts e empacotamento opcional de plugin.
4. Gerar um SKILL.md enxuto com arquivos de suporte.
5. Executar checks de estrutura, links, scripts, manifestos, instalação e segredos.
6. Forward-test das skills geradas com prompts realistas antes da publicação.

## Comandos e validação

Execute estes comandos somente depois de clonar o repositório e entender o que eles verificam ou escrevem.

```powershell
npm run validate
npm run validate:links
npm run validate:plugin
npm run validate:install
gitleaks dir . --no-banner --redact
```

## Lista de verificação

- O frontmatter de SKILL.md é válido e a descrição de acionamento aparece no início.
- Plugin JSON e agents/openai.yaml opcional são parseados corretamente.
- References e scripts são vinculados apenas quando necessários.
- Forward prompts tem resultados esperados registrados.
- Nenhuma skill gerada contém segredos, caminhos locais ou texto fonte privado.

## Limite de segurança

- Inclui um pacote de plugin em plugins/ai-skill-create.
- Mantém o SKILL.md de runtime enxuto e move orientação profunda para references.
- Inclui scripts de validação para estrutura, frontmatter, manifestos de plugin, metadata de marketplace, scripts e links.
- Inclui forward-test prompts para checar skills geradas contra pedidos realistas.

Regra public-safe: não adicionar segredos, tokens, cookies, chaves privadas, prompts privados, dados de clientes, arquivos locais de auth, logs gerados, arquivos compactados ou build outputs a menos que o README canônico diga explicitamente que pertencem ao repositório público.

## Higiene de release e publicação

- Usar docs/PUBLIC_REPO_CHECKLIST.md e PUBLISHING_CHECKLIST.md antes de qualquer release.
- Commitar apenas código, docs, templates e scripts de validação revisados.
- Não publicar metadata de marketplace até que o caminho de instalação seja real e testado.
- Verificar remote HEAD e GitHub Actions depois do push.

## Manutenção

- Manter este README localizado alinhado com README.md quando o contrato do repo mudar.
- Preferir links factuais do repo a claims de marketing.
- Não inventar comandos de instalação, métricas, usuários, releases ou promessas de suporte.
- Se um comando depende de versão, revisá-lo antes de documentar.
- Quando um arquivo localizado não puder ser atualizado por completo, deixar uma nota clara em vez de uma tradução parcial.

## Caminho de contribuição

- Abrir uma mudança focada no menor conjunto possível de arquivos.
- Ler AGENTS.md ou CONTRIBUTING.md quando existirem antes de editar.
- Executar os comandos de validação do repo listados acima.
- Revisar explicitamente os diffs staged antes do commit.
- Usar caminhos de divulgação de segurança em vez de issues públicas para relatos sensíveis.

## Definição de concluído

Concluído significa: conteúdo completo, links corretos, limites de segurança claros, validação executada, Git limpo e remote HEAD verificado depois do push.

|Recomendação | Por que importa|
|--- | ---|
|Conteúdo | Kit público de skill e plugin para Codex focado em criar, validar e empacotar skills de alta qualidade.|
|Links | Todos os arquivos locais referenciados devem existir e resolver a partir da raiz do repositório.|
|Segurança | Nenhuma skill gerada contém segredos, caminhos locais ou texto fonte privado.|
|Verificação | Validar estrutura, links, Markdown, segredos, scripts relevantes e remote HEAD antes de afirmar que algo foi publicado.|
|Remoto | Depois do push, comparar HEAD local com origin/main e GitHub remote HEAD.|

## Links importantes

|Caminho | Por que importa|
|--- | ---|
|[README canônico](README.md) | README.md|
|[Docs de instalação](docs/INSTALL.md) | docs/INSTALL.md|
|[Docs de validação](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Estrutura de skill](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin e marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Modelo de ameaças](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Política de segurança](SECURITY.md) | SECURITY.md|
