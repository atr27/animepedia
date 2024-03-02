"use client"
import { FileSearch } from '@phosphor-icons/react'
import Link from "next/link"

const Page = () => {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center gap-2'>
      <div className='flex justify-center items-center flex-col'>
        <div className='flex flex-row items-center'>
          <FileSearch size={46} className='text-warna-accent' />
          <h3 className='text-warna-accent text-2xl font-bold'>Page Not Found</h3>
        </div>
        <Link href="/" className="md:text-xl text-md font-semibold bg-warna-accent text-warna-dark transition-all p-2 rounded-md border border-warna-accent mt-4">Back to Home</Link>
      </div>
    </div>
  )
}

export default Page