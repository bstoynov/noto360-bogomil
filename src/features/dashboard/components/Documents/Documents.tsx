import { fetchDocuments, selectDocuments } from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { Card, Icon, Link } from "@ui";
import { useEffect } from "react";
import styles from "./Documents.module.scss";
import DocumentInfo from "../DocumentInfo/DocumentInfo";

function Documents() {
  const dispatch = useDispatch();
  const documents = useSelector(selectDocuments);

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  // TODO: handle skeleton
  if (!documents) {
    return null;
  }

  return (
    <Card
      title="Documents"
      subtitle="Last AI Documents Reviews"
      actionComponent={<Icon name="dotsHorizontal" className={styles.dots} />}
    >
      <div className={styles.content}>
        <ul className={styles.list}>
          {documents.map(({ name, size, format }) => (
            <DocumentInfo key={name} name={name} size={size} format={format} />
          ))}
        </ul>
        <Link text="Show all" iconName="chevronDown" />
      </div>
    </Card>
  );
}

export default Documents;
