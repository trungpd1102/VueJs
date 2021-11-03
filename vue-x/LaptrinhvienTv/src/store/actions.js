export default {
    updateProfile({ commit, getters }) {
        let name = getters.name
        console.log(name);
        // context laf store o trang thai hien tai
        commit('setName', 'Pham Duc Trung');
    }
}