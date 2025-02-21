import { BusinessIdea } from "./types";

export const DEFAULT_AZUBEE_IDEA: BusinessIdea = {
  id: "azubee",
  title: "Azubee",
  description:
    "Eine umfassende Lernplattform und App für alle deutschen Ausbildungsberufe. " +
    "Zielgruppe sind Auszubildende (17-23 Jahre), ältere Auszubildende und Ausbilder. " +
    "Mit Features wie Multiple-Choice-Tests, Karteikarten, offene Fragen, Prüfungsvorbereitung und Gamification.",
  potentialRevenue: 357976,
  timeToMarket: "1 year for first version (Fachangestellte für Bäderbetriebe)",
  priority: "high",
  links: ["/studyvation"],

  metadata: {
    marketSize: "1,2 Millionen Azubis in Deutschland",
    pricing: {
      free: "Kostenlose Version mit Werbung",
      premium: {
        individual: 20,
        schools: 15,
      },
    },
    features: [
      "Multiple-Choice-Tests",
      "Karteikarten",
      "Offene Fragen",
      "Prüfungsvorbereitung",
      "Gamification",
      "Lernfortschrittsüberwachung",
      "Berufswahltest",
      "Berufsübersicht",
    ],
    competition: [
      "StudySmarter",
      "Simpleclub",
      "Prozubi",
      "Novaheal",
      "Azubi Navigator",
      "Azubiwelt",
      "Wörk",
    ],
    revenueProjection: {
      year1: 101760,
      year5: 177978,
      year10: 357976,
      total10Years: 2065000,
    },
  },
};

export const COMPONENTS_IDEA: BusinessIdea = {
  id: "tailwind-library",
  title: "Open Source Tailwind Component Library",
  description:
    "Eine Open Source Tailwind CSS Komponenten-Bibliothek mit Premium-Features. " +
    "Basis-Komponenten sind frei verfügbar, Einnahmen durch Pro-Version mit " +
    "zusätzlichen Komponenten, Vorlagen und Support-Services.",
  potentialRevenue: 1440,
  timeToMarket: "2 weeks",
  priority: "low",
  metadata: {
    marketSize: "~50.000 deutsche Webentwickler",
    pricing: {
      free: "Core Library Open Source (MIT License)",
      premium: {
        individual: 19,
        schools: 0,
      },
    },
    features: [
      "Core Library (Open Source):",
      "- Basis UI-Komponenten",
      "- Dokumentation",
      "- Community Support",
      "",
      "Pro Version (€19):",
      "- Admin Dashboard Templates",
      "- Email Vorlagen",
      "- Premium Layouts",
      "- Priority Support",
      "- Private Discord",
    ],
    competition: ["Tailwind UI", "Flowbite", "DaisyUI", "Meraki UI"],
    revenueProjection: {
      year1: 1440, // Kombination aus Pro-Verkäufen und GitHub Sponsors
      year5: 2880, // Wachstum durch Community und mehr Premium-Inhalte
      year10: 4320, // Etablierte Marke mit stabilem Einkommen
      total10Years: 28800,
    },
  },
};
