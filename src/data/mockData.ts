import { Product, ServiceItem, Article, GalleryProject, DeliveryZone } from '../types';

export const COMPANY_INFO = {
  name: 'AquaParts Chemicals',
  subtitle: 'RO Chemicals, Filters & Dosing Equipment Supplier',
  phone: '+92 333 3307845',
  email: 'aquapartchemicals@gmail.com',
  address: 'Hub River Road, Baldia Town Industrial Zone, Karachi, Sindh 75760, Pakistan',
  shortAddress: 'Baldia Town, Karachi',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM PKT',
  sunday: 'Warehouse Closed (On-Call Dispatch Only)',
  emergencyNotice: '24/7 Emergency Line for Critical Plant Scaling & CIP Failures',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBux07Lh4li_6DLy3puC7W6-4P_UVfTVQ0YT2-_8vw71oERuqMGCf-IjkcBztT3BYYau2XkNXvfTj2F3EkMiZ-HY2O930K2WAo5kMCSpNDjYypPdN8SseWxPkkPvCM3kT_BFNqYeYGBfb9QDx9Mw6miYWcX1mokA3o2CZn4uCYmivfQm8YEvn2cUzWvPB8frBiLjlYdD10AceXQrDVmq1FmvSv3Sfp2Ng4FIRBfoN7gYiVCpCwt_XhFKiR3J4o47E453bY'
};

export const PRODUCTS: Product[] = [
  {
    id: 'ro-chemicals',
    catId: 'CHEM-RO-01',
    title: 'RO Chemicals (Antiscalants, Alkaline Cleaners, Acidic Cleaners & Biocides)',
    category: 'RO Chemicals',
    shortDesc: 'Antiscalants, Alkaline Cleaner, Acidic Cleaner, Biocides and more for total membrane protection.',
    longDesc: 'Engineered high-performance formulations designed to prevent calcium carbonate, barium sulfate, and silica scaling while protecting polyamide thin-film composite membranes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2iU_uAuYH5432IeDo9la15XRdhGbmDGQzrmbjWP0ea_3KodlvZlvFhgqF1nfIww9tTwY9jt-ALqA6d6q71_rpHxWSI4bukJmccH56d7u6EiRtMNCWzRWmVTQtHGHgLzMrGIoc9oosHH3wCEtRSoVVUzPwM1DnFfQyGaOJaEaLPl1xHjWpZlz3aph9N53BHRne_YdAQNXpUgN5g7n0DA-WQ2tp8C_Ov49DDTY37Ywph7EgfzwNMeyQA',
    badge: 'Top Seller',
    packaging: '20L Carboys, 200L Drums & 1000L IBC',
    testStandard: 'LSI Tested +3.2',
    specs: [
      { label: 'Formulation Class', value: 'Speciality Water Treatment' },
      { label: 'Scale Inhibitor Type', value: 'High Silica & Carbonate Threshold' },
      { label: 'pH Range (Neat)', value: '1.5 - 2.5 (Acidic) / 11.5 - 12.5 (Alkaline)' },
      { label: 'Specific Gravity', value: '1.15 - 1.25 @ 20°C' }
    ],
    features: [
      'Premium Threshold Antiscalant',
      'High pH Alkaline CIP Cleaner',
      'Low pH Descaler & Iron Remover',
      'Non-Oxidizing Membrane Biocide'
    ],
    availableUnits: ['20 Liters Carboy', '200L Drum', '1000L IBC Tote']
  },
  {
    id: 'cartridge-filters',
    catId: 'FILT-PP-02',
    title: 'Cartridge Filters (Spun Melt-Blown & String Wound)',
    category: 'Cartridge Filters',
    shortDesc: 'PPF / PPY Cartridge Filters in all sizes (1, 5 Micron) for pre-RO silt removal.',
    longDesc: '100% pure food-grade polypropylene spun melt-blown and precision diamond string-wound sediment filter cartridges engineered to minimize Silt Density Index (SDI).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4scshw6g_0qlZ01gt5L60vHeFGfajZ55oSCMFnr7ThcflEOnBVex-vFVSrtkid5PPiN-gyNi-JIkgjUmwL3LMXhSI_gONLcvRTRa6lcrgizrQbFOOL7k9U5ffcLXITeBsIMQUfgg4q3vsxlKSUEpSMwYXU1vRrU-Ep_MRL_ZBGF4DS1Ep4dBAT6zBUTgJMbA34vYhS8QwuOWyfAYOPgl7Ktu8tJF9Z_2EZ-TKOBunVvH429aLt_ypXQ',
    badge: 'High Efficiency',
    packaging: 'Individual Seal & 25 Pcs / Master Box',
    testStandard: 'NSF Standard 42 Compliant',
    specs: [
      { label: 'Micron Ratings', value: '1, 5, 10, 20 Micron' },
      { label: 'Available Lengths', value: '10", 20", 30", 40" Jumbo & Slim' },
      { label: 'Diameter Options', value: '2.5" Standard & 4.5" Big Blue (BB)' },
      { label: 'Thermal Tolerance', value: 'Up to 65°C Continuous' }
    ],
    features: [
      'Graded density for high dirt holding capacity',
      'No chemical binders or wetting agents',
      'Reinforced core available for high delta-P',
      'Instant dispatch from Karachi warehouse'
    ],
    availableUnits: ['10" Slim (1 & 5µm)', '20" Jumbo (1 & 5µm)', '30" High Flow', '40" Industrial']
  },
  {
    id: 'bag-filters',
    catId: 'BAG-LIQ-03',
    title: 'Liquid Bag Filters (PP & Polyester Needle Felt)',
    category: 'Bag Filters',
    shortDesc: 'High efficiency bag filters for superior liquid filtration in industrial streams.',
    longDesc: 'Heavy-duty industrial liquid filter bags with welded leak-proof seams and molded polymeric sealing collars for high-viscosity and high-flow filtration stages.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiDFXxb4gAlaXzlFXJR19M90-2AZjKTba7oXW2yLnCXWzfV7o8LdUaJM_WxfbmKNgRcV4zHsTTzGDMxk3G2_odV5VsiicK0_gOjfTF5ZR72RRVnIhYO2EVSvqqS8b_GwxGCxFA0BlMHrsR8oww1V7r6Fd28-2fxIkXIh4nY58wH4T4ZcoYlSb-Wq1TOiX234lT3fxse0df0Gd4yqWazp9iUVR5HIdzzyOEgaQb5EIf8TFpXB4bqpn_g',
    badge: 'Industrial Grade',
    packaging: '50 Pcs Sealed Bags',
    testStandard: 'FDA CFR Title 21',
    specs: [
      { label: 'Micron Range', value: '0.5 to 200 Micron' },
      { label: 'Standard Sizes', value: 'Size 1 (7"x17"), Size 2 (7"x32"), Size 4' },
      { label: 'Ring Material', value: 'Galvanized Steel / Polypropylene Collar' },
      { label: 'Max Flow Rate', value: 'Up to 40 m³/hr per bag (Size 2)' }
    ],
    features: [
      'Ultrasonically welded seams prevent bypass',
      'High solids loading capacity',
      'Wide chemical compatibility with acids & alkalis',
      'Reinforced lift handles for rapid changeout'
    ],
    availableUnits: ['Size 1 (7" x 17")', 'Size 2 (7" x 32")', 'Size 4 (4" x 14")']
  },
  {
    id: 'dosing-pumps',
    catId: 'PUMP-DOS-04',
    title: 'Dosing Pumps (Electronic Diaphragm & Metering Skids)',
    category: 'Dosing Pumps',
    shortDesc: 'Accurate & reliable dosing pumps for all industrial and chemical applications.',
    longDesc: 'Microprocessor-controlled solenoid metering pumps for continuous precision injection of antiscalants, chlorine, sodium bisulfite, and pH neutralizers.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP9OoKZb84ajFokujFvxBHgFSRb-HTh1U6RC8uFsB9xr2kFmNIIT2bW4sqeXBliNt290-VVTffmNPhulh-Tn58Fpna9KHNI5_eAYhnqN8-jxJPp1siqL2igp7_YD8VGB21tWuwKdtdWbiNSCR9K2n-wIJXVU9Dxd0ZTvFy5Sw_I_NS4XrFtuPwxdirdVucydzM6BEUzDUpyWG20jQzdy9VL_UDeW_lWdmsDKAR4Hk0ZpGS5ZWcvj_lLg',
    badge: 'Digital Controls',
    packaging: 'Complete Installation Kit with Tubing & Foot Valve',
    testStandard: '1 Year Warranty Included',
    specs: [
      { label: 'Flow Rate Range', value: '1.0 to 50 L/Hr Adjustable' },
      { label: 'Working Pressure', value: 'Up to 16 Bar (232 psi)' },
      { label: 'Wetted Parts', value: 'PVDF, PTFE Diaphragm, Ceramic Balls' },
      { label: 'Control Inputs', value: 'Manual Stroke, 4-20mA, Pulse / Flow Meter' }
    ],
    features: [
      'PTFE diaphragm engineered for 5+ years operational life',
      'Double ball check valves for zero backflow',
      'IP65 rated splash and corrosive fumes proof casing',
      'Includes suction filter, injection valve and PE tubing'
    ],
    availableUnits: ['5 L/Hr @ 7 Bar', '10 L/Hr @ 10 Bar', '20 L/Hr @ 5 Bar', '50 L/Hr Motorized']
  },
  {
    id: 'ro-membranes',
    catId: 'MEM-IND-05',
    title: 'Industrial RO Membranes (BW & SW Elements 4040 / 8040)',
    category: 'RO Membranes',
    shortDesc: 'High rejection RO membranes for reliable industrial and brackish water performance.',
    longDesc: 'High-rejection brackish water & seawater spiral-wound membrane elements with stable permeate flux, silica resistance, and long-term durability under heavy fouling loads.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK29kxIy4ZBG02jOhW53DV8k-yg-p4hynbF6BJbWL3A0As2J2M9TNI2JCyPxgOMfJ4I7YEJb801hx5qJdRvLavTEn50iCPK2LMUZ6UYdjzOED6c7fEYAP1FECxfAUtOJKDhErJskIOcmCk7Mto1t5-z2pWyBvuBuTRTD6VulCizd3fTHvQ5R0hzCjWVDR_5Q9nk4qtI1hRPTYi2UmG9bKW3cgg3azhkH5yUFSS5ud8TjmMJ6CJSidZMw',
    badge: 'High Rejection',
    packaging: 'Factory Sealed with Vacuum Nitrogen & Test Certificate',
    testStandard: 'Factory Certified 99.5%+ Salt Rejection',
    specs: [
      { label: 'Standard Models', value: 'BW-4040, BW-8040, SW-4040, SW-8040' },
      { label: 'Stabilized Rejection', value: '99.5% - 99.7%' },
      { label: 'Permeate Flow', value: '2,400 GPD (4040) / 10,500 GPD (8040)' },
      { label: 'Operating Limits', value: 'Max 600 psi (Brackish) / 1200 psi (SW)' }
    ],
    features: [
      'Dense polyamide thin-film composite chemistry',
      'Thick 34 mil feed spacer reducing bio-foulant trapping',
      'Broad cleaning pH tolerance (pH 1 - 13 for CIP)',
      '100% wet-tested with batch analytical sheet'
    ],
    availableUnits: ['BW-4040 (2,400 GPD)', 'BW-8040 (10,500 GPD)', 'SW-8040 Seawater', 'ULP-4040 Ultra Low Pressure']
  },
  {
    id: 'multimedia-vessels',
    catId: 'VESS-FRP-06',
    title: 'Multimedia Vessels (FRP Structural Pressure Tanks)',
    category: 'Multimedia Vessels (FRP)',
    shortDesc: 'Durable FRP vessels for multimedia, sand, activated carbon and softening systems.',
    longDesc: 'Structural fiber-reinforced composite pressure vessels with seamless food-grade polyethylene inner liners for multi-grade sand, activated carbon, and water softening resin media.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANeQsuh5DCemrCN9VHzz16173y2gsi_WFilVgvKN2n2_9c3wlHFjj1ro1rapYg88iswjUaUPWsYq7h-VxSZmvOLfO73hezM44nssMmZyaqrNFCuQZfTjmmLlwRb6RytfYwg7pwJoZX6LynWeGebjs6yPGl2zcESuIsn6PGEPPEdI-pxlkL4IP24dRmdZpQG6heYo88_Dv7psAOGKqj_k1j4ZISW3MndBmQzPnj-ATxJDsuMbnzep_V5w',
    badge: 'Pressure Rated 150 PSI',
    packaging: 'Wooden Crates / Protective Bubble wrap',
    testStandard: 'ASME Section X & NSF 44',
    specs: [
      { label: 'Sizes Available', value: '0844 to 4872 Standard Dimensions' },
      { label: 'Opening Options', value: 'Top 2.5" / 4" Threaded & 6" Top/Bottom Flanged' },
      { label: 'Liner Material', value: 'Seamless Food Grade HDPE / Polyethylene' },
      { label: 'Operating Pressure', value: '150 psi (10.5 bar) Design Pressure' }
    ],
    features: [
      '100% corrosion proof and rust-free construction',
      'Continuous filament wound fiberglass outer shell',
      'Compatible with Clack, Fleck, and Runxin automatic valves',
      'Available with top and bottom distribution laterals'
    ],
    availableUnits: ['1054 (10"x54")', '1354 (13"x54")', '1665 (16"x65")', '2472 (24"x72")', '3672 (36"x72")']
  },
  {
    id: 'domestic-ro-plants',
    catId: 'SYST-DOM-07',
    title: 'Domestic RO Plants (5, 6 & 7 Stage Residential Systems)',
    category: 'Domestic RO Plants',
    shortDesc: 'Reliable & efficient RO plants for pure, mineral-rich drinking water at homes and offices.',
    longDesc: 'Turnkey residential and light commercial drinking water purification units with high-output booster pumps, remineralization alkaline cartridges, and optional UV sterilizers.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjpPMbHFTdVQODxxzqlNZf-JLXRxU9wgjWPQ6v_tdkittmWSKtIG8aVECwo21qYtQd3ZpuRY_GkbsdwRAZ-mvA0P-Ph3-PoNMqMiJSq_RfWPrI4TMzIS3ndeJjoXmyvnbi1w4Pb2b4ZbraRtQdJBujbmZUXpEddTQw0j-0kAeZFsY-EksoB8n5l5k5DNAPihb5jEaANRElQA1ZMpHq1JsuZ23fA1YDkkmawfiwJqzXoaxlwI8S5j50Ww',
    badge: 'Certified Pure',
    packaging: 'Complete Retail Color Box with Stainless Faucet',
    testStandard: 'Tested for 99% Arsenic & Fluoride Removal',
    specs: [
      { label: 'Purification Stages', value: '5-Stage, 6-Stage Alkaline, 7-Stage UV' },
      { label: 'Daily Output', value: '50 to 100 Gallons Per Day (GPD)' },
      { label: 'Storage Tank', value: '3.2 Gallon Pressure Bladder Tank' },
      { label: 'Booster Pump', value: '24V DC Silent Diaphragm Pump' }
    ],
    features: [
      'Sediment, Carbon, Carbon Block, RO, Post-Carbon Stages',
      'Pure brass chrome gooseneck designer tap',
      'Auto shut-off valve prevents wastewater overflow',
      'Quick-connect fittings for effortless 15-minute maintenance'
    ],
    availableUnits: ['5-Stage Standard (50 GPD)', '6-Stage Alkaline Mineralizer (75 GPD)', '7-Stage UV Sterilization (100 GPD)']
  },
  {
    id: 'accessories-spares',
    catId: 'SPAR-ACC-08',
    title: 'Accessories, Gauges & Plant Spares',
    category: 'Accessories & Spares',
    shortDesc: 'Wide range of accessories, telemetry gauges, and spares for RO plants.',
    longDesc: 'Comprehensive stock of glycerin pressure gauges, acrylic panel rotameters, stainless steel 304/316 housings, UV chambers, online digital TDS/EC controllers, and solenoid valves.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmJ1LieuLuX3kq0puSsTEBXuvpYl3IH0Rd7oziDLK9TOLsTkJbjZIc93jUCTfQac-Fe4FhPXsOIiERKNm0ib6F0YJ9PD8GcYl_zN4y8MRPVxkidodLIKIbpk7xYbdAXxORkDOVl0C56qaigcP2RTkS7ttwlG9hVMehjHefJOTa-Wpua2Ftqq3Om3109WdmIx-cH9LeIvBls2eU3IkIpx2Kv394ipP2T1VxfARr9Nfrbs7IuhPgQ0WJxw',
    badge: 'OEM Replacements',
    packaging: 'Secure Carton Packaging',
    testStandard: 'Full Compatibility Guaranteed',
    specs: [
      { label: 'Pressure Gauges', value: 'SS316 Glycerin Filled (0-300 / 0-600 psi)' },
      { label: 'Flow Meters', value: 'Panel & In-line Rotameters (GPM / LPM)' },
      { label: 'UV Sterilizers', value: 'Stainless 304 UV Chambers (12 - 55 Watt)' },
      { label: 'Control Valves', value: 'Manual Multiport & Automatic Electronic Clack' }
    ],
    features: [
      'Glycerin-dampened gauges prevent pointer pulsation',
      'Direct-reading calibrated flow rotameters',
      'Genuine replacement electronic ballast for UV lamps',
      'Immediate counter pickup at Baldia Town depot'
    ],
    availableUnits: ['SS Glycerin Gauges (1/4" NPT)', 'Panel Flow Meters (0.5-5 GPM, 2-20 GPM)', 'UV Chambers (1 to 12 GPM)', 'Digital TDS Controller']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ro-installation',
    serviceCode: 'ENG-RO-01',
    tag: 'Custom Skid',
    title: 'Industrial RO Plant Installation & Commissioning',
    shortDesc: 'Custom engineering from 500 LPH to 100,000+ LPH systems engineered for high-demand textile processing, food and beverage bottling, pharmaceutical grade WFI pre-treatment, and chemical manufacturing.',
    specs: [
      { label: 'Capacity Range', value: '500 – 120,000 LPH' },
      { label: 'Target Industries', value: 'Textile, Pharma, Food, Chemical' },
      { label: 'Automation Support', value: 'Siemens / Delta PLC & HMI' },
      { label: 'Pressure Rating', value: 'Up to 65 Bar (SWRO & Brackish)' }
    ],
    features: [
      'Turnkey mechanical framing, pipe welding, and high-pressure Grundfos / CNP pump integration.',
      'Rigorous wet commissioning with real-time permeate conductivity calibration and membrane integrity tests.',
      'Integrated pre-treatment (multimedia sand, activated carbon, water softener skids).',
      'Operator training, complete P&ID schematics and operation logbooks provided.'
    ],
    footerNote: 'Field Ready: Karachi & Sindh',
    actionText: 'Request System Sizing'
  },
  {
    id: 'ro-cleaning',
    serviceCode: 'CIP-CL-02',
    tag: 'Mobile CIP Skids',
    title: 'RO Membrane Cleaning & Descaling (CIP)',
    shortDesc: 'CIP (Clean In Place) services designed to restore design flux rate and normalized salt rejection using proprietary specialty antiscalant removal agents, acid washes for mineral scale, and alkaline washes for organic/biofilm fouling.',
    specs: [
      { label: 'Chemistry Formulation', value: 'AquaClean AC-20 / AL-40' },
      { label: 'Target Foulants', value: 'CaCO₃, Silica, Biofouling & Iron' },
      { label: 'Membrane Recovery', value: 'Up to 98% of Original Flux' },
      { label: 'Element Compatibility', value: '4040, 8040 Polyamide Membranes' }
    ],
    features: [
      'On-site mobile CIP rigs eliminating costly downtime and element unseating risks.',
      'Pre- and post-cleaning differential pressure (dP) logging with comprehensive autopsy reports.',
      'Controlled heating and recirculating flush circuits to prevent membrane damage.',
      'Chemical neutralization prior to drain discharge in compliance with SEPA standards.'
    ],
    footerNote: 'Membrane Life Extension',
    actionText: 'Schedule CIP Service'
  },
  {
    id: 'water-testing',
    serviceCode: 'LAB-DS-03',
    tag: 'Analytical Lab',
    title: 'Water Testing & Chemical Dosage Optimization',
    shortDesc: 'Comprehensive raw water laboratory analysis, Silt Density Index (SDI) verification, TDS mapping, LSI calculation, and projection-based antiscalant dosage algorithms to reduce operational OPEX while preventing irreversible silica scaling.',
    specs: [
      { label: 'Parameters Analyzed', value: 'TDS, pH, Hardness, SiO₂, Fe, Cl⁻' },
      { label: 'Software Projection', value: 'AquaScale Projection 4.2' },
      { label: 'Dosage Reduction', value: '15% – 30% OPEX Saved' },
      { label: 'Turnaround Time', value: '24 – 48 Hours Lab Report' }
    ],
    features: [
      'Precise calculation of Langelier Saturation Index (LSI) and Stiff & Davis Index (S&DSI).',
      'Customized dosing pump calibration ensuring neither under-dosing scaling nor over-dosing biofouling.',
      'Chemical compatibility checks with existing coagulation and biocide regimens.',
      'Certified laboratory Certificate of Analysis (CoA) provided for regulatory compliance.'
    ],
    footerNote: 'Certified ICP & Titration Testing',
    actionText: 'Submit Water Sample'
  },
  {
    id: 'amc-support',
    serviceCode: 'SLA-AMC-04',
    tag: 'Karachi & Sindh',
    title: 'Annual Maintenance Contracts (AMC) & On-Site Support',
    shortDesc: 'Reliable SLA-backed maintenance coverage featuring scheduled micron filter cartridge changeouts, high-pressure pump rebuilds, sensor and probe calibration, and rapid emergency troubleshooting across Karachi industrial hubs.',
    specs: [
      { label: 'Scheduled Visits', value: 'Bi-Weekly / Monthly' },
      { label: 'Emergency Call-Out', value: '< 4 Hours Guaranteed' },
      { label: 'Spare Parts Reserve', value: 'In-Stock Baldia Hub Depot' },
      { label: 'Coverage Area', value: 'SITE, Korangi, Landhi, Nooriabad, Hub' }
    ],
    features: [
      'Preventive pressure switch, level controller, and solenoid valve audit before failures happen.',
      'Comprehensive logbook maintenance and continuous operator chemical dosing coaching.',
      'Guaranteed inventory reservation for membranes, antiscalants and filter cartridges.',
      'Emergency holiday and weekend mobile technician deployment.'
    ],
    footerNote: '24/7 Hotline Included',
    actionText: 'View AMC Packages'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'complete-guide-ro-antiscalants',
    title: 'Complete Guide to RO Antiscalants: How to Prevent Membrane Scaling & Maximize Plant Lifespan',
    category: 'RO Antiscalants',
    readTime: '6 min read',
    date: 'October 24, 2024',
    author: 'Technical Engineering Team',
    authorRole: 'AquaParts Water Laboratories, Karachi',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZKa7KaoHnmkccGU5QpVnjAsshC241MSr9IAhEzyXVPNsJrQvOSAmz6_brnvqEqa9pEXJ9pxlOZwXmZIZtJxgCr3BeVZOfHE0fOJcO7Le9qhRsQ8OGEY1YPh8U--lfUak2UJ_bs3MaF_ppOvJlGa2RhSh9Xpf7HK-02q03DRLthxaBRC52g3y_mUkJzTE8_RxmbTU9jA3zQxniwjLagQ6-oXlcEHrCpa_vFbOQ3Uj8IqTeCsohngiALQ',
    badgeColor: 'blue',
    summary: 'High hardness, silica concentration, and sulfate salts accelerate irreversible membrane scaling. Learn how specialty polymer and organophosphonate antiscalants disrupt crystal nucleation, sustain high permeate flux, and reduce acid cleaning downtime across industrial RO units.',
    parameters: [
      { label: 'Silica Threshold', value: 'Up to 240 ppm' },
      { label: 'LSI Protection', value: '+2.8 Index' },
      { label: 'Membrane Types', value: 'PA TFC 8040 / 4040' }
    ],
    keyTakeaways: [
      'Antiscalants work by crystal threshold inhibition, crystal distortion, and particle dispersion.',
      'Operating without antiscalants at recoveries above 65% in Karachi groundwater causes rapid CaCO3 and gypsum scaling within 48 to 72 hours.',
      'Stoichiometric dosing (typically 2.5 - 4.5 ppm) saves up to 30% in chemical OPEX compared to generic overdosing.'
    ],
    content: [
      'Reverse Osmosis (RO) systems operate by concentrating dissolved minerals in the brine reject stream. As water permeates through the thin-film composite membrane, the concentration of sparingly soluble salts like calcium carbonate (CaCO₃), calcium sulfate (CaSO₄), barium sulfate (BaSO₄), and colloidal silica (SiO₂) increases exponentially.',
      'Once the ionic product exceeds the solubility product (Ksp), crystal nucleation occurs directly on the membrane polyamide surface. This scale blocks feed channels, increases differential pressure (dP), degrades permeate flow, and causes permanent membrane tearing.',
      'Modern specialty antiscalants use tailored phosphonocarboxylic acid and polyacrylic acid polymers. These polymers adsorb onto microscopic crystal nuclei as they form, distorting their lattice structure and preventing agglomeration. They also impart a strong negative surface charge to suspended colloids, keeping them dispersed so they exit harmlessly in the brine stream.',
      'To calculate accurate dosing: Dosing (ppm) = (Feed Flow in m³/h × Required ppm) / (Dosing Pump Delivery in L/h × Solution Concentration %). Contact AquaParts Chemical laboratory for complimentary computerized scaling projections.'
    ]
  },
  {
    id: 'selecting-dosing-pump',
    title: 'Selecting the Right Dosing Pump: Solenoid vs. Motor-Driven Diaphragm',
    category: 'Equipment Guide',
    readTime: '5 min read',
    date: 'October 18, 2024',
    author: 'Engr. Tariq Mehmood',
    authorRole: 'Senior Instrumentation Engineer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_1dI7jYgqONbBah_1VnlNY13wifdvsoo210uXtCO-u53za1Hz-fX_o4DJ4atUkYfK2CZ3BRTiHjTmzwRRVRTF-6kz0EhGefPzlcpP7dwRVA5sdv-jjBZX4ivUEIfpqv4xr-Jdbxw0w2eUlhojYq6jYxCMIoU6lL7zqjNnYCoe-HdjBhdjRHvcb7544ECyJPQdUDxLW6gOjH5YtbI9XE36CgGUYmBSG22AMt1FA0rI17k6ow2CWLUrjA',
    badgeColor: 'blue',
    summary: 'Analyze stroke frequency, pressure thresholds up to 16 bar, and chemical viscosity compatibility when choosing between electromagnetic solenoid pumps and robust mechanical motor-driven units.',
    parameters: [
      { label: 'Max Pressure', value: '16 Bar' },
      { label: 'Stroke Range', value: '0 - 180 pulses/min' },
      { label: 'Head Material', value: 'PVDF / PTFE' }
    ],
    content: [
      'Choosing between electromagnetic solenoid metering pumps and motorized mechanical diaphragm pumps depends on required continuous flow rate, line pressure, and automation requirements.',
      'For flows below 20 L/hr and pressures up to 10-16 bar (typical for RO antiscalant and chlorine dosing), solenoid pumps provide excellent digital precision with micro-pulse accuracy.',
      'For heavy chemical transfers, coagulant flocculation, or lime slurries above 50 L/hr, motor-driven diaphragm pumps offer the necessary mechanical torque and continuous discharge stability.'
    ]
  },
  {
    id: 'signs-ro-membranes-need-cip',
    title: 'Signs Your RO Membranes Need CIP Cleaning: Flow Rate Drop & Pressure Rise',
    category: 'Maintenance',
    readTime: '7 min read',
    date: 'October 12, 2024',
    author: 'Plant Operations Desk',
    authorRole: 'Field Engineering Division',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxiqh6pL3nZJrfKyhrEgvKuHVh9Z3gORY_vXz9mb7oYfGkJvNOVKjEwaVoXIQs_qDHr_3rkAEzxLtLwgkoGHZMK2DFo9Jb6OMleP-z3lP8Wa0xv_2BM9gnJ9vVudzw8B4oSjFOm3RVH1HBo4WEpspGNnxgjUVPxTfY_Qdgeetqv0gYEARJ7--wnbZVZ89KAmklaV0uvq2OFXn7gDuUeg8PAe4JQ5wmzv4SHDIstXepjnwOe5myoC1H4w',
    badgeColor: 'red',
    summary: 'A 10-15% drop in normalized permeate flow or an equal increase in differential pressure signals urgent cleaning. Compare alkaline vs. acid CIP sequences to restore salt rejection efficacy.',
    parameters: [
      { label: 'Trigger Delta P', value: '+15% from Baseline' },
      { label: 'Flux Drop', value: '-10% Normalized' },
      { label: 'Cleaning pH', value: 'pH 2.0 & pH 12.0' }
    ],
    content: [
      'Waiting until an RO plant suffers a 30% or 40% loss of output usually results in irreversible membrane compaction and permanent fouling that cannot be chemically washed away.',
      'Industry benchmark guidelines prescribe cleaning when normalized permeate flow decreases by 10%, normalized salt passage increases by 10%, or normalized pressure drop between feed and concentrate increases by 15%.',
      'The cleaning sequence is critical: Organic and biofouling MUST be removed first with an alkaline wash (AquaClean AL-40, pH 11.5 - 12.0). Only then should an acidic wash (AquaClean AC-20, pH 2.0 - 2.5) be circulated to dissolve mineral scales.'
    ]
  },
  {
    id: 'cartridge-filters-101',
    title: 'Cartridge Filters 101: Spun Melt-Blown vs. String Wound Performance',
    category: 'Filtration',
    readTime: '4 min read',
    date: 'October 05, 2024',
    author: 'Chemical Support Team',
    authorRole: 'Filtration Technology Lab',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VoUyZsk3UHEBwF4vSdgZuiz_-7SsdG1HUb79f3pV1uBkEJBpsRT9APPlo5wwpLTvW5xdN5qDx4tYqcNAvp7M4kNzV-mrp9N7J1PKgzjNNpbSC6HjbQ6p61T-PFI4bOJHEQywBNpQh0UMCDHgHxj6_ue0ORSMBPV5_bV-y_DSQbYgfzKTvDO1-7In84UA2eRvMVtljLwhemGDB-sOO-HKOj4VvJrxitUvqIn12camrM9snkXJavqzIQ',
    badgeColor: 'blue',
    summary: 'Evaluating nominal 1 to 5 micron sediment retention, differential pressure longevity, and particulate capture efficiency to prevent particulate fouling of downstream RO spiral-wound elements.',
    parameters: [
      { label: 'Fiber Polymer', value: '100% Polypropylene' },
      { label: 'Micron Retention', value: '1µm & 5µm' },
      { label: 'Max dP', value: '30 psi (2.1 bar)' }
    ],
    content: [
      'Micro-filtration cartridge filters are the last physical barrier protecting expensive RO membranes from suspended solids, rust flakes, and escaping sand media.',
      'Spun melt-blown filters feature progressive gradient density (loose outer layers trapping large particles, tight inner core capturing micro-silt), offering maximum dirt holding capacity.',
      'String-wound filters excel in handling sticky colloidal matter and high-temperature streams without fiber migration.'
    ]
  },
  {
    id: 'calculate-antiscalant-dosage',
    title: 'How to Calculate the Correct Antiscalant Dosage for High TDS Groundwater',
    category: 'Chemical Dosing',
    readTime: '8 min read',
    date: 'September 28, 2024',
    author: 'Dr. Asif Rabbani (Chemist)',
    authorRole: 'Head of Chemical Research & Development',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8RwDZEtS68jVk6yXN8b0cPmZ28_zh6QTNg60wizICVLpA93m0GW0g5_iVkv27sMD5jtUKcxjqXWLoFS0X0aYNshQ7c11XoOKPaV7HiWE4-tfQPcSNeuAShYQoJMPszzK3vEtuRiLUNFtRyqLp6IohTm6UAI1TnYI9BFOy83iOgfouYivheDpx0Ms0oGv9mwX6cUvRiTYHh04N2xXu6tvnAiJl5vnz6Ay_lX2FguxyqsNJdmpaYe_Xeg',
    badgeColor: 'green',
    summary: 'Step-by-step mathematical models balancing calcium carbonate, barium sulfate, and silica supersaturation indices against pure active polymer concentration in parts per million (ppm).',
    parameters: [
      { label: 'Calculation Model', value: 'AquaScale Matrix' },
      { label: 'Accuracy Range', value: '±0.05 ppm' },
      { label: 'Key Indices', value: 'LSI, S&DSI, %SiO2' }
    ],
    content: [
      'Under-dosing antiscalant leads to rapid scale precipitation within weeks, while overdosing can cause polymer fouling or biological growth in the reject spacer channels.',
      'Calculations require six primary water test values: Calcium (mg/L as CaCO3), Total Alkalinity, pH, Temperature, Total Dissolved Solids (TDS), and Sulfate / Silica levels.',
      'Our Karachi technical team provides customized calculation software worksheets for plant operators across SITE, Korangi, Landhi, and Nooriabad.'
    ]
  },
  {
    id: 'frp-multimedia-vessels',
    title: 'Understanding FRP Multimedia Vessels: Sand, Anthracite, and Carbon Media',
    category: 'Pre-Treatment',
    readTime: '6 min read',
    date: 'September 21, 2024',
    author: 'Engr. Tariq Mehmood',
    authorRole: 'Senior Projects Engineer',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCotwV3vesXmrBkopIgc-ElYvVzd_LlpeJk8WFpmsJf5iw6d9lbkejiJtckW1yZ7Ro68bL3TspEtrCRGIQgCvHyykrZT6znd1UVVMyseabJhv57WUFK9Vmx6PSC65vku3k2dhs_6Jd8PnBpOPUHHC4Uh5qxK7zS6jQaSHgqOHWB6JpjlTSeBJSBwJpZnd8skBbbqFH_jcUW2gKxOHXch0IHYshYvfN968mPBZ09aJ-5FF66oDRkcPWmbg',
    badgeColor: 'blue',
    summary: 'Layering graded gravel, fine quartz sand, anthracite coal, and activated coconut shell carbon to minimize Silt Density Index (SDI) and remove chlorine oxidizers before membrane contact.',
    parameters: [
      { label: 'Vessel Material', value: 'Structural FRP' },
      { label: 'Bed Filtration Velocity', value: '10 - 15 m/hr' },
      { label: 'SDI Target', value: '< 3.0' }
    ],
    content: [
      'Proper pre-treatment multimedia depth filtration extends downstream RO membrane life by more than 300%.',
      'The multi-layer configuration uses density differences: coarse, lightweight anthracite coal stays at the top to capture larger debris, quartz sand in the middle handles finer turbidity, and garnet/gravel supports the underdrain.',
      'Activated carbon vessels follow immediately to reduce free chlorine below 0.05 ppm, protecting polyamide membranes from irreversible oxidation breakdown.'
    ]
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'textile-50000-ro',
    title: '50,000 LPH Industrial RO System',
    category: 'Industrial RO Plants',
    categoryBadge: 'Textile Processing',
    categoryColor: 'blue',
    location: 'SITE Area, Karachi',
    capacityBadge: 'Cap: 50,000 LPH',
    highlightBadge: 'Recovery: 78%',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1UXxxfctFZHZuj8I_eNylfLiXwB4CEwxtjxPab7x-4a5fUGWMaGpp3wEt2_TgTb5ZpGa6nmvWer3iaEJiZLfDVqB1b0GN3q6qr6mlscqF-DgRKFjE9p3fmglP1iHInXApobf5zb9l_NhKbwmepRX0MccIXz3jpZWpRt25y3NwJnQg9OSQdyYUDnMN6ymQ3gPIQJE9byoM_AUMrEHejTas4ZFJ37If9fzp2E-g5KE_Mz6DAycaxsQy5wbMZX',
    description: 'Turnkey high-pressure brackish water desalination train equipped with automated anti-fouling flush and chemical antiscalant feed for continuous loom dyeing operations.',
    metrics: [
      { label: 'TDS Inlet', value: '3,800 ppm' },
      { label: 'Permeate', value: '<65 μS/cm' },
      { label: 'Vessels', value: '8x 8040 FRP' }
    ],
    components: ['Hydranautics CPA5-LD', 'Grundfos CRN Pump', 'AquaParts AQ-300 Antiscalant'],
    commissioned: 'Q1 2024'
  },
  {
    id: 'pharma-dual-dosing',
    title: 'Dual Dosing Skid & FRP Assembly',
    category: 'Chemical Dosing Skids',
    categoryBadge: 'Pharma Grade Skid',
    categoryColor: 'emerald',
    location: 'Korangi Ind. Area',
    capacityBadge: 'Cap: 15,000 LPH Flow',
    highlightBadge: 'GMP Verified',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhFOnRvaneKgxxrPQz1rQXC36sei-yLAazeZ9obYTHRylFIBA6-j2ZlT67QWPGKAX7dI7PL3twJzeT9YZNA5aOKf5Yun3b8vEl75Bex0eAoCIkaGDII9Ea1b6UclRQop-sOSMWXJO4-uOuTBOSt9aHi7BYpsGUn0jrkSop_039hgjyku5arwwwj-BMFrsD77FAdVgW5qvx1uXSne1nlYPviR1Mr7qtj_1deVINVg-5r_Pf0mcYCOE7bA',
    description: 'Sanitary dual chemical injection skid with automated pH neutralizer feed and active biocide sanitization dosing for pharmaceutical process water pretreatment.',
    metrics: [
      { label: 'Dosing Rate', value: '0.8 - 4.2 L/h' },
      { label: 'Pipe Class', value: 'SS316L / PVDF' },
      { label: 'Redundancy', value: '100% N+1' }
    ],
    components: ['SEKO Tekna Diaphragm', 'Structural FRP Tanks', 'Non-Oxidizing Biocide BIO-20'],
    commissioned: 'Q4 2023'
  },
  {
    id: 'seawater-desal',
    title: 'Seawater Desalination Unit',
    category: 'Industrial RO Plants',
    categoryBadge: 'Marine & Port',
    categoryColor: 'sky',
    location: 'Keamari Port Facility',
    capacityBadge: 'Cap: 25,000 LPH SWRO',
    highlightBadge: 'Pressure: 68 bar',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Cx6Rx0vMVHVCSjowD2PZXgxUaPGQ83FoFzEfHTsQrSw_J7ZT0NKfy9gAjoV-RH6ukwyLCMKWBo81boJn1hfAUVkDxhfkY2v28Xymfs1mTQE79JbX3613eZHDqByrqxoSyU-Tjt894xylSF-6L3rT_7FdQgqUEyBihrCV276fWtevxjF3GSrQVvzME4C8HxsFW_UlslcqcogGOJvuj49AcJvbMZHpIEWGJpCdUnizMcSv4xdGiYTFJQ',
    description: 'Heavy-duty seawater RO installation designed to handle high salinity Arabian Sea water feed with integrated isobaric energy recovery and shock chlorination dosing.',
    metrics: [
      { label: 'Inlet Salinity', value: '38,500 ppm' },
      { label: 'Permeate', value: '<350 ppm' },
      { label: 'Vessel Mat.', value: '1200 PSI FRP' }
    ],
    components: ['FilmTec SW30HR', 'Danfoss APP High Pressure Pump', 'AQ-SeaShield Inhibitor'],
    commissioned: 'Q2 2024'
  },
  {
    id: 'beverage-ro-train',
    title: 'Multi-Stage Reverse Osmosis Train',
    category: 'Commercial Systems',
    categoryBadge: 'Food & Beverage',
    categoryColor: 'amber',
    location: 'Port Qasim Zone',
    capacityBadge: 'Cap: 80,000 LPH',
    highlightBadge: '2-Stage High Flux',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSCpMlbsq46AV8Uf_eOwPrj9smfY1ufAqoaAEC97LJoLEObcSwqXsjFBJ-y9pcwJYaZgfdKSZMF01_r0feeySMYN8rqxDvxM5mKM3FGKI5TrmzpeiAlmyp1Du2SElmIwxN1AckLIeW_v-DStyGcF2Ze1AETdvSexTcrU9aynaNAL1aMJza7OX9kT3j09-tcS8cAlkE1uxHVbLHuABYjaCiWCpYAPuRNbVnDAdzJ4ySgX93UaMzcybVww',
    description: 'Sanitary dual-pass continuous RO filtration line meeting stringent international beverage blending parameters with inline de-chlorination and mineralization skids.',
    metrics: [
      { label: 'Stage Ratio', value: '4:2 Array' },
      { label: 'Conductivity', value: '<15 μS/cm' },
      { label: 'Recovery', value: '82.5%' }
    ],
    components: ['Toray TMG20D-400', 'Siemens S7-1200 PLC', 'Food-Grade SMBS Dechlorinator'],
    commissioned: 'Q3 2023'
  },
  {
    id: 'tannery-dosing-station',
    title: 'Automated Dosing & Antiscalant Station',
    category: 'Chemical Dosing Skids',
    categoryBadge: 'Tannery Effluent',
    categoryColor: 'purple',
    location: 'Leather Cluster Site',
    capacityBadge: 'Cap: 35,000 LPH Effluent',
    highlightBadge: 'Corrosive Environment',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqYGKrP2NpJ8E_aMM1OT6T5wOHluXuuvthXQeTVnui6HgNjrrT3IR6q70Bq94sRkZ2vLsRmQ_Io056iwGsUPiJrn8PlrbbxjvCByd1fbgNAXRvRPRjuTav7vpCjvD0ETLRlhwUiqwU-_vyeVFcIGlwT1-HmqpK3KcR816GtxFkJd5NLK9iIoCL0t_xpibe77xN9tpS7966ZSMpaGapeHNIXcC7zsFAYgSaE0MAe_pvFsVg9w8APeR5xQ',
    description: 'Ruggedized chemical dosing station for harsh leather tannery wastewater recovery, featuring corrosion-proof bund containment and smart proportional ppm rate controllers.',
    metrics: [
      { label: 'Chemicals', value: 'AQ-ScaleStop' },
      { label: 'Flow Control', value: '4-20mA Loop' },
      { label: 'Membrane Life', value: '+40% Ext.' }
    ],
    components: ['LMI Milton Roy Series B', 'Heavy HDPE Bund Tanks', 'Silica Inhibitor AQ-501'],
    commissioned: 'Q1 2024'
  },
  {
    id: 'municipal-drinking-station',
    title: 'Municipal Drinking Water Station',
    category: 'Media Filtration',
    categoryBadge: 'Community Water',
    categoryColor: 'teal',
    location: 'Baldia Town, Karachi',
    capacityBadge: 'Cap: 10,000 LPH Station',
    highlightBadge: 'WHO Potable Standard',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABUrF3HFlxGdFBpIk85vAcl2wYIPRBfSSb_i2AgjuCQsW16maRUs0KChtw7hMpCb024U6JQ9m6m7Wwh_D8nqLTPwysEDpemjDgalm-IOcjDtkj4WbJEAHR9jLMAx73Js8cgARgggkdI2JnJdy3PDLOzbmY6peEDZvvXTXp3LNwPpaCl83pz38BpchxikkpBSl2x9BTa_0X8a1o1hOdf-A4mwMXvR0tMZVWPEMoQwHhbwpB-UT-JOLtxA',
    description: 'Public service purification center delivering safe, arsenic-free potable drinking water with dual-stage media prefiltration and post-UV sanitization arrays.',
    metrics: [
      { label: 'Filter Media', value: 'Sand & Carbon' },
      { label: 'Microbial Path.', value: '0 CFU/100ml' },
      { label: 'Disinfection', value: 'Ozone + UV' }
    ],
    components: ['FRP Vessels 24x72', 'Clack WS1.5 Valving', 'AQ-SafeChlor Disinfectant'],
    commissioned: 'Q2 2024'
  }
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    zone: 'Zone A',
    name: 'SITE Area',
    description: 'Daily chemical shuttles for textiles, food processing & dyeing units.',
    eta: '< 45 Mins'
  },
  {
    zone: 'Zone B',
    name: 'Korangi & Landhi',
    description: 'Tannery, pharmaceutical, and high-recovery RO plant supplies.',
    eta: '90 Mins'
  },
  {
    zone: 'Zone C',
    name: 'F.B. Area & North',
    description: 'Precision dosing, cartridge filters, and membrane flushing kits.',
    eta: '60 Mins'
  },
  {
    zone: 'Zone D',
    name: 'Port Qasim & Hub',
    description: 'High-volume thermal descaling, power plant & marine RO batches.',
    eta: 'Same Day'
  }
];
