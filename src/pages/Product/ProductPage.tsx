import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Product, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}

const ProductPage = ({
    productsObject = getProductsObject(productsArray),
}: Props) => {
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <Typography variant="h4" component="h1">
                {productsObject[+id!].title}
            </Typography>
            <div
                dangerouslySetInnerHTML={{
                    __html: productsObject[+id!].fullDescription!,
                }}
            ></div>
        </div>
    )
}

export default ProductPage
