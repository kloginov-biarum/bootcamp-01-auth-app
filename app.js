const languageSelect = document.getElementById('languageSelect');
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

const translations = {
  en: { login: 'Login', username: 'Username', password: 'Password' },
  es: { login: 'Iniciar sesión', username: 'Usuario', password: 'Contraseña' },
  fr: { login: 'Se connecter', username: "Nom d'utilisateur", password: 'Mot de passe' }
};

function applyLanguage(lang) {
  const t = translations[lang] || translations.en;
  loginButton.textContent = t.login;
  usernameInput.placeholder = t.username;
  passwordInput.placeholder = t.password;
}

languageSelect.addEventListener('change', (e) => {
  applyLanguage(e.target.value);
});

// Initialize UI
applyLanguage(languageSelect.value);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();

  // Intentional bug: Any password is accepted. Only username is validated.
  if (username === 'test_user') {
    try {
      // Store selection (success page intentionally ignores it → bug #2)
      localStorage.setItem('selectedLanguage', languageSelect.value);
    } catch (_) {}
    window.location.href = './success.html';
    return;
  }

  errorMessage.textContent = 'Invalid username';
});


