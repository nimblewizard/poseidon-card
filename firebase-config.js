/* Paste the web app config from Firebase console:
   Project settings → General → Your apps → Web app → "npm" / "Config".
   Until this is filled in, the team sign-up and profile pages show a setup notice
   and the default card at the base URL keeps working as before. */
window.FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
window.FIREBASE_READY = () => !!(window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey && window.FIREBASE_CONFIG.projectId);
