import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

type CartDataType = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataType>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = () => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <button>Add to Cart</button>
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
