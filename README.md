# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# 🎯 AI Mock Desk

AI Mock Desk is an intelligent web application that simulates real-time mock interviews or skill assessments using **AI, webcam, and microphone** integration.  
It allows users to create profiles, answer interview questions, and receive **automated feedback and performance scores** based on their responses.

---

## 🚀 Features

### 🧑‍💼 User Profile
- Add and manage user profiles (name, role, etc.)
- Store interview history and past scores
- Secure authentication and user data management

### 💬 Question Section
- Dynamically display AI-generated or pre-defined questions
- Support for multiple question categories (Technical, HR, Aptitude)
- Timer and progress tracking for each session

### 🎤 Audio & 🎥 Video Integration
- Access webcam and microphone for real-time interview simulation  
- Record and analyze user responses
- Optional AI-based facial expression and voice tone analysis

### 🧠 AI Feedback and Scoring
- AI evaluates answers using Natural Language Processing (NLP)
- Generates **feedback report** with:
  - Strengths and areas for improvement
  - Confidence and communication score
  - Overall performance percentage

### 📊 Result Dashboard
- Visual representation of performance metrics
- Score history comparison across multiple sessions
- Downloadable feedback report

---

## 🛠️ Tech Stack

| Layer | Technology Used |
|-------|------------------|
| Frontend | React.js + Tailwind CSS |
| Backend | Node.js + Express |
| Database | MongoDB (Mongoose ORM) |
| AI/NLP | OpenAI API / Custom AI model |
| Media | WebRTC (for webcam & mic access) |
| Authentication | JWT / Google OAuth |


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/ai-mock-desk.git
cd ai-mock-desk

# View

<img width="1366" height="606" alt="front1" src="https://github.com/user-attachments/assets/674f69e8-8a4b-4498-9b0d-6f4c0bb0d901" />


<img width="1366" height="601" alt="front2" src="https://github.com/user-attachments/assets/896d8d32-deeb-4c66-ab9f-4be007740a2f" />

<img width="1366" height="587" alt="front3" src="https://github.com/user-attachments/assets/c41500ca-20ef-400c-86c2-ce82661b4cd4" />

<img width="1366" height="597" alt="front4" src="https://github.com/user-attachments/assets/72d7e627-496e-4c45-aeae-573e4d17f6ea" />
<img width="1366" height="580" alt="front5" src="https://github.com/user-attachments/assets/eb3913f7-128f-4b34-8a31-d9e320234ef0" />

<img width="1366" height="609" alt="front6" src="https://github.com/user-attachments/assets/6a6bdcdd-2a88-47e5-aeb3-bbc1162bcd12" />
<img width="1366" height="561" alt="front7" src="https://github.com/user-attachments/assets/edccbfe0-8cb6-4c8f-aa26-8c418364b833" />
<img width="1366" height="583" alt="front8" src="https://github.com/user-attachments/assets/31143ec6-ec11-43eb-9aa3-82a81a5e38fc" />


