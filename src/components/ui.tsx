'use client';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
export function Reveal({children,className=''}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.55,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Picture({src,alt,priority=false,className=''}:{src:string;alt:string;priority?:boolean;className?:string}){const [failed,setFailed]=useState(false);return failed?<div className={`image-fallback ${className}`} role="img" aria-label={alt}><span>{alt}</span></div>:<Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw" priority={priority} className={className} onError={()=>setFailed(true)}/>}
export function ButtonLink({href,children,secondary=false}:{href:string;children:React.ReactNode;secondary?:boolean}){return <Link className={`button ${secondary?'secondary':''}`} href={href}>{children}</Link>}
export function Heading({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
