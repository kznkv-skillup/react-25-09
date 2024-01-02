import { Container } from '@mui/material'
import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (count: number, price: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
        >
            <Home addProductToCart={addProductToCart} />
        </Container>
    )
}

export default Main
