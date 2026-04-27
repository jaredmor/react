import { useState } from 'react';
import { categories, galleryItems } from '../data/gallery';
import GalleryCard from './GalleryCard';
import Modal from './Modal';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section id="gallery" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <ScrollReveal>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 sm:text-4xl md:text-5xl">
                Visual Explorer
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                Browse a curated collection rendered entirely on the client — no
                server roundtrips, no loading spinners.
              </p>
            </ScrollReveal>
          </div>

          {/* Category tabs */}
          <ScrollReveal delay={120} className="mb-12 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.015] p-1.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-250 cursor-pointer ${
                    activeCategory === category
                      ? 'bg-white text-zinc-900 shadow-md'
                      : 'text-zinc-400 hover:bg-white/[0.06] hover:text-zinc-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <ScrollReveal
                key={`${activeCategory}-${item.id}`}
                delay={index * 60}
              >
                <GalleryCard
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
