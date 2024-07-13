
import { Badge } from '../../../../components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "../../../../components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../../components/ui/tabs";
import data from '../../../../data/data';
import { CheckCircle } from 'lucide-react';
import React from 'react';

export default function page({ params }: { params: { slug: string } }) {

    const prescription = data.prescriptions.find((x) => x.slug === params.slug)

    if (!prescription) {
        return <div className='mx-auto mt-20 text-center text-rose-300'>Prescription Not Found</div>
    }

    interface item {

    }

    return (
        <div className='p-4 border rounded-lg mt-4'>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <h2 className='text-2xl font-light'>Patient : <span className='text-2xl font-semibold leading-none tracking-tight '>{prescription.patient_name}</span></h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Gender : <span className="text-[10px] sm:text-sm">Male</span>
                    </h2>
                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Age : <span className="text-[10px] sm:text-sm">25</span>
                    </h2>
                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Temp : <span className="text-[10px] sm:text-sm">35 dec</span>
                    </h2>
                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Marital status : <span className="text-[10px] sm:text-sm">Married</span>
                    </h2>
                </div>

                <div className='grid gap-6'>
                    <h2 className='font-semibold leading-none tracking-tight text-primary  mb-4'>Prescription details</h2>
                    <h2 className='dark:text-gray-400 text-gray-500  mb-8'><span className='font-semibold  leading-none text-primary tracking-tight'>Drug name</span> : {prescription.drug_name}</h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Dosage : <span className="text-[10px] sm:text-sm">{prescription.dosage}</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Frequency : <span className="text-[10px] sm:text-sm">{prescription.frequency}</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Quantity : <span className="text-[10px] sm:text-sm">{prescription.quantity}</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Refills : <Badge className="text-[10px] sm:text-sm" variant="outline">
                        {prescription.refills} pack(s)
                    </Badge> </h2>


                    <h2 className='font-semibold leading-none tracking-tight text-primary  mb-4'>Prescriber details</h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Prescriber : <Badge className="text-[10px] sm:text-sm" variant="outline">
                        {prescription.prescriber_name} pack(s)
                    </Badge> </h2>
                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Prescriber NPI : <span className="text-[10px] sm:text-sm">
                        {prescription.prescriber_npi}
                    </span> </h2>
                </div>
            </div>
        </div>
    )
}
