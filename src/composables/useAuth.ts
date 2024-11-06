import usersData from '@/assets/users.json'
import { ref } from 'vue'

const user = ref(null);

export function useAuth() {
  function login (email, password) {
    const foundUser = usersData.find(
      user => user.email === email && user.password === password
    );

    if (foundUser) {
      user.value = { ...foundUser, password: '' };

      const token = new Date().toISOString();
      localStorage.setItem('token', token);
      localStorage.setItem('currentUser', JSON.stringify(user.value))

      return true;
    }
    return false;
  }


  function logout() {
    user.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');

  }

  function isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  function getCurrentUser() {
    if (!user.value && localStorage.getItem('currentUser')) {
      user.value = JSON.parse(localStorage.getItem('currentUser') || '{}');
    }
    return user;
  }

  function updateUserProfile(updatedData) {
    user.value = { ...user.value, ...updatedData };
    localStorage.setItem('currentUser', JSON.stringify(user.value));
  }

  return {
    login,
    logout,
    isAuthenticated,
    getCurrentUser,
    updateUserProfile,
    user,
  };
}
