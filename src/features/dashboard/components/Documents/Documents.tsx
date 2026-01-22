import { fetchDocuments, selectDocuments } from "@features/dashboard/state";
import { useDispatch, useSelector } from "@store";
import { ActionCard } from "@ui";
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
    <ActionCard title="Documents" subtitle="Last AI Documents Reviews">
      <div className={styles.content}>
        <ul className={styles.list}>
          {documents.map((d) => (
            <DocumentInfo
              key={d.name}
              name={d.name}
              size={d.size}
              format={d.format}
            />
          ))}
        </ul>
        {/* TODO: show more */}
      </div>
    </ActionCard>
  );
}

export default Documents;
