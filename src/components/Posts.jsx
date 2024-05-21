import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './Atom';

function Posts() {
  const [user] = useAtom(userAtom);
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    // Simuler une requête pour récupérer les posts depuis le backend
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    // Ici, tu ferais une requête à ton backend pour récupérer les posts
    // Par exemple :
    // fetch('URL_DU_BACKEND/posts')
    //   .then(response => response.json())
    //   .then(data => setPosts(data))
    //   .catch(error => console.error('Erreur lors de la récupération des posts:', error));

    // Pour l'exemple, je simule des données de posts
    const simulatedPosts = [
      { id: 1, content: "Das ist einen gÜT post" },
      { id: 2, content: "Roooooaaaar" },
      { id: 3, content: "What are we doing here ?" }
    ];
    setPosts(simulatedPosts);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    // Ajouter le nouveau post à la liste des posts
    const newPost = { id: posts.length + 1, content: newPostContent, username: user.username };
    setPosts([...posts, newPost]);
    setNewPostContent('');

    // Ici, tu ferais une requête pour sauvegarder le nouveau post sur ton backend
    // Par exemple :
    // fetch('URL_DU_BACKEND/posts', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newPost)
    // })
    //   .then(response => response.json())
    //   .then(data => setPosts([...posts, data]))
    //   .catch(error => console.error('Erreur lors de la création du post:', error));
  };

  return (
    <div className="container mt-4">
      {user ? (
        <div>
          <h2 className=' bg-white'>Liste des posts</h2>
          <ul className="list-group mb-4">
            {posts.map(post => (
              <li key={post.id} className="list-group-item">
                <strong>{post.username}:</strong> {post.content}
              </li>
            ))}
          </ul>
          <form onSubmit={handleCreatePost}>
            <div className="mb-3">
              <label htmlFor="newPostContent" className="form-label">Nouveau post</label>
              <textarea
                id="newPostContent"
                className="form-control"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Créer le post</button>
          </form>
        </div>
      ) : (
        <p>Connectez-vous pour voir les posts</p>
      )}
    </div>
  );
}

export default Posts;

