const host = 'http://localhost:8080/api';
const url = (path) => `${host}/${path}`;

export const get = async (path) => {
  const response = await fetch(url(path));

  checkError(response.status);

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

  checkError(response.status);

  const result = await response.json();
  return result;
};

export const deleteRequest = async (path) => {
  const options = { method: 'DELETE' };
  const response = await fetch(url(path), options);

  checkError(response.status);

  return { status: 200, message: 'Success' };
};

const ErrorCode = {
  '400': 400,
  '404': 404,
  '503': 503,
};

// エラーチェック
const checkError = (status) => {
  switch (status) {
    case ErrorCode[400]:
      throw new Error('エラーが発生しました。時間を置いて再度お試しください。');
    case ErrorCode[404]:
      throw new Error('エラーが発生しました。時間を置いて再度お試しください。');
    case ErrorCode[503]:
      throw new Error(
        'サーバーでエラーが発生しました。時間を置いて再度お試しください。',
      );
    default:
      return;
  }
};
