import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import { Navbar } from "@features/navbar";
import Header from "@features/header/components/Header/Header";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <aside className={styles.side}>
        <Navbar />
      </aside>
      <div className={styles.headerMain}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
