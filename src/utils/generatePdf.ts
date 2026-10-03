import { jsPDF } from 'jspdf';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/mockData';

export const generateProductPdf = (product: Product) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  // Header Background Bar (Navy)
  doc.setFillColor(9, 36, 66); // #092442
  doc.rect(0, 0, pageWidth, 26, 'F');

  // Cyan Accent Line
  doc.setFillColor(0, 159, 227); // #009fe3
  doc.rect(0, 26, pageWidth, 2, 'F');

  // Company Name & Subtitle
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('AQUAPARTS CHEMICALS', margin, y);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 159, 227);
  doc.text('RO CHEMICALS, FILTERS & INDUSTRIAL WATER TREATMENT', margin, y + 5);

  // Contact Info on Header Right
  doc.setFontSize(7.5);
  doc.setTextColor(220, 230, 242);
  doc.text(`Phone: ${COMPANY_INFO.phone}`, pageWidth - margin, y - 1, { align: 'right' });
  doc.text(`Email: ${COMPANY_INFO.email}`, pageWidth - margin, y + 3, { align: 'right' });
  doc.text('Hub River Road, Baldia Town, Karachi, Pakistan', pageWidth - margin, y + 7, { align: 'right' });

  y = 36;

  // Document Title Banner
  doc.setFillColor(243, 246, 250);
  doc.rect(margin, y, contentWidth, 12, 'F');
  doc.setDrawColor(200, 215, 230);
  doc.rect(margin, y, contentWidth, 12, 'S');

  doc.setTextColor(9, 36, 66);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('TECHNICAL DATA SHEET (TDS) & SAFETY SPECIFICATION', margin + 4, y + 7.5);

  const today = new Date().toISOString().split('T')[0];
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Doc Ref: AP-TDS-${product.catId} | Date: ${today}`, pageWidth - margin - 4, y + 7.5, { align: 'right' });

  y += 18;

  // Product Name & Category
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(9, 36, 66);
  doc.text(product.title, margin, y);

  y += 6;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 159, 227);
  doc.text(`Product Category: ${product.category}  |  Catalog ID: ${product.catId}`, margin, y);

  y += 8;

  // Product Overview / Description
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(9, 36, 66);
  doc.text('1. PRODUCT OVERVIEW & APPLICATION', margin, y);

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const splitDesc = doc.splitTextToSize(product.longDesc || product.shortDesc, contentWidth);
  doc.text(splitDesc, margin, y);
  y += splitDesc.length * 4.5 + 4;

  // Specifications Table Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(9, 36, 66);
  doc.text('2. TECHNICAL & CHEMICAL SPECIFICATIONS', margin, y);
  y += 4;

  // Table header row
  const rowHeight = 6;
  doc.setFillColor(9, 36, 66);
  doc.rect(margin, y, contentWidth, rowHeight, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.text('Parameter / Characteristic', margin + 3, y + 4.2);
  doc.text('Specification Value', margin + contentWidth * 0.55, y + 4.2);
  y += rowHeight;

  // Table Rows
  const tableData: { label: string; value: string }[] = [
    ...product.specs,
    { label: 'Standard Packaging Units', value: product.packaging },
    { label: 'Quality Compliance Standard', value: product.testStandard || 'ISO 9001:2015 & NSF Grade' },
    { label: 'Origin & Laboratory Verification', value: 'AquaParts Karachi Laboratory Verified' }
  ];

  tableData.forEach((row, index) => {
    const isEven = index % 2 === 0;
    doc.setFillColor(isEven ? 248 : 255, isEven ? 250 : 255, isEven ? 252 : 255);
    doc.rect(margin, y, contentWidth, rowHeight, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y + rowHeight, margin + contentWidth, y + rowHeight);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(row.label, margin + 3, y + 4.2);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(row.value, margin + contentWidth * 0.55, y + 4.2);

    y += rowHeight;
  });

  y += 6;

  // Key Features / Benefits
  if (product.features && product.features.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(9, 36, 66);
    doc.text('3. PERFORMANCE HIGHLIGHTS & ENGINEERING ADVANTAGES', margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    product.features.forEach((feat) => {
      doc.setFillColor(0, 159, 227);
      doc.circle(margin + 2, y - 1, 1, 'F');
      doc.text(feat, margin + 5, y);
      y += 4.5;
    });
    y += 3;
  }

  // Handling & Safety Protocol (MSDS Summary)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(9, 36, 66);
  doc.text('4. STORAGE, HANDLING & SAFETY GUIDELINES (MSDS SUMMARY)', margin, y);
  y += 4.5;

  const safetyItems = [
    'Personal Protection (PPE): Wear chemical-resistant nitrile gloves, safety goggles, and apron during dosing or transfer.',
    'Storage Conditions: Store in original closed containers between 5 deg C and 38 deg C in a well-ventilated, shaded area away from direct sunlight.',
    'First Aid - Eye Contact: Flush cautiously with gentle water for at least 15 minutes. Seek medical evaluation if irritation persists.',
    'Spill Response: Absorb with inert material (sand, earth). Neutralize appropriately and flush residue per Sindh EPA guidelines.'
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(51, 65, 85);
  safetyItems.forEach((item) => {
    const splitItem = doc.splitTextToSize(`- ${item}`, contentWidth);
    doc.text(splitItem, margin, y);
    y += splitItem.length * 3.8 + 1;
  });

  // Footer / Verification Block at Bottom
  const footerY = 270;
  doc.setDrawColor(200, 215, 230);
  doc.line(margin, footerY, margin + contentWidth, footerY);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(
    'AquaParts Chemicals Quality Assurance | This document constitutes verified technical data. For customized dosing projections or bulk shipments, contact our engineering division.',
    margin,
    footerY + 4
  );

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(9, 36, 66);
  doc.text('Hub River Road, Baldia Town Industrial Zone, Karachi  |  Direct Dispatch: +92 333 3307845', margin, footerY + 8);
  doc.text('Page 1 of 1', pageWidth - margin, footerY + 8, { align: 'right' });

  // Save the PDF
  doc.save(`AquaParts-TDS-${product.catId}.pdf`);
};
