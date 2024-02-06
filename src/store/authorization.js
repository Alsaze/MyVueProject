export const authorization = {
    state: () => ({
        isAuthorization: false,
        isAccountExitShown: false,
    }),
    getters: {},
    mutations: {
        setIsAuthorization(state, isAuthorization) {
            state.isAuthorization = isAuthorization;
        },
        setIsAccountExitShown(state, isAccountExitShown) {
            state.isAccountExitShown = isAccountExitShown;
        }
    },
    actions: {}
}