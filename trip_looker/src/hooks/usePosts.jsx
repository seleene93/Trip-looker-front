import { useEffect, useState } from "react";
import { getAllPostsService } from "../services";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true); // como es normal al hacer la petición saldrá que está cargando los tweets
        const data = await getAllPostsService();

        setPosts(data); // ahora tweets tendra como valor data que son los datos que obtenemos de la BBDD
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Haya o no haya error se va a ejecutar
      }
    };

    loadPosts();
  }, []);
  return { posts, error, loading };
};
