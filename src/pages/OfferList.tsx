import { ChangeEvent, useEffect, useState } from "react";
import Offer from "../models/Offer";
import { OfferService } from "../services/offer.service";
import { Link, useSearchParams } from "react-router-dom";

function OfferList() {
    const [offers, setOffers] = useState<Offer[]>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const [queryParams, setQueryParams] = useSearchParams()
    const titleQuery = queryParams.get('title') || ''
    useEffect(() => {
        OfferService.search(titleQuery)
            .then(setOffers)
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
    }, [titleQuery])

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value
        setQueryParams(newTitle ? {title: newTitle} :  {})
    }

    return (
        <div className="flex flex-col">
            <h1>Listado de ofertas</h1>

            <Link to="/offers/new">Añadir nueva oferta</Link>

            <input  value={titleQuery} onChange={handleSearchChange} placeholder="Buscar por título"/>

            {loading && <p>Loading ...</p>}
            {error && <p>{error}</p>}
            {offers?.length === 0 && <p>No hay ofertas disponibles</p>}

            {offers?.map(offer =>
                <div key={offer.id}>
                    {offer.title}
                    <Link to={`/offers/${offer.id}`}>Ver</Link>
                    <Link to={`/offers/edit/${offer.id}`}>Editar</Link>
                    <button>Borrar</button>
                </div>
            )}
        </div>
    )
}

export default OfferList