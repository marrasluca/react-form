//permette dichiarare e gestire lo stato di un componente di react
import { useState } from "react"

function App() {

  //posts array contenente i posts mentre usePosts la funzione che permette di aggiornarlo
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('');


  const handleNewPost = (e) => { // (e) è l'evento che viene passato quando l'utente interagisce con l'input
    setNewPost(e.target.value) //(e.target.value) è il valore attuale dell'input
  }


  //funzione che gestisce il momento in cui l'utente invia il modulo
  const handleSubmit = (e) => {
    e.preventDefault()
    setPosts((prevPosts) => [...prevPosts, newPost]);
    setNewPost('')
  }

  return (
    <>
      <div className="container">
          <h2>Aggiungi posts</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" //input che permette all' utente di inserire il nuovo post
            value={newPost}
            onChange={handleNewPost}
            placeholder="Inserire un post"
            />
              <button className="btn btn-primary">aggiungi un post</button>
          </form>

          <h2>Lista Posts</h2>
        {
            posts.length > 0 ? (
            <ul>
                {
                    posts.map((element, index) => (
                      <li key={index}>{element}</li> 
                    ))
                  }
              </ul>
            ) : (
              <p>Non ci sono posts</p>
            )
          }

      </div>
    </>
  )
}

export default App
