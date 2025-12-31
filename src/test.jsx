// import React from 'react';
import { HardHat, Hammer, Mail, Phone, Server, Plane, PenTool, Cpu, DiamondPercent } from 'lucide-react';

const PhreandsLanding = () => {
  const team = [
    {
      name: "IT Infrastructure Specialist",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      services: ["IT Consulting", "Network & Server Administration", "Cloud & Automation Solutions", "Onsite/Remote Tech Support"],
      contact: { email: "it.expert@phreands.com", phone: "+233502930497" }
    },
    {
      name: "Operations & Logistics",
      icon: <Plane className="w-8 h-8 text-purple-400" />,
      services: ["Flight Ticketing", "Property Management"],
      contact: { email: "logistics@phreands.com", phone: "+233243065654" }
    },
    {
      name: "Creative Strategy",
      icon: <PenTool className="w-8 h-8 text-indigo-400" />,
      services: ["Scriptwriting", "Content Creation", "Proofreading", "Freelance Writing", "Ghost Writing"],
      contact: { email: "creative@phreands.com", phone: "+233243481623" }
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <HardHat className="w-4 h-4 text-yellow-500 animate-bounce" />
            <span className="text-sm font-medium tracking-wide uppercase">Site Under Construction</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            Phreands Services
          </h1 >
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We are currently crafting a digital experience as versatile as our team. 
            In the meantime, feel free to reach out to our specialists below.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {team.map((person, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-6 p-3 bg-slate-950 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {person.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{person.name}</h3>
              <ul className="space-y-3 mb-8">
                {person.services.map((service, sIdx) => (
                  <li key={sIdx} className="text-slate-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {service}
                  </li>
                ))}
              </ul>
              <div className="space-y-4 pt-6 border-t border-slate-800">
                <a href={`mailto:${person.contact.email}`} className="flex items-center gap-3 text-sm hover:text-purple-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  {person.contact.email}
                </a>
                <a href={`tel:${person.contact.phone}`} className="flex items-center gap-3 text-sm hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  {person.contact.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Animation */}
        <footer className="flex flex-col items-center justify-center gap-4 text-slate-500">
          <div className="flex items-center gap-4">
            <Hammer className="w-5 h-5 animate-spin-slow" />
            <span className="italic">Building something great...</span>
          </div>
          <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-1/2 animate-shimmer animate-loading-bar" />
          </div>
        </footer>
      </main>
    </div>
    </>
  );
};

export default PhreandsLanding;