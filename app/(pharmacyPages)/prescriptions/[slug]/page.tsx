
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'lucide-react';
import { Button } from 'react-day-picker';
import { Badge } from '../../../../components/ui/badge';
import data from '../../../../data/data';


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
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl font-light'>Patient : <span className='text-2xl text font-semibold leading-none tracking-tight '>{prescription.patient_name}</span></h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Gender : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">Male</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Age : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">25</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Temp : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">35 dec</span>
                    </h2>
                    
                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Marital status : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">Married</span>
                    </h2>
                </div>

                <div className='grid gap-4'>
                    <h2 className='font-semibold leading-none tracking-tight text-primary text-2xl  mb-4'>Prescription details</h2>
                    <h2 className='dark:text-gray-400 text-gray-500'><span className='font-semibold  leading-none text-primary tracking-tight'>Drug name</span> : {prescription.drug_name}</h2>

                    <h2 className='font-semibold leading-none tracking-tight text-primary  '>Dosage : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">{prescription.dosage}</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Frequency : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500  ">{prescription.frequency}</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Quantity : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">{prescription.quantity}</span>
                    </h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Refills : <Badge className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 " variant="outline">
                        {prescription.refills} pack(s)
                    </Badge> </h2>


                    <h2 className='font-semibold leading-none tracking-tight text-primary  mb-4'>Prescriber details</h2>

                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Prescriber : <Badge className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 " variant="outline">
                        {prescription.prescriber_name} pack(s)
                    </Badge> </h2>
                    <h2 className=' font-semibold leading-none tracking-tight text-primary  '>Prescriber NPI : <span className="text-[10px] sm:text-sm dark:text-gray-400 text-gray-500 ">
                        {prescription.prescriber_npi}
                    </span> </h2>
                </div>
            </div>
        </div>
    )
}
