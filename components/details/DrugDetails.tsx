import { drugs } from '@/data/Drugs';
import { DrugType } from '@/types/drug';
import DrugItem from './DrugItem';


import {
    Card,
    CardContent
} from "@/components/ui/card";
import {
    Table,
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
                        {drugs.map((drug: DrugType) => (
                            <DrugItem key={drug.id} drug={drug} />
                        ))}
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
