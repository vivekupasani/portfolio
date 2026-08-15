"use client"

import { useEffect, useState } from "react"

export default function VisitorCount() {
    const [count, setCount] = useState<number | null>(null)

    const getCount = async () => {
        const res = await fetch("/api/get-visitor-count", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (!res.ok) {
            throw new Error("Failed to fetch visitor count")
        }

        const data = await res.json()
        console.log("data", data);
        setCount(data.count)
    }

    useEffect(() => {
        getCount()
    }, [])

    return (
        <div className="p-2 text-slate-600">
            <p className="text-slate-500 text-sm">Visitor Count</p>
            <p className="text-xl font-bold">{count}</p>
        </div>
    )
}