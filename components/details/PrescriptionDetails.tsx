import React from 'react';
import data from '../../data/data';
import PrescriptionItem from '../../components/details/PrescriptionItem';

import {
    Card,
    CardContent
} from "../../components/ui/card";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from "../../components/ui/table";
import { PrescriptionType } from '../../types/prescriptions';

export default function PrescriptionDetails() {
    return (
        <div>
            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Patient</TableHead>
                                <TableHead className="">
                                    Drug
                                </TableHead>
                                <TableHead className="">
                                    Dosage
                                </TableHead>
                                <TableHead className="">
                                    Prescriber
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.prescriptions.map((prescription: PrescriptionType) => (
                                <PrescriptionItem key={prescription.slug} prescription={prescription} />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
