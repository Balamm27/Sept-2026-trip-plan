const tripOptions = [
  {
    id: "meghamalai",
    name: "Meghamalai",
    coords: [9.694, 77.385],
    min: 6800,
    max: 11800,
    routeFamily: "tn-south",
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic%20view%20of%20Meghamalai.jpg",
    reason:
      "Best deep-cut Tamil Nadu option when the group wants colder hill roads, quieter stays, and a trip that still feels under the radar.",
    heroNote: "for cloud-forest roads and a deeper-cut Tamil Nadu vibe",
    stayText: "Choose one strong stay and treat the drives as the main event",
    itineraryMeta: "slow scenic-drive pace",
    pitStops: [
      { name: "Madurai", coords: [9.9252, 78.1198], note: "Easy rail or bus break before heading into Theni district" },
      { name: "Dindigul", coords: [10.3624, 77.9695], note: "A practical stop if you want a softer transition south" },
      { name: "Theni", coords: [10.0104, 77.4768], note: "Closest plains base before the final climb" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight to Madurai side, then climb into High Wavy country",
        body:
          "Reach the plains early, take a relaxed breakfast stop, and make the upward drive part of the trip. Check in by afternoon and keep the evening for the property, mist, and one short sunset loop.",
      },
      {
        chip: "Day 2",
        title: "Estate roads, lake views, and one proper scenic loop",
        body:
          "Pick one strong drive stretch instead of scattering the day. The best version is tea-country roads, quiet viewpoint stops, and a long lunch before heading back to the stay.",
      },
      {
        chip: "Day 3",
        title: "Flexible weather day for waterfalls or pure villa time",
        body:
          "If the weather is clear, do a longer circuit toward waterfalls or upper-road viewpoints. If it turns dramatic, keep this as a cards, music, and chill-with-a-view day.",
      },
      {
        chip: "Day 4",
        title: "Easy breakfast, slow descent, and buffer before return",
        body:
          "Do one final stop on the way down and avoid squeezing in last-minute detours. Meghamalai works best when the exit day stays calm and roomy.",
      },
    ],
  },
  {
    id: "valparai",
    name: "Valparai",
    coords: [10.3269, 76.9512],
    min: 6000,
    max: 10500,
    routeFamily: "tn-west",
    heroImage: "./assets/optimized/valparai-hero.jpg",
    reason:
      "Best offbeat drive-heavy option for a chilled group that wants something less regular than the standard hill-station list.",
    heroNote: "with Aliyar and Sholayar side drives",
    stayText: "Best with a car and a scenic-road mindset",
    itineraryMeta: "ghat-road heavy pacing",
    pitStops: [
      { name: "Coimbatore", coords: [11.0168, 76.9558], note: "Best practical rail and car-rental anchor" },
      { name: "Pollachi", coords: [10.658, 77.0087], note: "Ideal if you want to start the Aliyar climb fresh" },
      { name: "Palakkad", coords: [10.7867, 76.6548], note: "Useful if the group wants a quieter overnight break" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight to Coimbatore, then make the Pollachi climb the headline",
        body:
          "Start early from Coimbatore, keep breakfast flexible, and let the Aliyar-side ascent set the tone. Reach the stay without rushing and keep the evening for estate-road wandering.",
      },
      {
        chip: "Day 2",
        title: "Tea-country viewpoints and a full day of slow driving",
        body:
          "This is the pure mood day: dam stretches, unhurried tea stops, layered viewpoints, and zero pressure to chase a checklist.",
      },
      {
        chip: "Day 3",
        title: "Sholayar side if clear, backup chill day if the rain kicks up",
        body:
          "If conditions are good, take the longer scenic loop. If not, use the stay itself as the plan and save energy for a more social evening.",
      },
      {
        chip: "Day 4",
        title: "Breakfast, final bend-side stop, then descend smoothly",
        body:
          "Leave enough buffer for the return ride to Coimbatore and keep the last day lighter than the middle of the trip.",
      },
    ],
  },
  {
    id: "vattavada",
    name: "Vattavada + Kanthalloor",
    coords: [10.1779, 77.2608],
    min: 8200,
    max: 13500,
    routeFamily: "kerala-highlands",
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Morning%20of%20vattavada.jpg",
    reason:
      "Best if the group wants one of the coldest, quietest, least-standard Kerala hill bases and is okay with a longer first-day transfer.",
    heroNote: "for colder valley farms and border-road scenery",
    stayText: "Worth it only if the group is happy to trade time for uniqueness",
    itineraryMeta: "colder valley-road pacing",
    pitStops: [
      { name: "Munnar", coords: [10.0889, 77.0595], note: "Last major hill base before the quieter valley roads" },
      { name: "Kochi", coords: [9.9312, 76.2673], note: "Works if the group wants a city pause before the mountain transfer" },
      { name: "Kottayam", coords: [9.5916, 76.5222], note: "Softer break if you are moving in by train and car" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight into Kerala, then push past Munnar into the quieter valley",
        body:
          "Treat the approach as a destination-grade drive. Once you reach the stay, keep the rest of the day light because the transfer itself is the big effort.",
      },
      {
        chip: "Day 2",
        title: "Vattavada and Kanthalloor village loop without any hurry",
        body:
          "Use the day for fruit stops, terraced fields, cold-air bends, and one or two scenic pauses rather than formal sightseeing.",
      },
      {
        chip: "Day 3",
        title: "Border-road roaming and a slow second half",
        body:
          "This is the day for the most photogenic roads. Keep the evening clear for the stay because this option shines when the group spends real time at the base.",
      },
      {
        chip: "Day 4",
        title: "Leave early, descend steadily, and protect the return buffer",
        body:
          "Because the access is heavier, the last day needs more discipline than the lighter Tamil Nadu picks.",
      },
    ],
  },
  {
    id: "kotagiri",
    name: "Kotagiri + Coonoor",
    coords: [11.4204, 76.8637],
    min: 6500,
    max: 11000,
    routeFamily: "tn-west",
    heroImage: "./assets/optimized/kotagiri-hero.jpg",
    reason:
      "Best option when the group wants cooler weather and less September weather risk without falling back into the most crowded Ooty version.",
    heroNote: "for easier cool weather with less rain gamble",
    stayText: "Stay in Kotagiri or Coonoor, not busy Ooty center",
    itineraryMeta: "weather-safe hill-town pacing",
    pitStops: [
      { name: "Coimbatore", coords: [11.0168, 76.9558], note: "Most practical arrival base before the Nilgiris" },
      { name: "Mettupalayam", coords: [11.2997, 76.9412], note: "Useful if you want to start the hill drive early" },
      { name: "Salem", coords: [11.6643, 78.146], note: "Useful as a lower-cost stopover on either leg" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight to the Nilgiris, settle in outside the crowded core",
        body:
          "Use Kotagiri or Coonoor as the base, check in early, and keep the first day to one short loop and a long evening meal.",
      },
      {
        chip: "Day 2",
        title: "Tea roads, park side, and low-pressure hill-town roaming",
        body:
          "This is your balance day: enough movement to feel like a trip, not so much that it turns into a tourist checklist sprint.",
      },
      {
        chip: "Day 3",
        title: "One bigger Nilgiris circuit or a stay-local version",
        body:
          "Go broader only if the group wants it. Otherwise keep the day more local and enjoy the safer weather advantage of this option.",
      },
      {
        chip: "Day 4",
        title: "Breakfast, short final stop, and smooth downhill return",
        body:
          "The biggest win here is low friction, so protect that by keeping the departure day uncluttered.",
      },
    ],
  },
  {
    id: "sakleshpur",
    name: "Sakleshpur",
    coords: [12.9417, 75.785],
    min: 7000,
    max: 12000,
    routeFamily: "karnataka-west",
    heroImage: "./assets/optimized/sakleshpur-hero.jpg",
    reason:
      "Strong outside-Tamil-Nadu option for a slower estate-stay mood, provided the group is okay with a few extra travel hours.",
    heroNote: "for coffee-estate mist and longer, softer days",
    stayText: "Estate stay vibe works better than a rushed sightseeing list",
    itineraryMeta: "estate-stay pacing",
    pitStops: [
      { name: "Bengaluru", coords: [12.9716, 77.5946], note: "Best full-city stop before heading west" },
      { name: "Tumakuru", coords: [13.3409, 77.101], note: "A lighter break if Bengaluru feels too urban" },
      { name: "Hassan", coords: [13.0072, 76.1025], note: "Best practical western Karnataka break before Sakleshpur" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight toward Hassan side, then transition into estate country",
        body:
          "Reach the stay, have a slow lunch, and keep the first evening quiet. Sakleshpur feels best when the group settles into the property instead of forcing movement.",
      },
      {
        chip: "Day 2",
        title: "Plantation roads and one landmark stop",
        body:
          "Pick either a fort or waterfall add-on based on weather. The main reward is the atmosphere between stops, not a packed list of attractions.",
      },
      {
        chip: "Day 3",
        title: "One long scenic loop or a full stay-first day",
        body:
          "This is the flex day. If the weather is magical, drive; if not, let the group slow down and use the stay well.",
      },
      {
        chip: "Day 4",
        title: "Start the return early and keep the plan practical",
        body:
          "Sakleshpur is rewarding, but it earns that with extra movement, so the final morning needs a clean start.",
      },
    ],
  },
  {
    id: "kemmanagundi",
    name: "Kemmanagundi",
    coords: [13.553, 75.7878],
    min: 8500,
    max: 14500,
    routeFamily: "karnataka-west",
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kemmanagundi%20View.jpg",
    reason:
      "Best if you want a rarer Karnataka hill retreat than the usual Chikmagalur plan and are fine with the heavier access time.",
    heroNote: "for old-school hill-retreat quiet and misty ridges",
    stayText: "Pick this for uniqueness, not for the fastest logistics",
    itineraryMeta: "long-haul hidden-retreat pacing",
    pitStops: [
      { name: "Bengaluru", coords: [12.9716, 77.5946], note: "The strongest city stop if you want to split the Karnataka travel" },
      { name: "Tumakuru", coords: [13.3409, 77.101], note: "Good if the group wants a practical transit pause" },
      { name: "Chikkamagaluru", coords: [13.3153, 75.7754], note: "Best last leg stop if you want a softer hill transfer" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight into Karnataka, then finish the hill run by road",
        body:
          "Expect the destination to feel earned. Use the arrival day mostly for check-in, one sunset point, and a proper reset.",
      },
      {
        chip: "Day 2",
        title: "Viewpoint circuit with one waterfall or garden-side stop",
        body:
          "Kemmanagundi works better as a ridge-and-weather trip than a busy sightseeing day. Keep the route elegant and selective.",
      },
      {
        chip: "Day 3",
        title: "Second scenic day with a slower evening",
        body:
          "Take a longer outing only if the group still has energy. Otherwise use the destination's quietness as the main appeal.",
      },
      {
        chip: "Day 4",
        title: "Early departure, realistic expectations, and buffer all the way",
        body:
          "This is not the place to over-optimize the exit day. Leave generously early and let the travel be comfortable.",
      },
    ],
  },
  {
    id: "vagamon",
    name: "Vagamon",
    coords: [9.6866, 76.9052],
    min: 7500,
    max: 12500,
    routeFamily: "kerala-highlands",
    heroImage: "./assets/optimized/vagamon-meadows.jpg",
    reason:
      "Beautiful and genuinely different, but it should be chosen only if the group actively likes a monsoon-green, rain-shaped trip.",
    heroNote: "if everyone is actively into monsoon-green weather",
    stayText: "Pick only if the group is fine with September rain moods",
    itineraryMeta: "weather-led pacing",
    pitStops: [
      { name: "Kottayam", coords: [9.5916, 76.5222], note: "Best practical train-side pause before Vagamon" },
      { name: "Kochi", coords: [9.9312, 76.2673], note: "Use this if the group wants a city-and-hills mix" },
      { name: "Thekkady", coords: [9.6026, 77.1654], note: "A scenic alternative if you want a hill-side route stop" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight to Kottayam side, then climb gently into Vagamon",
        body:
          "Keep the first day loose. The weather decides how much movement makes sense, so treat the stay as part of the destination from the start.",
      },
      {
        chip: "Day 2",
        title: "Meadows, pine forest, and a weather-shaped loop",
        body:
          "Move only as much as the rain allows. The beauty here is in atmosphere and openness more than in tightly sequenced sightseeing.",
      },
      {
        chip: "Day 3",
        title: "One ambitious scenic run only if the sky cooperates",
        body:
          "If the conditions turn dramatic, use that as a feature instead of a problem and let the trip become more stay-led.",
      },
      {
        chip: "Day 4",
        title: "Descend with plenty of buffer before the return train",
        body:
          "The safest version of Vagamon is always the one that leaves margin on the final day.",
      },
    ],
  },
  {
    id: "javadi",
    name: "Javadi Hills",
    coords: [12.5759, 78.8744],
    min: 5200,
    max: 9000,
    routeFamily: "tn-near",
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Javadi%20Hills%20in%20Tamil%20Nadu.jpg",
    reason:
      "Best nearby hidden-gem pick when the group wants lighter travel effort but still wants to avoid more obvious Tamil Nadu hill names.",
    heroNote: "for a lower-effort hidden-gem answer from Chennai",
    stayText: "Not luxury-heavy, but very good for a simpler hidden-road trip",
    itineraryMeta: "low-effort hidden-road pacing",
    pitStops: [
      { name: "Vellore", coords: [12.9165, 79.1325], note: "The most natural low-effort stop for Javadi" },
      { name: "Yelagiri", coords: [12.5737, 78.6393], note: "A small hill detour if you want another short break" },
      { name: "Krishnagiri", coords: [12.5266, 78.2147], note: "Works if you want a highway-side overnight instead" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Quick overnight approach, then ease into the hills",
        body:
          "Because the access is lighter, you can afford a more relaxed morning and still settle in comfortably. Keep the first afternoon simple and exploratory.",
      },
      {
        chip: "Day 2",
        title: "Waterfall, forest road, and one proper hangout window",
        body:
          "Javadi works when the group balances driving with actual downtime. Do one key outing well, not three middling ones.",
      },
      {
        chip: "Day 3",
        title: "Second local loop or a full slow day near the stay",
        body:
          "This is where Javadi becomes a strong easy-mode pick: you can either roam again or intentionally do very little.",
      },
      {
        chip: "Day 4",
        title: "Leisurely descent without the pressure of a heavy transfer",
        body:
          "The low-friction exit is one of the biggest advantages of this option, so keep it relaxed.",
      },
    ],
  },
  {
    id: "kolli",
    name: "Kolli Hills",
    coords: [11.2484, 78.3316],
    min: 5000,
    max: 8500,
    routeFamily: "tn-near",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/34_Hairpin_Kolli_Hills.jpg/1280px-34_Hairpin_Kolli_Hills.jpg",
    reason:
      "A closer and more rugged road-trip style option if the group wants mountain-road energy over polished hill-town comfort.",
    heroNote: "for hairpin-bend fun with shorter access",
    stayText: "Shorter access and stronger road-trip energy",
    itineraryMeta: "shorter-access road-trip pacing",
    pitStops: [
      { name: "Salem", coords: [11.6643, 78.146], note: "The obvious practical break for Kolli" },
      { name: "Namakkal", coords: [11.2213, 78.1652], note: "A useful shorter transit stop before the climb" },
      { name: "Yercaud", coords: [11.7753, 78.209], note: "Optional bonus hill pause if you want variety on one leg" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight to Salem, then head up early for the full bend-side feel",
        body:
          "Reach the hills without overcomplicating the first day. Keep the afternoon scenic and road-view heavy rather than attraction heavy.",
      },
      {
        chip: "Day 2",
        title: "Waterfall or viewpoint day depending on conditions",
        body:
          "Let the roads lead the day. Kolli is strongest when the group enjoys the drive itself as much as the stops.",
      },
      {
        chip: "Day 3",
        title: "Slow roam, local food, and a social evening at the stay",
        body:
          "This should feel like a friends' hill-road break, not a tourist rush. Build the day around that.",
      },
      {
        chip: "Day 4",
        title: "Early descent and clean return through Salem",
        body:
          "The shorter access is the benefit here, so keep the last day simple and efficient.",
      },
    ],
  },
  {
    id: "wayanad",
    name: "Wayanad",
    coords: [11.6854, 76.132],
    min: 7500,
    max: 13000,
    routeFamily: "kerala-highlands",
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/1280px-Blue%2C_Green_%26_White.jpg",
    reason:
      "Best when the group wants a larger, more adventurous landscape and is okay with a longer access day plus some September rain flexibility.",
    heroNote: "for a larger landscape with more spread-out drives",
    stayText: "Larger destination, so pick one side and do it well",
    itineraryMeta: "big-canvas pacing",
    pitStops: [
      { name: "Bengaluru", coords: [12.9716, 77.5946], note: "Works if the group wants to split the long westbound journey" },
      { name: "Kozhikode", coords: [11.2588, 75.7804], note: "Best rail-side stop before the final climb into Wayanad" },
      { name: "Mysuru", coords: [12.2958, 76.6394], note: "Useful if you want a Karnataka-side route variation" },
    ],
    days: [
      {
        chip: "Night 0 / Day 1",
        title: "Overnight toward Kozhikode, then choose one Wayanad base well",
        body:
          "Do not try to cover the whole district. Pick the stay zone carefully and protect the arrival day from becoming too long.",
      },
      {
        chip: "Day 2",
        title: "One side only: cave, dam, or hill-road cluster",
        body:
          "Wayanad gets better when you narrow the scope. Use one side as the theme for the day and avoid constant backtracking.",
      },
      {
        chip: "Day 3",
        title: "Second loop for a different landscape mood",
        body:
          "Make the second day distinct from the first, but still keep the total drive load realistic.",
      },
      {
        chip: "Day 4",
        title: "Return with a big enough cushion before rail departure",
        body:
          "The distance here means the last day needs discipline, especially in wet weather.",
      },
    ],
  },
];

const rankMatrix = {
  3: {
    balanced: ["meghamalai", "valparai", "vattavada", "kotagiri", "sakleshpur", "kemmanagundi", "javadi", "wayanad", "vagamon", "kolli"],
    budget: ["kolli", "javadi", "valparai", "meghamalai", "kotagiri", "sakleshpur", "vagamon", "wayanad", "vattavada", "kemmanagundi"],
    cooler: ["vattavada", "kotagiri", "meghamalai", "kemmanagundi", "valparai", "sakleshpur", "vagamon", "wayanad", "javadi", "kolli"],
    easy: ["javadi", "kolli", "kotagiri", "valparai", "meghamalai", "sakleshpur", "vagamon", "wayanad", "vattavada", "kemmanagundi"],
  },
  2: {
    balanced: ["valparai", "kotagiri", "javadi", "kolli", "meghamalai", "sakleshpur", "vagamon", "wayanad", "vattavada", "kemmanagundi"],
    budget: ["kolli", "javadi", "valparai", "kotagiri", "meghamalai", "sakleshpur", "vagamon", "wayanad", "vattavada", "kemmanagundi"],
    cooler: ["kotagiri", "meghamalai", "valparai", "javadi", "sakleshpur", "vattavada", "kolli", "vagamon", "wayanad", "kemmanagundi"],
    easy: ["javadi", "kolli", "kotagiri", "valparai", "meghamalai", "sakleshpur", "vagamon", "wayanad", "vattavada", "kemmanagundi"],
  },
};

const optionMap = new Map(tripOptions.map((option) => [option.id, option]));
const STORAGE_KEY = "sept2026TripPlannerState";
const CHENNAI = {
  name: "Chennai",
  coords: [13.0827, 80.2707],
};

const heroNightsSelect = document.getElementById("heroNights");
const heroStyleSelect = document.getElementById("heroStyle");
const optionsGrid = document.getElementById("optionsGrid");
const itineraryHeading = document.getElementById("itineraryHeading");
const itineraryIntro = document.getElementById("itineraryIntro");
const itineraryCurrent = document.getElementById("itineraryCurrent");
const itineraryMeta = document.getElementById("itineraryMeta");
const itineraryTimeline = document.getElementById("itineraryTimeline");
const heroMapButton = document.getElementById("heroMapButton");
const mapDrawerToggle = document.getElementById("mapDrawerToggle");
const mapPanel = document.getElementById("mapPanel");
const openExploreTabButton = document.getElementById("openExploreTab");
const openCompareTabButton = document.getElementById("openCompareTab");
const exploreTab = document.getElementById("exploreTab");
const compareTab = document.getElementById("compareTab");
const compareTabCount = document.getElementById("compareTabCount");
const exploreShortlistPreview = document.getElementById("exploreShortlistPreview");
const exploreCompareButton = document.getElementById("exploreCompareButton");
const exploreShortlistHelp = document.getElementById("exploreShortlistHelp");
const compareAddSelect = document.getElementById("compareAddSelect");
const compareAddButton = document.getElementById("compareAddButton");
const compareShortlistPills = document.getElementById("compareShortlistPills");
const compareCards = document.getElementById("compareCards");
const compareEmptyState = document.getElementById("compareEmptyState");
const compareMasterMapNote = document.getElementById("compareMasterMapNote");
const compareOverview = document.getElementById("compareOverview");

const cardNodes = Array.from(document.querySelectorAll(".destination-card[data-option-id]"));

let exploreMap;
let compareMasterMap;
const compareCardMaps = new Map();
const compareCardMapLayers = new Map();
const geocodeCache = new Map();
const routeCache = new Map();

let appState = createInitialState();

function createDefaultCompareConfig(optionId) {
  return {
    optionId,
    days: 4,
    nights: 3,
    groupSize: 6,
    pitStopMode: "none",
    selectedStop: null,
    customQuery: "",
    manualBudget: 0,
    searchResults: [],
    searchMessage: "",
    searchLoading: false,
    routeMessage: "",
  };
}

function createInitialState() {
  return {
    activeTab: "explore",
    filters: {
      nights: 3,
      style: "balanced",
    },
    selectedOptionId: "meghamalai",
    manualSelection: false,
    shortlist: [],
    compareConfigs: {},
  };
}

function getPersistableState() {
  const compare = appState.shortlist.map((optionId) => {
    const config = appState.compareConfigs[optionId];
    return {
      optionId,
      days: config.days,
      nights: config.nights,
      groupSize: config.groupSize,
      pitStopMode: config.pitStopMode,
      selectedStop: config.selectedStop,
      customQuery: config.customQuery,
      manualBudget: config.manualBudget,
    };
  });

  return {
    activeTab: appState.activeTab,
    filters: appState.filters,
    selectedOptionId: appState.selectedOptionId,
    shortlist: compare,
  };
}

function applyPersistedState(payload) {
  if (!payload || typeof payload !== "object") {
    return;
  }

  appState.activeTab = payload.activeTab === "compare" ? "compare" : "explore";
  appState.filters.nights = payload.filters?.nights === 2 ? 2 : 3;
  appState.filters.style = ["balanced", "budget", "cooler", "easy"].includes(payload.filters?.style)
    ? payload.filters.style
    : "balanced";
  appState.selectedOptionId = optionMap.has(payload.selectedOptionId)
    ? payload.selectedOptionId
    : "meghamalai";

  if (Array.isArray(payload.shortlist)) {
    payload.shortlist.slice(0, 3).forEach((item) => {
      if (!optionMap.has(item.optionId)) {
        return;
      }

      appState.shortlist.push(item.optionId);
      appState.compareConfigs[item.optionId] = {
        ...createDefaultCompareConfig(item.optionId),
        days: clampNumber(item.days, 3, 8, 4),
        nights: clampNumber(item.nights, 2, 7, 3),
        groupSize: clampNumber(item.groupSize, 5, 7, 6),
        pitStopMode: ["none", "going", "coming", "both"].includes(item.pitStopMode)
          ? item.pitStopMode
          : "none",
        selectedStop: item.selectedStop && typeof item.selectedStop.name === "string"
          ? item.selectedStop
          : null,
        customQuery: typeof item.customQuery === "string" ? item.customQuery : "",
        manualBudget: clampNumber(item.manualBudget, -10000, 50000, 0),
      };
    });
  }
}

function encodeStateToUrl() {
  const params = new URLSearchParams(window.location.search);
  params.set("tab", appState.activeTab);
  params.set("nights", String(appState.filters.nights));
  params.set("style", appState.filters.style);
  params.set("selected", appState.selectedOptionId);
  params.set("compare", encodeURIComponent(JSON.stringify(getPersistableState().shortlist)));
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", nextUrl);
}

function decodeStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const urlState = createInitialState();
  urlState.activeTab = params.get("tab") === "compare" ? "compare" : "explore";
  urlState.filters.nights = params.get("nights") === "2" ? 2 : 3;
  urlState.filters.style = params.get("style") || "balanced";
  urlState.selectedOptionId = params.get("selected") || "meghamalai";

  const compareRaw = params.get("compare");
  if (compareRaw) {
    try {
      const compare = JSON.parse(decodeURIComponent(compareRaw));
      urlState.shortlist = compare;
    } catch {
      urlState.shortlist = [];
    }
  }

  return urlState;
}

function loadInitialState() {
  const fromUrl = decodeStateFromUrl();
  const hasUrlCompare = Array.isArray(fromUrl.shortlist) && fromUrl.shortlist.length > 0;

  if (hasUrlCompare || fromUrl.activeTab === "compare" || fromUrl.selectedOptionId !== "meghamalai") {
    applyPersistedState(fromUrl);
    return;
  }

  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    applyPersistedState(saved);
  } catch {
    appState = createInitialState();
  }
}

function persistState() {
  const persistable = getPersistableState();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
  encodeStateToUrl();
}

function clampNumber(value, min, max, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.min(max, Math.max(min, parsed));
}

function rankOptions(style, nights) {
  const order = rankMatrix[nights]?.[style] || rankMatrix[3].balanced;
  return order.map((id) => optionMap.get(id)).filter(Boolean);
}

function setActiveTab(tabId) {
  appState.activeTab = tabId === "compare" ? "compare" : "explore";
  const isCompare = appState.activeTab === "compare";
  exploreTab.hidden = isCompare;
  compareTab.hidden = !isCompare;
  exploreTab.classList.toggle("is-active", !isCompare);
  compareTab.classList.toggle("is-active", isCompare);
  openExploreTabButton.classList.toggle("is-active", !isCompare);
  openCompareTabButton.classList.toggle("is-active", isCompare);
  persistState();

  if (isCompare) {
    requestAnimationFrame(() => {
      ensureCompareMasterMap();
      renderCompareMaps();
    });
    window.setTimeout(() => {
      compareMasterMap?.invalidateSize();
      renderCompareMaps();
    }, 300);
  }
}

function ensureShortlist(optionId) {
  if (appState.shortlist.includes(optionId)) {
    return true;
  }
  if (appState.shortlist.length >= 3) {
    return false;
  }

  appState.shortlist.push(optionId);
  appState.compareConfigs[optionId] = createDefaultCompareConfig(optionId);
  persistState();
  return true;
}

function removeFromShortlist(optionId) {
  appState.shortlist = appState.shortlist.filter((id) => id !== optionId);
  delete appState.compareConfigs[optionId];
  if (appState.activeTab === "compare" && appState.shortlist.length === 0) {
    appState.activeTab = "explore";
  }
  persistState();
}

function computeEstimate(option, nights, groupSize) {
  const nightFactor = nights <= 2 ? 0.88 : 1 + (nights - 3) * 0.14;
  const groupFactor = groupSize === 5 ? 1.03 : groupSize === 7 ? 0.97 : 1;
  return {
    low: Math.round(option.min * nightFactor * groupFactor),
    high: Math.round(option.max * nightFactor * groupFactor),
  };
}

function computePitStopUplift(config) {
  if (!config.selectedStop || config.pitStopMode === "none") {
    return { low: 0, high: 0 };
  }

  const stopCount = getPitStopCount(config.pitStopMode);
  return {
    low: stopCount * 1400,
    high: stopCount * 2200,
  };
}

function getPitStopCount(mode) {
  if (mode === "both") return 2;
  if (mode === "going" || mode === "coming") return 1;
  return 0;
}

function validateCompareConfig(config) {
  const stopCount = getPitStopCount(config.pitStopMode);
  const minimumDays = 3 + stopCount;
  const minimumNights = 2;

  if (config.days < minimumDays) {
    return `Increase days to at least ${minimumDays} to allow ${stopCount === 2 ? "two stopovers" : "a stopover"} and still keep the trip workable.`;
  }

  if (config.nights < minimumNights) {
    return "At least 2 nights are needed for the compare planner to build a sensible trip.";
  }

  if (config.days <= config.nights) {
    return "Days should stay higher than nights so the travel legs and stopovers fit cleanly.";
  }

  if (stopCount > 0 && !config.selectedStop) {
    return "Choose a resolvable pit stop for this mode before the route and itinerary can be finalized.";
  }

  return "";
}

function buildExploreItinerary(option, nights) {
  if (nights === 3) {
    return option.days;
  }

  return [
    option.days[0],
    {
      chip: "Day 2",
      title: `${option.days[1].title} + ${option.days[2].title}`,
      body: `${option.days[1].body} ${option.days[2].body}`,
    },
    {
      chip: "Day 3",
      title: option.days[3].title,
      body: option.days[3].body,
    },
  ];
}

function buildCompareItinerary(option, config) {
  const validationMessage = validateCompareConfig(config);
  if (validationMessage) {
    return { error: validationMessage, days: [] };
  }

  const stopName = config.selectedStop?.name;
  const itinerary = [];
  const destinationSlots = config.days - 2 - getPitStopCount(config.pitStopMode);
  const middleTemplates = option.days.slice(1, option.days.length - 1);

  if (config.pitStopMode === "going" || config.pitStopMode === "both") {
    itinerary.push({
      chip: "Day 1",
      title: `Depart Chennai and pause in ${stopName}`,
      body: `${stopName} becomes a deliberate stopover rather than a rushed transfer. Use the day for check-in, a proper meal, and a quieter start before the hill approach.`,
    });
    itinerary.push({
      chip: "Day 2",
      title: `Continue from ${stopName} to ${option.name}`,
      body: option.days[0].body,
    });
  } else {
    itinerary.push({
      chip: "Day 1",
      title: option.days[0].title,
      body: option.days[0].body,
    });
  }

  for (let index = 0; index < destinationSlots; index += 1) {
    const template = middleTemplates[index] || middleTemplates[middleTemplates.length - 1];
    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: template.title,
      body:
        index < middleTemplates.length
          ? template.body
          : `Use this as an extra slow day around ${option.name}. ${option.stayText}.`,
    });
  }

  if (config.pitStopMode === "coming" || config.pitStopMode === "both") {
    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: `Leave ${option.name} and stop in ${stopName}`,
      body: `Keep the departure from the hills easy, then convert ${stopName} into a proper stopover day rather than a late-night rush back to Chennai.`,
    });
    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: `Return from ${stopName} to Chennai`,
      body: `Use the final leg for the cleanest return run back to Chennai, with enough slack to avoid cramming in extra sightseeing.`,
    });
  } else {
    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: option.days[option.days.length - 1].title,
      body: option.days[option.days.length - 1].body,
    });
  }

  return { error: "", days: itinerary };
}

function renderExploreCards(ranked) {
  ranked.forEach((option, index) => {
    const card = cardNodes.find((node) => node.dataset.optionId === option.id);
    if (!card) return;

    optionsGrid.appendChild(card);
    const pill = card.querySelector(".pill");
    const rank = card.querySelector(".rank");
    const itineraryButton = card.querySelector("[data-option-action='itinerary']");
    const shortlistButton = card.querySelector("[data-option-action='shortlist']");
    const compareButton = card.querySelector("[data-option-action='compare']");
    const isLeader = index === 0;
    const isSelected = option.id === appState.selectedOptionId;
    const isShortlisted = appState.shortlist.includes(option.id);
    const shortlistFull = appState.shortlist.length >= 3 && !isShortlisted;

    card.classList.toggle("recommended", isLeader);
    card.classList.toggle("selected", isSelected);
    card.classList.toggle("is-shortlisted", isShortlisted);

    if (pill) {
      pill.textContent = isLeader ? "Recommended" : card.dataset.pill || "Option";
      pill.classList.toggle("muted", !isLeader);
    }
    if (rank) {
      rank.textContent = `#${index + 1}`;
    }
    if (itineraryButton) {
      itineraryButton.textContent = isSelected ? "Viewing detailed itinerary" : "View detailed itinerary";
      itineraryButton.classList.toggle("is-active", isSelected);
    }
    if (shortlistButton) {
      shortlistButton.textContent = isShortlisted ? "Shortlisted" : "Add to shortlist";
      shortlistButton.disabled = shortlistFull;
      shortlistButton.classList.toggle("is-active", isShortlisted);
    }
    if (compareButton) {
      compareButton.disabled = shortlistFull;
      compareButton.textContent = isShortlisted ? "Open compare" : "Compare";
    }
  });
}

function renderExploreShortlistDock() {
  compareTabCount.textContent = String(appState.shortlist.length);
  exploreShortlistHelp.textContent = `${appState.shortlist.length} of 3 selected`;
  exploreCompareButton.disabled = appState.shortlist.length === 0;

  exploreShortlistPreview.innerHTML = appState.shortlist.length
    ? appState.shortlist
        .map((optionId) => {
          const option = optionMap.get(optionId);
          return `<button type="button" class="shortlist-pill" data-shortlist-remove="${optionId}">
            <span>${option.name}</span>
            <span aria-hidden="true">×</span>
          </button>`;
        })
        .join("")
    : `<span class="shortlist-placeholder">No destinations selected yet</span>`;
}

function renderExploreItinerary() {
  const option = optionMap.get(appState.selectedOptionId) || optionMap.get("meghamalai");
  const itineraryDays = buildExploreItinerary(option, appState.filters.nights);
  const tripLabel = appState.filters.nights === 3 ? "3 nights / 4 days" : "2 nights / 3 days";

  itineraryHeading.textContent = `${option.name} full itinerary`;
  itineraryIntro.textContent =
    `This is the detailed ${tripLabel} version for ${option.name}. Use any destination card to switch the itinerary.`;
  itineraryCurrent.textContent = option.name;
  itineraryMeta.textContent = `${tripLabel} with a ${option.itineraryMeta}.`;
  itineraryTimeline.innerHTML = itineraryDays
    .map(
      (day, index) => `
        <article class="timeline-card timeline-card-animated" style="--delay:${index + 1};">
          <span class="day-chip">${day.chip}</span>
          <h3>${day.title}</h3>
          <p>${day.body}</p>
        </article>
      `
    )
    .join("");
}

function ensureExploreMap() {
  if (exploreMap || typeof window.L === "undefined") {
    return;
  }

  exploreMap = window.L.map("tripMap", {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(exploreMap);

  const bounds = [];
  window.L.circleMarker(CHENNAI.coords, {
    radius: 8,
    color: "#123633",
    weight: 2,
    fillColor: "#123633",
    fillOpacity: 1,
  })
    .addTo(exploreMap)
    .bindPopup(`<strong>${CHENNAI.name}</strong><br>Departure anchor`);
  bounds.push(CHENNAI.coords);

  tripOptions.forEach((option) => {
    window.L.marker(option.coords)
      .addTo(exploreMap)
      .bindPopup(`<strong>${option.name}</strong><br>${option.stayText}`);
    bounds.push(option.coords);
  });

  exploreMap.fitBounds(bounds, { padding: [36, 36] });
}

function setExploreMapOpen(open, { scroll = false } = {}) {
  if (!mapPanel || !mapDrawerToggle) {
    return;
  }

  mapPanel.hidden = !open;
  mapDrawerToggle.setAttribute("aria-expanded", String(open));
  mapDrawerToggle.textContent = open ? "Hide map" : "Show map";
  heroMapButton.textContent = open ? "Hide map" : "View map";

  if (open) {
    ensureExploreMap();
    requestAnimationFrame(() => exploreMap?.invalidateSize());
    if (scroll) {
      mapPanel.parentElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function renderExploreTab() {
  heroNightsSelect.value = String(appState.filters.nights);
  heroStyleSelect.value = appState.filters.style;
  const ranked = rankOptions(appState.filters.style, appState.filters.nights);
  if (!appState.manualSelection && ranked[0]) {
    appState.selectedOptionId = ranked[0].id;
  }
  if (!optionMap.has(appState.selectedOptionId)) {
    appState.selectedOptionId = ranked[0]?.id || "meghamalai";
  }

  renderExploreCards(ranked);
  renderExploreShortlistDock();
  renderExploreItinerary();
}

function getAvailableCompareOptions() {
  return tripOptions.filter((option) => !appState.shortlist.includes(option.id));
}

function renderCompareAddSelect() {
  const availableOptions = getAvailableCompareOptions();
  compareAddSelect.innerHTML = availableOptions.length
    ? availableOptions
        .map((option) => `<option value="${option.id}">${option.name}</option>`)
        .join("")
    : `<option value="">Shortlist full</option>`;

  compareAddButton.disabled = appState.shortlist.length >= 3 || availableOptions.length === 0;
  compareAddSelect.disabled = compareAddButton.disabled;
}

function renderCompareShortlistPills() {
  compareShortlistPills.innerHTML = appState.shortlist
    .map((optionId) => {
      const option = optionMap.get(optionId);
      return `<button type="button" class="compare-chip" data-compare-focus="${optionId}">${option.name}</button>`;
    })
    .join("");
}

function renderCompareEmptyState() {
  const isEmpty = appState.shortlist.length === 0;
  compareEmptyState.hidden = !isEmpty;
  compareOverview.hidden = isEmpty;
  compareCards.hidden = isEmpty;
}

function buildStopSuggestionsMarkup(config, option) {
  return option.pitStops
    .map((stop) => {
      const isSelected = config.selectedStop?.name === stop.name;
      return `<button type="button" class="stop-chip ${isSelected ? "is-active" : ""}" data-stop-name="${stop.name}" data-option-id="${option.id}">
        ${stop.name}
      </button>`;
    })
    .join("");
}

function buildCompareCard(config) {
  const option = optionMap.get(config.optionId);
  const validationMessage = validateCompareConfig(config);
  const estimate = computeEstimate(option, config.nights, config.groupSize);
  const stopUplift = computePitStopUplift(config);
  const manualBudget = Number(config.manualBudget) || 0;
  const finalLow = estimate.low + stopUplift.low + manualBudget;
  const finalHigh = estimate.high + stopUplift.high + manualBudget;
  const itinerary = buildCompareItinerary(option, config);
  const routeSummary =
    config.pitStopMode === "none" || !config.selectedStop
      ? `Direct Chennai to ${option.name} round trip`
      : config.pitStopMode === "going"
        ? `Chennai → ${config.selectedStop.name} → ${option.name} → Chennai`
        : config.pitStopMode === "coming"
          ? `Chennai → ${option.name} → ${config.selectedStop.name} → Chennai`
          : `Chennai → ${config.selectedStop.name} → ${option.name} → ${config.selectedStop.name} → Chennai`;

  return `
    <article class="compare-card" data-compare-card="${option.id}">
      <div class="compare-card-header">
        <div>
          <p class="section-label">Planner</p>
          <h3>${option.name}</h3>
          <p class="compare-card-route">${routeSummary}</p>
        </div>
        <button type="button" class="ghost-button" data-remove-compare="${option.id}">Remove</button>
      </div>

      <div class="compare-card-topline">
        <label class="compare-field">
          <span>Destination</span>
          <select data-config-select="optionId" data-option-id="${option.id}">
            ${tripOptions
              .map(
                (candidate) =>
                  `<option value="${candidate.id}" ${candidate.id === option.id ? "selected" : ""}>${candidate.name}</option>`
              )
              .join("")}
          </select>
        </label>
        <div class="compare-price-summary">
          <span class="section-label">Per person estimate</span>
          <strong>₹${finalLow.toLocaleString()} - ₹${finalHigh.toLocaleString()}</strong>
          <span>Base ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()} · Stop ${stopUplift.low.toLocaleString()} - ${stopUplift.high.toLocaleString()} · Manual ${manualBudget.toLocaleString()}</span>
        </div>
      </div>

      <div class="compare-controls-grid">
        <div class="counter-card">
          <span class="counter-label">Days</span>
          <div class="counter-row">
            <button type="button" class="counter-button" data-adjust="days" data-delta="-1" data-option-id="${option.id}">−</button>
            <strong>${config.days}</strong>
            <button type="button" class="counter-button" data-adjust="days" data-delta="1" data-option-id="${option.id}">+</button>
          </div>
        </div>
        <div class="counter-card">
          <span class="counter-label">Nights</span>
          <div class="counter-row">
            <button type="button" class="counter-button" data-adjust="nights" data-delta="-1" data-option-id="${option.id}">−</button>
            <strong>${config.nights}</strong>
            <button type="button" class="counter-button" data-adjust="nights" data-delta="1" data-option-id="${option.id}">+</button>
          </div>
        </div>
        <label class="compare-field">
          <span>Pit stop timing</span>
          <select data-config-select="pitStopMode" data-option-id="${option.id}">
            <option value="none" ${config.pitStopMode === "none" ? "selected" : ""}>No stopover</option>
            <option value="going" ${config.pitStopMode === "going" ? "selected" : ""}>Pit stop while going</option>
            <option value="coming" ${config.pitStopMode === "coming" ? "selected" : ""}>Pit stop while coming back</option>
            <option value="both" ${config.pitStopMode === "both" ? "selected" : ""}>Pit stop both ways</option>
          </select>
        </label>
        <label class="compare-field">
          <span>Group size</span>
          <select data-config-select="groupSize" data-option-id="${option.id}">
            <option value="5" ${config.groupSize === 5 ? "selected" : ""}>5 people</option>
            <option value="6" ${config.groupSize === 6 ? "selected" : ""}>6 people</option>
            <option value="7" ${config.groupSize === 7 ? "selected" : ""}>7 people</option>
          </select>
        </label>
        <label class="compare-field">
          <span>Manual budget adjustment per person</span>
          <input type="number" data-config-input="manualBudget" data-option-id="${option.id}" value="${config.manualBudget}" step="500" min="-10000" max="50000" />
        </label>
      </div>

      <div class="compare-stopover-panel">
        <div class="compare-stopover-header">
          <div>
            <p class="section-label">Pit stop</p>
            <h4>Use a suggested stop or resolve a custom place</h4>
          </div>
          ${config.selectedStop ? `<button type="button" class="ghost-button" data-clear-stop="${option.id}">Clear stop</button>` : ""}
        </div>
        <div class="stop-chip-row">
          ${buildStopSuggestionsMarkup(config, option)}
        </div>
        <div class="custom-stop-row">
          <input type="text" placeholder="Search a custom city or town in India" value="${config.customQuery}" data-custom-query="${option.id}" />
          <button type="button" class="button button-secondary" data-search-stop="${option.id}">
            ${config.searchLoading ? "Searching..." : "Resolve"}
          </button>
        </div>
        ${
          config.selectedStop
            ? `<p class="resolved-stop">Resolved pit stop: <strong>${config.selectedStop.name}</strong></p>`
            : ""
        }
        ${
          config.searchMessage
            ? `<p class="field-message">${config.searchMessage}</p>`
            : ""
        }
        ${
          config.searchResults.length
            ? `<div class="search-results">
              ${config.searchResults
                .map(
                  (result, index) => `<button type="button" class="search-result" data-pick-search="${option.id}" data-result-index="${index}">
                    <strong>${result.name}</strong>
                    <span>${result.label}</span>
                  </button>`
                )
                .join("")}
            </div>`
            : ""
        }
      </div>

      <div class="compare-card-body">
        <div class="route-panel">
          <div class="route-panel-header">
            <div>
              <p class="section-label">Route map</p>
              <h4>${option.name} route</h4>
            </div>
            ${config.routeMessage ? `<span class="route-message">${config.routeMessage}</span>` : ""}
          </div>
          <div class="trip-map compare-route-map" id="routeMap-${option.id}"></div>
        </div>
        <div class="itinerary-panel">
          <div class="itinerary-panel-header">
            <p class="section-label">Detailed plan</p>
            <h4>${config.days} days / ${config.nights} nights</h4>
          </div>
          ${
            itinerary.error
              ? `<div class="validation-card">${itinerary.error}</div>`
              : itinerary.days
                  .map(
                    (day) => `<article class="compare-day-card">
                      <span class="day-chip">${day.chip}</span>
                      <h5>${day.title}</h5>
                      <p>${day.body}</p>
                    </article>`
                  )
                  .join("")
          }
        </div>
      </div>
    </article>
  `;
}

function renderCompareCards() {
  compareCards.className = `section compare-grid compare-grid-${Math.max(1, appState.shortlist.length)}`;
  compareCards.innerHTML = appState.shortlist.map((optionId) => buildCompareCard(appState.compareConfigs[optionId])).join("");
}

function renderCompareTab() {
  renderCompareAddSelect();
  renderCompareShortlistPills();
  renderCompareEmptyState();
  if (!compareEmptyState.hidden) {
    compareMasterMapNote.textContent = "Add a destination to see route comparisons here.";
    compareCards.innerHTML = "";
    return;
  }

  renderCompareCards();
  ensureCompareMasterMap();
  renderCompareMaps();
}

function getRouteWaypoints(config) {
  const option = optionMap.get(config.optionId);
  if (!option) return [CHENNAI];
  const stop = config.selectedStop ? { name: config.selectedStop.name, coords: [config.selectedStop.lat, config.selectedStop.lng] } : null;
  const destination = { name: option.name, coords: option.coords };

  if (!stop || config.pitStopMode === "none") {
    return [CHENNAI, destination, CHENNAI];
  }
  if (config.pitStopMode === "going") {
    return [CHENNAI, stop, destination, CHENNAI];
  }
  if (config.pitStopMode === "coming") {
    return [CHENNAI, destination, stop, CHENNAI];
  }
  return [CHENNAI, stop, destination, stop, CHENNAI];
}

async function geocodePlace(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];
  if (geocodeCache.has(normalized)) {
    return geocodeCache.get(normalized);
  }

  const url = new URL("https://nominatim.openstreetmap.org/search");
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("q", query);
  url.searchParams.set("countrycodes", "in");
  url.searchParams.set("limit", "5");
  url.searchParams.set("addressdetails", "1");

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to resolve that stop right now.");
  }

  const data = await response.json();
  const results = data.map((item) => ({
    name: item.name || item.display_name.split(",")[0],
    label: item.display_name,
    lat: Number(item.lat),
    lng: Number(item.lon),
  }));

  geocodeCache.set(normalized, results);
  return results;
}

async function fetchRouteForWaypoints(waypoints) {
  const key = waypoints.map((waypoint) => waypoint.coords.join(",")).join("|");
  if (routeCache.has(key)) {
    return routeCache.get(key);
  }

  const coordinateString = waypoints.map((waypoint) => `${waypoint.coords[1]},${waypoint.coords[0]}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coordinateString}?overview=full&geometries=geojson`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable to load route");
  }

  const data = await response.json();
  const route = data.routes?.[0]?.geometry || null;
  routeCache.set(key, route);
  return route;
}

function ensureCompareMasterMap() {
  if (compareMasterMap || typeof window.L === "undefined") {
    return;
  }

  compareMasterMap = window.L.map("compareMasterMap", {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(compareMasterMap);
}

function ensureRouteMap(optionId) {
  if (compareCardMaps.has(optionId) || typeof window.L === "undefined") {
    return compareCardMaps.get(optionId);
  }

  const node = document.getElementById(`routeMap-${optionId}`);
  if (!node) return null;

  const map = window.L.map(node, {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  compareCardMaps.set(optionId, map);
  return map;
}

function clearMapLayers(map, optionId = "master") {
  const existing = compareCardMapLayers.get(optionId) || [];
  existing.forEach((layer) => map.removeLayer(layer));
  compareCardMapLayers.set(optionId, []);
}

function addTrackedLayer(map, optionId, layer) {
  const existing = compareCardMapLayers.get(optionId) || [];
  existing.push(layer);
  compareCardMapLayers.set(optionId, existing);
}

async function renderCompareRoute(optionId) {
  const config = appState.compareConfigs[optionId];
  const option = optionMap.get(optionId);
  const map = ensureRouteMap(optionId);
  if (!map || !config || !option) return null;

  clearMapLayers(map, optionId);
  const bounds = [];
  const waypoints = getRouteWaypoints(config);

  waypoints.forEach((waypoint, index) => {
    const marker =
      index === 0
        ? window.L.circleMarker(waypoint.coords, {
            radius: 7,
            color: "#102f2c",
            weight: 2,
            fillColor: "#102f2c",
            fillOpacity: 1,
          })
        : window.L.marker(waypoint.coords);
    marker.addTo(map).bindPopup(`<strong>${waypoint.name}</strong>`);
    addTrackedLayer(map, optionId, marker);
    bounds.push(waypoint.coords);
  });

  try {
    const route = await fetchRouteForWaypoints(waypoints);
    if (route) {
      const polyline = window.L.geoJSON(route, {
        style: {
          color: "#2d6eaf",
          weight: 4,
          opacity: 0.8,
        },
      }).addTo(map);
      addTrackedLayer(map, optionId, polyline);
    }
  } catch {
    config.routeMessage = "Route service did not return a full path, but the stop sequence is still valid.";
  }

  map.fitBounds(bounds, { padding: [24, 24] });
  requestAnimationFrame(() => map.invalidateSize());
  window.setTimeout(() => map.invalidateSize(), 150);
  return { waypoints, routeLabel: `${option.name} route` };
}

async function renderCompareMaps() {
  if (appState.shortlist.length === 0) {
    return;
  }

  if (compareMasterMap) {
    clearMapLayers(compareMasterMap, "master");
  }

  const palette = ["#2d6eaf", "#1f756a", "#8b6a53"];
  const masterBounds = [];
  const summaries = [];

  for (const [index, optionId] of appState.shortlist.entries()) {
    const config = appState.compareConfigs[optionId];
    const result = await renderCompareRoute(optionId);
    const waypoints = result?.waypoints || getRouteWaypoints(config);

    if (compareMasterMap) {
      waypoints.forEach((waypoint, waypointIndex) => {
        const marker =
          waypointIndex === 0
            ? window.L.circleMarker(waypoint.coords, {
                radius: 6,
                color: "#102f2c",
                weight: 2,
                fillColor: "#102f2c",
                fillOpacity: 1,
              })
            : window.L.circleMarker(waypoint.coords, {
                radius: 5,
                color: palette[index % palette.length],
                weight: 2,
                fillColor: palette[index % palette.length],
                fillOpacity: 1,
              });
        marker.addTo(compareMasterMap).bindPopup(`<strong>${waypoint.name}</strong>`);
        addTrackedLayer(compareMasterMap, "master", marker);
        masterBounds.push(waypoint.coords);
      });

      try {
        const route = await fetchRouteForWaypoints(waypoints);
        if (route) {
          const polyline = window.L.geoJSON(route, {
            style: {
              color: palette[index % palette.length],
              weight: 4,
              opacity: 0.75,
            },
          }).addTo(compareMasterMap);
          addTrackedLayer(compareMasterMap, "master", polyline);
        }
      } catch {
        summaries.push(`${optionMap.get(optionId).name}: route line unavailable`);
      }
    }
  }

  if (compareMasterMap && masterBounds.length) {
    compareMasterMap.fitBounds(masterBounds, { padding: [30, 30] });
    requestAnimationFrame(() => compareMasterMap.invalidateSize());
    window.setTimeout(() => compareMasterMap.invalidateSize(), 150);
  }

  compareMasterMapNote.textContent = summaries.length
    ? `Some route lines could not be drawn. ${summaries.join(" · ")}`
    : "Chennai stays as the anchor and only shortlisted destinations are shown here.";
}

async function searchCustomStop(optionId) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  const query = config.customQuery.trim();
  if (!query) {
    config.searchMessage = "Type a place name first.";
    renderApp();
    return;
  }

  config.searchLoading = true;
  config.searchMessage = "";
  config.searchResults = [];
  renderCompareTab();

  try {
    const results = await geocodePlace(query);
    config.searchLoading = false;
    if (!results.length) {
      config.searchMessage = "No resolvable stop found. Try a nearby city or town name instead.";
    } else {
      config.searchMessage = "Choose one of the closest resolvable matches below.";
      config.searchResults = results;
    }
  } catch (error) {
    config.searchLoading = false;
    config.searchMessage = error instanceof Error ? error.message : "Unable to resolve that stop.";
  }

  persistState();
  renderCompareTab();
}

function pickResolvedStop(optionId, stop) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  config.selectedStop = {
    name: stop.name,
    lat: stop.lat ?? stop.coords?.[0],
    lng: stop.lng ?? stop.coords?.[1],
    label: stop.label || stop.note || stop.name,
  };
  config.searchMessage = "";
  config.searchResults = [];
  persistState();
  renderCompareTab();
}

function clearPitStop(optionId) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  config.selectedStop = null;
  config.searchResults = [];
  config.searchMessage = "";
  config.pitStopMode = "none";
  persistState();
  renderCompareTab();
}

function createCardActions() {
  cardNodes.forEach((card) => {
    if (card.querySelector(".card-actions")) return;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const itineraryButton = document.createElement("button");
    itineraryButton.type = "button";
    itineraryButton.className = "card-action-primary";
    itineraryButton.dataset.optionAction = "itinerary";
    itineraryButton.textContent = "View detailed itinerary";

    const shortlistButton = document.createElement("button");
    shortlistButton.type = "button";
    shortlistButton.className = "card-action-secondary";
    shortlistButton.dataset.optionAction = "shortlist";
    shortlistButton.textContent = "Add to shortlist";

    const compareButton = document.createElement("button");
    compareButton.type = "button";
    compareButton.className = "card-action-secondary";
    compareButton.dataset.optionAction = "compare";
    compareButton.textContent = "Compare";

    actions.append(itineraryButton, shortlistButton, compareButton);

    const budgetTag = card.querySelector(".budget-tag");
    if (budgetTag) {
      budgetTag.insertAdjacentElement("afterend", actions);
    } else {
      card.appendChild(actions);
    }
  });
}

function renderApp() {
  renderExploreTab();
  renderCompareTab();
  setActiveTab(appState.activeTab);
}

optionsGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const button = target.closest("[data-option-action]");
  if (!button) return;

  const card = button.closest(".destination-card[data-option-id]");
  if (!card) return;
  const optionId = card.dataset.optionId;
  const action = button.dataset.optionAction;

  if (action === "itinerary") {
    appState.selectedOptionId = optionId;
    appState.manualSelection = true;
    persistState();
    renderExploreTab();
    document.getElementById("itinerary").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "shortlist") {
    if (appState.shortlist.includes(optionId)) {
      removeFromShortlist(optionId);
    } else if (ensureShortlist(optionId)) {
      renderApp();
    }
    renderApp();
    return;
  }

  if (action === "compare") {
    const added = ensureShortlist(optionId);
    if (added || appState.shortlist.includes(optionId)) {
      appState.activeTab = "compare";
      persistState();
      renderApp();
    }
  }
});

exploreShortlistPreview.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest("[data-shortlist-remove]");
  if (!button) return;
  removeFromShortlist(button.dataset.shortlistRemove);
  renderApp();
});

exploreCompareButton.addEventListener("click", () => {
  if (!appState.shortlist.length) return;
  appState.activeTab = "compare";
  persistState();
  renderApp();
});

openExploreTabButton.addEventListener("click", () => setActiveTab("explore"));
openCompareTabButton.addEventListener("click", () => setActiveTab("compare"));

heroNightsSelect.addEventListener("change", () => {
  appState.filters.nights = Number(heroNightsSelect.value) === 2 ? 2 : 3;
  appState.manualSelection = false;
  persistState();
  renderExploreTab();
});

heroStyleSelect.addEventListener("change", () => {
  appState.filters.style = heroStyleSelect.value;
  appState.manualSelection = false;
  persistState();
  renderExploreTab();
});

heroMapButton?.addEventListener("click", () => {
  const isOpen = !mapPanel.hidden;
  setExploreMapOpen(!isOpen, { scroll: true });
});

mapDrawerToggle?.addEventListener("click", () => {
  const isOpen = !mapPanel.hidden;
  setExploreMapOpen(!isOpen);
});

compareAddButton.addEventListener("click", () => {
  const optionId = compareAddSelect.value;
  if (!optionId) return;
  ensureShortlist(optionId);
  appState.activeTab = "compare";
  persistState();
  renderApp();
});

compareShortlistPills.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest("[data-compare-focus]");
  if (!button) return;
  const optionId = button.dataset.compareFocus;
  const node = document.querySelector(`[data-compare-card="${optionId}"]`);
  node?.scrollIntoView({ behavior: "smooth", block: "start" });
});

compareCards.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const removeButton = target.closest("[data-remove-compare]");
  if (removeButton) {
    removeFromShortlist(removeButton.dataset.removeCompare);
    renderApp();
    return;
  }

  const adjustButton = target.closest("[data-adjust]");
  if (adjustButton) {
    const optionId = adjustButton.dataset.optionId;
    const key = adjustButton.dataset.adjust;
    const delta = Number(adjustButton.dataset.delta);
    const config = appState.compareConfigs[optionId];
    if (config && (key === "days" || key === "nights")) {
      const bounds = key === "days" ? [3, 8] : [2, 7];
      config[key] = clampNumber(config[key] + delta, bounds[0], bounds[1], config[key]);
      persistState();
      renderCompareTab();
    }
    return;
  }

  const stopButton = target.closest("[data-stop-name]");
  if (stopButton) {
    const optionId = stopButton.dataset.optionId;
    const option = optionMap.get(optionId);
    const stop = option?.pitStops.find((item) => item.name === stopButton.dataset.stopName);
    if (stop) {
      pickResolvedStop(optionId, stop);
    }
    return;
  }

  const clearStopButton = target.closest("[data-clear-stop]");
  if (clearStopButton) {
    clearPitStop(clearStopButton.dataset.clearStop);
    return;
  }

  const pickSearchButton = target.closest("[data-pick-search]");
  if (pickSearchButton) {
    const optionId = pickSearchButton.dataset.pickSearch;
    const index = Number(pickSearchButton.dataset.resultIndex);
    const config = appState.compareConfigs[optionId];
    const result = config?.searchResults[index];
    if (result) {
      pickResolvedStop(optionId, result);
    }
    return;
  }

  const searchButton = target.closest("[data-search-stop]");
  if (searchButton) {
    searchCustomStop(searchButton.dataset.searchStop);
  }
});

compareCards.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;

  if (target.matches("[data-config-select='optionId']")) {
    const currentId = target.dataset.optionId;
    const nextId = target.value;
    if (!optionMap.has(nextId) || currentId === nextId) return;
    if (appState.shortlist.includes(nextId)) {
      target.value = currentId;
      return;
    }
    const index = appState.shortlist.indexOf(currentId);
    const existingConfig = appState.compareConfigs[currentId];
    appState.shortlist[index] = nextId;
    appState.compareConfigs[nextId] = {
      ...createDefaultCompareConfig(nextId),
      days: existingConfig.days,
      nights: existingConfig.nights,
      groupSize: existingConfig.groupSize,
      pitStopMode: "none",
      manualBudget: existingConfig.manualBudget,
    };
    delete appState.compareConfigs[currentId];
    persistState();
    renderApp();
    return;
  }

  const optionId = target.dataset.optionId;
  const config = appState.compareConfigs[optionId];
  if (!config) return;

  if (target.matches("[data-config-select='pitStopMode']")) {
    config.pitStopMode = target.value;
    if (config.pitStopMode === "none") {
      config.selectedStop = null;
      config.searchResults = [];
      config.searchMessage = "";
    }
    config.routeMessage = "";
    persistState();
    renderCompareTab();
    return;
  }

  if (target.matches("[data-config-select='groupSize']")) {
    config.groupSize = clampNumber(target.value, 5, 7, 6);
    persistState();
    renderCompareTab();
    return;
  }
});

compareCards.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;

  const optionId = target.dataset.optionId || target.dataset.customQuery;
  const config = appState.compareConfigs[optionId];
  if (!config) return;

  if (target.matches("[data-config-input='manualBudget']")) {
    config.manualBudget = clampNumber(target.value, -10000, 50000, 0);
    persistState();
    renderCompareTab();
    return;
  }

  if (target.matches("[data-custom-query]")) {
    config.customQuery = target.value;
    persistState();
  }
});

createCardActions();
loadInitialState();
renderApp();
