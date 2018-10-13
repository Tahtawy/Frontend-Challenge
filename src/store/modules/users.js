import User from "../../api/userService";

const defaultState = {
    currentUserId: null,
    firstUserId: null,
    currentUserObject: {}
};

const getters = {
    firstUserId: state => {
        state.firstUserId = User.getFirstUserId();
        return state.firstUserId;
    }
}

export default {
    state: defaultState,
    getters: getters
}