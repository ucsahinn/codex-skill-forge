# <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f6e0.svg" alt="" aria-hidden="true" width="20"> AI Skill Create

<p align="center">
  <img src="assets/icon.svg" alt="AI Skill Create ikonu" width="120" />
  <br />
  <img src="assets/banner.svg" alt="Brief alma, skill tasarımı, doğrulama ve plugin paketlemeyi gösteren AI Skill Create banner görseli" width="100%" />
</p>

<p align="center">
  &#127760; <strong>Dok&#252;man dilleri:</strong>
  <a href="README.de.md"><img src="https://flagcdn.com/w20/de.png" alt="Deutsch" width="20"></a> |
  <a href="README.es.md"><img src="https://flagcdn.com/w20/es.png" alt="Espa&#241;ol" width="20"></a> |
  <a href="README.md"><img src="https://flagcdn.com/w20/gb.png" alt="English" width="20"></a> |
  <a href="README.pt-BR.md"><img src="https://flagcdn.com/w20/br.png" alt="Portugu&#234;s (Brasil)" width="20"></a> |
  <a href="README.tr.md"><img src="https://flagcdn.com/w20/tr.png" alt="T&#252;rk&#231;e" width="20"></a> |
  <a href="README.fr.md"><img src="https://flagcdn.com/w20/fr.png" alt="Fran&#231;ais" width="20"></a>
</p>

**AI Skill Create**, gerçek brief, örnek, dosya ve talimatlardan daha iyi Codex skill’leri üretmek için hazırlanmış public-ready bir Codex skill ve plugin paketidir.

Amaç basit: Codex bir skill oluştururken sadece şablon doldurmasın; skill’i anlasın, doğru yapıyı seçsin, doğrulasın, forward-test etsin, güvenli paketlesin ve başkalarının rahatça kurabileceği hale getirsin.

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2728.svg" alt="" aria-hidden="true" width="20"> Ne Sağlar?

- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3af.svg" alt="" aria-hidden="true" width="20"> güçlü ve tetiklenebilir `SKILL.md` açıklamaları
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9ed.svg" alt="" aria-hidden="true" width="20"> kısa ana workflow ve ayrı referans dosyaları
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2699.svg" alt="" aria-hidden="true" width="20"> gerekli yerde deterministic helper scriptleri
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9ea.svg" alt="" aria-hidden="true" width="20"> validation ve forward-test promptları
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4e6.svg" alt="" aria-hidden="true" width="20"> plugin ve marketplace metadata
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1fa9f.svg" alt="" aria-hidden="true" width="20"> Windows-first install ve dry-run scriptleri
- <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f510.svg" alt="" aria-hidden="true" width="20"> public repo için secret scan ve güvenlik kontrolleri

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f680.svg" alt="" aria-hidden="true" width="20"> Hızlı Başlangıç

Repoyu klonla:

```powershell
git clone https://github.com/ucsahinn/ai-skill-create.git
cd ai-skill-create
```

Kurulumu önce dry-run ile gör:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -DryRun
```

Skill’i Codex home içine kur:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/install.ps1 -Yes
```

Sonra yeni bir Codex thread’i açıp şöyle çağır:

```text
Use $ai-skill-create to create a new Codex skill from this brief.
```

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e9.svg" alt="" aria-hidden="true" width="20"> Plugin Yapısı

Paket self-contained çalışır:

```text
plugins/ai-skill-create/
  .codex-plugin/plugin.json
  skills/ai-skill-create/
    SKILL.md
    agents/openai.yaml
    references/
    scripts/
    assets/
```

Repo-local marketplace dosyası: [.agents/plugins/marketplace.json](.agents/plugins/marketplace.json)

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2705.svg" alt="" aria-hidden="true" width="20"> Doğrulama

Tüm yerel kontrol zinciri:

```powershell
npm run validate
```

Bu kontrol şunları doğrular:

- repo yapısı
- `SKILL.md` frontmatter ve trigger kelimeleri
- `agents/openai.yaml`
- plugin manifest
- marketplace metadata
- markdown linkleri
- script syntax
- install dry-run
- Gitleaks secret scan

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f9e0.svg" alt="" aria-hidden="true" width="20"> Nasıl Çalışır?

`$ai-skill-create` çağrıldığında Codex’i şu akıştan geçirir:

1. brief ve örnekleri anla
2. instruction-only, references, scripts, assets veya plugin kararını ver
3. kısa ve net `SKILL.md` yaz
4. detayları referans dosyalarına taşı
5. sadece gerçekten faydalı scriptleri ekle
6. yapıyı ve güvenliği doğrula
7. gerçekçi forward-test promptlarıyla dene
8. public repo, install ve release kapılarını hazırla

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4da.svg" alt="" aria-hidden="true" width="20"> Dokümanlar

- [Install Guide](docs/INSTALL.md)
- [Usage Guide](docs/USAGE.md)
- [Skill Structure](docs/SKILL_STRUCTURE.md)
- [Validation](docs/VALIDATION.md)
- [Plugin And Marketplace](docs/PLUGIN_AND_MARKETPLACE.md)
- [Windows Notes](docs/WINDOWS.md)
- [Public Repo Checklist](docs/PUBLIC_REPO_CHECKLIST.md)
- [SEO And Discoverability](docs/SEO.md)
- [GitHub Settings](docs/GITHUB_SETTINGS.md)
- [Sources](docs/SOURCES.md)

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f510.svg" alt="" aria-hidden="true" width="20"> Güvenlik Modeli

Skill üreten bir araç, agent davranışını etkileyebilir. Bu yüzden brief, örnek, web sayfası, MCP çıktısı, GitHub issue ve üretilen metinler güvenilmeyen input kabul edilir.

Bu repo özellikle şunlardan kaçınır:

- gerçek secret veya private data
- geniş varsayılan izinler
- gizli override talimatları
- onaysız global write
- destructive cleanup
- curl-pipe-shell kurulumları

Detaylar: [SAFE_GENERATION.md](SAFE_GENERATION.md), [THREAT_MODEL.md](THREAT_MODEL.md), [SECURITY.md](SECURITY.md).

## <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c4.svg" alt="" aria-hidden="true" width="20"> Lisans

MIT. Bkz. [LICENSE](LICENSE).
