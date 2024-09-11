import Image from 'next/image';
import React from 'react'

interface Props {
  containerStyles?: string;
  imgSrc: string;
}

export const DevImg = ({imgSrc, containerStyles}:Props) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='Avatar'/>
    </div>
  )
}
