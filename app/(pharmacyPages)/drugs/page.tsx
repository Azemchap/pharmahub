import Link from "next/link"

import DrugDetails from "@/components/details/DrugDetails"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

export default function page() {
    return (
        <div className="">
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
