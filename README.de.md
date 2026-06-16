# &#128736; AI Skill Create - vollständige deutsche README

<p align="center">
  &#127760; <strong>Dokumentation:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

> Diese Datei ist eine vollständige deutsche Einstiegseite, kein kurzer Platzhalter. Sie fasst Zweck, Grenzen, Bedienung, Prüfung, Sicherheit und Veröffentlichung in einer Datei zusammen.
>
> Kanonische englische README: [README.md](README.md)

Öffentliches Codex-Skill- und Plugin-Toolkit zum Erstellen, Validieren und Paketieren hochwertiger Codex-Skills.

Beginnen Sie mit der kanonischen README, wenn Sie die aktuellste englische Beschreibung brauchen. Verwenden Sie diese Seite, wenn Sie den gleichen Vertrag auf Deutsch lesen wollen.

## Status und Vertrauensrahmen

|Bereich | Details|
|--- | ---|
|Status | Öffentliches Repository: ucsahinn/ai-skill-create|
|Wahrheit | [Kanonische englische README](README.md)|
|Benutzer | Codex-Nutzer, die wiederverwendbare Skills erstellen.; Maintainer, die öffentliche Skill-Repositories vorbereiten.|
|Prüfung | Das SKILL.md-Frontmatter ist gültig und die Trigger-Beschreibung steht vorne.; Plugin JSON und optionales agents/openai.yaml werden sauber geparst.|
|Sicherheit | Enthält ein Plugin-Paket unter plugins/ai-skill-create.; Hält das Runtime-SKILL.md knapp und verschiebt tiefe Anleitung nach references.|

## Was dieses Repository ist

- Ein öffentlich nutzbarer Codex-Skill, der beim Erstellen anderer Codex-Skills hilft.
- Ein plugin-kompatibles Repository mit Skill, References, Scripts, Templates und Docs.
- Ein Validierungsrahmen für Skill-Anatomie, Progressive Disclosure, sichere Generierung und Installationschecks.
- Eine Maintainer-Referenz zum Paketieren eines Skills, damit andere Nutzer ihn prüfen und installieren können.

## Was es nicht ist

- Kein Ort zum Speichern privater Prompts oder Kunden-Quellmaterialien.
- Kein generischer Prompt-Dump ohne Validierung.
- Kein Ersatz für aktuelle offizielle Codex- oder Agent-Skills-Dokumentation.
- Kein Installer, der destruktive Bereinigung ausführen soll.

## Für wen es gedacht ist

- Codex-Nutzer, die wiederverwendbare Skills erstellen.
- Maintainer, die öffentliche Skill-Repositories vorbereiten.
- Reviewer, die Sicherheit, Triggerbarkeit und Paketierungsqualität prüfen.
- Windows-Nutzer, die PowerShell-freundliche Installations- und Validierungsablaeufe brauchen.

## Schnellstart

1. Repository klonen oder aktualisieren.
2. README, Sicherheitsdateien und Dokumentationskarte lesen.
3. Die passenden Prüfungen ausführen.
4. Nur explizit geänderte Dateien stagen.
5. Vor Push oder Release Remote-Status, Secrets und Links erneut prüfen.

## Entscheidungshilfe

- Reiner Anleitungs-Skill -> SKILL.md knapp halten und Scripts vermeiden.
- Wiederholte deterministische Arbeit -> Scripts ergänzen und validieren.
- Umfangreiches Referenzmaterial -> in references ablegen und aus SKILL.md dorthin routen.
- Öffentlicher Installationspfad nötig -> als Plugin paketieren und Skills-CLI-Nutzung dokumentieren.

## Repository-Karte

|Pfad | Warum es wichtig ist|
|--- | ---|
|[plugins/ai-skill-create/skills/ai-skill-create/SKILL.md](plugins/ai-skill-create/skills/ai-skill-create/SKILL.md) | eigentlicher Einstiegspunkt des Codex-Skills|
|[plugins/ai-skill-create/skills/ai-skill-create/references/](plugins/ai-skill-create/skills/ai-skill-create/references/) | Wissen für Progressive Disclosure|
|[plugins/ai-skill-create/skills/ai-skill-create/scripts/](plugins/ai-skill-create/skills/ai-skill-create/scripts/) | deterministische Scaffold- und Validierungshelfer|
|[templates/](templates/) | Startdateien für generierte Skills und Plugins|
|[tests/forward-prompts/](tests/forward-prompts/) | realistische Prompts für Forward Testing|
|[docs/](docs/) | Installations-, Validierungs-, Plugin- und Public-Repo-Anleitung|
|[scripts/](scripts/) | Repo-Validierung und Install-Dry-Run-Helfer|

## Arbeitsablauf

1. Den angeforderten Skill aus Beispielen und Nutzergrenzen verstehen.
2. Nur notwendige Rueckfragen stellen.
3. Skill-Name, Ordnerlayout, References, Scripts und optionales Plugin-Packaging wählen.
4. Ein knappes SKILL.md plus unterstuetzende Dateien erzeugen.
5. Struktur-, Link-, Script-, Manifest-, Installations- und Secret-Checks ausführen.
6. Generierte Skills vor der Veröffentlichung mit realistischen Prompts forward-testen.

## Befehle und Prüfung

Führen Sie diese Befehle nur aus, wenn Sie das Repository lokal geclont haben und die Wirkung verstehen.

```powershell
npm run validate
npm run validate:links
npm run validate:plugin
npm run validate:install
gitleaks dir . --no-banner --redact
```

## Validierungs-Checkliste

- Das SKILL.md-Frontmatter ist gültig und die Trigger-Beschreibung steht vorne.
- Plugin JSON und optionales agents/openai.yaml werden sauber geparst.
- References und Scripts werden nur verlinkt, wenn sie gebraucht werden.
- Forward Prompts haben erwartete Ergebnisse dokumentiert.
- Kein generierter Skill enthält Secrets, lokale Pfade oder privaten Quelltext.

## Sicherheitsgrenze

- Enthält ein Plugin-Paket unter plugins/ai-skill-create.
- Hält das Runtime-SKILL.md knapp und verschiebt tiefe Anleitung nach references.
- Liefert Validierungsscripts für Struktur, Frontmatter, Plugin-Manifeste, Marketplace-Metadaten, Scripts und Links.
- Enthält Forward-Test-Prompts, damit generierte Skills gegen realistische Anfragen geprüft werden können.

Public-safe-Regel: Keine Secrets, Tokens, Cookies, privaten Schlüssel, privaten Prompts, Kundendaten, lokalen Auth-Dateien, generierten Logs, Archive oder Build-Outputs hinzufügen, außer die kanonische README sagt explizit, dass sie ins öffentliche Repo gehören.

## Release- und Publikationshygiene

- docs/PUBLIC_REPO_CHECKLIST.md und PUBLISHING_CHECKLIST.md vor jedem Release verwenden.
- Nur geprüften Quellcode, Docs, Templates und Validierungsscripts committen.
- Marketplace-Metadaten erst veröffentlichen, wenn der Installationspfad real und getestet ist.
- Remote HEAD und GitHub Actions nach dem Push verifizieren.

## Wartung

- Diese lokalisierte README mit README.md synchron halten, wenn sich der Repo-Vertrag ändert.
- Faktische Repo-Links Marketing-Aussagen vorziehen.
- Keine Installationsbefehle, Metriken, Nutzer, Releases oder Support-Versprechen erfinden.
- Versionssensitive Befehle vor der Dokumentation erneut prüfen.
- Wenn eine lokalisierte Datei nicht vollständig aktualisiert werden kann, eine klare Notiz statt einer Teilübersetzung hinterlassen.

## Beitragspfad

- Eine fokussierte Änderung am kleinsten sinnvollen Dateisatz öffnen.
- AGENTS.md oder CONTRIBUTING.md vor dem Editieren lesen, wenn vorhanden.
- Die oben genannten Repo-Validierungsbefehle ausführen.
- Gestagte Diffs vor dem Commit explizit prüfen.
- Für sensible Meldungen Security-Disclosure-Wege statt öffentlicher Issues nutzen.

## Definition von fertig

Fertig bedeutet: Inhalt ist lokal vollständig, Links funktionieren, Sicherheitsgrenzen sind klar, Validierung ist gelaufen, Git ist sauber und der Remote-Stand ist nach dem Push geprüft.

|Empfehlung | Warum es wichtig ist|
|--- | ---|
|Inhalt | Öffentliches Codex-Skill- und Plugin-Toolkit zum Erstellen, Validieren und Paketieren hochwertiger Codex-Skills.|
|Links | Alle referenzierten lokalen Dateien müssen existieren und von der Repository-Wurzel aus auflösbar sein.|
|Sicherheit | Kein generierter Skill enthält Secrets, lokale Pfade oder privaten Quelltext.|
|Verifikation | Struktur, Links, Markdown, Secrets, relevante Skripte und Remote-HEAD prüfen, bevor eine öffentliche Aussage gemacht wird.|
|Remote | Nach dem Push lokalen HEAD mit origin/main und GitHub remote HEAD vergleichen.|

## Wichtige Links

|Pfad | Warum es wichtig ist|
|--- | ---|
|[Kanonische README](README.md) | README.md|
|[Installationsdocs](docs/INSTALL.md) | docs/INSTALL.md|
|[Validierungsdocs](docs/VALIDATION.md) | docs/VALIDATION.md|
|[Skill-Struktur](docs/SKILL_STRUCTURE.md) | docs/SKILL_STRUCTURE.md|
|[Plugin und Marketplace](docs/PLUGIN_AND_MARKETPLACE.md) | docs/PLUGIN_AND_MARKETPLACE.md|
|[Threat Model](THREAT_MODEL.md) | THREAT_MODEL.md|
|[Sicherheitsrichtlinie](SECURITY.md) | SECURITY.md|
