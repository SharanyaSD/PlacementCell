const storagePrefix = 'placement_cell';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },

  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },

  getRole: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}role`) as string);
  },
  setRole: (role: number) => {
    window.localStorage.setItem(`${storagePrefix}role`, JSON.stringify(role));
  },

  getUser: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}user`) as string);
  },
  setUser: (user: number) => {
    window.localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
  },


};

export default storage;