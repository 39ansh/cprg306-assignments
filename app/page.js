import React from 'react'
import Link from 'next/link'

export default function () {
  return (
    <main>
      <div className="">
        <h1 className="text-4xl ml-20 mt-20 text-green-600">Web Development 2 - Assignments</h1>
        <div className="ml-20 mt-10 hover:underline text-lg ">
        <Link href="./week-2">Week-2</Link> 
        </div>
        <div className="ml-20 hover:underline text-lg"> 
        <Link href="./week-3">Week-3</Link>
        </div>
        <div className="ml-20 hover:underline text-lg">
        <Link href="./week-4">Week-4</Link>
        </div>
        <div className="ml-20 hover:underline text-lg">
        <Link href="./week-5">Week-5</Link>
        </div>
        <div className="ml-20 hover:underline text-lg">
        <Link href="./week-6">Week-6</Link>
        </div>
        <div className="ml-20 hover:underline text-lg">
        <Link href="./week-7">Week-7</Link>
        </div>
        <div className="ml-20 hover:underline text-lg">
        <Link href="./week-8">Week-8</Link>
        </div>
        <div className="ml-20 hover:underline text-lg">
        <Link href="./week-9">Week-9</Link>
        </div>
      </div>
    </main> 
  )
}
