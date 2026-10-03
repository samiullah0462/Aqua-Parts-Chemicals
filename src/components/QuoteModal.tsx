import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    productCategory: preselectedProduct || 'RO Chemicals (Antiscalants & Cleaners)',
    estimatedQuantity: '',
    waterTds: '',
    notes: '',
    sdsRequested: true,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#092442] text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              Immediate Technical Quotation
            </span>
            <h3 className="text-lg font-extrabold tracking-tight">
              Request Batch Pricing & Specification Sheets
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-[#22a048] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#092442]">Quotation Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Our chemical engineering and dispatch desk in Baldia Town has received your RFQ for <strong>{formData.productCategory}</strong>.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1 text-slate-700">
                <div><strong>Response SLA:</strong> Within 2 business hours</div>
                <div><strong>Direct Dispatch Hotline:</strong> {COMPANY_INFO.phone}</div>
                <div><strong>Standard Inclusions:</strong> Batch Certificate of Analysis (CoA) & GHS Safety Data Sheets (SDS)</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0d5ca8] text-white rounded-lg font-bold text-sm hover:bg-[#092442] transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-slate-600 text-xs sm:text-sm">
                Submit your target water parameters, required drum/carboy counts, or replacement parts. Our senior chemists review each RFQ.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name or Plant Rep *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Engr. Tariq Mehmood"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Company / Factory Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Al-Madina Textiles / SITE"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Product Category *
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none bg-white"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                    <option value="Industrial RO Plant Turnkey Skid">Industrial RO Plant Turnkey Skid</option>
                    <option value="Membrane CIP Cleaning Chemical Package">Membrane CIP Cleaning Chemical Package</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Estimated Quantity / Volume
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5 Drums (1000L) or 20 Cartridges"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Water Specs / Plant Capacity (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Feed TDS 2,800 ppm, Flow 15,000 LPH, 75% Recovery"
                  value={formData.waterTds}
                  onChange={(e) => setFormData({ ...formData, waterTds: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Message / Special Packaging Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify foulant characteristics, preferred drum sizes (20L, 200L, 1000L), CIP schedule, or delivery deadline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0d5ca8] focus:border-[#0d5ca8] outline-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-2 pt-1 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <input
                  type="checkbox"
                  id="sds-checkbox"
                  checked={formData.sdsRequested}
                  onChange={(e) => setFormData({ ...formData, sdsRequested: e.target.checked })}
                  className="mt-0.5 rounded text-[#0d5ca8] focus:ring-[#0d5ca8]"
                />
                <label htmlFor="sds-checkbox" className="cursor-pointer">
                  Include certified Safety Data Sheet (SDS) and Certificate of Analysis (CoA) with quotation.
                </label>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#0d5ca8] text-white rounded-lg font-bold text-sm hover:bg-[#092442] shadow transition flex items-center gap-2"
                >
                  <span>Submit Inquiry & Get Quote</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
