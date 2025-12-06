import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Impact: React.FC = () => {
  const initiatives = [
    {
      title: "Turnup Jigawa",
      role: "Project Lead",
      description: "Leading a youth-led civic engagement initiative dedicated to developing active youth changemakers and collaborating with lawmakers on social issues.",
      tags: ["Civic Engagement", "Leadership"],
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Mandela Washington Fellowship",
      role: "2024 Fellow",
      description: "Participated in the prestigious fellowship program, gaining skills to enhance effective leadership capabilities among African youth.",
      tags: ["Fellowship", "International Dev"],
      color: "bg-orange-50 text-orange-700"
    },
    {
      title: "Yiaga Africa",
      role: "Community Organizing Institute Fellow",
      description: "2023 Fellow focusing on community organizing and grassroots mobilization strategies for democratic development.",
      tags: ["Democracy", "Organizing"],
      color: "bg-green-50 text-green-700"
    },
    {
      title: "LEAP Africa / NYFF",
      role: "National Delegate",
      description: "Serving as a National Delegate for the Nigeria Youth Future Funds (NYFF), advocating for youth empowerment and future-focused policies.",
      tags: ["Policy", "Youth Funding"],
      color: "bg-purple-50 text-purple-700"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Impact & Initiatives</span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4">Leading with Action</h2>
          <p className="text-slate-600">
            My journey is defined by active participation in initiatives that shape the future of governance and youth development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {initiatives.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden">
              <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
                <ArrowUpRight className="w-6 h-6 text-slate-400" />
              </div>
              
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.color} mb-3`}>
                  {item.role}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
