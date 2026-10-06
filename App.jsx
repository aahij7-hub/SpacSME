import React from 'react';

// قائمة الموردين الحقيقيين للمنصة
const suppliersData = [
  {
    id: 1,
    name: "SSTL (Surrey Satellite)",
    category: "Optical Payloads",
    rating: 4.9,
    tags: ["Hyperspectral", "Telescopes"],
    location: "Cambridge, UK",
    leadTime: "20 wk",
    priceTier: "$$$"
  },
  {
    id: 2,
    name: "Sierra Space",
    category: "Satellite Bus & Structure",
    rating: 4.8,
    tags: ["CubeSat bus", "AIT", "Flight heritage"],
    location: "Denver, CO",
    leadTime: "16 wk",
    priceTier: "$$"   },   {     id: 3,     name: "AZUR SPACE",     category: "Solar Arrays & EPS",     rating: 4.7,     tags: ["Deployable arrays", "Battery packs"],     location: "Munich, DE",     leadTime: "12 wk",     priceTier: "$$"
  },
  {
    id: 4,
    name: "Spaceflight Inc.",
    category: "Launch & Rideshare",
    rating: 4.7,
    tags: ["Rideshare", "Dedicated"],
    location: "Cape Canaveral, FL",
    leadTime: "Manifest 9 mo",
    priceTier: "$$"   },   {     id: 5,     name: "EnduroSat",     category: "Comms & Antennas",     rating: 4.5,     tags: ["Ka-band", "Phased array"],     location: "Austin, TX",     leadTime: "14 wk",     priceTier: "$$"
  }
];

export default function SpaceSMEDashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-slate-50 font-sans text-slate-800">
      
      {/* Feasibility Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-teal-500 flex items-center justify-center font-bold text-slate-700">
            82
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Feasibility score</p>
            <h4 className="text-sm font-bold text-slate-800">High feasibility</h4>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-lg">
            ⏱
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Est. time to orbit</p>
            <h4 className="text-sm font-bold text-slate-800">14–20 mo</h4>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-lg">
            📈
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Suggested contingency</p>
            <h4 className="text-sm font-bold text-slate-800">$6,000</h4>
          </div>
        </div>
      </div>

      {/* Recommended Hardware Suppliers */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Recommended hardware suppliers</h3>
            <p className="text-xs text-slate-400 mt-0.5">Matched to Earth Observation missions</p>
          </div>
          <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
            {suppliersData.length} matches
          </span>
        </div>

        {/* Suppliers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {suppliersData.map((supplier) => (
            <div 
              key={supplier.id}
              className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{supplier.name}</h4>
                    <p className="text-xs text-slate-400 mb-3">{supplier.category}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded">
                    <span>★</span>
                    <span>{supplier.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {supplier.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                        tag === "Flight heritage" 
                          ? "bg-slate-200 text-slate-700 font-semibold" 
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-slate-400 border-t border-slate-100 pt-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">📍 {supplier.location}</span>
                  <span className="flex items-center gap-1">⏱ {supplier.leadTime}</span>
                </div>
                <span className="font-bold text-slate-600">{supplier.priceTier}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
