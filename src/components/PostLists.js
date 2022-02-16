import Post from "./Post";
import { useEffect, useState } from "react";

function PostLists() {
    /* Variables d'état */
    const [posts, setPosts] = useState([]);

    /* Effet lors de la première exécution du composant */
    useEffect(() => {
        getPosts();
    }, []);

    /* Récupération des posts */
    const getPosts = async () => {
        // Requête GET vers http://localhost:8000/posts et on attends la réponse
        const response = await fetch("http://localhost:3002/", {
            method: "GET",
        });

        // Lecture du "flux" du corps de la réponse (on attends que la lecture soit complète)
        const data = await response.json();

        // Assignation des données à la variable d'état "posts"
        setPosts(data);
    };

    return (
        <div className="PostLists">
            {posts.map((postData, index) => (
                <Post key={index} content={postData}></Post>
            ))}
        </div>
    );
}
export default PostLists;
