import styles from './Header.module.scss';

interface HeaderProps {
  onMenuClick?: () => void;
  isSidebarOpen?: boolean;
}

function Header({ onMenuClick, isSidebarOpen = true }: HeaderProps) {
    return (
        <header className={styles.wrapper}>
            <button 
              className={`${styles.hamburger} ${isSidebarOpen ? styles.open : ''}`}
              onClick={onMenuClick} 
              aria-label="Toggle sidebar"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className={styles.title}>Notebook App</h1>
        </header>
    );
}

export default Header;