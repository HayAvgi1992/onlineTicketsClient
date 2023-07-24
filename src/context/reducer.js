const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_ALERT':
            return { ...state, alert: action.payload }
        case 'ALL_TICKETS':
            return { ...state, tickets: action.tickets }
    }
}
export default reducer;