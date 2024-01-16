import { Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const orderSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                }
            )

            setOrderData({
                name: data.name,
                address: data.address,
            })

            setIsOrderSend(true)
        } catch (e) {
            alert(e)
        }
    }

    const renderForm = () => {
        return (
            <form onSubmit={orderSend}>
                <div>
                    <input
                        type="text"
                        value={orderData.name}
                        placeholder="Your name"
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={orderData.address}
                        placeholder="Your address"
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name}, thanks for your order!</div>
                <div>Address: {orderData.address}</div>
            </div>
        )
    }

    return (
        <>
            <Typography variant="h4" component={'h1'}>
                Checkout
            </Typography>

            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}

export default CheckoutPage
