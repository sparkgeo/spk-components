import styles from "./Catalog.module.css";
import { type BaseCatalog, CatalogCard } from "../core/CatalogCard";

export interface CatalogProps {
    catalogs: BaseCatalog[];
    maxDescriptionLength?: number;
}

export const Catalog = ({ catalogs, ...props }: CatalogProps) => (
    <div className={styles.catalogContainer} {...props}>
        <div className={styles.catalogHeader}>
            <h2>Catalogs</h2>
            <span>{catalogs.length}</span>
        </div>
        <div className={styles.catalogList}>
            {catalogs.map((catalog) => (
                <CatalogCard {...catalog} key={catalog.id} />
            ))}
        </div>
    </div>
);
