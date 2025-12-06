import React from 'react';
import { Award, Target } from 'lucide-react';
import portraitImage from '../assets/ahmad.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-2xl">
               <img 
                 src={portraitImage} 
                 alt="Ahmad Abubakar Limateef" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
               />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-100 rounded-full -z-10 mix-blend-multiply blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-yellow-100 rounded-full -z-10 mix-blend-multiply blur-xl"></div>
          </div>

          <div>
            <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">About Me</span>
            <h2 className="text-3xl md:text-4xl mt-2 mb-6">Driving Change Through Civic Engagement</h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              With over five years of experience in the development sector, I have dedicated my career to advocating for civic participation and mobilizing youth for community development. My work addresses critical challenges such as youth unemployment, social exclusion, and low involvement in governance across Africa.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              I hold a bachelor's degree in English from Bayero University, Kano. Currently, I serve as the Project Lead for <strong>Turnup Jigawa</strong>, a youth-led initiative fostering active changemakers.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Fellowships</h4>
                  <p className="text-sm text-slate-600">Mandela Washington Fellow '24, Yiaga Africa Fellow '23</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">2030 Vision</h4>
                  <p className="text-sm text-slate-600">Empowering 50,000 African youth with leadership skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
