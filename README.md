
# 🎯 Qui – React Quiz App

Un quiz interactif simple et élégant créé avec **React**, **Vite** et **Tailwind CSS**.  
Testez vos connaissances générales en répondant à des questions à choix multiples dans un design moderne et responsive.

![Quiz screenshot](https://via.placeholder.com/800x450/6366f1/ffffff?text=Quiz+Screenshot)  


## ✨ Fonctionnalités

- Questions à choix multiples avec feedback immédiat (vert / rouge)
- Compteur de temps par question (Timer intégré)
- Score en temps réel + progression
- Écran de résultat avec pourcentage
- Navigation fluide avec React Router
- Design responsive (mobile, tablette, desktop)
- Possibilité de rejouer facilement
- Code modulaire et facile à personnaliser

## 🛠️ Technologies

- **React** 18 (avec Hooks)
- **Vite** (build rapide + HMR instantané)
- **Tailwind CSS** v3 (styling utilitaire)
- **React Router** v6 (navigation)
- **JavaScript (ES6+)**

## 🚀 Démarrage rapide

### Prérequis

- Node.js ≥ 18
- npm ou yarn ou pnpm

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/VOTRE_USERNAME/qui-game.git
cd qui-game

# 2. Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install

# 3. Lancer le serveur de développement
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrez ensuite : **http://localhost:5173**

## 📂 Structure du projet

```
src/
├── components/         # Composants réutilisables
│   ├── AnswerButton.jsx
│   ├── QuestionCard.jsx
│   ├── ScoreBoard.jsx
│   └── Timer.jsx
├── hooks/
│   └── useGameLogic.js # Logique principale du jeu
├── pages/              # Pages principales
│   ├── Game.jsx
│   └── Result.jsx
├── App.jsx
├── main.jsx
├── questions.js        # Toutes les questions du quiz
└── index.css           # Imports Tailwind + styles globaux
```

## 🛠 Personnalisation rapide

| Action                              | Emplacement                          |
|-------------------------------------|--------------------------------------|
| Modifier / ajouter des questions    | `src/data/questions.js`              |
| Changer la durée du timer           | `<Timer duration={10} ... />`        |
| Modifier les couleurs / design      | Classes Tailwind dans les composants |
| Ajouter une page d'accueil          | Créer `Home.jsx` + route dans App.jsx|
| Changer le titre / favicon          | `public/index.html` & `vite.config.js` |

## 🎮 Améliorations suggérées

- [ ] Page d'accueil avec choix de catégorie / difficulté
- [ ] Sauvegarde du meilleur score (localStorage)
- [ ] Mode sombre / clair (dark mode)
- [ ] Animations (framer-motion ou CSS)
- [ ] Catégories de questions (histoire, cinéma, sciences…)
- [ ] Classement local ou en ligne (Firebase / Supabase)
- [ ] Support multilingue (i18next)
- [ ] Questions avec images

## 🤝 Contribuer

Les contributions sont **très appréciées** !

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/super-cool-quiz`)
3. Committez vos changements (`git commit -m 'Ajout de la catégorie cinéma'`)
4. Pushez sur la branche (`git push origin feature/super-cool-quiz`)
5. Ouvrez une **Pull Request**


## ✉️ Contact

Pour toute question ou suggestion :

* **Auteur** : DAGBO KADY CHRIST-PHANUEL
* **Email** : [dagbokady@gmail.com](mailto:dagbokady@gmail.com)

---

**Dernière mise à jour : 26-01-2026** ✅

---
