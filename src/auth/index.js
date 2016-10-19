import {router} from '../main'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('token')
    this.user.authenticated = false;
    state.go('/register');
  },

  checkAuth() {
    var jwt = localStorage.getItem('token')
    if(jwt) {
      this.user.authenticated = true
      state.go('/dashboard')
    }
    else {
      this.user.authenticated = false
      state.go('/register')
    }
  },

  getToken() {
    return localStorage.getItem('token');
  }

}