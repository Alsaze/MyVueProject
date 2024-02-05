export const authorization = {
    state: () => ({
        isAuthorization: true,
    }),
    getters: {},
    mutations: {
        setIsAuthorization(state, isAuthorization) {
            state.isAuthorization = isAuthorization;
        },
    },
    actions: {}
}