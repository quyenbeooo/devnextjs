import { useNavigate, useLocation } from 'react-router-dom';
import { menuItems, type MenuItemType } from '../../../configs/menuConfig';
import styles from './Menu.module.scss';

interface MenuProps {
  onItemClick?: (item: MenuItemType) => void;
}

function Menu({ onItemClick }: MenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (item: MenuItemType) => {
    onItemClick?.(item);
    // Navigate to the path if available
    if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.id} className={styles.menuItem}>
            <button 
              className={`${styles.link} ${isActive(item.path) ? styles.active : ''}`}
              onClick={() => handleItemClick(item)}
              title={item.label}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.label}>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
