import { Outlet } from "react-router-dom";
import Navbar from "@features/navbar/components/Navbar/Navbar";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.side}>
        <Navbar />
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
