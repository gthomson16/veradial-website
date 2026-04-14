export interface AreaCode {
  code: string;
  city: string;
  state: string;
  country: "US" | "CA";
  marketName: string;
  region: string;
  lat: number;
  lng: number;
  bestForIndustries: { name: string; reason: string }[];
  localTrustAngle: string;
  nearbyAreaCodes: string[];
  faq: { question: string; answer: string }[];
  canadianSmsNote?: string;
}

export const AREA_CODES: AreaCode[] = [
  {
    code: "212",
    city: "New York",
    state: "NY",
    country: "US",
    marketName: "Manhattan",
    region: "Northeast",
    lat: 40.7128,
    lng: -74.006,
    bestForIndustries: [
      { name: "Financial services", reason: "Wall Street clients expect a Manhattan number" },
      { name: "Law firms", reason: "A 212 number signals established, credible practice" },
      { name: "Creative agencies", reason: "NYC presence matters for media and advertising" },
      { name: "Consulting", reason: "Fortune 500 clients take 212 calls seriously" },
    ],
    localTrustAngle:
      "A 212 number is one of the most recognized area codes in the world. In a city where first impressions close deals, a Manhattan number tells clients you're established — not operating from somewhere else. Answer rates for local 212 numbers are measurably higher than toll-free or out-of-state calls in the New York metro.",
    nearbyAreaCodes: ["646", "917", "718", "347"],
    faq: [
      {
        question: "Can I get a 212 number even if I'm not in New York?",
        answer:
          "Yes. VeraDial numbers work anywhere with an internet connection. You can operate from any location and present a Manhattan caller ID.",
      },
      {
        question: "What's the difference between 212 and 646?",
        answer:
          "Both cover Manhattan, but 212 is the original area code and carries more prestige. 646 was added as an overlay in 1999 when 212 numbers became scarce.",
      },
      {
        question: "Do 212 numbers support SMS?",
        answer:
          "Yes. VeraDial 212 numbers support both voice and SMS, so you can call and text clients from the same business number.",
      },
    ],
  },
  {
    code: "310",
    city: "Los Angeles",
    state: "CA",
    country: "US",
    marketName: "West Los Angeles",
    region: "West Coast",
    lat: 34.0522,
    lng: -118.2437,
    bestForIndustries: [
      { name: "Entertainment", reason: "A 310 number signals proximity to studios and agencies" },
      { name: "Real estate", reason: "Westside property clients expect a local number" },
      { name: "Health & wellness", reason: "LA's wellness industry runs on personal referrals and trust" },
      { name: "E-commerce brands", reason: "An LA presence adds credibility to DTC brands" },
    ],
    localTrustAngle:
      "310 covers Beverly Hills, Santa Monica, Malibu, and the Westside — the business epicenter of Los Angeles. A local 310 number signals that you're in the market, not cold-calling from out of state. For service businesses, answer rates jump when the caller ID matches the client's area.",
    nearbyAreaCodes: ["323", "424", "213", "818"],
    faq: [
      {
        question: "Does a 310 number cover all of Los Angeles?",
        answer:
          "310 covers West LA, Beverly Hills, Santa Monica, and surrounding areas. For central and east LA, 213 or 323 may be more appropriate. VeraDial lets you hold up to 5 numbers, so you can cover multiple areas.",
      },
      {
        question: "Can I use my 310 number for AI calls?",
        answer:
          "Yes. VeraDial's AI can make outbound calls using your 310 number as the caller ID. The recipient sees your local LA number, not a generic toll-free.",
      },
      {
        question: "Is there a difference between 310 and 424?",
        answer:
          "They cover the same geographic area. 424 was added as an overlay when 310 numbers became scarce. Both are recognized as West LA numbers.",
      },
    ],
  },
  {
    code: "415",
    city: "San Francisco",
    state: "CA",
    country: "US",
    marketName: "Bay Area",
    region: "West Coast",
    lat: 37.7749,
    lng: -122.4194,
    bestForIndustries: [
      { name: "Tech startups", reason: "A 415 number signals Bay Area presence to investors and partners" },
      { name: "Professional services", reason: "SF clients expect local accessibility" },
      { name: "Venture capital", reason: "Founders and LPs recognize 415 immediately" },
      { name: "SaaS sales", reason: "Outbound calls from 415 get higher answer rates in tech" },
    ],
    localTrustAngle:
      "415 is the original San Francisco area code and carries weight in tech and professional services. When you're reaching out to startups, investors, or enterprise clients in the Bay Area, a 415 caller ID signals that you're local and accessible — not a spam call from an unknown region.",
    nearbyAreaCodes: ["650", "510", "408", "628"],
    faq: [
      {
        question: "Should I get a 415 or 650 number?",
        answer:
          "415 covers San Francisco proper. 650 covers the Peninsula and South Bay (Palo Alto, Mountain View). Choose based on where your clients are. You can hold both on VeraDial.",
      },
      {
        question: "Are 415 numbers hard to get?",
        answer:
          "They're less common than overlay codes like 628, but VeraDial maintains inventory. Search by area code in the app to see available 415 numbers.",
      },
      {
        question: "Can AI calls use my 415 number?",
        answer:
          "Yes. When VeraDial's AI makes a call on your behalf, it uses your 415 number as the outbound caller ID with full STIR/SHAKEN A-level attestation.",
      },
    ],
  },
  {
    code: "305",
    city: "Miami",
    state: "FL",
    country: "US",
    marketName: "Greater Miami",
    region: "Southeast",
    lat: 25.7617,
    lng: -80.1918,
    bestForIndustries: [
      { name: "Real estate", reason: "Miami's property market demands local presence and fast follow-up" },
      { name: "Import/export", reason: "305 signals Miami's role as a Latin American trade gateway" },
      { name: "Hospitality", reason: "Hotels, restaurants, and events rely on local booking calls" },
      { name: "Legal services", reason: "South Florida clients prefer a local attorney they can reach" },
    ],
    localTrustAngle:
      "305 is culturally iconic in Miami — it's been the city's area code since 1947 and carries strong local identity. In a market where personal relationships drive business, a 305 number tells clients you're part of the community. This matters especially for real estate, legal services, and any business serving Miami-Dade's multilingual population.",
    nearbyAreaCodes: ["786", "954", "561"],
    faq: [
      {
        question: "What's the difference between 305 and 786?",
        answer:
          "Both cover Miami-Dade County. 305 is the original code and has stronger local recognition. 786 was added as an overlay in 1998.",
      },
      {
        question: "Can I use VeraDial for bilingual calling?",
        answer:
          "VeraDial's AI supports multiple languages for outbound calls. In a bilingual market like Miami, you can set call goals in English or Spanish.",
      },
      {
        question: "Does a 305 number work for all of South Florida?",
        answer:
          "305 specifically covers Miami-Dade County. For Broward County (Fort Lauderdale), consider a 954 number. VeraDial supports up to 5 numbers per account.",
      },
    ],
  },
  {
    code: "312",
    city: "Chicago",
    state: "IL",
    country: "US",
    marketName: "Downtown Chicago",
    region: "Midwest",
    lat: 41.8781,
    lng: -87.6298,
    bestForIndustries: [
      { name: "Financial services", reason: "Chicago's trading and banking sector expects downtown presence" },
      { name: "Manufacturing", reason: "Midwest industrial clients value local accessibility" },
      { name: "Architecture & construction", reason: "Chicago's building industry runs on local relationships" },
      { name: "Food service", reason: "Restaurant supply chains depend on responsive local vendors" },
    ],
    localTrustAngle:
      "312 is Chicago's downtown area code — the Loop, River North, and the central business district. In a city built on handshake deals and local loyalty, a 312 number tells clients you're in the market. Midwest business culture values reliability and proximity, and your caller ID is the first signal of both.",
    nearbyAreaCodes: ["773", "872", "630", "847"],
    faq: [
      {
        question: "Is 312 only for downtown Chicago?",
        answer:
          "312 originally covered all of Chicago but now primarily represents the downtown area and Loop. 773 covers the rest of the city. Both are well-recognized.",
      },
      {
        question: "Can I use a 312 number to call suburban clients?",
        answer:
          "Yes. Your 312 number works for calls anywhere. Suburban clients in the 630 or 847 area codes will still see your Chicago-area caller ID.",
      },
      {
        question: "How does STIR/SHAKEN help in Chicago?",
        answer:
          "Chicago has one of the highest robocall rates in the US. STIR/SHAKEN A-level attestation means your VeraDial calls display as verified, helping you stand out from spam.",
      },
    ],
  },
  {
    code: "512",
    city: "Austin",
    state: "TX",
    country: "US",
    marketName: "Greater Austin",
    region: "South Central",
    lat: 30.2672,
    lng: -97.7431,
    bestForIndustries: [
      { name: "Tech startups", reason: "Austin's tech scene has exploded and local presence matters for hiring and sales" },
      { name: "Home services", reason: "Austin's construction boom means constant demand for contractors" },
      { name: "Music & events", reason: "The live music capital needs reliable local booking lines" },
      { name: "Real estate", reason: "Austin's housing market moves fast — agents need instant local accessibility" },
    ],
    localTrustAngle:
      "Austin is one of the fastest-growing business markets in the US. A 512 number signals that you're part of Austin's local economy — not a remote company targeting the market from outside. For home services and real estate especially, clients strongly prefer calling back a local number.",
    nearbyAreaCodes: ["737", "210", "361"],
    faq: [
      {
        question: "What's the difference between 512 and 737?",
        answer:
          "Both cover the Austin metro area. 512 is the original code and more widely recognized. 737 was added as an overlay in 2013.",
      },
      {
        question: "Is Austin's area code changing?",
        answer:
          "No. 512 remains active. The 737 overlay was added to provide additional numbers without changing existing ones.",
      },
      {
        question: "Can I get a 512 number for my contracting business?",
        answer:
          "Yes. Search for available 512 numbers in the VeraDial app. You can have AI handle appointment confirmations and follow-ups using your Austin number.",
      },
    ],
  },
  {
    code: "206",
    city: "Seattle",
    state: "WA",
    country: "US",
    marketName: "Greater Seattle",
    region: "Pacific Northwest",
    lat: 47.6062,
    lng: -122.3321,
    bestForIndustries: [
      { name: "Tech companies", reason: "Seattle is home to Amazon, Microsoft, and thousands of startups" },
      { name: "Maritime & logistics", reason: "The Port of Seattle drives significant B2B calling" },
      { name: "Healthcare", reason: "Seattle's medical corridor needs reliable patient communication" },
      { name: "Coffee & food service", reason: "Seattle's food industry runs on vendor relationships" },
    ],
    localTrustAngle:
      "206 is Seattle's original and most prestigious area code. In a market dominated by tech companies that screen calls aggressively, a verified local 206 number is significantly more likely to get answered than an unknown or toll-free number. Seattle professionals are tech-savvy and spam-aware — verified caller ID matters here more than most cities.",
    nearbyAreaCodes: ["425", "253", "360"],
    faq: [
      {
        question: "Does 206 cover the Eastside (Bellevue, Redmond)?",
        answer:
          "No. The Eastside uses 425. If you serve both Seattle and Bellevue, consider holding numbers in both area codes on VeraDial.",
      },
      {
        question: "Why is verified caller ID important in Seattle?",
        answer:
          "Seattle has a tech-savvy population that aggressively screens calls. STIR/SHAKEN attestation means your calls display as verified instead of being silently filtered by spam detection.",
      },
      {
        question: "Can I use a 206 number from outside Washington?",
        answer:
          "Yes. VeraDial numbers work from any location. You'll have a Seattle presence regardless of where you're physically based.",
      },
    ],
  },
  {
    code: "416",
    city: "Toronto",
    state: "ON",
    country: "CA",
    marketName: "Greater Toronto Area",
    region: "Southern Ontario",
    lat: 43.6532,
    lng: -79.3832,
    bestForIndustries: [
      { name: "Financial services", reason: "Toronto's Bay Street is Canada's financial hub" },
      { name: "Real estate", reason: "Canada's largest property market demands local presence" },
      { name: "Immigration services", reason: "Toronto is the top destination for newcomers to Canada" },
      { name: "Professional services", reason: "Consulting, legal, and accounting firms need a Toronto number" },
    ],
    localTrustAngle:
      "416 is Toronto's core area code — the original code for Canada's largest city and financial capital. In a market of 6+ million people, a 416 number signals downtown Toronto presence and established business credibility. GTA clients distinguish between 416 (city core) and 905 (suburbs), and many prefer dealing with a 416 business.",
    nearbyAreaCodes: ["647", "437", "905", "289"],
    faq: [
      {
        question: "What's the difference between 416 and 647?",
        answer:
          "Both cover Toronto proper. 416 is the original code and carries more prestige. 647 was added as an overlay in 2001. Both are widely recognized as Toronto numbers.",
      },
      {
        question: "Can I text from a 416 number?",
        answer:
          "Canadian local numbers on VeraDial are voice-only. For SMS capability in Canada, you can add a toll-free number to your account which supports both voice and text.",
      },
      {
        question: "Does STIR/SHAKEN work in Canada?",
        answer:
          "Yes. Canada adopted STIR/SHAKEN in 2021. Your VeraDial 416 number carries verified caller ID attestation on Canadian networks.",
      },
    ],
    canadianSmsNote:
      "Canadian local numbers (416) are voice-only on VeraDial. To send and receive SMS in Canada, add a toll-free number to your account — toll-free numbers support both voice and text across the US and Canada.",
  },
  {
    code: "604",
    city: "Vancouver",
    state: "BC",
    country: "CA",
    marketName: "Greater Vancouver",
    region: "British Columbia",
    lat: 49.2827,
    lng: -123.1207,
    bestForIndustries: [
      { name: "Film & production", reason: "Vancouver is Hollywood North — local numbers matter for crew coordination" },
      { name: "Real estate", reason: "Vancouver's property market is hyper-local and relationship-driven" },
      { name: "Tech", reason: "Vancouver's growing tech scene attracts Pacific Rim business" },
      { name: "Import/export", reason: "Port of Vancouver connects North America to Asia-Pacific trade" },
    ],
    localTrustAngle:
      "604 is Vancouver's original area code and immediately signals local presence in Western Canada. In a market that bridges North American and Asia-Pacific business, a 604 number establishes credibility with both local clients and international partners. Vancouver's real estate and film industries especially value local accessibility.",
    nearbyAreaCodes: ["778", "236", "250"],
    faq: [
      {
        question: "Does 604 cover all of Vancouver?",
        answer:
          "604 covers the Greater Vancouver Regional District including Burnaby, Richmond, and North Vancouver. 778 and 236 are overlay codes for the same area.",
      },
      {
        question: "Can I text from a 604 number?",
        answer:
          "Canadian local numbers on VeraDial are voice-only. For SMS in British Columbia, add a toll-free number to your account which supports voice and text across Canada and the US.",
      },
      {
        question: "Is 604 or 778 better for business?",
        answer:
          "604 has stronger local recognition as Vancouver's original code. 778 covers the same area but is newer. For business credibility, 604 is the stronger choice.",
      },
    ],
    canadianSmsNote:
      "Canadian local numbers (604) are voice-only on VeraDial. To send and receive SMS in British Columbia, add a toll-free number to your account — toll-free numbers support both voice and text across the US and Canada.",
  },
  {
    code: "702",
    city: "Las Vegas",
    state: "NV",
    country: "US",
    marketName: "Las Vegas Valley",
    region: "Southwest",
    lat: 36.1699,
    lng: -115.1398,
    bestForIndustries: [
      { name: "Hospitality & events", reason: "Vegas runs on bookings, confirmations, and coordination calls" },
      { name: "Real estate", reason: "One of the fastest-growing housing markets in the US" },
      { name: "Construction", reason: "Constant development means constant scheduling calls" },
      { name: "Entertainment services", reason: "DJs, photographers, caterers — all need reliable local booking lines" },
    ],
    localTrustAngle:
      "702 is the Las Vegas Valley area code — one of the most recognized codes in the US. In a city where business moves fast and everything runs on phone bookings, a 702 number tells clients you're local and available. For hospitality, events, and real estate, a local caller ID directly impacts whether your calls get answered.",
    nearbyAreaCodes: ["725", "775"],
    faq: [
      {
        question: "Does 702 cover the entire Las Vegas metro?",
        answer:
          "Yes. 702 covers the Las Vegas Valley including Henderson, North Las Vegas, and surrounding areas. 725 is the overlay code for the same region.",
      },
      {
        question: "Can AI handle booking confirmation calls in Vegas?",
        answer:
          "Yes. VeraDial's AI is ideal for confirming event bookings, vendor appointments, and service calls — exactly the kind of high-volume confirmation work that Las Vegas businesses deal with daily.",
      },
      {
        question: "Is there a difference between 702 and 725?",
        answer:
          "They cover the same area. 702 is the original Las Vegas code and more widely recognized. 725 was added as an overlay in 2014.",
      },
    ],
  },
];

export function getAreaCode(code: string): AreaCode | undefined {
  return AREA_CODES.find((ac) => ac.code === code);
}
