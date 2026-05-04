# Registro Timbri LSPD

Sito statico pronto per GitHub Pages con report ore, timbri per reparto, moduli copiabili e download del report in formato `.txt`.

## Reparti configurati

- Servizio Ufficiale, con rapporto per Grado di Ufficiale.
- Coordinamento, con rapporto totale orario servizio.
- Assunzioni, con colloqui eseguiti e formazioni.
- Elicotteristi, con compagno di eagle, decollo, atterraggio e motivazione.
- Merryweather, con rapporto protezione centrale.

I timbri, i campi compilati e il tema Bianco/Nero vengono salvati nel browser con `localStorage`. Questo vuol dire che ogni persona mantiene i propri dati sul proprio browser/dispositivo.

## Come modificare dati e link

Apri `script.js` e modifica:

- `REPARTI_INTERNI`: nomi reparti, campi modulo, testi e template.
- `LINK_INVIO_RAPIDI`: link o destinazioni dove inviare i rapporti.
- `DEFAULT_USER`: mention Discord predefinita.

I link `url: "#"` sono segnaposto: sostituiscili con i link reali dei canali, desk o moduli.

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub.
2. Carica questi file nella root del repository.
3. Vai in `Settings` > `Pages`.
4. In `Build and deployment`, scegli `Deploy from a branch`.
5. Seleziona branch `main` e cartella `/root`.
6. Salva e attendi la pubblicazione.

Il sito funziona anche aprendo direttamente `index.html` nel browser.
