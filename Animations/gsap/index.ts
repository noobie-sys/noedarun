'use client'

import gsap from 'gsap';

interface Props {
    cursor : HTMLDivElement | null,
    x : number ,
    y : number
}


export const cursorMove = ({cursor , x , y} : Props) => {
    gsap.to(cursor, {
        x: x,
        y: y,
        scale:3
      });
}
export const cursorLeave = (cursor : HTMLDivElement | null) => {
    gsap.to(cursor, {
        scale:0
      });
}