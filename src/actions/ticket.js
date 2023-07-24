
import { fetchData } from './utils/fetchData'

// const url = process.env.REACT_APP_SERVER_URL + '/tickets'
const url = "http://localhost:3001" + '/tickets'

export const getTicketsData = async (dispatch) => {
    try {
        const result = await fetchData(
            {
                url,
                method: 'GET',
            },
            dispatch
        )

        if (result) {
            dispatch({
                type: "UPDATE_ALERT",
                payload: {
                    open: true,
                    severity: 'success',
                    message: 'Got all tickets data from server'
                }
            })

            dispatch({
                type: 'ALL_TICKETS',
                tickets: result.tickets
            })
        }

    } catch (err) {
        console.log("Failed to load tickets data " + err.message)

        dispatch({
            type: 'UPDATE_ALERT',
            payload: {
                open: true,
                severity: 'error',
                message: err.message
            }
        })
    }
}