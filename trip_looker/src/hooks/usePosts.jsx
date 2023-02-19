import { useContext, useEffect, useState } from "react";
import { getAllPostsService, getUserPostsService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const usePosts = (id) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true); // como es normal al hacer la petición saldrá que está cargando los tweets
        const data = id
          ? await getUserPostsService(id, token)
          : await getAllPostsService();

        setPosts(data); // ahora tweets tendra como valor data que son los datos que obtenemos de la BBDD
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Haya o no haya error se va a ejecutar
      }
    };

    loadPosts();
  }, [id]);
  return { posts, error, loading };
};
