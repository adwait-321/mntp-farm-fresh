import { useState } from "react";

const IMGS = {
  farm1: "https://drive.google.com/uc?export=view&id=1m_vldsmTSKYF409278y6476ZP1xmkkLx",
  onion1: "https://drive.google.com/uc?export=view&id=10LA3wwvnTIn21cv8U9XOJRYOj8U6LHhQ",
  onion2: "https://drive.google.com/uc?export=view&id=126YPyxV4g3cmFhW2F1qHy7pBawyO6lEO",
  onion3: "https://drive.google.com/uc?export=view&id=133vE-OKaPj7JwIRw4TnuLHvLZ0vNjSfi",
  garlic1: "https://drive.google.com/uc?export=view&id=157Wv7q3XtNdaebL0nTL9rMfZ1ksPUr9s",
  garlic2: "https://drive.google.com/uc?export=view&id=15VgT4B_4ev8eP29KaUtfAGGnVlvfQ8Wb",
  garlic3: "https://drive.google.com/uc?export=view&id=18e-2wSBet_HHeBZw_CX0HE9zEDlPG1P0",
  coriander1: "https://drive.google.com/uc?export=view&id=19IOv7CdYZK13kfyjZrshfKnXNrj95ucD",
  coriander2: "https://drive.google.com/uc?export=view&id=1AZETSCxne28IhoaphpdM2vq60Rf4lhU-",
  chilli1: "https://drive.google.com/uc?export=view&id=1AhY52Aom9BsSSMQIJvDJaPkSDAugAL9u",
  chilli2: "https://drive.google.com/uc?export=view&id=1H8FHv4dbBQiSJrCQw1AfhYY_X3cgglGs",
  ginger1: "https://drive.google.com/uc?export=view&id=1HytabKvGwPnm5xAI-XEyLCOY075UrSD0",
  ginger2: "https://drive.google.com/uc?export=view&id=1KFdm0UG4MZnA4NfLZw9PsfxPr2lEXZ1k",
  vegmix1: "https://drive.google.com/uc?export=view&id=1Lml9zTnEQ4_o9MW2k6T1N83ljYHcoCbF",
  vegmix2: "https://drive.google.com/uc?export=view&id=1NurKMXFekaJ9SF1JifsN4PwlFzDSAdDW",
  qual1: "https://drive.google.com/uc?export=view&id=1POTDjyeB0k92xfR1F8Vzbi7NGghfT_og",
  qual2: "https://drive.google.com/uc?export=view&id=1QPOWbWIBZ7KlGY9WLH3zA6Mub9rKXT7F",
  qual3: "https://drive.google.com/uc?export=view&id=1QjKChNM3Tt3HCGEw7ABTGKCW_OvA-CoR",
  qual4: "https://drive.google.com/uc?export=view&id=1SIuDObrmSBU08Q4czr5-exHqR6SlNVHT",
  qual5: "https://drive.google.com/uc?export=view&id=1UL13lut15pgF21sDC8J-PxXSWcA7OZoA",
  qual6: "https://drive.google.com/uc?export=view&id=1VdcPphDsB8LC0EznV5MBCptIHMLK-N3u",
  e1: "https://drive.google.com/uc?export=view&id=1X0-EQfL5LtVK7u_mPWwoAs2wQfodEFa_",
  e2: "https://drive.google.com/uc?export=view&id=1Y-qAs2YZGvA5OemcTLXX6EwulISdMnSF",
  e3: "https://drive.google.com/uc?export=view&id=1YvrU-M5SiI2HYnV551e3xH2HIA5hw4d_",
  e4: "https://drive.google.com/uc?export=view&id=1Z0YWxzJg8WfARKHcCjkohAA97P6zg1lB",
  e5: "https://drive.google.com/uc?export=view&id=1ZO0OHYPPmE86a3FNFpQfrRdN6LsziXfy",
  e6: "https://drive.google.com/uc?export=view&id=1cpm95IDHZOc7DSHf6AXcZ4X-LZ5p0tG-",
  e7: "https://drive.google.com/uc?export=view&id=1dMc12P-517kutNzOARV_poR1g0AG_m9P",
  e8: "https://drive.google.com/uc?export=view&id=1dPr87kOk0SWhYFdu_uPF8dpLBL8wgGyM",
  e9: "https://drive.google.com/uc?export=view&id=1e9oWVJSfBbqGYwR3_jSybM3pSdc2Sq0S",
  e10: "https://drive.google.com/uc?export=view&id=1eDS5vW6qMuY2rMpfzlzUy0YuHTjX36cY",
  e11: "https://drive.google.com/uc?export=view&id=1ez6zg62sRcBdfsT4lBWDCn2OZD0fOriD",
  e12: "https://drive.google.com/uc?export=view&id=1fqXRmCKIAZiXoYyBE8EFlg6SNIXnaTZK",
  e13: "https://drive.google.com/uc?export=view&id=1g80DzA8SYEIUGd48tJHJ2314qWJ4v_YD",
  e14: "https://drive.google.com/uc?export=view&id=1gF9LoQ75xTe4VmZ2HCT4DcHRwPaasxa5",
  e15: "https://drive.google.com/uc?export=view&id=1gIMwTWcKdOsFjdwrGkGvRpOLPfesUNtY",
  e16: "https://drive.google.com/uc?export=view&id=1hlqc2mAPffj1vnUxR73GlDilbAxL_YSQ",
  e17: "https://drive.google.com/uc?export=view&id=1iMsMUt7JYIIbN1KaNriuHT5x7IpBnzk5",
  e18: "https://drive.google.com/uc?export=view&id=1iPCdg3KzRpqFN3PMmFqNVWUCrDvOiqgB",
  e19: "https://drive.google.com/uc?export=view&id=1kx3Ef92F4JcYb9RjqhTlun_fGK9UEafv",
  e20: "https://drive.google.com/uc?export=view&id=1nIQ9A9mJRyDSMhuXv27Li0NLSViGztSj",
  e21: "https://drive.google.com/uc?export=view&id=1nIvzFlQuqIHC0rNkhXGrrKYp8tsjIp1g",
  e22: "https://drive.google.com/uc?export=view&id=1pqJGpeoQRQ2093-U-yZEg0eXCeVmYbp7",
  e23: "https://drive.google.com/uc?export=view&id=1qjIk0dl3HzgPE5YsiWGH3xjL8rhuiukr",
  e24: "https://drive.google.com/uc?export=view&id=1uIRaJaZG6jytvVrey3knj4JxvJQhKj2o",
  e25: "https://drive.google.com/uc?export=view&id=1vGrEuA6HpPdWX8KTXhTfWk3lb1GjNixE",
  e26: "https://drive.google.com/uc?export=view&id=1vyMt9dZhbtAajgxdsJaWnprGpn2qJql6",
  e27: "https://drive.google.com/uc?export=view&id=1xCOEK6X638KTyvSZwXA4rwJHIEeYX4kB",
  e28: "https://drive.google.com/uc?export=view&id=1yxX0ILFvEZkmHzJxnHbf-24155dVcjOU",
};

const PRODUCTS = [
  {
    name: "Dehydrated Onion",
    desc: "Premium quality dehydrated onion — exported globally with consistent pungency and colour retention. Processed within hours of harvest for maximum freshness.",
    forms: ["Flakes", "Minced", "Powder", "Granules", "Chopped"],
    mainImg: IMGS.onion1, thumbs: [IMGS.onion2, IMGS.onion3],
    specs: { "Moisture": "≤5%", "Colour": "White to Off-white", "Pungency": "High", "Shelf Life": "24 months", "Packaging": "10kg / 25kg bags", "Origin": "Solapur, Maharashtra" }
  },
  {
    name: "Dehydrated Garlic",
    desc: "Sun-cured and air-dried garlic rich in allicin. Ideal for culinary and industrial use — available in flakes, granules, and powder.",
    forms: ["Flakes", "Granules", "Powder", "Minced"],
    mainImg: IMGS.garlic1, thumbs: [IMGS.garlic2, IMGS.garlic3],
    specs: { "Moisture": "≤6%", "Colour": "Cream to Light Yellow", "Allicin": "High Retention", "Shelf Life": "24 months", "Packaging": "10kg / 25kg bags", "Origin": "Maharashtra" }
  },
  {
    name: "Dehydrated Coriander",
    desc: "Bright-green dried coriander leaves preserving natural oils and flavour. Perfect for seasoning, spice blends, and ready-meal manufacturing.",
    forms: ["Leaves", "Seeds", "Powder", "Crushed"],
    mainImg: IMGS.coriander1, thumbs: [IMGS.coriander2],
    specs: { "Moisture": "≤8%", "Colour": "Bright Green", "Volatile Oil": "Retained", "Shelf Life": "18 months", "Packaging": "5kg / 20kg bags", "Origin": "Maharashtra / Rajasthan" }
  },
  {
    name: "Dehydrated Green Chilli",
    desc: "Green chilli varieties dried to retain colour and heat levels. Available in whole, crushed, and powder form — ideal for export spice blends.",
    forms: ["Whole", "Crushed", "Powder", "Flakes"],
    mainImg: IMGS.chilli1, thumbs: [IMGS.chilli2],
    specs: { "Moisture": "≤7%", "Colour": "Green", "Heat Level": "Medium to High", "Shelf Life": "18 months", "Packaging": "10kg / 20kg bags", "Origin": "Maharashtra / AP" }
  },
  {
    name: "Dehydrated Ginger",
    desc: "Carefully sliced and dried ginger root retaining essential oils. Widely used in beverages, spice mixes, health products, and export food processing.",
    forms: ["Sliced", "Powder", "Granules", "Splits"],
    mainImg: IMGS.ginger1, thumbs: [IMGS.ginger2],
    specs: { "Moisture": "≤10%", "Colour": "Light Tan", "Gingerol": "Retained", "Shelf Life": "24 months", "Packaging": "10kg / 25kg bags", "Origin": "Kerala / Maharashtra" }
  },
  {
    name: "Dehydrated Vegetable Mix",
    desc: "Customisable mixed vegetable blends — carrot, spinach, fenugreek, capsicum — tailored for soup and snack manufacturers. Private-label options available.",
    forms: ["Carrot", "Spinach", "Capsicum", "Custom Mix", "Fenugreek"],
    mainImg: IMGS.vegmix1, thumbs: [IMGS.vegmix2],
    specs: { "Moisture": "≤8%", "Composition": "Customisable", "Processing": "IQF / Tunnel Dried", "Shelf Life": "18 months", "Packaging": "Custom / Bulk", "Origin": "Maharashtra" }
  },
];

const QUALITY_STEPS = [
  { icon: "🌱", tag: "Source", title: "Farm-Level Procurement", desc: "We partner directly with verified farmers across Maharashtra. Every batch is traceable to its origin field, ensuring chemical-free practices from root to harvest.", img: IMGS.qual1 },
  { icon: "🔬", tag: "Inspection", title: "Raw Material Testing", desc: "Incoming produce undergoes moisture content analysis, microbial screening, and pesticide residue testing before entering our facility.", img: IMGS.qual2 },
  { icon: "⚙️", tag: "Processing", title: "Controlled Dehydration", desc: "Tunnel dryers maintain temperature within ±2°C tolerance, preserving colour, texture, and nutritional integrity.", img: IMGS.qual3 },
  { icon: "📊", tag: "Analysis", title: "In-Process QC Checks", desc: "Every 30 minutes our lab team samples product from the line — checking moisture levels, Aw, and visual grade to prevent batch drift.", img: IMGS.qual4 },
  { icon: "🧪", tag: "Lab", title: "Finished Product Testing", desc: "Final products are tested for moisture %, bulk density, ash content, particle size distribution, and microbial count before packing approval.", img: IMGS.qual5 },
  { icon: "📦", tag: "Packaging", title: "Hygienic & Sealed Packaging", desc: "Food-grade poly packs, HDPE bags, and nitrogen-flushed pouches ensure shelf life of 12–24 months. Custom export packaging available.", img: IMGS.qual6 },
];

const PROCESS_STEPS = [
  { tag: "Stage 01", title: "Sourcing & Procurement", desc: "We source directly from contract farmers and select wholesale markets in Solapur, Nashik, and Kolhapur. Seasonality is managed through cold-store inventory to ensure year-round supply.", details: ["Direct Farmer Tie-ups", "Seasonal Planning", "Variety Selection", "Cold Storage Buffer"] },
  { tag: "Stage 02", title: "Sorting & Grading", desc: "Received produce is sorted by size, colour, and quality grade. Damaged or substandard pieces are separated on conveyor inspection tables before any processing begins.", details: ["Manual Inspection", "Size Grading", "Colour Sorting", "Reject Removal"] },
  { tag: "Stage 03", title: "Washing & Cleaning", desc: "Multiple-stage washing using food-grade water removes field dust, surface contaminants, and pesticide residues. Produce is sanitised with approved food-safe solutions.", details: ["Multi-Stage Wash", "Sanitisation", "Water Recirculation", "Surface Drying"] },
  { tag: "Stage 04", title: "Cutting & Slicing", desc: "Depending on the final product specification — flakes, slices, or minced — stainless steel cutters process the cleaned material to uniform dimensions for consistent drying.", details: ["Uniform Cut Size", "SS Equipment", "Custom Specification", "Mincing / Slicing / Flaking"] },
  { tag: "Stage 05", title: "Dehydration", desc: "Tunnel dehydrators operate at controlled temperatures (50–70°C) with calibrated airflow across multiple passes. Total drying time varies by product — typically 8 to 14 hours — until target moisture of ≤5% is achieved.", details: ["Tunnel Dryers", "50–70°C Range", "Airflow Calibration", "≤5% Moisture Target"] },
  { tag: "Stage 06", title: "Post-Drying Processing", desc: "Dried product is milled, screened, or blended depending on final form (powder, granule, flake). Screens ensure uniform particle size before batch approval.", details: ["Milling", "Sieving", "Blending", "Particle Sizing"] },
  { tag: "Stage 07", title: "Quality Testing & Packing", desc: "Each approved batch is weighed, tested, and packed in food-grade packaging. Batch codes, production date, expiry, and export documentation are generated at this stage.", details: ["Batch Testing", "Food-grade Packs", "Export Labelling", "Documentation"] },
];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&family=Satisfy&display=swap');
  :root {
    --green-deep: #1a3a1f; --green-mid: #2d6a35; --green-fresh: #4a9e55;
    --green-light: #7dc583; --cream: #f5f0e8; --cream-dark: #ede5d0;
    --amber: #c4873a; --amber-light: #e8b86d; --brown: #5c3d1e;
    --white: #fdfaf5; --text-dark: #1a1a1a; --text-mid: #3d4a3d;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--text-dark); overflow-x: hidden; }
  .site-wrapper { min-height: 100vh; }

  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 72px;
    background: rgba(26,58,31,0.97); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(74,158,85,0.25);
  }
  .nav-logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
  .logo-leaf { width: 38px; height: 38px; background: linear-gradient(135deg, var(--green-fresh), var(--green-light)); border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; display: flex; align-items: center; justify-content: center; font-size: 20px; animation: leafSway 3s ease-in-out infinite; flex-shrink: 0; }
  @keyframes leafSway { 0%,100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
  .logo-text { display: flex; flex-direction: column; line-height: 1; }
  .logo-main { font-family: 'Satisfy', cursive; font-size: 22px; color: var(--green-light); letter-spacing: 0.5px; }
  .logo-sub { font-size: 9px; color: var(--amber-light); letter-spacing: 3px; text-transform: uppercase; margin-top: 2px; }
  .nav-tabs { display: flex; gap: 4px; }
  .nav-tab { padding: 8px 18px; border: none; background: transparent; color: rgba(245,240,232,0.75); font-family: 'DM Sans', sans-serif; font-size: 13.5px; letter-spacing: 0.5px; cursor: pointer; border-radius: 6px; transition: all 0.25s; position: relative; }
  .nav-tab::after { content: ''; position: absolute; bottom: 4px; left: 50%; right: 50%; height: 2px; background: var(--amber-light); border-radius: 2px; transition: all 0.25s; }
  .nav-tab:hover { color: var(--cream); }
  .nav-tab:hover::after, .nav-tab.active::after { left: 18px; right: 18px; }
  .nav-tab.active { color: var(--amber-light); background: rgba(196,135,58,0.12); }

  .page { min-height: 100vh; padding-top: 72px; animation: pageIn 0.55s cubic-bezier(0.22,1,0.36,1) both; }
  @keyframes pageIn { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }

  /* HERO */
  .hero { position: relative; height: calc(100vh - 72px); background: var(--green-deep); display: flex; align-items: center; overflow: hidden; }
  .hero-bg-pattern { position: absolute; inset: 0; background-image: radial-gradient(ellipse 120% 80% at 70% 50%, rgba(45,106,53,0.4) 0%, transparent 70%); }
  .hero-content { position: relative; z-index: 2; padding: 0 80px; max-width: 620px; }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; background: rgba(196,135,58,0.15); border: 1px solid rgba(196,135,58,0.35); border-radius: 100px; padding: 6px 18px; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--amber-light); margin-bottom: 28px; animation: fadeSlideUp 0.7s 0.1s both; }
  .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(42px, 5.5vw, 76px); font-weight: 900; line-height: 1.05; color: var(--cream); margin-bottom: 24px; animation: fadeSlideUp 0.7s 0.2s both; }
  .hero-title em { font-style: italic; color: var(--green-light); }
  .hero-desc { font-size: 16px; line-height: 1.8; color: rgba(245,240,232,0.72); max-width: 460px; margin-bottom: 40px; animation: fadeSlideUp 0.7s 0.3s both; }
  .hero-cta { display: inline-flex; align-items: center; gap: 10px; background: var(--amber); color: var(--white); padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; border: none; transition: all 0.25s; animation: fadeSlideUp 0.7s 0.4s both; font-family: 'DM Sans', sans-serif; }
  .hero-cta:hover { background: var(--amber-light); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(196,135,58,0.35); }
  .hero-images { position: absolute; right: 0; top: 0; bottom: 0; width: 48%; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 4px; overflow: hidden; z-index: 0; }
  .hero-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
  .hero-img:hover { transform: scale(1.04); }
  .hero-img-overlay { position: absolute; inset: 0; background: linear-gradient(to right, var(--green-deep) 0%, rgba(26,58,31,0.4) 40%, transparent 70%); z-index: 1; pointer-events: none; }
  @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

  /* TICKER */
  .ticker { background: var(--amber); padding: 12px 0; overflow: hidden; white-space: nowrap; }
  .ticker-inner { display: inline-flex; animation: tickerScroll 20s linear infinite; }
  .ticker-item { display: inline-flex; align-items: center; gap: 16px; padding: 0 48px; font-size: 13px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--white); }
  .ticker-dot { width: 5px; height: 5px; background: rgba(255,255,255,0.6); border-radius: 50%; }
  @keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* STORY */
  .story-section { padding: 100px 80px; background: var(--white); }
  .section-label { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: var(--green-fresh); font-weight: 500; margin-bottom: 12px; }
  .section-title { font-family: 'Playfair Display', serif; font-size: clamp(32px, 3.5vw, 52px); font-weight: 700; color: var(--green-deep); line-height: 1.2; margin-bottom: 20px; }
  .section-body { font-size: 16px; line-height: 1.85; color: var(--text-mid); max-width: 600px; }
  .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .story-img-collage { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .story-img-cell { border-radius: 16px; overflow: hidden; }
  .story-img-cell img { width: 100%; height: 200px; object-fit: cover; display: block; transition: transform 0.5s ease; }
  .story-img-cell:hover img { transform: scale(1.05); }
  .story-img-cell:nth-child(2) { margin-top: 24px; }
  .story-img-cell:nth-child(4) { margin-top: -24px; }

  /* VALUES */
  .values-strip { background: var(--green-deep); padding: 72px 80px; display: flex; gap: 0; justify-content: center; }
  .value-item { flex: 1; padding: 0 40px; border-right: 1px solid rgba(255,255,255,0.1); text-align: center; }
  .value-item:last-child { border-right: none; }
  .value-icon { font-size: 36px; margin-bottom: 16px; display: block; animation: leafSway 4s ease-in-out infinite; }
  .value-title { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--cream); margin-bottom: 10px; }
  .value-desc { font-size: 13.5px; color: rgba(245,240,232,0.6); line-height: 1.7; }

  /* HOME ENQUIRY */
  .home-enquiry { background: var(--cream); padding: 80px; }
  .home-enquiry-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.3fr; gap: 64px; align-items: center; }
  .home-enquiry-form { background: var(--white); border-radius: 20px; padding: 40px; box-shadow: 0 8px 40px rgba(26,58,31,0.1); }
  .home-contact-item { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px; }
  .home-ci-icon { width: 40px; height: 40px; background: rgba(26,58,31,0.08); border: 1px solid var(--cream-dark); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .home-ci-title { font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--green-mid); margin-bottom: 3px; font-weight: 500; }
  .home-ci-val { font-size: 14px; color: var(--text-mid); line-height: 1.5; }

  /* PRODUCTS */
  .products-hero { background: linear-gradient(135deg, var(--green-deep) 0%, var(--green-mid) 100%); padding: 80px 80px 60px; text-align: center; }
  .products-hero .section-title { color: var(--cream); margin: 0 auto 16px; }
  .products-hero .section-label { text-align: center; color: var(--amber-light); }
  .products-hero .section-body { color: rgba(245,240,232,0.7); margin: 0 auto; text-align: center; max-width: 560px; }
  .products-list { background: var(--white); }
  .product-row { display: grid; grid-template-columns: 340px 1fr; border-bottom: 1px solid var(--cream-dark); transition: background 0.25s; }
  .product-row:last-child { border-bottom: none; }
  .product-row:hover { background: var(--cream); }
  .product-row-imgs { position: relative; height: 280px; overflow: hidden; background: var(--cream-dark); }
  .product-row-main-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
  .product-row:hover .product-row-main-img { transform: scale(1.05); }
  .product-row-thumbs { position: absolute; bottom: 12px; left: 12px; display: flex; gap: 8px; }
  .product-thumb { width: 52px; height: 52px; border-radius: 8px; overflow: hidden; border: 2px solid rgba(255,255,255,0.8); cursor: pointer; transition: transform 0.2s; }
  .product-thumb:hover { transform: scale(1.1); }
  .product-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .product-row-info { padding: 36px 48px; display: flex; flex-direction: column; justify-content: center; gap: 14px; }
  .product-row-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
  .product-row-name { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 700; color: var(--green-deep); }
  .product-row-badge { background: var(--green-deep); color: var(--cream); font-size: 10px; letter-spacing: 2px; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; white-space: nowrap; flex-shrink: 0; margin-top: 6px; }
  .product-row-desc { font-size: 14px; color: var(--text-mid); line-height: 1.75; max-width: 520px; }
  .product-forms-label { font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: var(--green-fresh); margin-bottom: 8px; font-weight: 500; }
  .product-row-forms { display: flex; flex-wrap: wrap; gap: 6px; }
  .product-form-tag { background: var(--cream-dark); color: var(--green-mid); font-size: 11px; padding: 4px 12px; border-radius: 100px; }
  .product-specs { border: 1px solid var(--cream-dark); border-radius: 12px; overflow: hidden; }
  .product-specs-title { background: var(--green-deep); color: var(--cream); font-size: 10px; letter-spacing: 2px; text-transform: uppercase; padding: 8px 16px; font-weight: 500; }
  .specs-table { display: grid; grid-template-columns: 1fr 1fr; }
  .spec-row { padding: 8px 16px; border-bottom: 1px solid var(--cream-dark); border-right: 1px solid var(--cream-dark); display: flex; flex-direction: column; gap: 2px; }
  .spec-row:nth-child(even) { border-right: none; }
  .spec-row:nth-last-child(-n+2) { border-bottom: none; }
  .spec-key { font-size: 10px; letter-spacing: 1px; text-transform: uppercase; color: var(--green-fresh); font-weight: 500; }
  .spec-val { font-size: 13px; color: var(--text-dark); }
  .product-quote-btn { align-self: flex-start; background: var(--amber); color: var(--white); border: none; padding: 10px 24px; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
  .product-quote-btn:hover { background: var(--amber-light); transform: translateY(-1px); }
  .products-cta-strip { background: var(--green-deep); padding: 48px 80px; text-align: center; }

  /* QUALITY */
  .quality-hero { background: var(--cream); padding: 80px 80px 0; text-align: center; }
  .quality-hero .section-title { color: var(--green-deep); }
  .quality-img-grid { display: grid; grid-template-columns: repeat(3, 1fr); overflow: hidden; }
  .quality-img-cell { position: relative; overflow: hidden; height: 300px; }
  .quality-img-cell img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.6s ease; }
  .quality-img-cell:hover img { transform: scale(1.06); }
  .quality-img-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(26,58,31,0.75), transparent); padding: 20px 16px 14px; color: var(--cream); font-size: 13px; font-weight: 500; }
  .quality-timeline { padding: 72px 80px; background: var(--white); position: relative; }
  .quality-timeline::before { content: ''; position: absolute; left: 50%; top: 72px; bottom: 72px; width: 2px; background: linear-gradient(to bottom, var(--green-fresh), var(--amber)); transform: translateX(-50%); }
  .qt-item { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 0; margin-bottom: 56px; align-items: center; max-width: 900px; margin-left: auto; margin-right: auto; }
  .qt-item:nth-child(even) .qt-content { order: 3; }
  .qt-item:nth-child(even) .qt-empty { order: 1; }
  .qt-item:nth-child(even) .qt-dot-wrap { order: 2; }
  .qt-content { background: var(--cream); border-radius: 16px; overflow: hidden; border: 1px solid var(--cream-dark); transition: all 0.3s; }
  .qt-content:hover { border-color: var(--green-light); transform: scale(1.02); box-shadow: 0 8px 32px rgba(26,58,31,0.1); }
  .qt-content-img { width: 100%; height: 160px; object-fit: cover; display: block; }
  .qt-content-body { padding: 18px 22px; text-align: left; }
  .qt-dot-wrap { display: flex; justify-content: center; align-items: center; }
  .qt-dot { width: 44px; height: 44px; border-radius: 50%; background: var(--green-deep); display: flex; align-items: center; justify-content: center; font-size: 20px; border: 3px solid var(--white); box-shadow: 0 0 0 3px var(--green-fresh); z-index: 2; position: relative; transition: transform 0.3s; }
  .qt-item:hover .qt-dot { transform: scale(1.2); }
  .qt-title { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: var(--green-deep); margin-bottom: 6px; }
  .qt-desc { font-size: 13px; line-height: 1.7; color: var(--text-mid); }
  .qt-tag { display: inline-block; background: var(--green-deep); color: var(--cream); font-size: 10px; padding: 2px 10px; border-radius: 100px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 8px; }
  .cert-strip { background: var(--green-deep); padding: 56px 80px; display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; }
  .cert-badge { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 24px 32px; text-align: center; min-width: 160px; transition: all 0.3s; }
  .cert-badge:hover { background: rgba(255,255,255,0.12); transform: translateY(-4px); }
  .cert-icon { font-size: 32px; margin-bottom: 10px; display: block; }
  .cert-name { font-size: 14px; font-weight: 500; color: var(--cream); margin-bottom: 4px; }
  .cert-note { font-size: 11px; color: rgba(245,240,232,0.5); }

  /* PROCESS */
  .process-hero { background: linear-gradient(160deg, var(--green-deep) 0%, #0d2010 100%); padding: 80px 80px 60px; text-align: center; position: relative; overflow: hidden; }
  .process-hero .section-title { color: var(--cream); position: relative; }
  .process-hero .section-label { color: var(--amber-light); position: relative; }
  .process-hero .section-body { color: rgba(245,240,232,0.65); margin: 0 auto; text-align: center; max-width: 520px; position: relative; }
  .process-steps { padding: 80px; background: var(--cream); display: flex; flex-direction: column; }
  .process-step { display: grid; grid-template-columns: 80px 1fr; gap: 32px; padding: 48px 0; border-bottom: 1px solid var(--cream-dark); align-items: start; max-width: 900px; margin: 0 auto; width: 100%; transition: all 0.3s; }
  .process-step:last-child { border-bottom: none; }
  .process-step:hover .step-num { background: var(--amber); }
  .step-num { width: 72px; height: 72px; background: var(--green-deep); color: var(--cream); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; flex-shrink: 0; transition: all 0.3s; margin-top: 8px; }
  .step-tag { display: inline-block; background: var(--green-fresh); color: var(--white); font-size: 10px; padding: 3px 10px; border-radius: 100px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
  .step-title { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: var(--green-deep); margin-bottom: 10px; }
  .step-desc { font-size: 15px; line-height: 1.8; color: var(--text-mid); margin-bottom: 14px; max-width: 580px; }
  .step-details { display: flex; flex-wrap: wrap; gap: 8px; }
  .step-detail { background: var(--white); border: 1px solid var(--cream-dark); color: var(--green-mid); font-size: 12px; padding: 4px 12px; border-radius: 100px; }

  /* CONTACT */
  .contact-page { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 72px); }
  .contact-left { background: var(--green-deep); padding: 80px 64px; display: flex; flex-direction: column; justify-content: center; position: relative; overflow: hidden; }
  .contact-left::before { content: ''; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(74,158,85,0.1); bottom: -100px; right: -100px; }
  .contact-left::after { content: ''; position: absolute; width: 200px; height: 200px; border-radius: 50%; background: rgba(196,135,58,0.08); top: 60px; left: -60px; }
  .contact-left .section-title { color: var(--cream); position: relative; z-index: 1; }
  .contact-left .section-label { color: var(--amber-light); z-index: 1; position: relative; }
  .contact-left .section-body { color: rgba(245,240,232,0.65); z-index: 1; position: relative; max-width: 400px; }
  .contact-info { margin-top: 48px; display: flex; flex-direction: column; gap: 24px; position: relative; z-index: 1; }
  .contact-info-item { display: flex; align-items: flex-start; gap: 16px; }
  .ci-icon { width: 44px; height: 44px; background: rgba(255,255,255,0.08); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.1); }
  .ci-title { font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: var(--amber-light); margin-bottom: 4px; }
  .ci-val { font-size: 15px; color: rgba(245,240,232,0.85); line-height: 1.5; }
  .contact-right { background: var(--cream); padding: 80px 64px; display: flex; flex-direction: column; justify-content: center; }
  .form-title { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--green-deep); margin-bottom: 32px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .form-label { font-size: 12px; letter-spacing: 1px; text-transform: uppercase; color: var(--green-mid); font-weight: 500; }
  .form-input, .form-select, .form-textarea { padding: 12px 16px; border: 1.5px solid var(--cream-dark); border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 15px; background: var(--white); color: var(--text-dark); transition: all 0.2s; outline: none; width: 100%; }
  .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--green-fresh); box-shadow: 0 0 0 3px rgba(74,158,85,0.12); }
  .form-textarea { height: 120px; resize: vertical; }
  .form-submit { background: var(--green-deep); color: var(--cream); padding: 14px 36px; border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.25s; display: inline-flex; align-items: center; gap: 10px; margin-top: 8px; }
  .form-submit:hover { background: var(--green-fresh); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(26,58,31,0.2); }
  .submit-success { background: rgba(74,158,85,0.12); border: 1.5px solid var(--green-fresh); border-radius: 12px; padding: 20px 24px; color: var(--green-mid); font-size: 15px; display: flex; align-items: center; gap: 12px; margin-top: 16px; animation: fadeSlideUp 0.4s both; }

  /* FOOTER */
  footer { background: #0d1f10; padding: 48px 80px 28px; display: flex; flex-direction: column; gap: 32px; }
  .footer-top { display: flex; align-items: center; justify-content: space-between; }
  .footer-logo { font-family: 'Satisfy', cursive; font-size: 28px; color: var(--green-light); }
  .footer-tagline { font-size: 13px; color: rgba(245,240,232,0.4); margin-top: 4px; }
  .footer-links { display: flex; gap: 32px; }
  .footer-link { font-size: 13.5px; color: rgba(245,240,232,0.5); cursor: pointer; transition: color 0.2s; background: none; border: none; font-family: 'DM Sans', sans-serif; }
  .footer-link:hover { color: var(--green-light); }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 20px; display: flex; justify-content: space-between; align-items: center; }
  .footer-copy { font-size: 12px; color: rgba(245,240,232,0.3); }

  /* WHATSAPP */
  .whatsapp-float { position: fixed; bottom: 28px; right: 28px; z-index: 999; width: 56px; height: 56px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,0.4); cursor: pointer; border: none; transition: all 0.25s; text-decoration: none; }
  .whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(37,211,102,0.55); }
  .whatsapp-float svg { width: 30px; height: 30px; }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    nav { padding: 0 20px; }
    .nav-tabs { gap: 2px; }
    .nav-tab { padding: 6px 10px; font-size: 12px; }
    .hero-content { padding: 0 28px; }
    .hero-images { display: none; }
    .story-grid, .contact-page, .home-enquiry-inner { grid-template-columns: 1fr; gap: 40px; }
    .quality-timeline::before { left: 30px; }
    .qt-item { grid-template-columns: 30px 1fr; }
    .qt-empty { display: none; }
    .qt-dot-wrap { grid-column: 1; justify-content: flex-start; }
    .qt-content { grid-column: 2; }
    .story-section, .products-list, .process-steps, .contact-left, .contact-right, .cert-strip, .values-strip, .home-enquiry { padding: 48px 24px; }
    .products-hero, .process-hero, .quality-hero { padding: 60px 24px 40px; }
    .form-row { grid-template-columns: 1fr; }
    footer { padding: 40px 24px 20px; }
    .footer-top { flex-direction: column; gap: 16px; text-align: center; }
    .footer-links { flex-wrap: wrap; justify-content: center; gap: 16px; }
    .product-row { grid-template-columns: 1fr; }
    .product-row-imgs { height: 220px; }
    .product-row-info { padding: 24px; }
    .quality-img-grid { grid-template-columns: 1fr; }
    .quality-img-cell { height: 220px; }
    .home-enquiry-form { padding: 24px; }
    .specs-table { grid-template-columns: 1fr; }
    .spec-row { border-right: none !important; }
    .spec-row:nth-last-child(-n+2) { border-bottom: 1px solid var(--cream-dark); }
    .spec-row:last-child { border-bottom: none; }
  }
`;

function EnquiryForm({ onSubmit, submitted, formData, setFormData }) {
  return (
    <div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Your Name *</label>
          <input className="form-input" placeholder="Full name" value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">Company</label>
          <input className="form-input" placeholder="Organisation" value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input className="form-input" type="email" placeholder="you@company.com" value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input className="form-input" placeholder="+91 ..." value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })} />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Product of Interest</label>
        <select className="form-select" value={formData.product}
          onChange={e => setFormData({ ...formData, product: e.target.value })}>
          <option value="">Select a product</option>
          {PRODUCTS.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
          <option value="Custom Blend">Custom Blend / Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Message / Requirements</label>
        <textarea className="form-textarea" placeholder="Describe your quantity, packing requirements, destination country..."
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })} />
      </div>
      <button className="form-submit" onClick={onSubmit}>Send Enquiry 🌿</button>
      {submitted && (
        <div className="submit-success">
          ✅ Thank you! We will respond within 24 hours.
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("story");
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", product: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeProductImg, setActiveProductImg] = useState({});

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", company: "", email: "", phone: "", product: "", message: "" });
    }
  };

  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "products", label: "Products" },
    { id: "quality", label: "Quality" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact Us" },
  ];

  const goToContact = (productName) => {
    setFormData(f => ({ ...f, product: productName }));
    setActiveTab("contact");
  };

  const tickerItems = ["Dehydrated Onion","Dehydrated Garlic","Coriander Leaves","Ginger Powder","Green Chilli","Custom Blends","Export Quality","FSSAI Certified","Farm to Table","MNTP Farm Fresh"];

  return (
    <>
      <style>{style}</style>
      <div className="site-wrapper">

        <nav>
          <div className="nav-logo" onClick={() => setActiveTab("story")}>
            <div className="logo-leaf">🌿</div>
            <div className="logo-text">
              <span className="logo-main">MNTP Farm Fresh</span>
              <span className="logo-sub">Dehydrated · Exports</span>
            </div>
          </div>
          <div className="nav-tabs">
            {tabs.map(t => (
              <button key={t.id} className={`nav-tab ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}>{t.label}</button>
            ))}
          </div>
        </nav>

        {activeTab === "story" && (
          <div className="page" key="story">
            <div className="hero">
              <div className="hero-bg-pattern" />
              <div className="hero-images">
                <img src={IMGS.farm1} alt="Farm" className="hero-img" loading="lazy" onError={e => e.target.style.opacity='0'} />
                <img src={IMGS.e7} alt="Processing" className="hero-img" loading="lazy" onError={e => e.target.style.opacity='0'} />
                <img src={IMGS.e9} alt="Products" className="hero-img" loading="lazy" onError={e => e.target.style.opacity='0'} />
                <img src={IMGS.e13} alt="Factory" className="hero-img" loading="lazy" onError={e => e.target.style.opacity='0'} />
              </div>
              <div className="hero-img-overlay" />
              <div className="hero-content">
                <div className="hero-eyebrow">🌿 Rooted in Maharashtra</div>
                <h1 className="hero-title">From Farm to <em>Global Table</em></h1>
                <p className="hero-desc">
                  MNTP Farm Fresh brings the best of Indian agriculture to the world — through precision dehydration that locks in nature's flavour, colour, and nutrition.
                </p>
                <button className="hero-cta" onClick={() => setActiveTab("products")}>Explore Products →</button>
              </div>
            </div>

            <div className="ticker">
              <div className="ticker-inner">
                {tickerItems.concat(tickerItems).map((item, i) => (
                  <span className="ticker-item" key={i}>{item} <span className="ticker-dot" /></span>
                ))}
              </div>
            </div>

            <div className="story-section">
              <div className="story-grid">
                <div>
                  <div className="section-label">Who We Are</div>
                  <h2 className="section-title">A Legacy Grown from the Soil of Solapur</h2>
                  <p className="section-body">
                    MNTP Farm Fresh began with a simple belief: that India's agricultural abundance deserves world-class processing. Founded in Solapur — India's onion capital — we built our facility close to the farms we work with, reducing transit, preserving freshness, and creating direct livelihoods for local growers.
                    <br /><br />
                    Over the years, we've grown into a trusted dehydration partner for spice blenders, food manufacturers, and exporters across Asia, Europe, and the Middle East.
                  </p>
                </div>
                <div className="story-img-collage">
                  <div className="story-img-cell"><img src={IMGS.e1} alt="Farm sourcing" loading="lazy" onError={e => e.target.style.background='var(--cream-dark)'} /></div>
                  <div className="story-img-cell"><img src={IMGS.e2} alt="Facility" loading="lazy" onError={e => e.target.style.background='var(--cream-dark)'} /></div>
                  <div className="story-img-cell"><img src={IMGS.e3} alt="Quality" loading="lazy" onError={e => e.target.style.background='var(--cream-dark)'} /></div>
                  <div className="story-img-cell"><img src={IMGS.e4} alt="Packaging" loading="lazy" onError={e => e.target.style.background='var(--cream-dark)'} /></div>
                </div>
              </div>
            </div>

            <div className="values-strip">
              {[
                { icon: "🌱", title: "Farm-First", desc: "We source directly and pay fairly, building long-term trust with our growing communities." },
                { icon: "🔬", title: "Science-Backed", desc: "Every drying curve and moisture target is validated by food scientists in our in-house lab." },
                { icon: "🌾", title: "Sourced from Farm", desc: "Every batch is traced from field to final product — direct procurement ensures freshness, quality, and full traceability." },
                { icon: "🌍", title: "Export-Ready", desc: "We manage FSSAI, APEDA, and phytosanitary compliance documentation so our partners can focus on their business." },
              ].map((v, i) => (
                <div className="value-item" key={i}>
                  <span className="value-icon">{v.icon}</span>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>

            <div className="home-enquiry">
              <div className="home-enquiry-inner">
                <div>
                  <div className="section-label">Get In Touch</div>
                  <h2 className="section-title">Let's Grow Together</h2>
                  <p className="section-body">Looking for bulk dehydrated supply, export partnerships, or custom product development? Send us your requirements and we'll respond within 24 hours.</p>
                  <div style={{ marginTop: 32 }}>
                    {[
                      { icon: "📍", title: "Address", val: "G4 Chincholi MIDC, Solapur, Maharashtra – 413255" },
                      { icon: "📞", title: "Phone", val: "+91 942359150" },
                      { icon: "✉️", title: "Email", val: "contact@mntpfamfresh.com" },
                    ].map((item, i) => (
                      <div className="home-contact-item" key={i}>
                        <div className="home-ci-icon">{item.icon}</div>
                        <div>
                          <div className="home-ci-title">{item.title}</div>
                          <div className="home-ci-val">{item.val}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="home-enquiry-form">
                  <div className="form-title">Send an Enquiry</div>
                  <EnquiryForm onSubmit={handleSubmit} submitted={submitted} formData={formData} setFormData={setFormData} />
                </div>
              </div>
            </div>

            <footer>
              <div className="footer-top">
                <div>
                  <div className="footer-logo">MNTP Farm Fresh</div>
                  <div className="footer-tagline">Premium Dehydrated Agricultural Products · Solapur, Maharashtra</div>
                </div>
                <div className="footer-links">
                  {tabs.map(t => <button key={t.id} className="footer-link" onClick={() => setActiveTab(t.id)}>{t.label}</button>)}
                </div>
              </div>
              <div className="footer-bottom">
                <span className="footer-copy">© 2025 MNTP Farm Fresh. All rights reserved.</span>
                <span className="footer-copy">Made with 🌿 in Solapur</span>
              </div>
            </footer>
          </div>
        )}

        {activeTab === "products" && (
          <div className="page" key="products">
            <div className="products-hero">
              <div className="section-label">Dehydrated Range</div>
              <h2 className="section-title">Our Products</h2>
              <p className="section-body">100% natural, chemical-free dehydrated vegetables and spices — crafted for consistent quality across every shipment.</p>
            </div>
            <div className="products-list">
              {PRODUCTS.map((p, i) => {
                const activeImg = activeProductImg[i] ?? p.mainImg;
                return (
                  <div className="product-row" key={i}>
                    <div className="product-row-imgs">
                      <img src={activeImg} alt={p.name} className="product-row-main-img" loading="lazy" onError={e => e.target.style.display='none'} />
                      <div className="product-row-thumbs">
                        <div className="product-thumb" onClick={() => setActiveProductImg(prev => ({ ...prev, [i]: p.mainImg }))}>
                          <img src={p.mainImg} alt="" loading="lazy" />
                        </div>
                        {p.thumbs.map((t, j) => (
                          <div key={j} className="product-thumb" onClick={() => setActiveProductImg(prev => ({ ...prev, [i]: t }))}>
                            <img src={t} alt="" loading="lazy" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="product-row-info">
                      <div className="product-row-header">
                        <div className="product-row-name">{p.name}</div>
                        <span className="product-row-badge">Dehydrated</span>
                      </div>
                      <div className="product-row-desc">{p.desc}</div>
                      <div>
                        <div className="product-forms-label">Available As</div>
                        <div className="product-row-forms">
                          {p.forms.map((f, j) => <span className="product-form-tag" key={j}>{f}</span>)}
                        </div>
                      </div>
                      <div className="product-specs">
                        <div className="product-specs-title">Specifications</div>
                        <div className="specs-table">
                          {Object.entries(p.specs).map(([k, v], j) => (
                            <div className="spec-row" key={j}>
                              <span className="spec-key">{k}</span>
                              <span className="spec-val">{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button className="product-quote-btn" onClick={() => goToContact(p.name)}>Request a Quote →</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="products-cta-strip">
              <p style={{ color: "rgba(245,240,232,0.7)", fontSize: 15, marginBottom: 20 }}>
                Need a custom blend, specific moisture grade, or private-label packaging?
              </p>
              <button className="hero-cta" onClick={() => setActiveTab("contact")}>Request a Quote →</button>
            </div>
          </div>
        )}

        {activeTab === "quality" && (
          <div className="page" key="quality">
            <div className="quality-hero">
              <div className="section-label">Standards & Certifications</div>
              <h2 className="section-title">Quality You Can Trust</h2>
              <p className="section-body" style={{ margin: "0 auto 40px", color: "var(--text-mid)", textAlign: "center", maxWidth: 520 }}>
                From soil to shipment, every step is governed by documented protocols and third-party verified standards.
              </p>
            </div>
            <div className="quality-img-grid">
              {[
                { img: IMGS.e5, label: "Farm Sourcing" },
                { img: IMGS.e6, label: "Processing Floor" },
                { img: IMGS.e8, label: "Quality Lab" },
              ].map((item, i) => (
                <div className="quality-img-cell" key={i}>
                  <img src={item.img} alt={item.label} loading="lazy" onError={e => e.target.style.background='var(--green-mid)'} />
                  <div className="quality-img-overlay">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="quality-timeline">
              {QUALITY_STEPS.map((s, i) => (
                <div className="qt-item" key={i}>
                  <div className="qt-content">
                    <img src={s.img} alt={s.title} className="qt-content-img" loading="lazy" onError={e => e.target.style.display='none'} />
                    <div className="qt-content-body">
                      <span className="qt-tag">{s.tag}</span>
                      <div className="qt-title">{s.title}</div>
                      <div className="qt-desc">{s.desc}</div>
                    </div>
                  </div>
                  <div className="qt-dot-wrap"><div className="qt-dot">{s.icon}</div></div>
                  <div className="qt-empty" />
                </div>
              ))}
            </div>
            <div className="cert-strip">
              {[
                { icon: "🏅", name: "FSSAI Licensed", note: "Food Safety & Standards" },
                { icon: "🌐", name: "ISO 22000", note: "Food Management Systems" },
                { icon: "🌿", name: "APEDA Registered", note: "Agri Exports India" },
                { icon: "🔬", name: "Lab Tested", note: "3rd Party Verified" },
                { icon: "📋", name: "Phytosanitary", note: "Export Documentation" },
              ].map((c, i) => (
                <div className="cert-badge" key={i}>
                  <span className="cert-icon">{c.icon}</span>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-note">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "process" && (
          <div className="page" key="process">
            <div className="process-hero">
              <div className="section-label">How We Work</div>
              <h2 className="section-title">The Dehydration Process</h2>
              <p className="section-body">
                A 7-stage journey that transforms fresh farm produce into shelf-stable, export-grade dehydrated products — without additives or preservatives.
              </p>
            </div>
            <div className="process-steps">
              {PROCESS_STEPS.map((s, i) => (
                <div className="process-step" key={i}>
                  <div><div className="step-num">{i + 1}</div></div>
                  <div>
                    <span className="step-tag">{s.tag}</span>
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                    <div className="step-details">
                      {s.details.map((d, j) => <span className="step-detail" key={j}>{d}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="page" key="contact">
            <div className="contact-page">
              <div className="contact-left">
                <div className="section-label">Get In Touch</div>
                <h2 className="section-title">Let's Grow Together</h2>
                <p className="section-body">Whether you're looking for bulk dehydrated supply, export partnerships, or custom product development — our team is ready to help.</p>
                <div className="contact-info">
                  {[
                    { icon: "📍", title: "Address", val: "G4 Chincholi MIDC, Solapur, Maharashtra – 413255" },
                    { icon: "📞", title: "Phone", val: "+91 942359150" },
                    { icon: "✉️", title: "Email", val: "contact@mntpfamfresh.com" },
                    { icon: "🕐", title: "Working Hours", val: "Mon – Sat, 9:00 AM – 6:30 PM IST" },
                  ].map((item, i) => (
                    <div className="contact-info-item" key={i}>
                      <div className="ci-icon">{item.icon}</div>
                      <div>
                        <div className="ci-title">{item.title}</div>
                        <div className="ci-val">{item.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="contact-right">
                <div className="form-title">Send an Enquiry</div>
                <EnquiryForm onSubmit={handleSubmit} submitted={submitted} formData={formData} setFormData={setFormData} />
              </div>
            </div>
          </div>
        )}

      </div>

      <a className="whatsapp-float" href="https://wa.me/91942359150" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.525 5.847L.057 23.982l6.31-1.653A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.812 9.812 0 01-5.018-1.382l-.36-.214-3.736.979 1-3.635-.234-.374A9.808 9.808 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
        </svg>
      </a>
    </>
  );
}
