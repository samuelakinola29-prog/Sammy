import React from 'react';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export default function AboutPage() {
  const milestones: Milestone[] = [
    {
      year: '2018',
      title: 'Orchestral Masterclass Debut',
      description: 'Performed multiple solo piano concerto pieces across Europe, earning critical acclaim from orchestral collectives.'
    },
    {
      year: '2020',
      title: 'Launch of Sammy.T Audio Labs',
      description: 'Established a custom production house providing bespoke soundscapes, tracking systems, and spatial processing options for filmmakers.'
    },
    {
      year: '2023',
      title: 'Best Original Score Selection',
      description: 'Nominated and recognized for composition layers on indie film scores, utilizing unique microtonal textures.'
    },
    {
      year: '2025',
      title: 'Global Soundscapes Initiative',
      description: 'Collaborated with international electronic musicians to create ambient archives that preserve natural audio environments.'
    }
  ];

  return (
    <main className="bg-[#fcfbf9] text-[#1c1c1c] font-sans antialiased selection:bg-amber-200">
      
      {/* 1. Hero Section: The Artist Behind the Music */}
      <Navbar/>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 block">Meet the Artist</span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-slate-900">
            The Artist Behind <br />
            <span className="italic text-amber-700">the Music.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Discover the journey of Sammy.T, a dedicated artist whose life's work blends tradition with innovation, creating a unique sonic canvas that resonates across genres and generations.
          </p>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-200 shadow-2xl rounded-sm overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" 
              alt="Sammy.T" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
            />
          </div>
        </div>
      </section>

      {/* 2. Bio & Stats Section: The Journey in Sound */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-12 gap-12">
          {/* Left: Bio Text */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold border-l-4 border-amber-600 pl-4">The Journey in Sound</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Sammy's musical education began in the vibrant cultural landscape of London, where foundations of jazz, classical, and electronic subcultures heavily influenced his early works. Driven by an insatiable hunger for exploration, he immersed himself in diverse acoustic landscapes, taking the canvas for a sound outline without relentless boundaries.
              </p>
              <p>
                Over the past twenty years, Sammy has evolved from a studio protégé into a remarkably adaptive composer and performer. His unique ability to weave emotional resonance into minimalist spaces has won accolades from standard industry pillars to the underground circles alike.
              </p>
              <p>
                Today, Sammy stands as a polymath, bridging classical composition with futuristic sound design. Every note played and line arranged is engineered to stand as a testament to the timeless nature of sonic craft.
              </p>
            </div>
          </div>

          {/* Right: Grid Stats Counter */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {[
              { value: '20+', label: 'Years of Experience' },
              { value: '150+', label: 'Released Tracks' },
              { value: '45', label: 'Global Awards' },
              { value: '12', label: 'International Tours' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 p-6 flex flex-col justify-center items-center text-center rounded-sm border border-slate-100">
                <span className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{stat.value}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Gallery Section: Sammy in Action */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 block mb-2">Visual Moments</span>
            <h2 className="text-3xl font-serif font-medium text-slate-900">Sammy in Action</h2>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Large Box */}
          <div className="md:col-span-6 aspect-video md:aspect-square bg-slate-900 relative overflow-hidden group rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80" 
              alt="Piano performance" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          {/* Middle Tall Box */}
          <div className="md:col-span-3 aspect-[3/4] md:aspect-auto bg-slate-800 relative overflow-hidden group rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80" 
              alt="Guitar strings" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Right Stack */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="h-1/2 bg-slate-700 relative overflow-hidden group rounded-sm min-h-[180px]">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=500&q=80" 
                alt="Studio production" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <div className="h-1/2 bg-amber-600 p-6 flex flex-col justify-center items-center text-center text-white rounded-sm min-h-[180px]">
              <span className="text-3xl font-serif mb-2">“</span>
              <p className="font-serif italic text-sm md:text-base leading-relaxed">
                Music is the shorthand of emotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Section (Dark Theme Accent Block) */}
      <section className="bg-slate-900 text-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-4">
            <div className="w-8 h-8 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 font-serif text-sm">←</div>
            <h3 className="text-2xl font-serif font-medium tracking-wide text-white">The Mission</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              To combine decades of musical heritage with the raw energy of modern composition, challenging expectations and breaking standards to keep audio performance moving forward with every production.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-8 h-8 rounded-full border border-amber-500 flex items-center justify-center text-amber-500 font-serif text-sm">→</div>
            <h3 className="text-2xl font-serif font-medium tracking-wide text-white">The Vision</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              To build a standard for modern audio spaces that prioritizes depth, clarity, and sonic purity—inspiring standard communities to connect intimately across musical masterpieces.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Timeline Section: Notable Experience */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 block mb-2">My Milestones</span>
          <h2 className="text-3xl font-serif font-medium text-slate-900">Notable Experience</h2>
        </div>

        <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8">
              <span className="hidden md:block absolute -left-28 top-0 text-right w-20 font-serif font-bold text-slate-400">
                {milestone.year}
              </span>
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-600 ring-4 ring-white"></span>
              <div className="space-y-1">
                <span className="md:hidden block font-serif font-bold text-slate-400 text-sm">
                  {milestone.year}
                </span>
                <h4 className="text-lg font-serif font-semibold text-slate-900">{milestone.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </main>
  );
}