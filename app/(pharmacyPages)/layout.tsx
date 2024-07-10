import { Aside } from "@/components/Aside"

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div
            className="flex gap-4 py-4 items-start"
        >
            <Aside />
            <div className="flex-1 rounded">
                {children}
            </div>
        </div>
    )
}
