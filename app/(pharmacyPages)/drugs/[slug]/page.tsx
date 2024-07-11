
import { Badge } from '@/components/ui/badge';
import data from '@/data/data';
import { Dot } from 'lucide-react';

export default function page({ params }: { params: { slug: string } }) {

    const drug = data.drugs.find((x) => x.slug === params.slug)

    console.log(drug)

    if (!drug) {
        return <div className='mx-auto mt-20 text-center text-rose-300'>Drug Not Found</div>
    }

    interface item {

    }

    return (
        <div className='p-4 border rounded-lg'>
            <h2 className='font-semibold leading-none tracking-tight text-gray-600 dark:text-gray-400 mb-4'>Drug Details</h2>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <h2 className='text-2xl'>Drug: <span className='text-2xl font-semibold leading-none tracking-tight '>{drug.name}</span></h2>
                    <h4 className='mb-4'>Category: {drug.category}</h4>
                    <h4 className='mb-4 '>Similar drugs: {drug.similar_drugs.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                    ))}</h4>
                    <h4 className='mb-16 capitalize'>Dosage forms: {drug.dosage_forms.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                    ))}</h4>
                    <h2 className=' font-semibold leading-none tracking-tight text-gray-600 dark:text-gray-400 mb-4'>Quantity in stock</h2>
                    <div className='flex justify-between items-center'>
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
                        <div>
                            <h2 className='text-lg font-semibold leading-none tracking-tight text-primary mb-4'>{drug.new_stock_price},000 xaf</h2>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
