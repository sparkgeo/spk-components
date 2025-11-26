export const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};

export const convertDateToUTCString = (date: Date) => {
    const formattedDate =
        `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}, ` +
        `${date.getUTCHours() % 12 || 12}:${date.getUTCMinutes().toString().padStart(2, "0")}:${date.getUTCSeconds().toString().padStart(2, "0")} ` +
        `${date.getUTCHours() < 12 ? "AM" : "PM"} UTC`;

    return formattedDate;
};
