import { Product, getProductsObject, productsArray } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[+productId].title}:{' '}
                        {productsInCart[+productId]}
                    </div>
                ))}
            </div>
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (sum, productId) =>
                        sum +
                        productsObject[+productId].price *
                            productsInCart[+productId],
                    0
                )}
                $
            </div>
        </div>
    )
}

export default CartHeader
