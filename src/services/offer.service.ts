export class OfferService {
    static async getAll() {
        try {
            const response = await fetch('http://localhost:3000/api/offers')
            if (!response.ok) {
                const errorData = await response.json().catch(()=>null)
                throw new Error(errorData?.message || 'Unknown Error')
            }
            const data = await response.json()
            return data
        } catch (error) {
            const msg = error instanceof Error ? error.message : 'Error desconocido'
            throw new Error(msg)
        }
    }
}