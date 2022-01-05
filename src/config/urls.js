export const API_BASE_URL = "https://mtechub-invoice-app.herokuapp.com";

export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/api/user/login')
export const SIGNUP = getApiUrl('/api/user/signup');

//not working api:

// export const API_BASE_URL = "https://mtechub-project1.herokuapp.com";

// export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

// export const LOGIN = getApiUrl('/user/login')
// export const SIGNUP = getApiUrl('/signup/user');