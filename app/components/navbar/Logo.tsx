'use client';

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  return (
    <div>
      <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height='100'
      width='100'
      src='/images/logo.png'
      />
    </div>
  )
}

export default Logo
