import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center py-12 gap-2'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='justify-start bg-primary p-2 text-secondary rounded'>Return Home</Link>
        </div>
    )
}