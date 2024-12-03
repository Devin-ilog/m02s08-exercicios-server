import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <p>DevinFood | {new Date().getFullYear()}</p>
        </footer>
    )
}