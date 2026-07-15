"use client";

import React from "react";
import { useMeetingModal } from "@/components/providers/MeetingModalProvider";

export default function ClientCTAButton({ text, url, className, style, children }) {
    const { openMeetingModal } = useMeetingModal();

    const isMeetingTrigger = url === "#schedule" || url === "#meeting" || text?.toLowerCase() === "get started now";

    if (isMeetingTrigger) {
        return (
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    openMeetingModal();
                }}
                className={className}
                style={style}
            >
                {text}
                {children}
            </button>
        );
    }

    return (
        <a
            href={url || "#"}
            className={className}
            style={style}
        >
            {text}
            {children}
        </a>
    );
}
