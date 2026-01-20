export const URL = 'https://dogsapi.origamid.dev/json';

export const PostToken = (body) => {
  return {
    url: URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const GetUser = (token) => {
  return {
    url: URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const PostValidateToken = (token) => {
  return {
    url: URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
};

export const PostCreateUser = (body) => {
  return {
    url: URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PhotoPost = (FormData, token) => {
  return {
    url: URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: FormData,
    },
  };
};
export const GetPhotos = ({ total, page, user }) => {
  return {
    url: `${URL}/api/photo?_total=${total}&_page=${page}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
};

// // query: ?_total=1&_page=1&_user=6
// const PHOTO_GET = {
//   endpoint: {
//     photos: '/api/photo',
//     photos_query: '/api/photo/?_total=9&_page=1&_user=0',
//     photo: '/api/photo/:id',
//   },
//   method: 'GET',
// };
