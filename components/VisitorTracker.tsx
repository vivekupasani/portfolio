"use client";

import { useEffect, useRef } from "react";

export default function VisitorTracker() {
    const hasFetched = useRef(false);

    useEffect(() => {
        if (!hasFetched.current) {
            hasFetched.current = true;
            fetch("/api/update-visitor-count").catch(console.error);
        }
    }, []);

    return null;
}
