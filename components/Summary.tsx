import {
    ArrowUpRight
} from "lucide-react"
import Link from "next/link"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
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

export default function Summary() {
    return (
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card
                className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="grid gap-2">
                        <CardTitle>Newest patients</CardTitle>
                        <CardDescription>
                            Recent patients added to the database.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto bg-primary gap-1">
                        <Link href="/patients">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Patient Names</TableHead>
                                <TableHead className="hidden xl:table-column">
                                    Type
                                </TableHead>
                                <TableHead className="md:table-cell lg:hidden xl:table-column">
                                    Status
                                </TableHead>
                                <TableHead className="md:table-cell lg:hidden xl:table-column">
                                    Date
                                </TableHead>
                               
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Liam Johnson</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        liam@example.com
                                    </div>
                                </TableCell>
                                <TableCell className="hidden xl:table-column">
                                    Sale
                                </TableCell>
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                        Consultation
                                    </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    2023-06-23
                                </TableCell>
                               
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Olivia Smith</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        olivia@example.com
                                    </div>
                                </TableCell>
                               
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                        Medication
                                    </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    2023-06-24
                                </TableCell>
                               
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Noah Williams</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        noah@example.com
                                    </div>
                                </TableCell>
                               
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                        Prescription
                                    </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    2023-06-25
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Emma Brown</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        emma@example.com
                                    </div>
                                </TableCell>
                                
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                    Medication
                                    </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    2023-06-26
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div className="font-medium">Liam Johnson</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        liam@example.com
                                    </div>
                                </TableCell>
                                
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    <Badge className="text-xs" variant="outline">
                                    Medication
                                    </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell lg:hidden xl:table-column">
                                    2023-06-27
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                    <CardTitle>Recent sales</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Olivia Martin
                            </p>
                            <p className="text-sm text-muted-foreground">
                                olivia.martin@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">10,500 <span className="text-sm text-muted-foreground font-light">xaf</span></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/02.png" alt="Avatar" />
                            <AvatarFallback>JL</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Jackson Lee
                            </p>
                            <p className="text-sm text-muted-foreground">
                                jackson.lee@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">3,800 <span className="text-sm text-muted-foreground font-light">xaf</span></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/03.png" alt="Avatar" />
                            <AvatarFallback>IN</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Isabella Nguyen
                            </p>
                            <p className="text-sm text-muted-foreground">
                                isabella.nguyen@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">67,500 <span className="text-sm text-muted-foreground font-light">xaf</span></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/04.png" alt="Avatar" />
                            <AvatarFallback>WK</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                William Kim
                            </p>
                            <p className="text-sm text-muted-foreground">
                                will@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">22,000 <span className="text-sm text-muted-foreground font-light">xaf</span></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src="/avatars/05.png" alt="Avatar" />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">
                                Sofia Davis
                            </p>
                            <p className="text-sm text-muted-foreground">
                                sofia.davis@email.com
                            </p>
                        </div>
                        <div className="ml-auto font-medium">6,500 <span className="text-sm text-muted-foreground font-light">xaf</span></div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
