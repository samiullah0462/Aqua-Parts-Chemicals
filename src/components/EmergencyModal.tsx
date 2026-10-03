import React, { useState } from 'react';
import { X, AlertTriangle, Phone, Activity, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [ticketSent, setTicketSent] = useState(false);
  const [plantName, setPlantName] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyType, setEmergencyType] = useState('Severe Membrane Scaling / High dP');

  if (!isOpen) return null;

  const handleTriggerDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-red-200 overflow-hidden flex flex-col">
        {/* Urgent Header */}
        <div className="bg-gradient-to-r from-[#092442] via-slate-900 to-red-950 text-white p-5 flex items-center justify-between border-b border-red-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-400 flex items-center justify-center text-red-400">
              <Activity className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-red-400 tracking-wider">
                24/7 TECHNICAL LAB & LOGISTICS TELEMETRY
              </span>
              <h3 className="text-lg font-extrabold tracking-tight">Emergency Telemetry & On-Call Dispatch</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Live Status Indicator Strip */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-bold text-slate-800">Dispatch Hub Online:</span>
              <span className="text-slate-600">Baldia Town Central Depot</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#0d5ca8]" />
              <span>Response SLA: &lt; 45 Mins (SITE Area)</span>
            </div>
          </div>

          {/* Quick Direct Dial Card */}
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Critical Plant Shutdown Hotline
              </div>
              <div className="text-xl font-extrabold text-[#092442] mt-0.5">
                {COMPANY_INFO.phone}
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Immediate connection to senior process chemical engineer on duty.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-md transition flex items-center gap-2 shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {ticketSent ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-slate-900 text-base">Emergency Ticket Logged</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emergency dispatch priority has been assigned for <strong>{plantName}</strong> regarding <strong>{emergencyType}</strong>. Our on-duty chemist is contacting <strong>{phone}</strong> right now.
              </p>
              <button
                onClick={() => {
                  setTicketSent(false);
                  onClose();
                }}
                className="px-5 py-2 bg-[#092442] text-white rounded-lg text-xs font-bold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleTriggerDispatch} className="space-y-4 pt-1">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Log Rapid Emergency Reagent / CIP Request
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Plant / Factory Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Artistic Milliners Unit 4"
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Urgent Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                  Incident Classification *
                </label>
                <select
                  value={emergencyType}
                  onChange={(e) => setEmergencyType(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none bg-white"
                >
                  <option value="Severe Membrane Scaling / High dP">Severe Membrane Scaling / High dP (+15% surge)</option>
                  <option value="Antiscalant Stock Depleted - Urgent Tanker/Drum Needed">Antiscalant Stock Depleted - Urgent Drum Dispatch</option>
                  <option value="High Permeate Conductivity / Salt Passage Breach">High Permeate Conductivity / Salt Passage Breach</option>
                  <option value="Dosing Pump Failure / Metering Leak">Dosing Pump Failure / Metering Leak</option>
                  <option value="Biofouling Slime / Slit Density Surge (SDI > 5.0)">Biofouling Slime / Silt Density Surge (SDI &gt; 5.0)</option>
                </select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Instant notification to on-call technician
                </span>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#092442] hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition flex items-center gap-2"
                >
                  <Activity className="w-4 h-4 text-red-400" />
                  <span>Dispatch Priority Alert</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
