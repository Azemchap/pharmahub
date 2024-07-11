import data from '@/data/data';
import { DrugType } from '@/types/drug';
import DrugItem from './DrugItem';

import {
    Card,
    CardContent
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

export default function DrugDetails() {
    return (
        <div>
            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Drug Name</TableHead>
                                <TableHead className="">
                                    Category
                                </TableHead>
                                <TableHead className="">
                                    Status
                                </TableHead>
                                <TableHead className="">
                                    Exp date
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.drugs.map((drug: DrugType) => (
                                <DrugItem key={drug.slug} drug={drug} />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
