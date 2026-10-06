import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Shell } from '@/components/shell';
import { site } from '@/config/site';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata:Metadata = {metadataBase:new URL(site.url),title:{default:'Roamora · Travel with a little more wonder',template:'%s | Roamora'},description:'Thoughtfully planned holidays, visa assistance and travel services. Find your next journey with Roamora.',icons:{icon:'/favicon.svg'},openGraph:{title:'Roamora · Go somewhere that stays with you',description:'Discover thoughtful journeys, from island escapes to mountain mornings.',type:'website'}};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" className={outfit.variable}><body><Shell>{children}</Shell></body></html>; }
