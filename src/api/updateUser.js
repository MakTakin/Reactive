export const fetchUpdateUser = async (url, user ) => {
    const bodyRequest = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    try {
        await fetch(url, bodyRequest)
    } catch (e) {
        console.log(e)
    }
}