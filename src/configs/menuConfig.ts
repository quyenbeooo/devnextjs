export interface MenuItemType {
  id: string;
  label: string;
  icon?: string;
  path?: string;
}

export const menuItems: MenuItemType[] = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏠',
    path: '/',
  },
  {
    id: 'notes',
    label: 'Notes',
    icon: '📝',
    path: '/notes',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    path: '/settings',
  },
];
