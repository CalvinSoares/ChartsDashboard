import createStore from 'react-auth-kit/createStore';

const store = createStore({
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

export default store