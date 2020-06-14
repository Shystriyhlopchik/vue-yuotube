import firebase from 'firebase/app'

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) { // вход в систему
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({ // создаем нового пользователя в БД
          bill: 10000,
          name,
        });
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({commit}) { // выход из ситемы
      await firebase.auth().signOut()
      commit('clearInfo')
    }
  } 
}
