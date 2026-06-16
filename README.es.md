# &#128736; AI Skill Create - README completa en español

<p align="center">
  &#127760; <strong>Documentaci&#243;n:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Este archivo es una portada completa en español, no un resumen corto. Cubre propósito, límites, uso, validación, seguridad y publicación.
>
> README canónico en inglés: [README.md](README.md)

Kit público de skill y plugin para Codex orientado a crear, validar y empaquetar skills de alta calidad.

Empieza por el README canónico si necesitas la descripción inglesa más actual. Usa esta página cuando quieras el mismo contrato operativo en español.

## Estado y señales de confianza

|Área | Detalle|
|--- | ---|
|Estado | Repositorio público: ucsahinn/ai-skill-create|
|Fuente de verdad | [README canónico en inglés](README.md)|
|Usuarios | Usuarios de Codex que crean skills reutilizables.; Mantenedores que preparan repositorios públicos de skills.|
|Validación | El frontmatter de SKILL.md es válido y la descripción de activación aparece al principio.; Plugin JSON y agents/openai.yaml opcional se parsean correctamente.|
|Seguridad | Incluye un paquete de plugin bajo plugins/ai-skill-create.; Mantiene el SKILL.md de runtime conciso y mueve la guía profunda a references.|

## Qué es este repositorio

- Una skill de Codex lista para uso público que ayuda a crear otras skills de Codex.
- Un repositorio compatible con plugin que contiene skill, referencias, scripts, plantillas y docs.
- Un arnés de validación para anatomía de skills, progressive disclosure, generación segura e instalación.
- Una referencia para mantenedores que empaquetan una skill para que otros usuarios puedan inspeccionarla e instalarla.

## Qué no es

- No es un lugar para guardar prompts privados ni código o material de clientes.
- No es un volcado genérico de prompts sin validación.
- No sustituye la documentación oficial actual de Codex o Agent Skills.
- No es un instalador que deba ejecutar limpieza destructiva.

## Para quién es

- Usuarios de Codex que crean skills reutilizables.
- Mantenedores que preparan repositorios públicos de skills.
- Revisores que comprueban seguridad, activación y calidad de empaquetado.
- Usuarios de Windows que necesitan flujos de instalación y validación compatibles con PowerShell.

## Inicio rápido

1. Clona o actualiza el repositorio.
2. Lee README, seguridad y el mapa de documentación.
3. Ejecuta las validaciones adecuadas.
4. Prepara solo los archivos cambiados de forma explícita.
5. Antes de push o release, revisa remoto, secretos y enlaces otra vez.

## Guía de decisión

- Skill solo con instrucciones -> mantener SKILL.md conciso y evitar scripts.
- Trabajo determinista repetido -> agregar scripts y validarlos.
- Material de referencia grande -> moverlo a references y enlazarlo desde SKILL.md.
- Ruta de instalación pública necesaria -> empaquetar como plugin y documentar el uso de Skills CLI.

## Mapa del repositorio

|Ruta | Por qué importa|
|--- | ---|
|[plugins/ai-skill-create/skills/ai-skill-create/SKILL.md](plugins/ai-skill-create/skills/ai-skill-create/SKILL.md) | punto de entrada real de la skill de Codex|
|[plugins/ai-skill-create/skills/ai-skill-create/references/](plugins/ai-skill-create/skills/ai-skill-create/references/) | conocimiento cargado por progressive disclosure|
|[plugins/ai-skill-create/skills/ai-skill-create/scripts/](plugins/ai-skill-create/skills/ai-skill-create/scripts/) | helpers deterministas de scaffold y validación|
|[templates/](templates/) | archivos iniciales para skills y plugins generados|
|[tests/forward-prompts/](tests/forward-prompts/) | prompts realistas para forward testing|
|[docs/](docs/) | guías de instalación, validación, plugin y repositorio público|
|[scripts/](scripts/) | validación del repo y helpers de install dry-run|

## Flujo de trabajo

1. Entender la skill solicitada a partir de ejemplos y restricciones del usuario.
2. Hacer solo las preguntas aclaratorias necesarias.
3. Elegir nombre de skill, layout de carpetas, referencias, scripts y empaquetado de plugin opcional.
4. Generar un SKILL.md conciso con los archivos de soporte.
5. Ejecutar comprobaciones de estructura, enlaces, scripts, manifiestos, instalación y secretos.
6. Forward-test de las skills generadas con prompts realistas antes de publicarlas.

## Comandos y validación

Ejecuta estos comandos solo después de clonar el repositorio y entender qué escriben o verifican.

```powershell
npm run validate
npm run validate:links
npm run validate:plugin
npm run validate:install
gitleaks dir . --no-banner --redact
```

## Lista de verificación

- El frontmatter de SKILL.md es válido y la descripción de activación está al principio.
- Plugin JSON y agents/openai.yaml opcional se parsean correctamente.
- Referencias y scripts se enlazan solo cuando hacen falta.
- Los forward prompts tienen resultados esperados registrados.
- Ninguna skill generada contiene secretos, rutas locales ni texto fuente privado.

## Límite de seguridad

- Incluye un paquete de plugin bajo plugins/ai-skill-create.
- Mantiene el SKILL.md de runtime conciso y mueve la guía profunda a references.
- Incluye scripts de validación para estructura, frontmatter, manifiestos de plugin, metadata de marketplace, scripts y enlaces.
- Incluye forward-test prompts para revisar skills generadas con solicitudes realistas.

Regla public-safe: no agregar secretos, tokens, cookies, llaves privadas, prompts privados, datos de clientes, archivos de auth locales, logs generados, archivos comprimidos ni build outputs salvo que el README canónico indique explícitamente que pertenecen al repositorio público.

## Higiene de release y publicación

- Usar docs/PUBLIC_REPO_CHECKLIST.md y PUBLISHING_CHECKLIST.md antes de cualquier release.
- Commit solo de código, docs, plantillas y scripts de validación revisados.
- No publicar metadata de marketplace hasta que la ruta de instalación sea real y esté probada.
- Verificar remote HEAD y GitHub Actions después del push.

## Mantenimiento

- Mantener este README localizado alineado con README.md cuando cambie el contrato del repo.
- Preferir enlaces factuales del repo antes que claims de marketing.
- No inventar comandos de instalación, métricas, usuarios, releases ni promesas de soporte.
- Si un comando depende de versión, revisarlo antes de documentarlo.
- Si un archivo localizado no puede actualizarse completo, dejar una nota clara en vez de una traducción parcial.

## Ruta de contribución

- Abrir un cambio enfocado sobre el conjunto mínimo de archivos.
- Leer AGENTS.md o CONTRIBUTING.md cuando existan antes de editar.
- Ejecutar los comandos de validación del repo indicados arriba.
- Revisar explícitamente los diffs staged antes del commit.
- Usar canales de divulgación de seguridad en vez de issues públicos para reportes sensibles.

## Definición de terminado

Terminado significa: contenido completo, enlaces correctos, límites de seguridad claros, validación ejecutada, Git limpio y remote HEAD verificado después del push.

|Recomendación | Por qué importa|
|--- | ---|
|Contenido | Kit público de skill y plugin para Codex orientado a crear, validar y empaquetar skills de alta calidad.|
|Enlaces | Todos los archivos locales referenciados deben existir y resolverse desde la raíz del repositorio.|
|Seguridad | Ninguna skill generada contiene secretos, rutas locales ni texto fuente privado.|
|Verificación | Valida estructura, enlaces, Markdown, secretos, scripts relevantes y remote HEAD antes de afirmar que algo está publicado.|
|Remoto | Después del push, comparar HEAD local con origin/main y GitHub remote HEAD.|

## Enlaces importantes

|Ruta | Por qué importa|
|--- | ---|
|[README canónico](README.md) | README.md|
|[Docs de instalación](docs/INSTALL.md) | docs/INSTALL.md|
|[Docs de validación](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Estructura de skill](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin y marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Modelo de amenazas](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Política de seguridad](SECURITY.md) | SECURITY.md|
