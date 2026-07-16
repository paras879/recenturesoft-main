export function formatDateIST(date, options = {}) {
    const d = date ? new Date(date) : new Date();
    const defaultOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    };
    return d.toLocaleString("en-US", { ...defaultOptions, ...options });
}

export function formatDateISTShort(date) {
    const d = date ? new Date(date) : new Date();
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Kolkata",
    });
}

export function formatDateISTTime(date) {
    const d = date ? new Date(date) : new Date();
    return d.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });
}
