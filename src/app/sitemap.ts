import type {MetadataRoute} from 'next';
import {site} from '@/config/site';
import {trips} from '@/data/travel';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['', 'about','services','visa','tours','packages','flights','umrah','insurance','track','contact',...trips.map(t=>`packages/${t.slug}`)].map(p=>({url:`${site.url}/${p}${p?'/':''}`,changeFrequency:'monthly',priority:p?0.7:1}))}
