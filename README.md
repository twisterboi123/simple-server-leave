# Multi Server Leaver Plugin

Een geavanceerde Vencord-plugin voor het selecteren en verlaten van meerdere Discord servers tegelijk met bevestigingsdialoog en eigenaar-bescherming.

## Functies

### ✨ Kernfuncties
- **Select Mode** - Toggle aan/uit via een knop in het serverzijpaneel
- **Visuele Highlighting** - Geselecteerde servers krijgen een duidelijke blauwe highlight met checkmark
- **Batch Leave** - Verlaat meerdere servers in één klik
- **Rate Limiting** - Respecteert Discord's rate limits (150ms vertraging tussen verzoeken)
- **Bevestigingsdialoog** - Toon een confirmatie-popup voordat servers worden verlaten

### 🔒 Veiligheidsfeatures
- **Eigenaar Bescherming** - Servers waarvan je eigenaar bent, kunnen niet worden verlaten
- **Visuele Feedback** - Duidelijke UI-elementen voor selectie en status

### 🎨 UI/UX
- **Toggle Button** - Aan/uit knop voor Select Mode met visuele feedback
- **Leave Button** - Rood knop om geselecteerde servers te verlaten
- **Counter** - Toont aantal geselecteerde servers
- **Animaties** - Smooth transitions en pulse-effects

## Installatie

1. Zet de plugin-bestanden in je Vencord plugins-directory:
   ```
   Vencord/plugins/multi-server-leaver/
   ├── index.ts
   ├── styles.css
   └── package.json
   ```

2. Herstart Vencord of reload de plugins

3. Zet de plugin aan in Vencord Settings → Plugins

## Gebruik

### Select Mode Activeren
1. Klik op de **"Select Mode"** knop in het serverzijpaneel
2. De knop wordt blauw en begint te glanzen

### Servers Selecteren
- Klik op server-icons om ze te selecteren/deselecteren
- Geselecteerde servers krijgen:
  - Blauwe gloed
  - Checkmark (✓) in de hoek
  - Lichte vergroting

### Servers Verlaten
1. Klik op de rood **"Leave Selected"** knop
2. Bevestig in de popup-dialoog
3. Plugin zal automatisch:
   - Alle geselecteerde servers verlaten
   - Rate limits respecteren
   - Select mode uitschakelen
   - Selectie clearen

## API's gebruikt

### Vencord APIs
- `definePlugin` - Plugin definitie
- `@webpack` - Module finder
- `findByProps` - Webpack module locator
- `@patcher` - Code patching system

### Discord APIs
- `GuildStore.getGuild()` - Guild informatie ophalen
- `UserStore.getCurrentUser()` - Huidige gebruiker info
- `REST.delete(/users/@me/guilds/{guildId})` - Server verlaten

## Code-structuur

```typescript
// Main plugin file
definePlugin({
  name: "Multi Server Leaver",
  start() {
    // Initialize selection set
    // Setup UI patches
  },
  patchGuildIcons() {
    // Intercept guild icon clicks
    // Toggle selection mode behavior
  },
  updateGuildHighlight(guildId) {
    // Apply/remove CSS classes for highlighting
  },
  createControlPanel() {
    // Create toggle, leave, counter buttons
    // Setup event listeners
  },
  leaveSelectedGuilds() {
    // Show confirmation modal
    // Leave all selected guilds with rate limiting
    // Clean up selection
  },
  cleanup() {
    // Remove UI elements on plugin stop
  }
})
```

## CSS Features

### Highlights
- Blauwe gloed-effect rond geselecteerde servers
- Pulsing animatie voor extra zichtbaarheid
- Checkmark-indicator in hoek

### Controls
- Brand-colored toggle button met hover-effecten
- Rode leave button met warning styling
- Responsive design voor mobiel

### Themes
- Ondersteunt Discord dark/light mode
- Vencord theme variables (`--background-primary`, etc.)

## Rate Limiting

De plugin respecteert Discord's rate limits:
- **150ms delay** tussen elk guild-leave verzoek
- Voorkomi automatische timeouts
- Veilig voor bulkverzoeken

## Bevestigingsdialoog

Voordat servers worden verlaten:
1. Toont alle servernamen die worden verlaten
2. Waarschuwing voor destructieve actie (rode tekst)
3. Opties: "Ja, verlaten" of "Annuleren"

## Eigenaar Bescherming

- Servers waarvan je eigenaar bent, worden gefilterd uit de verlaat-lijst
- Waarschuwing indien alle geselecteerde servers zijn eigendom van jou
- Voorkomi onopzettelijk verlaten van je eigen servers

## Troubleshooting

### Servers verlaten niet
- Controleer of Vencord correct is geinstalleerd
- Zorg dat je niet geban bent op de server
- Check console voor errors (F12)

### Select mode werkt niet
- Reload Vencord
- Zorg dat plugin is ingeschakeld
- Clear browser cache

### Animaties werken niet
- Controleer CSS is correct geladen
- Zorg voor CSS support in browser
- Check console voor CSS errors

## Performance

- Minimale overhead wanneer select mode uit is
- Efficiënte DOM-patching
- Geen memory leaks bij cleanup

## Toekomstige Verbeteringen

- [ ] Selectie opslaan/herstellen
- [ ] Filter per guild properties (grootte, members, etc.)
- [ ] Bulk-acties naast leave (mute, unmute)
- [ ] Settings panel voor UI-aanpassingen
- [ ] Keyboard shortcuts

## Disclaimer

Dit plugin is niet verbonden met Discord Inc. Gebruik op eigen risico. 
Zorg dat je de Discord ToS en Vencord richtlijnen volgt.

## License

MIT License - Vrij te gebruiken en wijzigen

---

**Versie:** 1.0.0  
**Laatst bijgewerkt:** 2026-02-05
