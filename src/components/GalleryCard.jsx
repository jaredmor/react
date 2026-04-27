import { useState } from 'react';

export default function GalleryCard({ item, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-950 cursor-pointer outline-none transition-all duration-500 hover:border-white/15 hover:shadow-[0_8px_40px_rgba(99,102,241,0.07)] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-zinc-900">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`block h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-zinc-900" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="mb-2 inline-block rounded-md bg-white/15 px-2.5 py-1 text-xs font-medium text-zinc-100 backdrop-blur-sm">
            {item.category}
          </span>
          <h3 className="text-lg font-semibold leading-snug text-white">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-300 line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
