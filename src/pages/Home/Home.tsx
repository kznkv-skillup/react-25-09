import ProductList from 'components/Products/ProductList'
import Reviews from 'components/Reviews/Reviews'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <ProductList />
            <Reviews />
        </>
    )
}

export default Home
