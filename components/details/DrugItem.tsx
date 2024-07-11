import { DrugType } from "@/types/drug";

import { Badge } from "@/components/ui/badge";
import {
    TableCell,
    TableRow
} from "@/components/ui/table";
import { Dot } from "lucide-react";
import Link from "next/link";

interface DrugItemProps {
    drug: DrugType;
}

const DrugItem: React.FC<DrugItemProps> = ({ drug }) => {
    return (

        <TableRow  >
            <TableCell>
                <Link href={`/drugs/${drug.slug}`} className="hover:bg-secondary-foreground">
                    <div className="font-medium">{drug.name}</div>
                    <div className=" text-xs text-muted-foreground">
                        Drug serial: {drug.serial}
                    </div>
                </Link>
            </TableCell>
            <TableCell className="hidden lg:flex">
                {drug.category}
            </TableCell>
            <TableCell className="">
                <Badge className="text-[10px] sm:text-sm" variant="outline">
                    {drug.old_stock + drug.new_stock > 0 ? (
                        drug.old_stock + drug.new_stock < 100 ? (
                            <p className="text-yellow-400 flex items-center">Low stock</p>
                        ) : (
                            <p className="text-green-500">In stock</p>
                        )
                    ) : (
                        <p className="text-rose-500">Out of stock</p>
                    )}
                </Badge>
            </TableCell>
            <TableCell >
                <span className="text-[10px] sm:text-sm"> {drug.expire}</span>
            </TableCell>
        </TableRow>
    );
};

export default DrugItem