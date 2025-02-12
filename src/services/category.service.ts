import Category from "../models/Category"
import { FetchAPI } from "../utils/FetchAPI"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export class CategoryService {
    static async getAll() {
        return await FetchAPI(API_BASE_URL+'/categories?')
    }

    static async getById(id: number) {
        return await FetchAPI(API_BASE_URL+'/categories/'+id)
    }

    static async create(category: Partial<Category>) {
        return await FetchAPI(API_BASE_URL+'/categories',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category),
                credentials: 'include'
            }
        )
    }

    static async update(id:number,category: Partial<Category>) {
        return await FetchAPI(API_BASE_URL+'/categories/'+id,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category),
                credentials: 'include'
            }
        )
    }

    static async delete(id: number) {
        return await FetchAPI(API_BASE_URL+'/categories/'+id,
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