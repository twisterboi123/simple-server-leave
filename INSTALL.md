# Installation Guide - Multi Server Leaver Plugin

## Wat is deze plugin?

Een Vencord plugin waarmee je:
- Meerdere Discord servers selecteren
- Al die servers in één keer verlaten
- Bescherming tegen het verlaten van servers waarvan je eigenaar bent
- Bevestigingsdialoog voordat je verlaat

## Bestanden

```
plugin/
├── index.ts                 # Hoofd plugin file (DEZE GEBRUIKEN)
├── styles.css              # CSS styling (optioneel - ingebouwd in index.ts)
├── types.ts                # TypeScript type definitions
├── package.json            # Plugin manifest
├── vencord.d.ts            # Vencord type stubs
├── tsconfig.json           # TypeScript configuratie
├── README.md               # Uitgebreide documentatie
└── index-improved.ts       # Geavanceerde versie (reference)
```

## Installatiesstappen

### 1. Vencord Plugin Directory

Zet de bestanden in je Vencord plugins directory. Dit is meestal:

**Windows:**
```
AppData/Local/Discord/plugins/multi-server-leaver/
```

**macOS:**
```
~/Library/Application Support/Discord/plugins/multi-server-leaver/
```

**Linux:**
```
~/.config/Discord/plugins/multi-server-leaver/
```

### 2. Benodigde Bestanden

Je hebt minimaal nodig:
- ✅ **index.ts** (VERPLICHT)
- ✅ **package.json** (VERPLICHT)

Optioneel maar aangeraden:
- vencord.d.ts (voor TypeScript support)
- types.ts (voor type definities)
- tsconfig.json (voor compiler configuratie)

### 3. Discord/Vencord Herstarten

Sluit Discord compleet af en start opnieuw:

- Sla Discord af (niet minimaliseren)
- Wacht 2-3 seconden
- Herstart Discord

### 4. Plugin Activeren

1. Open Discord Settings
2. Ga naar "Vencord" tab
3. Klik op "Plugins"
4. Zoek naar "Multi Server Leaver"
5. Toggle de switch aan

## Gebruik

### Select Mode

1. **Activeren:**
   - Klik de blauwe "📋 Select Mode" knop
   - Deze verschijnt in het linkerzijpaneel bij je serverlijst

2. **Servers Selecteren:**
   - Klik op server-icons om ze te selecteren
   - Geselecteerde servers krijgen:
     - Blauwe gloed ring
     - Checkmark (✓) in hoek
     - Lichte vergroting

3. **Servers Verlaten:**
   - Klik de rode "🚪 Leave Selected" knop
   - Bevestig in de popup
   - Plugin zal servers één voor één verlaten

### Stopzetting

- Klik "📋 Select Mode" knop weer om uit te schakelen
- Of sluit Select Mode automatisch na verlaten

## Troubleshooting

### Knop verschijnt niet

**Probleem:** Kan de "Select Mode" knop niet vinden

**Oplossing:**
1. Zorg dat plugin is ingeschakeld (Settings → Vencord → Plugins)
2. Herstart Discord compleet
3. Check console (F12) voor errors

### Servers verlaten niet

**Probleem:** Klik "Leave Selected" maar niets gebeurt

**Oplossing:**
1. Zorg dat je geen owner bent van die servers
2. Check dat je niet gebanned bent
3. Open DevTools (F12) en check Console voor errors

### Animaties werken niet

**Probleem:** Blauwe gloed en checkmark verschijnen niet

**Oplossing:**
1. Zorg dat CSS correct is geladen
2. Clear browser cache (Ctrl+Shift+Delete)
3. Herstart Discord

### Errors in Console

**Bij module import errors:**
- Dit is normaal! De Vencord modules zijn alleen in runtime beschikbaar
- Plugin zal toch correct werken in Discord

## Veiligheid

⚠️ **BELANGRIJK:**

- **Eigenaar servers:** Servers waarvan je eigenaar bent, kunnen NIET worden verlaten
- **Bevestiging:** Je moet elke batch servers bevestigen voordat ze verlaten worden
- **Rate limiting:** Plugin respecteert Discord rate limits (geen IP bans)

## Support

### Command Line Debug

```bash
# Check plugins directory
ls $env:APPDATA/Local/Discord/plugins/multi-server-leaver/

# Check if Discord sees plugin
# (Open DevTools → Console)
```

### Discord Requirements

- Discord versie: Actueel
- Vencord: Geïnstalleerd en werkend
- JavaScript: Ingeschakeld

### Plugin Requirements

- TypeScript gebuild tot JavaScript
- Browser JavaScript support
- DOM access via Vencord APIs

## Tips & Tricks

✅ **Best Practices:**

1. Selecteer servers stap-voor-stap
2. Bevestig altijd de servers in de popup
3. Wacht tot alle servers verlaten zijn voordat je iets anders doet
4. Zet Select Mode uit als je klaar bent

❌ **Vermijden:**

- Niet forcefull Discord afsluiten terwijl servers verlaten worden
- Niet hetzelfde knop dubbel klikken
- Niet andere servers selecteren terwijl verlaten aan de gang is

## Feedback & Issues

Als je bugs vindt of verbeteringen hebt:
1. Controleer devTools console (F12)
2. Schrijf het error message op
3. Test opnieuw na Discord restart

## Licentie & Disclaimers

- ✅ Dit is een open source plugin
- ✅ Vrij te gebruiken en wijzigen
- ⚠️ Niet officieel van Discord of Vencord
- ⚠️ Gebruik op eigen risico
- ⚠️ Volg Discord ToS

---

**Versie:** 1.0.0  
**Laatste Update:** 2026-02-05  
**Status:** Volledige Werking ✅
