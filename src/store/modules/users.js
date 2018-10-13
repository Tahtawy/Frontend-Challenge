import User from "../../api/userService";

const defaultState = {
    currentUserLogin: null,
    firstUserId: null,
    currentUserObject: {}
};

const getters = {
    firstUserId: state => {
        state.firstUserId = User.getFirstUserId();
        return state.firstUserId;
    },
    currentUserObject: state => {
        state.currentUserObject = User.getSingleUser(state.currentUserLogin);
        return state.currentUserObject;
    }
};

const mutations = {
    Current_User_Id: (state, userLogin) => {
        state.currentUserLogin = userLogin;
    }
}

export default {
    state: defaultState,
    mutations,
    getters
}