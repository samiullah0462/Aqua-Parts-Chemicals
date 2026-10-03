import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface DosageCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuoteWithSpecs?: (specsText: string) => void;
}

export const DosageCalculatorModal: React.FC<DosageCalculatorModalProps> = ({
  isOpen,
  onClose,
  onRequestQuoteWithSpecs,
}) => {
  const [flowRate, setFlowRate] = useState<number>(25000); // LPH
  const [hoursPerDay, setHoursPerDay] = useState<number>(20);
  const [tds, setTds] = useState<number>(3200); // ppm
  const [calcium, setCalcium] = useState<number>(450); // ppm as CaCO3
  const [silica, setSilica] = useState<number>(45); // ppm SiO2
  const [feedPh, setFeedPh] = useState<number>(7.8);
  const [recovery, setRecovery] = useState<number>(75); // %

  if (!isOpen) return null;

  // Calculation logic
  // Concentration Factor = 1 / (1 - Recovery)
  const concentrationFactor = 1 / (1 - recovery / 100);
  const brineTds = Math.round(tds * concentrationFactor);
  const brineSilica = Math.round(silica * concentrationFactor);

  // Simplified LSI estimate based on pH, TDS, and Calcium
  // pCa = -log10([Ca2+] in M) ~ approx formula
  const lsiEstimate = (
    feedPh -
    (9.3 + (Math.log10(tds) - 1) / 10 + (2.5 - Math.log10(calcium)) + 2.0)
  ).toFixed(2);

  // Recommended formulation
  let formulation = 'AquaParts AQ-300 Universal Antiscalant';
  let recommendedDosePpm = 3.2;

  if (brineSilica > 140 || silica > 50) {
    formulation = 'AquaParts AQ-501 High-Silica Inhibitor';
    recommendedDosePpm = 4.2;
  } else if (tds > 5000 || calcium > 600) {
    formulation = 'AquaParts AQ-ScaleStop Heavy Sulfate / Hardness';
    recommendedDosePpm = 3.8;
  } else if (tds < 1500 && calcium < 200) {
    formulation = 'AquaParts AQ-200 Standard Brackish Antiscalant';
    recommendedDosePpm = 2.4;
  }

  // Daily flow in m3
  const dailyFlowM3 = (flowRate * hoursPerDay) / 1000;
  // Daily chemical consumption in kg (1 ppm = 1 g/m3)
  const dailyChemicalKg = ((dailyFlowM3 * recommendedDosePpm) / 1000).toFixed(2);
  const monthlyChemicalKg = (parseFloat(dailyChemicalKg) * 30).toFixed(1);
  const monthlyCarboys20L = Math.ceil(parseFloat(monthlyChemicalKg) / 24); // approx 1.2 kg/L density
  const monthlyDrums200L = (parseFloat(monthlyChemicalKg) / 240).toFixed(1);

  const handleApplyToQuote = () => {
    const specSummary = `Flow: ${flowRate.toLocaleString()} LPH (${hoursPerDay}h/day), Raw TDS: ${tds} ppm, Recovery: ${recovery}%, Est. LSI: ${lsiEstimate}, Recommended: ${formulation} @ ${recommendedDosePpm} ppm (approx ${monthlyCarboys20L} carboys/month)`;
    if (onRequestQuoteWithSpecs) {
      onRequestQuoteWithSpecs(specSummary);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-blue-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#092442] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400 flex items-center justify-center text-[#009fe3]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                AquaScale Engineering Utility
              </span>
              <h3 className="text-lg font-extrabold tracking-tight">
                RO Antiscalant Dosage & Scaling Index Calculator
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="text-xs text-slate-600 leading-relaxed bg-blue-50/70 p-3.5 rounded-xl border border-blue-100 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#0d5ca8] shrink-0 mt-0.5" />
            <span>
              Adjust your plant parameters to simulate brine supersaturation, calculate required parts per million (ppm) antiscalant dosing, and estimate monthly chemical logistics requirements in Karachi and Sindh.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Inputs Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-1">
                Feedwater & Plant Hydraulics
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Feed Flow Rate (LPH)
                  </label>
                  <input
                    type="number"
                    min="500"
                    step="500"
                    value={flowRate}
                    onChange={(e) => setFlowRate(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] outline-none font-mono"
                  />
                  <span className="text-[10px] text-slate-400">e.g. 25,000 Liters/Hour</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Operating Hours / Day
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="24"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] outline-none font-mono"
                  />
                  <span className="text-[10px] text-slate-400">Typical industrial: 18 - 24 hrs</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Raw TDS (ppm)
                  </label>
                  <input
                    type="number"
                    value={tds}
                    onChange={(e) => setTds(Number(e.target.value) || 0)}
                    className="w-full px-2.5 py-1.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Calcium (as CaCO₃)
                  </label>
                  <input
                    type="number"
                    value={calcium}
                    onChange={(e) => setCalcium(Number(e.target.value) || 0)}
                    className="w-full px-2.5 py-1.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Silica SiO₂ (ppm)
                  </label>
                  <input
                    type="number"
                    value={silica}
                    onChange={(e) => setSilica(Number(e.target.value) || 0)}
                    className="w-full px-2.5 py-1.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>System Recovery Rate (%)</span>
                    <span className="font-mono text-[#0d5ca8] font-bold">{recovery}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="85"
                    value={recovery}
                    onChange={(e) => setRecovery(Number(e.target.value))}
                    className="w-full accent-[#0d5ca8]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>50%</span>
                    <span>75% (Standard)</span>
                    <span>85% (High Recovery)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Feed Water pH</span>
                    <span className="font-mono text-[#0d5ca8] font-bold">{feedPh}</span>
                  </div>
                  <input
                    type="range"
                    min="6.0"
                    max="9.0"
                    step="0.1"
                    value={feedPh}
                    onChange={(e) => setFeedPh(Number(e.target.value))}
                    className="w-full accent-[#0d5ca8]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>pH 6.0</span>
                    <span>pH 7.5</span>
                    <span>pH 9.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Outputs Column (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/50 p-5 rounded-2xl border border-blue-200/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#092442]">
                  Projection Results
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Optimal Protection
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Recommended Formulation:
                </span>
                <span className="text-sm font-extrabold text-[#092442] block mt-0.5">
                  {formulation}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-center">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">
                    Target Dosage
                  </span>
                  <span className="text-lg font-extrabold text-[#0d5ca8] font-mono">
                    {recommendedDosePpm} ppm
                  </span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase block font-semibold">
                    Estimated LSI
                  </span>
                  <span
                    className={`text-lg font-extrabold font-mono ${
                      parseFloat(lsiEstimate) > 2.0 ? 'text-amber-600' : 'text-emerald-600'
                    }`}
                  >
                    +{lsiEstimate}
                  </span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily Water Treated:</span>
                  <span className="font-mono font-bold text-slate-800">
                    {dailyFlowM3.toLocaleString()} m³/day
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Daily Chemical Requirement:</span>
                  <span className="font-mono font-bold text-[#0d5ca8]">
                    {dailyChemicalKg} kg/day
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-1.5">
                  <span className="text-slate-600">Monthly Consumption:</span>
                  <span className="font-mono font-bold text-slate-800">
                    ~{monthlyChemicalKg} kg / month
                  </span>
                </div>
                <div className="flex justify-between bg-blue-50/70 p-1.5 rounded-lg text-[#092442] font-semibold">
                  <span>Suggested Packaging:</span>
                  <span>{monthlyCarboys20L} Carboys (20L)</span>
                </div>
              </div>

              <button
                onClick={handleApplyToQuote}
                className="w-full py-2.5 bg-[#0d5ca8] hover:bg-[#092442] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow"
              >
                <span>Request Quotation for this Dosing Setup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
