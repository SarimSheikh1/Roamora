'use client';
export default function Error({reset}:{reset:()=>void}){return <section className="section container not-found"><h1>A small bump in the journey.</h1><p>Something didn’t load correctly. Please try again.</p><button className="button" onClick={reset}>Try again</button></section>}
