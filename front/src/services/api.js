const host = 'http://localhost:8080/api';
const url = (path) => `${host}/${path}`;

export const get = async (path) => {
  const response = await fetch(url(path));
  const result = await response.json();

  return result;
};

const header = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const post = async (path, body) => {
  const options = {
    ...header,
    method: 'POST',
    body: JSON.stringify(body),
  };

  const response = await fetch(url(path), options);
  const result = await response.json();
  return result;
};
