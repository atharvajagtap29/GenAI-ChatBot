import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div className={styles.Navbar}>
                <h2 className='h2-Navbar'>Chatter<span className='span-1-Navbar'>Box</span></h2>
                <div className={styles.ButtonsContainer}>
                    <button type="button" className="btn btn-outline-light">HOME</button>
                    <button type="button" className="btn btn-outline-light">LOGIN</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
