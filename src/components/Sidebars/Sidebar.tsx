import Menu from './Menu/Menu';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const handleMenuItemClick = () => {
    // Optional: Close sidebar after menu item click on mobile
    if (window.innerWidth <= 768) {
      onClose?.();
    }
  };

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
        onClick={onClose}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      />
      <aside className={`${styles.wrapper} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles.menuWrapper}>
          <Menu onItemClick={handleMenuItemClick} />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;