import { useState } from "react";

const LOGO_IMG = "data:image/png;base64,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";



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
  .logo-mark { position: relative; width: 40px; height: 40px; flex-shrink: 0; }
  .logo-f { font-family: 'Arial Black', sans-serif; font-size: 38px; font-weight: 900; color: #2d6a35; line-height: 1; position: absolute; top: 0; left: 4px; }
  .logo-leaf-svg { position: absolute; bottom: 2px; left: 0; width: 28px; height: 18px; }
  @keyframes leafSway { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
  .logo-text { display: flex; flex-direction: column; line-height: 1; }
  .logo-main { font-family: 'Arial Black', 'DM Sans', sans-serif; font-size: 17px; font-weight: 900; color: var(--white); letter-spacing: 1px; text-transform: uppercase; }
  .logo-main span { color: var(--green-light); }
  .logo-sub { font-size: 9px; color: var(--amber-light); letter-spacing: 3px; text-transform: uppercase; margin-top: 3px; }
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
  .footer-logo { font-family: 'Arial Black', sans-serif; font-size: 24px; font-weight: 900; color: var(--white); letter-spacing: 1px; text-transform: uppercase; }
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
            <img src={LOGO_IMG} alt="MNTP Logo" style={{width: 44, height: 44, objectFit: "contain", flexShrink: 0}} />
            <div className="logo-text">
              <span className="logo-main">MNTP <span>FARM FRESH</span></span>
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
                  <div className="footer-logo">MNTP <span style={{color:"var(--green-light)"}}>FARM FRESH</span></div>
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
