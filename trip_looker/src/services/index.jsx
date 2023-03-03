const urlBackend = import.meta.env.VITE_BACKEND_URL;

export const getAllPostsService = async (token) => {
  const response = await fetch(`${urlBackend}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // para obtener todos los posts y lo hacemos con un fetch a nuestra url backend

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message); // Ya no se ejecutaría la petición
  }
  return json.data;
};

export const getFilterPostsService = async ({
  token,
  categoria,
  lugar,
  direccion,
}) => {
  // para obtener los posts filtrados y lo hacemos con un fetch a nuestra url backend
  const response = await fetch(
    `${urlBackend}/posts?categoria=${categoria}&lugar=${lugar}&direccion=${direccion}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message); // Ya no se ejecutaría la petición
  }
  return json.data;
};

export const getSinglePostService = async (id) => {
  const response = await fetch(`${urlBackend}/posts/${id}`); // obtenemos el post por el id del post
  const json = await response.json();

  if (!response.ok) {
    // la respuesta será ok cuando sea menor de 300
    throw new Error(json.message); // usamos el error que creamos en backend
  }

  return json.data;
};

export const logInUserService = async ({ email, password }) => {
  // para loggearnos y obtener el token
  const response = await fetch(`${urlBackend}/usuarios/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyDataService = async (token) => {
  // para obtener el usuario que está loggeado en el momento
  const response = await fetch(`${urlBackend}/usuarios`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserPostsService = async (id, token) => {
  // obtiene los posts subidos por el usuario que indiquemos mediante el id
  const response = await fetch(`${urlBackend}/usuarios/${id}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ data }) => {
  // post a la BBDD con un nuevo usuario
  const response = await fetch(`${urlBackend}/usuarios`, {
    method: "POST",
    body: data,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const sendPostService = async ({ data, token }) => {
  // postear la experiencia a la BBDD
  const response = await fetch(`${urlBackend}/posts`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const votePostService = async ({ token, id, voto }) => {
  // postear voto a la BBDD
  const response = await fetch(`${urlBackend}/posts/${id}/votar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      voto,
    }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
};
