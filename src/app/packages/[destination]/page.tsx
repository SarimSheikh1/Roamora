import type {Metadata} from 'next';
import {trips} from '@/data/travel';
import {PackageDetail} from '@/components/pages';
import {notFound} from 'next/navigation';
export function generateStaticParams(){return trips.map(t=>({destination:t.slug}))}
export async function generateMetadata({params}:{params:Promise<{destination:string}>}):Promise<Metadata>{const {destination}=await params;const t=trips.find(x=>x.slug===destination);return {title:t?.name,description:t?.summary,alternates:{canonical:`/packages/${destination}/`},openGraph:{title:t?.name,description:t?.summary}}}
export default async function Page({params}:{params:Promise<{destination:string}>}){const {destination}=await params;const trip=trips.find(t=>t.slug===destination);if(!trip)notFound();return <PackageDetail trip={trip}/>}
