# 📋 Plan d'Action - Intégration des Tests Unitaires

## 🎯 Objectif Global
Mettre en place une suite de tests unitaires pour le portfolio avec exécution automatique via GitHub Actions à chaque push/PR.

---

## 📊 Stratégie Globale

### 1️⃣ **Configuration du Framework de Test**
   - Installer Jest et React Testing Library
   - Configurer `jest.config.ts`
   - Configurer `jest.setup.ts`
   - Ajouter scripts npm pour tester

### 2️⃣ **Structure des Tests**
   - Créer dossier `src/__tests__/components/` pour tests unitaires
   - Créer dossier `src/__tests__/integration/` pour tests d'intégration
   - 1 fichier test par composant

### 3️⃣ **Tests à Implémenter**
   - **HeroSection.test.tsx** - Vérifie le rendu de la section hero
   - **AboutSection.test.tsx** - Vérifie l'affichage de la section À propos
   - **SkillsSection.test.tsx** - Vérifie la liste des compétences
   - **ProjectsSection.test.tsx** - Vérifie l'affichage des projets
   - **ProjectCard.test.tsx** - Vérifie chaque carte de projet
   - **ContactSection.test.tsx** - Vérifie la section contact
   - **ContactForm.test.tsx** - Vérifie le formulaire
   - **Footer.test.tsx** - Vérifie le footer
   - **page.test.tsx** (intégration) - Teste la page complète

### 4️⃣ **Intégration GitHub Actions**
   - Modifier le workflow existant (`.github/workflows/...`)
   - Ajouter un job `test` entre `analyze` et `build`
   - Configurer le blocage de merge si tests échouent

### 5️⃣ **Couverture de Test Cible**
   - Minimum 70% couverture globale
   - Génération de rapports de couverture

---

## 🗂️ Structure des Fichiers à Créer

```
portfolio/
├── jest.config.ts                          # ← Configuration Jest
├── jest.setup.ts                           # ← Setup Jest
├── package.json                            # ← Modifier (ajouter dépendances + scripts)
│
├── .github/
│   └── workflows/
│       └── [workflow-existant].yml         # ← MODIFIER (ajouter job test)
│
├── specs/
│   └── TEST_PLAN.md (ce fichier)          # ← Le plan validé
│
└── src/
    └── __tests__/
        ├── components/
        │   ├── HeroSection.test.tsx
        │   ├── AboutSection.test.tsx
        │   ├── SkillsSection.test.tsx
        │   ├── ProjectsSection.test.tsx
        │   ├── ProjectCard.test.tsx
        │   ├── ContactSection.test.tsx
        │   ├── ContactForm.test.tsx
        │   └── Footer.test.tsx
        │
        └── integration/
            └── page.test.tsx
```

---

## 📦 Dépendances à Ajouter

```json
{
  "devDependencies": {
    "jest": "^29.7.0",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "@types/jest": "^29.5.11",
    "jest-environment-jsdom": "^29.7.0"
  }
}
```

---

## 🧪 Tests à Écrire

### **HeroSection**
- ✅ Rend le titre "Ewen Héas"
- ✅ Affiche "Développeur Fullstack"
- ✅ Affiche le badge "Master 2"
- ✅ Les deux boutons CTA sont présents

### **AboutSection**
- ✅ Titre "À propos de moi"
- ✅ 3 cartes d'info (formation, expérience, approche)
- ✅ Statistiques (5+ ans, 30+ projets, Master 2)

### **SkillsSection**
- ✅ 3 catégories (Frontend, Backend, Outils)
- ✅ Tous les skills listés
- ✅ Section "Autres compétences" visible

### **ProjectsSection**
- ✅ 4 cartes de projets affichées
- ✅ Chaque carte a titre, description, tags

### **ProjectCard**
- ✅ Rend titre et description
- ✅ Tags affichés correctement
- ✅ Lien fonctionnel

### **ContactSection**
- ✅ Formulaire de contact affiché
- ✅ Infos de contact visible
- ✅ Liens sociaux présents

### **ContactForm**
- ✅ Validation des champs obligatoires
- ✅ Validation du format email
- ✅ Messages d'erreur/succès

### **Footer**
- ✅ Logo et nom affichés
- ✅ Navigation présente
- ✅ Copyright avec année correcte

### **Page Principale (Intégration)**
- ✅ Toutes les sections présentes
- ✅ Page se rend sans erreur
- ✅ Ancres de navigation (#about, #skills, etc.)

---

## 🔄 Intégration GitHub Actions

### Approche
- ❌ **PAS** de nouveau workflow à créer
- ✅ Ajouter un **job `test`** dans le workflow existant
- Positionner entre les jobs `analyze` et `build`

### Ordre des Jobs
```
Job 1: analyze  (linting, code quality)
   ↓
Job 2: test     ← À AJOUTER (tests unitaires + couverture)
   ↓
Job 3: build    (build application)
```

### Contenu du Job `test`
1. Checkout du code
2. Setup Node.js 20
3. Installation des dépendances (`npm ci`)
4. Lancer les tests (`npm test -- --coverage`)
5. Générer rapport de couverture

### Blocage du Merge
- Merge bloqué si job `test` échoue
- Merge bloqué si couverture < 70%

---

## 📈 Scripts à Ajouter à package.json

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## ⏱️ Timeline Estimée

1. **Phase 1** (30 min) - Configuration Jest + dépendances
2. **Phase 2** (1h30) - Écrire tous les tests unitaires
3. **Phase 3** (30 min) - Écrire test d'intégration page
4. **Phase 4** (30 min) - Configurer GitHub Actions
5. **Phase 5** (30 min) - Validation et ajustements

**Total: ~3h30**

---

## ✅ Checklist de Validation

Une fois ce plan validé, je ferai:

- [ ] Modifier `package.json` (ajouter dépendances + scripts)
- [ ] Créer `jest.config.ts`
- [ ] Créer `jest.setup.ts`
- [ ] Créer tous les fichiers tests (9 fichiers)
- [ ] **MODIFIER** le workflow GitHub Actions existant (ajouter job `test`)
- [ ] Mettre à jour `.gitignore` pour coverage/

---

## 🎯 Avantages de ce Plan

✅ **Couverture complète** - Tous les composants testés  
✅ **CI/CD automatisé** - Validation à chaque push  
✅ **Maintenabilité** - Tests futurs facilités  
✅ **Qualité garantie** - Blocage des mauvaises PR  
✅ **Documentation** - Tests servent de spec vive  

---

**⏸️ EN ATTENTE DE VALIDATION**

Avant l'implémentation, je dois:
1. Vérifier le workflow GitHub Actions existant
2. Voir exactement où placer le job `test` (entre analyze et build)
3. Obtenir ta validation finale

Valides-tu ce plan modifié? 🤔

