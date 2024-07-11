import {
    ArrowUpRight,
    Plus
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DrugDetails from "@/components/details/DrugDetails"

export default function page() {

    const data = [
        { id: "1", fullName: "Liam Johnson", email: "liam@example.com", status: "Consultation", date: "23-06-2024" },
        { id: "1", fullName: "Olivia Smith", email: "olivia@example.com", status: "Medication", date: "23-06-2024" },
        { id: "1", fullName: "Noah Williams", email: "noah@example.com", status: "Prescribed", date: "23-06-2024" },
        { id: "1", fullName: "Liam Johnson", email: "liam@example.com", status: "Medication", date: "2023-06-25" },
        { id: "1", fullName: "Zoe Johnson", email: "zoe@example.com", status: "Prescribed", date: "23-06-2024" },
        { id: "1", fullName: "Morgan Freeman", email: "freeman@example.com", status: "Medication", date: "23-06-2024" },
    ];

    return (
        <div>
            <Card className="mb-6">
                <CardHeader className="flex sm:flex-row sm:items-center justify-between gap-4">
                    <div className="grid gap-2">
                        <CardTitle>Drugs</CardTitle>
                        <CardDescription>
                            View and manage drugs.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="bg-primary gap-1">
                        <Link href="/prescriptions/new">
                            Add Drug
                        </Link>
                    </Button>
                </CardHeader>
            </Card>
            <DrugDetails />
        </div>
    )
}
