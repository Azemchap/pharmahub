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
                        <CardTitle>Prescriptions</CardTitle>
                        <CardDescription>
                            View and manage prescriptions.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="bg-primary gap-1">
                        <Link href="/prescriptions/new">
                         New Prescription
                        </Link>
                    </Button>
                </CardHeader>
            </Card>
            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Patients</TableHead>
                                <TableHead className="">
                                    Status
                                </TableHead>
                                <TableHead className="">
                                    Date
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <div className="font-medium">{item.fullName}</div>
                                        <div className=" text-sm text-muted-foreground">
                                            {item.email}
                                        </div>
                                    </TableCell>
                                    <TableCell className="">
                                        <Badge className="text-[10px] sm:text-sm" variant="outline">
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell >
                                        <span className="text-[10px] sm:text-sm"> {item.date}</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
