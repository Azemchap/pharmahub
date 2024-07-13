
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import data from '@/data/data';
import { CheckCircle } from 'lucide-react';

export default function page({ params }: { params: { slug: string } }) {

    const drug = data.drugs.find((x) => x.slug === params.slug)

    if (!drug) {
        return <div className='mx-auto mt-20 text-center text-rose-300'>Drug Not Found</div>
    }

    interface item {

    }

    return (
        <div className='p-4 border rounded-lg mt-4'>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <h2 className='text-2xl font-light'>Drug Name : <span className='text-2xl font-semibold leading-none tracking-tight '>{drug.name}</span></h2>
                    <h4 className='mb-2'> <span className='font-semibold'>Drug Category :</span> {drug.category}</h4>
                    <h4 className='mb-2'><span className='font-semibold'> Similar Drugs :</span> {drug.similar_drugs.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                    ))}</h4>
                    <h4 className='mb-8 capitalize'><span className='font-semibold'>Dosage forms :</span> {drug.dosage_forms.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                    ))}</h4>

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
                    </div>
                    <h2 className=' font-semibold leading-none tracking-tighttext-primary  mt-2 mb-4'>Quantity in stock</h2>
                    <div className="flex my-2">
                        <h2 className=' font-semibold leading-none tracking-tighttext-primary  '>New stock : <Badge className="text-[10px] sm:text-sm" variant="outline">
                            {drug.new_stock} packs
                        </Badge> </h2>
                        {drug.old_stock + drug.new_stock > 0 ? (
                            drug.old_stock + drug.new_stock < 100 ? (
                                <p className="text-yellow-400 flex items-center">Low stock</p>
                            ) : (
                                <p className="text-green-500">{drug.new_stock_price},000xaf</p>
                            )
                        ) : (
                            <p className="text-rose-500">Out of stock</p>
                        )}
                    </div>
                    <div className="flex my-2">
                        <h2 className=' font-semibold leading-none tracking-tighttext-primary '>Old stock : <Badge className="text-[10px] sm:text-sm" variant="outline">
                            {drug.old_stock} packs
                        </Badge> </h2>
                        {drug.old_stock + drug.new_stock > 0 ? (
                            drug.old_stock + drug.new_stock < 100 ? (
                                <p className="text-yellow-400 flex items-center">Low stock</p>
                            ) : (
                                <p className="text-green-500">{drug.old_stock_price},000xaf</p>
                            )
                        ) : (
                            <p className="text-rose-500">Out of stock</p>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className='font-semibold leading-none tracking-tight text-primary  mb-4'>Drug Details</h2>
                    <h2 className='dark:text-gray-400 text-gray-500  mb-8'><span className='font-semibold  leading-none text-primary tracking-tight'>Description</span> : {drug.description}</h2>


                    <Tabs defaultValue="side_effect" >
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="side_effect">Side Effect</TabsTrigger>
                            <TabsTrigger value="use">Use</TabsTrigger>
                            <TabsTrigger value="warnings">Warnings</TabsTrigger>
                        </TabsList>
                        <TabsContent value="use">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Case study</CardTitle>
                                    <CardDescription>
                                        Best suited for patients suffering from the following;
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1 flex items-start gap-2">
                                        <CheckCircle className='w-4' />{drug.use}
                                    </div>
                                </CardContent>

                            </Card>
                        </TabsContent>
                        <TabsContent value="side_effect">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Case study</CardTitle>
                                    <CardDescription>
                                        Some side effects demonstrated by these patients.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        {drug.side_effect.map((item, index) => (
                                            <div key={index} className='flex items-start gap-2'><CheckCircle className='w-4' /> {item}</div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="warnings">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Warnings</CardTitle>
                                    <CardDescription>
                                        Take a degree of caution when using this drug.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {drug.warnings.map((item, index) => (
                                        <div key={index} className='flex items-start gap-2'><CheckCircle className='w-4' /> {item}</div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>



            </div>
        </div>
    )
}
