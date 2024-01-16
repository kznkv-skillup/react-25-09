import Footer from './Footer'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CartPage from 'pages/CartPage/CartPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {}

const App = (props: Props) => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(
                'https://run.mocky.io/v3/1a22a9f2-a16e-4132-8e4d-a06cfae74ebf'
            )
            setProducts(data.products)
        }
        fetchData()
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                maxWidth="lg"
                sx={{
                    padding: '50px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}

export default App
