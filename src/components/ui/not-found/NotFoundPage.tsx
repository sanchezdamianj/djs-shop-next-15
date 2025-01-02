import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div>
        <div className="flex flex-col-reverse justify-center items-center md:flex-row h-[800px] w-full align-middle">
            <div className="text-center px-5 mx-5">
                <h2 className={`${titleFont.className} text-6xl font-bold`}>404</h2>
                <p className="text-xl font-bold">Whooops... Page not found.</p>
                <p className="font-light my-3">
                    <span>Go back to </span>
                    <Link href="/" className="text-blue-500">home</Link>
                </p>
            </div>
        
            <div className="mx-5 px-5">
                <Image 
                    src="/imgs/starman_750x750.png"
                    alt="404 starman"
                    width={500}
                    height={500}
                    className="p-5 sm:p-0 "
                />
            </div>
        </div>
    </div>
  )
}
