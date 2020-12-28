export async function SetAuthTokenRequest(request) {
  request.headers.common.Accept = 'application/json';
  // request.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return request;
}

export const checkTokenExpired = (error) => {
  const { response: { status } } = error;
  if (status === 403) {
    // await localStorage.clear();
    window.location = '/';
  }
};