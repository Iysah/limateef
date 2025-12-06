import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-brand-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 border border-brand-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Available for Speaking & Collaboration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Building Stronger <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
              Communities & Youth
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            I am <span className="font-semibold text-slate-900">Ahmad Abubakar Limateef</span>, a development professional dedicated to civic participation, youth mobilization, and community development across Africa.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="btn-primary">
              Discover My Journey <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#impact" className="btn-secondary">
              View Impact
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">5+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">5k+</span>
              <span className="text-sm text-slate-500">Youth Impacted</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">2x</span>
              <span className="text-sm text-slate-500">Grant Winner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
