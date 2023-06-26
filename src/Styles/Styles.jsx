
import React from 'react'

function Button({children}) {
  return (
   
<button
className=" bg-lime-600 p-3 w-[180px] text-white text-xl font-medium mt-5 md:mt-4 duration-300 hover:font-bold
    hover:bg-white border-2 hover:border-lime-500 hover:text-lime-500 transition-all"
>
{children}
</button>
  )
}

export default Button


export function Typography({children}) {
    return (
        <p className=" text-[1rem] font-semibold text-zinc-600 leading-[2rem] pt-4 ">{children}</p>
    )
} 