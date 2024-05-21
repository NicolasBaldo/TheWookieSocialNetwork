import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './Atom';

function Auth() {
  const [user, setUser] = useAtom(userAtom);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Identifiants invalides');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.user);
        localStorage.setItem('jwt', data.jwt);
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleSignup = () => {
    fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: username, // Utilise le nom d'utilisateur comme email pour simplifier
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        localStorage.setItem('jwt', data.jwt);
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('jwt');
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Déconnexion</button>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Connexion</button>
          <button onClick={handleSignup}>Inscription</button>
        </div>
      )}
    </div>
  );
}



export default Auth;
