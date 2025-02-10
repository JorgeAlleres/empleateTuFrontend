import Offer from "../models/Offer"
import { FetchAPI } from "../utils/FetchAPI"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export class OfferService {
    static async getAll() {
        return await FetchAPI(API_BASE_URL+'/offers')
    }

    static async search(title?:string) {
        let url = API_BASE_URL+'/offers?'
        if(title) url += 'title='+title
        return await FetchAPI(url)
    }

    static async getById(id: number) {
        return await FetchAPI(API_BASE_URL+'/offers/'+id)
    }

    static async create(offer: Partial<Offer>) {
        return await FetchAPI(API_BASE_URL+'/offers',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(offer),
                credentials: 'include'
            }
        )
    }

    static async update(id:number,offer: Partial<Offer>) {
        return await FetchAPI(API_BASE_URL+'/offers/'+id,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(offer),
                credentials: 'include'
            }
        )
    }

    static async delete(id: number) {
        return await FetchAPI(API_BASE_URL+'/offers/'+id,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        )
    }
}