import { useMemo, useState } from "react";
import { Button, Link } from "react-aria-components";

import { DateValue } from "react-aria";
import styles from "./CatalogCard.module.css";

type IndicatorTag = "API" | "Catalog";

const MAX_LENGTH = 250;

export interface CatalogCardProps {
    title: string;
    description: string;
    temporalExtent: [DateValue, DateValue?];
    indicatorTag?: IndicatorTag;
}

const Tag = ({ indicatorTag }: { indicatorTag: IndicatorTag }) => (
    <div
        className={styles.tag}
        style={{
            backgroundColor: indicatorTag === "API" ? "#FFC5003B" : "#00000010",
            color: indicatorTag === "API" ? "#A16B00" : "#0000009B",
        }}
    >
        {indicatorTag}
    </div>
);

export const CatalogCard = ({
    title,
    description: initialDescription,
    temporalExtent,
    indicatorTag,
}: CatalogCardProps) => {
    const [shouldTruncateDescription, setShouldTruncateDescription] =
        useState(true);

    const shouldShowReadMore = useMemo(
        () => initialDescription.length > MAX_LENGTH,
        [initialDescription.length],
    );

    const description = useMemo(
        () =>
            shouldTruncateDescription
                ? `${initialDescription.slice(0, MAX_LENGTH)}...`
                : initialDescription,
        [initialDescription, shouldTruncateDescription],
    );

    const dateRange = useMemo(() => {
        const startDate = temporalExtent[0].toString();

        let endDate: string = "";

        // Check if end date exists and compare with start date
        if (
            temporalExtent[1] &&
            temporalExtent[1].compare(temporalExtent[0]) !== 0
        ) {
            endDate = temporalExtent[1].toString();
        }

        return `${startDate}${endDate ? ` - ${endDate}` : ""}`;
    }, [temporalExtent]);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>
                    {description}{" "}
                    {shouldShowReadMore && (
                        <Button
                            className={styles.readMore}
                            onPress={() =>
                                setShouldTruncateDescription(
                                    !shouldTruncateDescription,
                                )
                            }
                        >
                            {shouldTruncateDescription
                                ? "Read More"
                                : "Read Less"}
                        </Button>
                    )}
                </p>
                <p className={styles.date}>{dateRange}</p>
            </div>
            <div className={styles.footerContainer}>
                <div>{indicatorTag && <Tag indicatorTag={indicatorTag} />}</div>
                <div>
                    <Link
                        href="#todo"
                        target="_blank"
                        className={styles.browseButton}
                    >
                        Browse
                    </Link>
                </div>
            </div>
        </div>
    );
};
