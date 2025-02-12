const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const getUsers = async () => {
    try{
        const response = await fetch(API_BASE_URL + '/users/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if(!response.ok){
            throw new Error('fallo al obtener los usuario')
        }
        return await response.json()
    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }

}