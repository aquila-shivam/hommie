'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const Logo = () => {

  const router = useRouter();
  return (
    <div>
      <Image
      onClick={()=>{router.push('/')}}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height='120'
      width='120'
      src="/images/logo.png"
      />
    </div>
  )
}

export default Logo
