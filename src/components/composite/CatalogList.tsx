import styles from "./CatalogList.module.css";
import { type BaseCatalog, CatalogCard } from "../core/CatalogCard";

export interface CatalogProps {
    catalogs: BaseCatalog[] | null | undefined;
    className?: string;
    isLoading?: boolean;
    maxDescriptionLength?: number;
}

const Loading = () => <div>Loading...</div>;

const Empty = () => <div>No catalogs available.</div>;

export const CatalogList = ({
    catalogs,
    isLoading,
    className,
    maxDescriptionLength,
    ...props
}: CatalogProps) => (
    <div className={`${className} ${styles.catalogContainer}`} {...props}>
        <div className={styles.catalogHeader}>
            <h2>Catalogs</h2>
            <span>{Array.isArray(catalogs) ? catalogs.length : 0}</span>
        </div>
        {isLoading ? (
            <Loading />
        ) : (
            <div className={styles.catalogList}>
                {Array.isArray(catalogs) ? (
                    catalogs.map((catalog) => (
                        <CatalogCard
                            {...catalog}
                            key={catalog.id}
                            maxDescriptionLength={maxDescriptionLength}
                        />
                    ))
                ) : (
                    <Empty />
                )}
            </div>
        )}
    </div>
);
