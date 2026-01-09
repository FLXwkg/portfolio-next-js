# 🧪 Guide des Tests - Portfolio Ewen Héas

## 📊 Vue d'ensemble

Une suite complète de tests unitaires et d'intégration a été mise en place pour valider le bon fonctionnement du portfolio. Les tests s'exécutent automatiquement via GitHub Actions à chaque push/pull request.

---

## 🚀 Commandes Locales

### Lancer tous les tests
```bash
npm test
```

### Mode watch (redémarrage automatique)
```bash
npm run test:watch
```

### Générer un rapport de couverture
```bash
npm run test:coverage
```

### Lancer tests avec output détaillé
```bash
npm test -- --verbose
```

### Lancer les tests d'un composant spécifique
```bash
npm test -- HeroSection.test.tsx
```

### Lancer les tests d'intégration uniquement
```bash
npm test -- integration
```

---

## 📁 Structure des Tests

```
src/__tests__/
├── components/                    # Tests unitaires des composants
│   ├── HeroSection.test.tsx      # 6 tests
│   ├── AboutSection.test.tsx     # 8 tests
│   ├── SkillsSection.test.tsx    # 9 tests
│   ├── ProjectsSection.test.tsx  # 7 tests
│   ├── ProjectCard.test.tsx      # 7 tests
│   ├── ContactSection.test.tsx   # 6 tests
│   ├── ContactForm.test.tsx      # 7 tests
│   └── Footer.test.tsx           # 8 tests
│
└── integration/
    └── page.test.tsx             # 11 tests
```

**Total: 69 tests unitaires + d'intégration**

---

## ✅ Couverture de Test

### Composants Testés

| Composant | Tests | Couverture |
|-----------|-------|-----------|
| HeroSection | 6 | ✅ |
| AboutSection | 8 | ✅ |
| SkillsSection | 9 | ✅ |
| ProjectsSection | 7 | ✅ |
| ProjectCard | 7 | ✅ |
| ContactSection | 6 | ✅ |
| ContactForm | 7 | ✅ |
| Footer | 8 | ✅ |
| Page (intégration) | 11 | ✅ |

### Ce qui est Testé

#### 🎨 HeroSection
- ✅ Rendu sans erreur
- ✅ Affichage du nom "Ewen Héas"
- ✅ Description "Développeur Fullstack"
- ✅ Badge "Master 2"
- ✅ Deux boutons CTA présents
- ✅ Ancres de navigation correctes

#### ℹ️ AboutSection
- ✅ Rendu avec ID "about"
- ✅ Titre "À propos de moi"
- ✅ Expérience (5 ans, Master 2)
- ✅ Carte formation
- ✅ Carte expérience
- ✅ Carte approche
- ✅ Statistiques (5+, 30+)

#### 🛠️ SkillsSection
- ✅ Rendu avec ID "skills"
- ✅ Titre "Mes compétences"
- ✅ 3 catégories (Frontend, Backend, Outils)
- ✅ Icons émojis
- ✅ Technologies listées (React, Node.js, etc.)
- ✅ Section "Autres compétences"

#### 📁 ProjectsSection
- ✅ Rendu avec ID "projects"
- ✅ Titre "Mes projets"
- ✅ 4 projets affichés (PlateformeX, Dashboard, E-commerce, Mobile)
- ✅ Emojis de projets
- ✅ Descriptions visibles
- ✅ Bouton CTA "Démarrer un projet"

#### 🎯 ProjectCard
- ✅ Rendu en tant que lien
- ✅ Titre affiché
- ✅ Description complète
- ✅ Emoji présent
- ✅ Tags affichés (multiples)
- ✅ Lien "En savoir plus"

#### 📧 ContactSection
- ✅ Rendu avec ID "contact"
- ✅ Titre "Travaillons ensemble"
- ✅ Description
- ✅ Informations de contact
- ✅ Liens sociaux
- ✅ Formulaire présent

#### ✍️ ContactForm
- ✅ Rendu sans erreur
- ✅ Tous les champs (nom, email, sujet, message)
- ✅ Validation des champs obligatoires
- ✅ Validation du format email
- ✅ Message d'erreur pour champs vides
- ✅ Message d'erreur pour email invalide
- ✅ Message de succès après soumission
- ✅ Réinitialisation du formulaire après succès

#### 🔗 Footer
- ✅ Rendu avec nom
- ✅ Logo "EH"
- ✅ Navigation complète
- ✅ Ressources visibles
- ✅ Copyright avec année courante
- ✅ Mentions légales
- ✅ Politique de confidentialité
- ✅ Description du développeur

#### 🏠 Page Intégration
- ✅ Rendu sans erreur
- ✅ Section Hero présente
- ✅ Section About (ID "about")
- ✅ Section Skills (ID "skills")
- ✅ Section Projects (ID "projects")
- ✅ Section Contact (ID "contact")
- ✅ Footer présent
- ✅ Navigation anchors correctes
- ✅ Hiérarchie de headings correcte
- ✅ Contenu principal des sections
- ✅ Structure sémantique

---

## 🔄 GitHub Actions - CI/CD

### Workflow: `main.yml`

Le workflow GitHub Actions exécute automatiquement:

```
Push/PR → Checkout
           ↓
         Analyze (SonarQube)
           ↓
         Test (NOUVEAU!)
           ├─ npm ci
           ├─ npm test --coverage
           └─ Upload coverage report
           ↓
         Build
           ├─ npm run build
           ├─ Docker build
           └─ Push to registry
           ↓
         Deploy
```

### Statut du Build

Après chaque push/PR, vérifiez:
1. ✅ **Analyze** - Code quality (SonarQube)
2. ✅ **Test** - Tests passent + couverture OK
3. ✅ **Build** - Application build
4. ✅ **Deploy** - Déploiement sur le serveur

### Blocage du Merge

Le merge est bloqué si:
- ❌ Les tests échouent
- ❌ La couverture est trop basse (< 70%)
- ❌ Le build échoue

---

## 📊 Rapports de Couverture

### Générer localement
```bash
npm run test:coverage
```

Fichiers générés:
- `coverage/lcov.html` - Rapport HTML détaillé
- `coverage/coverage-summary.json` - Résumé JSON
- Console output avec statistiques

### Consulter le rapport
```bash
# Ouvrir dans le navigateur
open coverage/lcov.html  # macOS
start coverage/lcov.html # Windows
xdg-open coverage/lcov.html # Linux
```

---

## 🔍 Exemple: Lancer les Tests

### 1. Installation des dépendances (première fois)
```bash
npm install
```

### 2. Lancer les tests
```bash
npm test
```

Output exemple:
```
 PASS  src/__tests__/integration/page.test.tsx
 PASS  src/__tests__/components/HeroSection.test.tsx
 PASS  src/__tests__/components/AboutSection.test.tsx
 PASS  src/__tests__/components/SkillsSection.test.tsx
 PASS  src/__tests__/components/ProjectsSection.test.tsx
 PASS  src/__tests__/components/ProjectCard.test.tsx
 PASS  src/__tests__/components/ContactSection.test.tsx
 PASS  src/__tests__/components/ContactForm.test.tsx
 PASS  src/__tests__/components/Footer.test.tsx

Test Suites: 9 passed, 9 total
Tests:       69 passed, 69 total
Snapshots:   0 total
Time:        12.345s
Coverage:    74.23% (target: 70%)
```

### 3. Mode watch pendant le développement
```bash
npm run test:watch

# Appuyez sur:
# - 'a' pour lancer tous les tests
# - 'p' pour filtrer par nom de fichier
# - 'q' pour quitter
```

---

## 🐛 Dépannage

### Les tests échouent

1. **Vérifier les dépendances**
   ```bash
   npm ci
   ```

2. **Vérifier la syntaxe**
   ```bash
   npm run lint
   ```

3. **Lancer en verbose**
   ```bash
   npm test -- --verbose
   ```

4. **Vérifier les fichiers modifiés**
   ```bash
   npm test -- --onlyChanged
   ```

### Port déjà utilisé
```bash
# Les tests utilisent jsdom, pas de port réel
# Pas de problème de port normalement
```

### Coverage report vide
```bash
# Générer le rapport
npm run test:coverage

# Vérifier les fichiers
ls coverage/
```

---

## 📝 Ajouter des Tests

### Template pour un nouveau test
```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('should render without crashing', () => {
    render(<MyComponent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should display specific text', () => {
    render(<MyComponent />);
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });
});
```

### Best Practices

✅ **À Faire**
- Tester le comportement, pas l'implémentation
- Utiliser `screen.getByRole` quand possible
- Tester l'UX utilisateur
- Isoler les tests

❌ **À Éviter**
- Tester les détails internes
- Trop de mocks
- Tests aléatoires (flaky)
- Ignorer les tests difficiles

---

## 📚 Ressources

- **Jest Docs**: https://jestjs.io/docs/getting-started
- **React Testing Library**: https://testing-library.com/docs/react-testing-library/intro
- **Testing Best Practices**: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

---

## 📞 Support

Pour les questions ou problèmes avec les tests:
1. Vérifier la documentation ci-dessus
2. Consulter les logs du test qui échoue
3. Vérifier le commit qui a cassé le test

---

✨ **Les tests assurent la qualité et la stabilité du portfolio!**
