const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const loginUser = async (email: string, password: string) => {
    try{
        const response = await fetch(API_BASE_URL + '/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {email, password} ),
                credentials: 'include'
            }
        )
        if(!response.ok){
            throw new Error('Error al iniciar sesión')
        }
        return await response.json()

    }catch(error){
        const msg = error instanceof Error ? error.message : 'Error desconocido'
        throw new Error(msg)
    }
}