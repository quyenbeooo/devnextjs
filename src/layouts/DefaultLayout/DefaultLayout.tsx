import type { ReactNode } from "react";
import { useState } from "react";
import Header from "../../components/Headers/Header";
import Sidebar from "../../components/Sidebars/Sidebar";
import styles from "./DefaultLayout.module.scss";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.container}>
      <Header onMenuClick={toggleSidebar} isSidebarOpen={sidebarOpen} />
      <div className={styles.mainWrapper}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default DefaultLayout;
