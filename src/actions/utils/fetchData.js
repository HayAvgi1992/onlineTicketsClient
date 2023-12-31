export const fetchData = async ({ url, method = 'POST', token = '', body = null }, dispatch) => {
    const headers = token ?
        { 'Content-Type': 'application/json', authorization: `Bearer ${token}` } :
        { 'Content-Type': 'application/json' }
    body = body ? { body: JSON.stringify(body) } : {};

    try {
        const response = await fetch(url, { method, headers, ...body })
        const data = await response.json()
        
        if (!data.success) throw new Error(data.message)
        else return data.result

    } catch (error) {
        console.log('Failed to fetchData :' + error);
        dispatch({
            type: 'UPDATE_ALERT',
            payload: { open: true, severity: 'error', message: error.message },
        });
    }

}
