import type {Metadata} from 'next';
import {ContentPage} from '@/components/pages';
import {notFound} from 'next/navigation';
const pages:Record<string,string>={about:'Our story',services:'Travel services',visa:'Visa assistance',tours:'Destinations',packages:'Travel packages',flights:'Flight planning',umrah:'Umrah journeys',insurance:'Travel insurance',track:'Demo application tracking',contact:'Contact'};
export function generateStaticParams(){return Object.keys(pages).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;return {title:pages[slug],description:`Explore ${pages[slug]?.toLowerCase()} with Roamora. Thoughtful guidance for your next journey.`,alternates:{canonical:`/${slug}/`}}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!pages[slug])notFound();return <ContentPage slug={slug}/>}
