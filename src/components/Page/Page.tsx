import type { PageProps } from "./Page.types";
import styles from "./Page.module.scss";

function Page({ children }: PageProps) {
  return <div className={styles.page}>{children}</div>;
}

export default Page;
