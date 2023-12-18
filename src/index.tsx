import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat quibusdam tempore recusandae autem fuga praesentium
                consequuntur, voluptas assumenda perferendis, rerum
                reprehenderit consequatur, molestias iure. Commodi fugit quasi
                accusamus aperiam corporis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                provident aliquam labore sed fugiat dolore cum placeat?
                Blanditiis, mollitia perferendis eveniet, id veritatis ad rem,
                voluptatem reiciendis voluptas voluptate sequi.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content />
        </>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
