import { useEffect, useState, useCallback } from 'react';

export default function Modal({ item, onClose }) {
  const [active, setActive] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClose = useCallback(() => {
    setActive(false);
    setImageLoaded(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true));
      });
    } else {
      setActive(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [item]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleClose]);

  if (!item) return null;

  return (
    <div
      className={`modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-8 ${
        active ? 'active' : ''
      }`}
      onClick={handleClose}
    >
      <div
        className="modal-content relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-400 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white cursor-pointer"
          aria-label="Close"
        >
          <svg
            className="h-4.5 w-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row md:max-h-[80vh]">
          {/* Image */}
          <div className="relative flex items-center justify-center bg-black md:w-3/5">
            <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-[80vh]">
              {!imageLoaded && (
                <div className="absolute inset-0 animate-pulse bg-zinc-900" />
              )}
              <img
                src={item.fullImage}
                alt={item.title}
                onLoad={() => setImageLoaded(true)}
                className={`block h-full w-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-7 sm:p-10 md:w-2/5">
            <span className="mb-4 inline-block self-start rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-400">
              {item.category}
            </span>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {item.title}
            </h2>
            <p className="mb-6 leading-relaxed text-zinc-400">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {item.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
