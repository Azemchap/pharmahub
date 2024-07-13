
import { Badge } from "../../components/ui/badge";
import {
    TableCell,
    TableRow
} from "../../components/ui/table";
import Link from "next/link";
import React from "react";
import { PrescriptionType } from "../../types/prescriptions";

interface PrescriptionItemProps {
    prescription: PrescriptionType;
}

const PrescriptionItem: React.FC<PrescriptionItemProps> = ({ prescription }) => {
    return (
        <TableRow className="w-full" >
            <TableCell>
                <Link href={`/prescriptions/${prescription.slug}`} className="hover:bg-secondary-foreground">
                    <div className="font-medium">{prescription.patient_name}</div>
                    <div className="hidden lg:block text-xs text-muted-foreground">
                        Prescription serial: {prescription.slug}
                    </div>
                </Link>
            </TableCell>
            <TableCell className="">
                {prescription.drug_name}
            </TableCell>
            <TableCell className="hidden lg:flex items-center">
                <span className="text-[10px] sm:text-sm"> {prescription.dosage}</span>
            </TableCell>
            <TableCell className="">
                <Badge className="text-[10px] sm:text-sm" variant="outline">
                    {prescription.prescriber_name}
                </Badge>
            </TableCell>
        </TableRow>
    );
};

export default PrescriptionItem