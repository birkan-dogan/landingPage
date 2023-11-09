"use client"

import Bubbles from '@/components/Bubbles';
import Hero from '@/components/Hero';
import Image from 'next/image'
import AOS from "aos";

import { useEffect } from 'react';
import Icons from '@/components/Icons';

export default function Home() {

  useEffect(()=> {
    AOS.init({
      duration: 2000,
    });
  },[])
  
  return (
    <div>
      <Bubbles/>
      <Hero/>
      <Icons/>
    </div>
    
  )
}
