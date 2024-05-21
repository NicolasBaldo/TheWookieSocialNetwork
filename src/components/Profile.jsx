import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './Atom';

function Profile() {
  const [user] = useAtom(userAtom);
  const [postContent, setPostContent] = useState('');

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    // Ajoute ici la logique pour soumettre le post
    console.log('Post soumis :', postContent);
    // Réinitialise le contenu du post après soumission
    setPostContent('');
  };

  return (
    <div className="container mt-4">
      {user && (
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/Chewie.webp" className="card-img-top" alt="Photo de profil" />
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text">ROOOOOaaar rooooooar roooooar ROOOOOOaaaaar ! roooooar Rooooar roooooar, roooooooaaar ROOOOOAAAAR ? HAHA ROOOOOOOOAAAAAaaaR!</p>
              </div>
            </div>

            {/* Formulaire pour créer un nouveau post */}
            <form onSubmit={handleSubmitPost} className="mt-4">
              <div className="mb-3">
                <label htmlFor="postContent" className="form-label">Nouveau Post</label>
                <textarea
                  className="form-control"
                  id="postContent"
                  rows="3"
                  value={postContent}
                  onChange={handlePostChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Poster</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
