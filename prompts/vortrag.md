## Inhalt
1. Einstieg KI
2. Funktionsweise von LLMs
3. Agenten & Tools
4. Pro & Contra GenAI
5. Nutzung & Einsichten
6. Fazit & Guidance

---

## Einstieg: Interaktive Beispiele

### Eisverkauf am Strand
| Verkauft (Zielvariable) | Temperatur (°C) | Wochenende | Regen (mm) | Schulferien |
|---:|---:|:--:|---:|:--:|
| **?** | 31 | Ja | 0 | Ja |
| 166 | 28 | Ja | 1 | Nein |
| 30 | 20 | Nein | 5 | Nein |
| 204 | 32 | Ja | 0 | Nein |
| 145 | 25 | Nein | 0 | Ja |

👉 Aufgabe: Schätzen Sie den fehlenden Wert.

---

### Pendelzeiten
| Entfernung (km) | Fahrzeit (min) | Verkehrslage |
|---:|---:|:--:|
| 12 | 30 | Stau |
| 25 | 55 | Stau |
| 12 | 24 | Kein Stau |
| 25 | 45 | Kein Stau |
| 15 | 30 | **?** |

👉 Aufgabe: Bestimmen Sie die Verkehrslage.

---

### Pendelzeiten (mit Kontext: Wochentag)
| Entfernung (km) | Fahrzeit (min) | Wochentag | Verkehrslage |
|---:|---:|:--:|:--:|
| 12 | 30 | Di | Stau |
| 25 | 55 | Mo | Stau |
| 12 | 24 | So | Kein Stau |
| 25 | 45 | Sa | Kein Stau |
| 15 | 30 | Sa | **Kein Stau** |

👉 Regel: **Wochenende = Kein Stau**, **Werktag = Stau**

---

## Sprachmodelle: Satzergänzung
- "Alles hat ein Ende, nur die Wurst hat ____."  
- "Ende gut, alles ____."  
- "Der Apfel fällt nicht weit vom ____."  
- "Wir laufen auf die ____."  

---

## Sprachmodelle: Satzergänzung mit Wahrscheinlichkeiten
- „Wir laufen auf die …“
   - Straße — 25 %
   - Wiese — 20 %
   - Bühne — 15 %
   - Alm — 30 %
   - Wand — 10 %

**Mit Kontext: Bayern**
- Alm — 60 %
- Straße — 10 %
- Wiese — 15 %
- Bühne — 5 %
- Wand — 10 %

---

## Abgrenzung

### Klassische KI – Statistik & ML
- Regressionen, Entscheidungsbäume, Clusteranalysen, Kundensegmentierung, ROI …
- Sentimentanalyse, Topic Modelling
- Zuverlässig, kontrollierbar, auf Unternehmensdaten zugeschnitten
- Hauptproblem: **Datenqualität**

### LLMs
- Generalisten, trainiert auf riesigen Datenmengen
- Generierung von Text, Bildern, Videos, Audio, Code …
- Mächtig, aber fehleranfällig & datenschutzkritisch
- Hauptproblem: **Privacy & Governance**

---

## Beispiel Rissprüfung – Feature Importance
[SHAP Bild]

---

## Wie funktionieren LLMs?

### Beispiel: Sentimentanalyse
Original: „Der Film war unglaublich langweilig und eine totale Enttäuschung.“

1. **Stopwords entfernt**: „Film unglaublich langweilig totale Enttäuschung“
2. **Wörter mit Sentimentwerten**:
   - langweilig → -0.7  
   - Enttäuschung → -0.8  
3. **Gesamt-Score**: -1.6 → Ergebnis: **negativ**

---

## Beispiel LSW
- Störberichte Walzwerk – LSW
   - Cluster-Algorithmen → Klassische KI
   - Zero Shot Klassifizierung → Transformer
- Texterkennung – MAU
   - Vortrainiertes Modell (LSTM → Deep Learning)

---

## Wie funktionieren LLMs?
- Texte → **Tokens** ([Tokenizer-Demo](https://huggingface.co/spaces/Xenova/the-tokenizer-playground))
- **Attention-Mechanismus**: relevante Wörter werden stärker gewichtet
- Beispiel: „Die Hauptstadt von Deutschland ist ____.“ → wichtig: *Hauptstadt*, *Deutschland*

---

## Was ist ChatGPT, Gemini, Meta AI, Grok?
Ein **Agent** ist ein System, das:
1. seine **Umgebung wahrnimmt** (Input),
2. eine **Entscheidung trifft** (Policy),
3. eine **Aktion ausführt** (Output).

---

## Agent-Beispiel: JARVIS
- „Bring mir bitte ein Glas Wasser.“
- Wahrnehmung: hört die Anfrage
- Entscheidung: „Wo sind Wasser und Gläser?“
- Aktion: geht in die Küche, bringt Wasser

Mit mehr Tools (Schlüssel, Drohne …) kann er mehr Probleme lösen – oder neue schaffen (*Ultron*).

---

## Infrastruktur: Agent-Loop
**ReAct-Schema:**
- Thought → Action → Observation → Answer

👉 Typische Tools: Websuche, Zusammenfassung, Bildgenerator

---

## Tools
- Hugging Face: https://huggingface.co/models
- Frage: **Welche Tools haben Sie schonmal eingesetzt?**

---

## Agent ChatGPT & Co.
Beispielauftrag: „Recherche zu *aktuellen CO₂-Maßnahmen im EAF-Stahl* (2024–2025).“
- LLM liest, versteht Kontext, verteilt Aufgaben
- Sammelt Quellen, priorisiert, fasst zusammen, erstellt Roadmap

---

## Pro vs. Contra GenAI

### Chancen
- Vielseitig, Automatisierung
- Unterstützung im Alltag & Beruf
- Breite Anwendbarkeit

### Grenzen
- Bias & Halluzinationen
- Datenschutz & Compliance
- Transparenz
- Abhängigkeit von US-Firmen
- Kosten & Energieverbrauch

---

## Energiekosten & Vergleich
| Modell / Szenario | CO₂ (Tonnen) | Strom (kWh) | Kosten (€) |
|-------------------|--------------|-------------|------------|
| GPT-4 Training | 12.500–15.000 | 52–62 Mio | 7,8–9,3 Mio |
| Gemini Training | 9.000–13.000 | 35–45 Mio | 5,3–6,8 Mio |
| Kühlschrank/Jahr | – | 200–300 | 60–90 |
| EAF Stahl/Jahr | 123.200 | 308 Mio | 46,2 Mio |

Quelle: Google, Epoch, Industrie-Vergleich

---

## Einsichten

### 1) Nutzung & Wachstum
- 1,5 Mio. Konversationen (Mai 2024 – Juni 2025)
- Wachstum: 451 Mio → 2,6 Mrd Nachrichten/Tag
- Work vs. Non-Work: Freizeitnutzung von 53 % → >70 %
- 700 Mio WAU (Juli 2025), stärker in mittleren/niedrigen Einkommen; Gender-Gap schrumpft

### 2) Haupt-Use-Cases
- Practical Guidance, Seeking Information, Writing ≈ 78 %
- Programmieren nur 4,2 %
- Pro Nutzer steigen Nachrichten/Tag → Lerneffekt + bessere Modelle

### 3) Risiken & Kritik
- Jugendschutz: Stanford warnt vor KI-Companions für Kinder
- Arbeitsbedingungen: Content-Moderation teils < $2/h, psychische Belastung
- Sicherheit & Ethik: Jailbreaks wirksam; Therapie-Ersatz nur Randthema (1,9 % Nutzung)

Quelle: Washington Post, Stanford, OpenAI

---

## Fazit
- **KI nutzen – aber mit gesundem Menschenverstand & Verantwortung.**
- Immer kritisch prüfen, Datenschutz beachten, strukturiert vorgehen

👉 Frage ans Publikum: **Wer hat privat schon ChatGPT oder Copilot genutzt?**

---

## Guidance
- Normaler Prompt-Aufbau: Rolle, Problem, Ziel → bedanken
- Mit Checkliste arbeiten
- Prompts speichern (txt oder md)
- Klar strukturiert, Satzzeichen, keine Tippfehler
- JSON-Formate nicht zwingend besser
