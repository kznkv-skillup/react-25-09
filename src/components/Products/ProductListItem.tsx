import { Button, Card, CardContent, TextField } from '@mui/material'
import './ProductListItem.css'

type ProductListItemType = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    image,
}: ProductListItemType) => {
    return (
        <Card className="product-list-item" variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt={title} />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity}Gb</div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Button variant="outlined">-</Button>
                    <TextField size="small" value="1" />
                    <Button variant="outlined">+</Button>
                </div>
                <div className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
