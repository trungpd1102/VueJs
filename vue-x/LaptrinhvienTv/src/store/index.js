import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const storeConfig = {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
}

export default storeConfig