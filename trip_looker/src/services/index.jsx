const urlBackend = import.meta.env.VITE_BACKEND_URL;

export const getAllPostsService = async () => {
  const response = await fetch(`${urlBackend}/posts`);

  // para obtener todos los tweets y lo hacemos con un fetch a nuestra url backend

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message); // Ya no se ejecutaría la petición
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
