import React from 'react'
import Link from 'next/link';

export default function Student_info() {
  return (
    <div>
       <div className='p-6'>Name: Ansh Sonigra
        <div className="">Github link:
           <Link href="https://github.com/39ansh/cprg306-assignments.git" className="underline hover:text-blue-700" > Click here</Link>
        </div>
        </div>
    </div>
  )
}
