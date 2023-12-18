import classes from './Header.module.scss'
import clsx from 'clsx'

type HeaderType = {
    title: string
    num?: number
}

const Header = ({ title, num }: HeaderType) => {
    console.log(classes)
    return (
        <h1 className={'title'}>
            Hello world, {title} {num}
        </h1>
    )
}

export default Header
