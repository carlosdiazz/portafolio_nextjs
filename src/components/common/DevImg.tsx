import React from 'react'

interface Props {
  containerStyles?: string;
  imgSrc: string;
}

export const DevImg = ({containerStyles}:Props) => {
  return (
    <div className={`${containerStyles}`}>
      
    </div>
  )
}
//<Image src={imgSrc} fill priority alt='Avatar'/>