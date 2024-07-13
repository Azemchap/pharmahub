'use client'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { v4 as uuidv4 } from 'uuid'

export interface DrugType {
    slug: string
    serial: string
    name: string
    category: string
    similar_drugs: string[]
    dosage_forms: string[]
    old_stock: number
    old_stock_price: number
    new_stock: number
    new_stock_price: number
    description: string
    use: string
    side_effect: string[]
    warnings: string[]
    manufactured: string
    expire: string
}

const drugSchema = z.object({
    serial: z.string(),
    name: z.string(),
    category: z.string(),
    similar_drugs: z.string().transform((value) => value.split(',').map(String)),
    dosage_forms: z.string().transform((value) => value.split(',').map(String)),
    old_stock: z.coerce.number().int().positive(),
    old_stock_price: z.coerce.number().positive(),
    new_stock: z.coerce.number().int().positive(),
    new_stock_price: z.coerce.number().positive(),
    description: z.string(),
    use: z.string(),
    side_effect: z.string().transform((value) => value.split(',').map(String)),
    warnings: z.string().transform((value) => value.split(',').map(String)),
    manufactured: z.string(),
    expire: z.string(),
})


export default function DrugForm() {
    const form = useForm<z.infer<typeof drugSchema>>({
        resolver: zodResolver(drugSchema),
        defaultValues: {
            serial: uuidv4(),
            name: '',
            category: '',
            similar_drugs: [],
            dosage_forms: [],
            old_stock: 0,
            old_stock_price: 0,
            new_stock: 0,
            new_stock_price: 0,
            description: '',
            use: '',
            side_effect: [],
            warnings: [],
            manufactured: '',
            expire: '',
        },
    })

    function onSubmit(data: z.infer<typeof drugSchema>) {
        console.log(data)
    }


    return (
        <div className='p-4 border rounded-lg mt-4'>
             <h2 className='font-semibold leading-none tracking-tight text-primary text-2xl mb-6'>Create new drug</h2>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Drug name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="similar_drugs"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Similar Drugs</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter similar drugs separated by commas
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dosage_forms"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dosage Forms</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter dosage forms separated by commas
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="old_stock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Old Stock</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="old_stock_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Old Stock Price</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="new_stock"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Stock</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="new_stock_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Stock Price</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="use"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Use</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="side_effect"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Side Effects</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter side effects separated by commas
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="warnings"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Warnings</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter warnings separated by commas
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="manufactured"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Manufactured</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="expire"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Expire</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-full'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}