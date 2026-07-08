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
const FINALISTS_ROUTE_LINES = [
  {
    id: "meghamalai",
    name: "Meghamalai",
    color: "#2f7f73",
    waypoints: [
      { name: "Chennai", coords: [13.0827, 80.2707] },
      { name: "Madurai", coords: [9.9252, 78.1198] },
      { name: "Meghamalai", coords: [9.694, 77.385] },
    ],
  },
  {
    id: "kemmanagundi",
    name: "Kemmanagundi",
    color: "#9b6641",
    waypoints: [
      { name: "Chennai", coords: [13.0827, 80.2707] },
      { name: "Bengaluru", coords: [12.9716, 77.5946] },
      { name: "Kemmanagundi", coords: [13.553, 75.7878] },
    ],
  },
];
const FINALISTS_STAY_CATALOG = {
  meghamalai: [
    {
      id: "belle-vie",
      name: "Belle Vie, By the Mountains, Kambalikandam, Munnar",
      location: "Kambilikandam / Meghamalai-side approach",
      typeLabel: "Farm stay in Kambilikandam",
      metaLabel: "4.96 · 2 bedrooms · 3 beds · 2 baths",
      guests: "5 guests",
      estimatedNightly: 5200,
      link: "https://www.airbnb.com/rooms/1520233427153696086",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1520233427153696086/original/d1e5711a-fef4-4873-9116-1e741b583ae5.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "The cleanest polished-group base if you want one tasteful shared stay with a proper mountain-view feel.",
    },
    {
      id: "agristays-ghat-hill",
      name: "Agristays @ The Ghat-Hill Bunglaw Homestay",
      location: "Kambilikandam / Munnar side",
      typeLabel: "Bungalow in Kambilikandam",
      metaLabel: "5.0 · 2 bedrooms · 6 beds · 2 baths",
      guests: "9 guests",
      estimatedNightly: 6100,
      link: "https://www.airbnb.com/rooms/1167251703430552120",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1167251703430552120/original/a086563d-5b1d-414f-80ae-6e7f1c1950e9.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A stronger stay-first option for a bigger group that wants the quieter rural side instead of a town-led base.",
    },
    {
      id: "munnar-balcony-2bhk",
      name: "2 BHK First Floor Stay with Balcony in Munnar",
      location: "Idukki / Munnar side transfer base",
      typeLabel: "Home in Idukki",
      metaLabel: "4.91 · 2 bedrooms · 2 beds · 2.5 baths",
      guests: "4 guests",
      estimatedNightly: 4600,
      link: "https://www.airbnb.com/rooms/675701284363225291",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-675701284363225291/original/7a9b4f04-d1bd-40af-be2d-15e4517ab168.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Practical if the group ends up a little smaller or wants a smoother arrival night before the scenic climb.",
    },
    {
      id: "mudhouse-marayoor",
      name: "Cob 1 by The Mudhouse Marayoor",
      location: "Marayoor / slower highlands detour",
      typeLabel: "Earthen home in Munnar",
      metaLabel: "4.85 · 1 bedroom · 1 bed · 1 bath",
      guests: "2 guests",
      estimatedNightly: 4300,
      link: "https://www.airbnb.com/rooms/23862260",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-23862260/original/e7ff02e3-92a0-442a-93fa-7477f5c95290.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Not the main full-group answer, but worth surfacing because the design language is excellent for a couple or split stay idea.",
    },
    {
      id: "mountscape-retreat",
      name: "Mountscape Retreat | Luxury Pool Villa",
      location: "Idukki highlands",
      typeLabel: "Villa in Idukki",
      metaLabel: "4.88 · 4 bedrooms · 4 beds · 3 baths",
      guests: "8 guests",
      estimatedNightly: 8200,
      link: "https://www.airbnb.com/rooms/861761467874815687",
      image:
        "https://a0.muscache.com/im/pictures/8a044245-0c01-4c85-9294-f9d96af578e5.jpg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "The premium pick if the group decides the trip should feel more villa-led than budget-led.",
    },
    {
      id: "mannoorfarms",
      name: "MannoorFarms: mountain stays",
      location: "Idukki Township",
      typeLabel: "Farm stay in Idukki",
      metaLabel: "4.83 · 1 bedroom · 1 bed · 1 bath",
      guests: "2 guests",
      estimatedNightly: 4700,
      link: "https://www.airbnb.com/rooms/38281216",
      image:
        "https://a0.muscache.com/im/pictures/60751e63-1de3-4b5e-834b-f8f7e86ebaf5.jpg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A more intimate mountain-farm stay that is useful if the travel party splits or the final group size drops sharply.",
    },
    {
      id: "thumpayil-villa",
      name: "Private 1 Bedroom Villa @Thumpayil Tea Plantation",
      location: "Idukki Township / tea estate belt",
      typeLabel: "Home in Idukki",
      metaLabel: "4.9 · 1 bedroom · 1 bed · 1 bath",
      guests: "2 guests",
      estimatedNightly: 5100,
      link: "https://www.airbnb.com/rooms/1654045356531811548",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1654045356531811548/original/d2410c78-ba2b-420e-ad22-2d7d371c234f.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A tea-plantation mood pick that fits the visual brief really well, even if it is not the main large-group option.",
    },
    {
      id: "lakefront-homestay",
      name: "Entire Lakefront Homestay Exclusively For You",
      location: "Kallarkutty / larger group base",
      typeLabel: "Farm stay in Kallarkutty",
      metaLabel: "4.85 · 5 bedrooms · 7 beds · 4 baths",
      guests: "12 guests",
      estimatedNightly: 7600,
      link: "https://www.airbnb.com/rooms/53330245",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-53330245/original/5c2768dd-ac61-484d-aa4f-b9453770c0c7.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "One of the more straightforward answers if you want to keep the whole group together in a single bigger property.",
    },
  ],
  kemmanagundi: [
    {
      id: "hegde-arabica",
      name: "Hegde Residency 2bhk Home(ARABICA) with balcony",
      location: "Chikmagalur town base",
      typeLabel: "Home in Chikmagalur",
      metaLabel: "4.94 · 2 bedrooms · 2 beds · 1.5 baths",
      guests: "6 guests",
      estimatedNightly: 4500,
      link: "https://www.airbnb.com/rooms/1362985265646033350",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1362985265646033350/original/5f8805b5-3f7a-4020-b890-0f3e1db5f7e2.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Still the cleanest execution-first answer if the group wants Kemmanagundi as the scenic objective and Chikmagalur as the reliable base.",
    },
    {
      id: "hegde-robusta",
      name: "Hegde Residency 2bhk Home(ROBUSTA) ground floor",
      location: "Chikmagalur town base",
      typeLabel: "Home in Chikmagalur",
      metaLabel: "4.67 · 2 bedrooms · 2 beds · 1 bath",
      guests: "4 guests",
      estimatedNightly: 3900,
      link: "https://www.airbnb.com/rooms/1185551590264589805",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1185551590264589805/original/adbc3e0b-31b9-44c7-9ed9-8ced33ca7374.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Lower-spend fallback for a smaller group or a backup if the balcony unit is already gone.",
    },
    {
      id: "home-chikmagalur",
      name: "Home - Chikmagalur",
      location: "Chikmagalur",
      typeLabel: "Rental unit in Chikmagalur",
      metaLabel: "5.0 · 2 bedrooms · 3 beds · 2 baths",
      guests: "4 guests",
      estimatedNightly: 4700,
      link: "https://www.airbnb.com/rooms/1245544710797087888",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1245544710797087888/original/43dafb28-2587-42fd-a964-3cdfbb7f370d.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A polished apartment-style option that keeps the local driving practical while still feeling upgraded.",
    },
    {
      id: "sanctum",
      name: "Sanctum Luxury Serviced Apartments",
      location: "Chikmagalur",
      typeLabel: "Serviced apartment in Chikmagalur",
      metaLabel: "4.87 · 2 bedrooms · 3 beds · 2 baths",
      guests: "6 guests",
      estimatedNightly: 5000,
      link: "https://www.airbnb.com/rooms/48855340",
      image:
        "https://a0.muscache.com/im/pictures/13c9055f-2a70-4ba4-83da-202209d84dbd.jpg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Good middle ground between apartment practicality and a slightly more premium shared-group feel.",
    },
    {
      id: "savi-service",
      name: "A 2 BHK flat Savi Service Apartment chikmagalur",
      location: "Chikkamagaluru",
      typeLabel: "Serviced apartment in Chikmagalur",
      metaLabel: "4.94 · 2 bedrooms · 2 beds · 3 baths",
      guests: "6 guests",
      estimatedNightly: 4600,
      link: "https://www.airbnb.com/rooms/1541387498172711491",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1541387498172711491/original/ffa54650-a6e4-4c75-b73b-b98144b9119e.png?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Useful when the group wants a clean apartment base with less uncertainty than a remote homestay.",
    },
    {
      id: "villa-chikkamagaluru",
      name: "Villa in chikkamagaluru",
      location: "Ulluvagilu / Chikkamagaluru region",
      typeLabel: "Home in Ulluvagilu",
      metaLabel: "4.89 · 2 bedrooms · 4 beds · 2 baths",
      guests: "8 guests",
      estimatedNightly: 6900,
      link: "https://www.airbnb.com/rooms/1408569359485573917",
      image:
        "https://a0.muscache.com/im/pictures/hosting/Hosting-1408569359485573917/original/572f7143-2b5e-459e-8904-53a1eb00ab98.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "One of the better-looking bigger-home options if the group decides it wants more private-space energy.",
    },
    {
      id: "fresh-breeze",
      name: "Fresh Breeze Homestay",
      location: "Chikmagalur",
      typeLabel: "Guesthouse in Chikmagalur",
      metaLabel: "4.65 · 1 bedroom · 3 beds · 1 bath",
      guests: "3 guests",
      estimatedNightly: 4100,
      link: "https://www.airbnb.com/rooms/21059713",
      image:
        "https://a0.muscache.com/im/pictures/3d7a9b73-f861-487c-95f0-1578237d695d.jpg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A simple budget-friendly stay to keep on the board if cost starts dominating the final decision.",
    },
    {
      id: "captains-bungalow",
      name: "The Captain's Bungalow",
      location: "Javali / broader Chikmagalur region",
      typeLabel: "Farm stay in Javali",
      metaLabel: "4.73 · 13 bedrooms · 33 beds · 13 baths",
      guests: "16+ guests",
      estimatedNightly: 8800,
      link: "https://www.airbnb.com/rooms/893155834284873893",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-893155834284873893/original/56148851-5739-49f0-80e7-68aa378d31b1.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "Worth showing because it handles a large group comfortably, even if it sits above the lighter budget lane.",
    },
    {
      id: "haven-villa",
      name: "Haven Villa, Chikmagalur",
      location: "Thoranamavu / scenic Chikmagalur side",
      typeLabel: "Villa in Thoranamavu",
      metaLabel: "4.84 · 2 bedrooms · 2 beds · 2 baths",
      guests: "4 guests",
      estimatedNightly: 7200,
      link: "https://www.airbnb.com/rooms/1182573072991701285",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-1182573072991701285/original/a0aa9d1c-8dad-4847-a201-06eb0b68edb5.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A stronger visual-aesthetic pick if the final group is smaller and wants a more composed villa setting.",
    },
    {
      id: "livingston-cottage",
      name: "Livingston homestay - Single Cottage with kitchen",
      location: "Chikkolale / near Chikkamagaluru",
      typeLabel: "Farm stay in Chikkolale",
      metaLabel: "4.8 · 1 bedroom · 2 beds · 1 bath",
      guests: "4 guests",
      estimatedNightly: 4300,
      link: "https://www.airbnb.com/rooms/46182646",
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-46182646/original/11b66b89-6233-4a7e-9cbb-da1e98c4e1ba.jpeg?im_w=720&width=720&quality=70&auto=webp",
      summary:
        "A quieter cottage-style fallback for a smaller group that wants plantation-side calm rather than town convenience.",
    },
  ],
};

const heroTripLengthValue = document.getElementById("heroTripLengthValue");
const heroTripLengthDecrease = document.getElementById("heroTripLengthDecrease");
const heroTripLengthIncrease = document.getElementById("heroTripLengthIncrease");
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
const openPlanTabButton = document.getElementById("openPlanTab");
const exploreTab = document.getElementById("exploreTab");
const compareTab = document.getElementById("compareTab");
const planTab = document.getElementById("planTab");
const compareTabCount = document.getElementById("compareTabCount");
const exploreShortlistPreview = document.getElementById("exploreShortlistPreview");
const exploreCompareButton = document.getElementById("exploreCompareButton");
const exploreShortlistHelp = document.getElementById("exploreShortlistHelp");
const compareAddSelect = document.getElementById("compareAddSelect");
const compareAddButton = document.getElementById("compareAddButton");
const compareHeroShortlist = document.getElementById("compareHeroShortlist");
const compareHeroCount = document.getElementById("compareHeroCount");
const shareComparePlanButton = document.getElementById("shareComparePlanButton");
const shareComparePlanStatus = document.getElementById("shareComparePlanStatus");
const shareComparePlanLink = document.getElementById("shareComparePlanLink");
const compareShortlistPills = document.getElementById("compareShortlistPills");
const compareTransportMode = document.getElementById("compareTransportMode");
const compareMapLegend = document.getElementById("compareMapLegend");
const compareCards = document.getElementById("compareCards");
const compareEmptyState = document.getElementById("compareEmptyState");
const compareMasterMapNote = document.getElementById("compareMasterMapNote");
const compareOverview = document.getElementById("compareOverview");
const finalistsMapNode = document.getElementById("finalistsMap");
const planBudgetMinInput = document.getElementById("planBudgetMin");
const planBudgetMaxInput = document.getElementById("planBudgetMax");
const planBudgetResetButton = document.getElementById("planBudgetReset");
const planBudgetMinValue = document.getElementById("planBudgetMinValue");
const planBudgetMaxValue = document.getElementById("planBudgetMaxValue");
const planBudgetSummary = document.getElementById("planBudgetSummary");
const meghamalaiStayList = document.getElementById("meghamalaiStayList");
const kemmanagundiStayList = document.getElementById("kemmanagundiStayList");

const cardNodes = Array.from(document.querySelectorAll(".destination-card[data-option-id]"));

let exploreMap;
let compareMasterMap;
let finalistsMap;
const compareCardMaps = new Map();
const compareCardMapLayers = new Map();
const finalistsMapLayers = [];
const geocodeCache = new Map();
const routeCache = new Map();
let sharePlanStatusMessage = "Copy a link to this exact compare setup.";
let sharePlanStatusTimeout;

let appState = createInitialState();

function createDefaultCompareConfig(optionId) {
  return {
    optionId,
    days: 4,
    nights: 3,
    groupSize: 6,
    pitStopMode: "none",
    pitStops: {
      going: [],
      coming: [],
    },
    customQuery: {
      going: "",
      coming: "",
    },
    searchResults: {
      going: [],
      coming: [],
    },
    searchMessage: {
      going: "",
      coming: "",
    },
    searchLoading: {
      going: false,
      coming: false,
    },
    manualBudget: 0,
    routeMessage: "",
    routeStats: null,
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
    compareTransport: "road",
    planBudgetMin: 3500,
    planBudgetMax: 9000,
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
      pitStops: config.pitStops,
      manualBudget: config.manualBudget,
    };
  });

  return {
    activeTab: appState.activeTab,
    filters: appState.filters,
    selectedOptionId: appState.selectedOptionId,
    compareTransport: appState.compareTransport,
    planBudgetMin: appState.planBudgetMin,
    planBudgetMax: appState.planBudgetMax,
    shortlist: compare,
  };
}

function applyPersistedState(payload) {
  if (!payload || typeof payload !== "object") {
    return;
  }

  appState.activeTab = ["compare", "plan"].includes(payload.activeTab) ? payload.activeTab : "explore";
  appState.filters.nights = payload.filters?.nights === 2 ? 2 : 3;
  appState.filters.style = ["balanced", "budget", "cooler", "easy"].includes(payload.filters?.style)
    ? payload.filters.style
    : "balanced";
  appState.selectedOptionId = optionMap.has(payload.selectedOptionId)
    ? payload.selectedOptionId
    : "meghamalai";
  appState.compareTransport = payload.compareTransport === "train" ? "train" : "road";
  appState.planBudgetMin = clampNumber(payload.planBudgetMin, 3000, 12000, 3500);
  appState.planBudgetMax = clampNumber(payload.planBudgetMax, 3000, 12000, 9000);

  if (Array.isArray(payload.shortlist)) {
    payload.shortlist.slice(0, 3).forEach((item) => {
      if (!optionMap.has(item.optionId)) {
        return;
      }

      const migratedStops = {
        going: [],
        coming: [],
      };

      if (item.pitStops?.going?.length || item.pitStops?.coming?.length) {
        migratedStops.going = sanitizeStops(item.pitStops.going);
        migratedStops.coming = sanitizeStops(item.pitStops.coming);
      } else if (item.selectedStop && typeof item.selectedStop.name === "string") {
        const migratedStop = sanitizeStops([item.selectedStop])[0];
        if (migratedStop) {
          if (item.pitStopMode === "going" || item.pitStopMode === "both") {
            migratedStops.going = [migratedStop];
          }
          if (item.pitStopMode === "coming" || item.pitStopMode === "both") {
            migratedStops.coming = [migratedStop];
          }
        }
      }

      appState.shortlist.push(item.optionId);
      appState.compareConfigs[item.optionId] = {
        ...createDefaultCompareConfig(item.optionId),
        days: clampNumber(item.days, 3, 10, 4),
        nights: clampNumber(item.nights, 2, 9, 3),
        groupSize: clampNumber(item.groupSize, 5, 7, 6),
        pitStopMode: ["none", "going", "coming", "both"].includes(item.pitStopMode)
          ? item.pitStopMode
          : "none",
        pitStops: migratedStops,
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
  params.set("transport", appState.compareTransport);
  params.set("planMin", String(appState.planBudgetMin));
  params.set("planMax", String(appState.planBudgetMax));
  params.set("compare", encodeURIComponent(JSON.stringify(getPersistableState().shortlist)));
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", nextUrl);
}

function buildShareablePlanUrl() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams();
  const currentParams = new URLSearchParams(window.location.search);

  if (currentParams.has("t")) {
    params.set("t", currentParams.get("t"));
  }
  if (currentParams.has("v")) {
    params.set("v", currentParams.get("v"));
  }

  params.set("tab", "compare");
  params.set("nights", String(appState.filters.nights));
  params.set("style", appState.filters.style);
  params.set("selected", appState.selectedOptionId);
  params.set("transport", appState.compareTransport);
  params.set("planMin", String(appState.planBudgetMin));
  params.set("planMax", String(appState.planBudgetMax));
  params.set("compare", encodeURIComponent(JSON.stringify(getPersistableState().shortlist)));
  url.search = params.toString();
  return url.toString();
}

function setSharePlanStatus(message) {
  sharePlanStatusMessage = message;
  if (shareComparePlanStatus) {
    shareComparePlanStatus.textContent = message;
  }

  if (sharePlanStatusTimeout) {
    window.clearTimeout(sharePlanStatusTimeout);
  }

  if (message !== "Copy a link to this exact compare setup.") {
    sharePlanStatusTimeout = window.setTimeout(() => {
      sharePlanStatusMessage = "Copy a link to this exact compare setup.";
      if (shareComparePlanStatus) {
        shareComparePlanStatus.textContent = sharePlanStatusMessage;
      }
    }, 2600);
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!copied) {
    throw new Error("Copy not available");
  }

  return true;
}

function decodeStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const urlState = createInitialState();
  urlState.activeTab = ["compare", "plan"].includes(params.get("tab")) ? params.get("tab") : "explore";
  urlState.filters.nights = params.get("nights") === "2" ? 2 : 3;
  urlState.filters.style = params.get("style") || "balanced";
  urlState.selectedOptionId = params.get("selected") || "meghamalai";
  urlState.compareTransport = params.get("transport") === "train" ? "train" : "road";
  urlState.planBudgetMin = clampNumber(params.get("planMin"), 3000, 12000, 3500);
  urlState.planBudgetMax = clampNumber(params.get("planMax"), 3000, 12000, 9000);

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

  if (hasUrlCompare || fromUrl.activeTab !== "explore" || fromUrl.selectedOptionId !== "meghamalai") {
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

function formatInr(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

function normalizePlanBudgetRange() {
  if (appState.planBudgetMin > appState.planBudgetMax) {
    const swap = appState.planBudgetMin;
    appState.planBudgetMin = appState.planBudgetMax;
    appState.planBudgetMax = swap;
  }
}

function sanitizeStops(stops) {
  if (!Array.isArray(stops)) return [];
  return stops
    .map((stop) => {
      const lat = Number(stop.lat ?? stop.coords?.[0]);
      const lng = Number(stop.lng ?? stop.coords?.[1]);
      if (!Number.isFinite(lat) || !Number.isFinite(lng) || typeof stop.name !== "string") {
        return null;
      }
      return {
        name: stop.name,
        lat,
        lng,
        label: typeof stop.label === "string" ? stop.label : stop.name,
      };
    })
    .filter(Boolean);
}

function getActiveDirections(mode) {
  if (mode === "both") return ["going", "coming"];
  if (mode === "going" || mode === "coming") return [mode];
  return [];
}

function getDirectionLabel(direction) {
  return direction === "going" ? "while going" : "while coming back";
}

function getStopsForDirection(config, direction) {
  return sanitizeStops(config?.pitStops?.[direction] || []);
}

function rankOptions(style, nights) {
  const order = rankMatrix[nights]?.[style] || rankMatrix[3].balanced;
  return order.map((id) => optionMap.get(id)).filter(Boolean);
}

function setActiveTab(tabId) {
  appState.activeTab = ["compare", "plan"].includes(tabId) ? tabId : "explore";
  const isCompare = appState.activeTab === "compare";
  const isPlan = appState.activeTab === "plan";
  exploreTab.hidden = isCompare || isPlan;
  compareTab.hidden = !isCompare;
  planTab.hidden = !isPlan;
  exploreTab.classList.toggle("is-active", appState.activeTab === "explore");
  compareTab.classList.toggle("is-active", isCompare);
  planTab.classList.toggle("is-active", isPlan);
  openExploreTabButton.classList.toggle("is-active", appState.activeTab === "explore");
  openCompareTabButton.classList.toggle("is-active", isCompare);
  openPlanTabButton.classList.toggle("is-active", isPlan);
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

  if (isPlan) {
    requestAnimationFrame(() => {
      ensureFinalistsMap();
      renderFinalistsMap();
    });
    window.setTimeout(() => {
      finalistsMap?.invalidateSize();
      renderFinalistsMap();
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
  const stopCount = getTotalPitStopCount(config);
  if (!stopCount) {
    return { low: 0, high: 0 };
  }

  return {
    low: stopCount * 1400,
    high: stopCount * 2200,
  };
}

function getTotalPitStopCount(config) {
  return getActiveDirections(config.pitStopMode).reduce(
    (sum, direction) => sum + getStopsForDirection(config, direction).length,
    0
  );
}

function validateCompareConfig(config) {
  const stopCount = getTotalPitStopCount(config);
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

  for (const direction of getActiveDirections(config.pitStopMode)) {
    if (!getStopsForDirection(config, direction).length) {
      return `Add at least one resolvable pit stop ${getDirectionLabel(direction)} before finalizing this plan.`;
    }
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

  const itinerary = [];
  const outboundStops = getStopsForDirection(config, "going");
  const returnStops = getStopsForDirection(config, "coming");
  const destinationSlots = config.days - 2 - getTotalPitStopCount(config);
  const middleTemplates = option.days.slice(1, option.days.length - 1);

  if (outboundStops.length) {
    itinerary.push({
      chip: "Day 1",
      title: `Depart Chennai and pause in ${outboundStops[0].name}`,
      body: `${outboundStops[0].name} becomes a deliberate stopover rather than a rushed transfer. Use the day for check-in, a proper meal, and a quieter start before the hill approach.`,
    });

    outboundStops.slice(1).forEach((stop, index) => {
      const previous = outboundStops[index];
      itinerary.push({
        chip: `Day ${itinerary.length + 1}`,
        title: `Continue from ${previous.name} and stop in ${stop.name}`,
        body: `${stop.name} becomes another deliberate pause on the outward route, which keeps the trip spacious instead of turning it into a hard transfer day.`,
      });
    });

    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: `Continue from ${outboundStops[outboundStops.length - 1].name} to ${option.name}`,
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

  if (returnStops.length) {
    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: `Leave ${option.name} and stop in ${returnStops[0].name}`,
      body: `Keep the departure from the hills easy, then convert ${returnStops[0].name} into a proper stopover day rather than a late-night rush back to Chennai.`,
    });

    returnStops.slice(1).forEach((stop, index) => {
      const previous = returnStops[index];
      itinerary.push({
        chip: `Day ${itinerary.length + 1}`,
        title: `Continue from ${previous.name} and stop in ${stop.name}`,
        body: `${stop.name} becomes another full return-side pause, which helps the trip stay unhurried even on the way back.`,
      });
    });

    itinerary.push({
      chip: `Day ${itinerary.length + 1}`,
      title: `Return from ${returnStops[returnStops.length - 1].name} to Chennai`,
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

function renderExploreTripLengthControl() {
  const days = appState.filters.nights + 1;
  heroTripLengthValue.textContent = `${days} days / ${appState.filters.nights} nights`;
  heroTripLengthDecrease.disabled = appState.filters.nights <= 2;
  heroTripLengthIncrease.disabled = appState.filters.nights >= 3;
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
  renderExploreTripLengthControl();
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

function renderCompareHeroShortlist() {
  compareHeroCount.textContent = `${appState.shortlist.length} selected`;
  compareHeroShortlist.innerHTML = appState.shortlist.length
    ? appState.shortlist
        .map((optionId) => {
          const option = optionMap.get(optionId);
          return `<button type="button" class="compare-chip compare-chip-removable" data-shortlist-remove="${optionId}">
            <span>${option.name}</span>
            <span aria-hidden="true">×</span>
          </button>`;
        })
        .join("")
    : `<span class="shortlist-placeholder">No destinations selected yet</span>`;

  shareComparePlanButton.disabled = appState.shortlist.length === 0;
  shareComparePlanStatus.textContent = sharePlanStatusMessage;
  shareComparePlanLink.value = appState.shortlist.length ? buildShareablePlanUrl() : "";
  shareComparePlanLink.hidden = appState.shortlist.length === 0;
}

function renderCompareShortlistPills() {
  compareTransportMode.value = appState.compareTransport;
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

function buildStopSuggestionsMarkup(config, option, direction) {
  const selectedNames = new Set(getStopsForDirection(config, direction).map((stop) => stop.name));
  return option.pitStops
    .map((stop) => {
      const isSelected = selectedNames.has(stop.name);
      return `<button type="button" class="stop-chip ${isSelected ? "is-active" : ""}" data-stop-name="${stop.name}" data-option-id="${option.id}" data-stop-direction="${direction}">
        ${stop.name}
      </button>`;
    })
    .join("");
}

function buildSelectedStopsMarkup(config, optionId, direction) {
  const selectedStops = getStopsForDirection(config, direction);
  if (!selectedStops.length) {
    return `<p class="resolved-stop">No stops chosen ${getDirectionLabel(direction)} yet.</p>`;
  }

  return `<div class="selected-stop-list">
    ${selectedStops
      .map(
        (stop, index) => `<button type="button" class="selected-stop-chip" data-remove-stop="${optionId}" data-stop-direction="${direction}" data-stop-index="${index}">
          <span>${stop.name}</span>
          <span aria-hidden="true">×</span>
        </button>`
      )
      .join("")}
  </div>`;
}

function buildPitStopSection(config, option, direction) {
  const searchResults = config.searchResults[direction] || [];
  const searchMessage = config.searchMessage[direction] || "";
  const searchLoading = config.searchLoading[direction] || false;
  const customQuery = config.customQuery[direction] || "";

  return `<section class="pit-stop-direction-card">
    <div class="pit-stop-direction-header">
      <div>
        <p class="section-label">Pit stop ${getDirectionLabel(direction)}</p>
        <h4>Choose one or more stops</h4>
      </div>
      ${getStopsForDirection(config, direction).length ? `<button type="button" class="ghost-button" data-clear-direction="${option.id}" data-stop-direction="${direction}">Clear</button>` : ""}
    </div>
    ${buildSelectedStopsMarkup(config, option.id, direction)}
    <div class="stop-chip-row">
      ${buildStopSuggestionsMarkup(config, option, direction)}
    </div>
    <div class="custom-stop-row">
      <input type="text" placeholder="Search a custom city or town in India" value="${customQuery}" data-custom-query="${option.id}" data-stop-direction="${direction}" />
      <button type="button" class="button button-secondary" data-search-stop="${option.id}" data-stop-direction="${direction}">
        ${searchLoading ? "Searching..." : "Resolve"}
      </button>
    </div>
    ${searchMessage ? `<p class="field-message">${searchMessage}</p>` : ""}
    ${
      searchResults.length
        ? `<div class="search-results">
          ${searchResults
            .map(
              (result, index) => `<button type="button" class="search-result" data-pick-search="${option.id}" data-stop-direction="${direction}" data-result-index="${index}">
                <strong>${result.name}</strong>
                <span>${result.label}</span>
              </button>`
            )
            .join("")}
        </div>`
        : ""
    }
  </section>`;
}

function formatWaypointSequence(waypoints) {
  return waypoints.map((waypoint) => waypoint.name).join(" → ");
}

function buildRouteLegSummary(config) {
  const stats = config.routeStats;
  if (!stats?.legs?.length) {
    return `<p class="route-message">${config.routeMessage || "Use refresh if the route map needs another render pass."}</p>`;
  }

  return `<div class="route-leg-list">
    ${stats.legs
      .map(
        (leg) => `<div class="route-leg">
          <strong>${leg.from} → ${leg.to}</strong>
          <span>${leg.label}</span>
        </div>`
      )
      .join("")}
    <p class="route-total">Total by road: ${stats.totalLabel}</p>
  </div>`;
}

function updateRouteDetails(optionId) {
  const slot = document.getElementById(`routeDetails-${optionId}`);
  const config = appState.compareConfigs[optionId];
  if (!slot || !config) return;
  slot.innerHTML = buildRouteLegSummary(config);
}

function buildCompareCard(config) {
  const option = optionMap.get(config.optionId);
  const estimate = computeEstimate(option, config.nights, config.groupSize);
  const stopUplift = computePitStopUplift(config);
  const manualBudget = Number(config.manualBudget) || 0;
  const finalLow = estimate.low + stopUplift.low + manualBudget;
  const finalHigh = estimate.high + stopUplift.high + manualBudget;
  const itinerary = buildCompareItinerary(option, config);
  const waypoints = getRouteWaypoints(config);
  const showPitStops = config.pitStopMode !== "none";
  const directions = getActiveDirections(config.pitStopMode);

  return `
    <article class="compare-card" data-compare-card="${option.id}">
      <div class="compare-card-header">
        <div>
          <p class="section-label">Planner</p>
          <h3>${option.name}</h3>
          <p class="compare-card-route">${formatWaypointSequence(waypoints)}</p>
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
          <span>Base ${estimate.low.toLocaleString()} - ${estimate.high.toLocaleString()} · Stops ${stopUplift.low.toLocaleString()} - ${stopUplift.high.toLocaleString()} · Manual ${manualBudget.toLocaleString()}</span>
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

      ${
        showPitStops
          ? `<div class="compare-stopover-panel">
              <div class="compare-stopover-header">
                <div>
                  <p class="section-label">Pit stops</p>
                  <h4>Use suggested stops or resolve custom places</h4>
                </div>
              </div>
              <div class="pit-stop-direction-grid">
                ${directions.map((direction) => buildPitStopSection(config, option, direction)).join("")}
              </div>
            </div>`
          : ""
      }

      <div class="compare-card-body">
        <div class="route-panel" data-route-panel="${option.id}">
          <div class="route-panel-header">
            <div>
              <p class="section-label">Route map</p>
              <h4>${option.name} route</h4>
            </div>
            <div class="route-panel-actions">
              <button type="button" class="ghost-button" data-refresh-route="${option.id}">Refresh</button>
              <button type="button" class="ghost-button" data-fullscreen-route="${option.id}">Full screen</button>
            </div>
          </div>
          <div class="trip-map compare-route-map" id="routeMap-${option.id}"></div>
          <div class="route-detail-slot" id="routeDetails-${option.id}">${buildRouteLegSummary(config)}</div>
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

function resetCompareCardMaps() {
  compareCardMaps.forEach((map) => map.remove());
  compareCardMaps.clear();
  compareCardMapLayers.forEach((_, key) => {
    if (key !== "master") {
      compareCardMapLayers.delete(key);
    }
  });
}

function renderCompareCards() {
  resetCompareCardMaps();
  compareCards.className = `section compare-grid compare-grid-${Math.max(1, appState.shortlist.length)}`;
  compareCards.innerHTML = appState.shortlist.map((optionId) => buildCompareCard(appState.compareConfigs[optionId])).join("");
}

function renderCompareTab() {
  renderCompareAddSelect();
  renderCompareHeroShortlist();
  renderCompareShortlistPills();
  renderCompareEmptyState();
  if (!compareEmptyState.hidden) {
    compareMasterMapNote.textContent = "Add a destination to see route comparisons here.";
    compareMapLegend.innerHTML = "";
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
  const destination = { name: option.name, coords: option.coords };
  const outboundStops = getStopsForDirection(config, "going").map((stop) => ({
    name: stop.name,
    coords: [stop.lat, stop.lng],
  }));
  const returnStops = getStopsForDirection(config, "coming").map((stop) => ({
    name: stop.name,
    coords: [stop.lat, stop.lng],
  }));

  return [CHENNAI, ...outboundStops, destination, ...returnStops, CHENNAI];
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

function haversineKm(start, end) {
  const toRad = (value) => (value * Math.PI) / 180;
  const [lat1, lon1] = start;
  const [lat2, lon2] = end;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDurationHours(hours) {
  const totalMinutes = Math.max(1, Math.round(hours * 60));
  const wholeHours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (!wholeHours) return `${minutes} min`;
  if (!minutes) return `${wholeHours} hr`;
  return `${wholeHours} hr ${minutes} min`;
}

function buildFallbackRoute(waypoints, mode) {
  const speed = mode === "train" ? 52 : 40;
  const legs = [];
  let totalDistance = 0;
  let totalHours = 0;

  waypoints.slice(0, -1).forEach((waypoint, index) => {
    const nextWaypoint = waypoints[index + 1];
    const distanceKm = haversineKm(waypoint.coords, nextWaypoint.coords) * (mode === "train" ? 1.18 : 1.28);
    const durationHours = distanceKm / speed;
    totalDistance += distanceKm;
    totalHours += durationHours;
    legs.push({
      from: waypoint.name,
      to: nextWaypoint.name,
      distanceKm,
      durationHours,
      label: `${Math.round(distanceKm)} km · ${formatDurationHours(durationHours)}`,
    });
  });

  return {
    geometry: {
      type: "LineString",
      coordinates: waypoints.map((waypoint) => [waypoint.coords[1], waypoint.coords[0]]),
    },
    legs,
    distanceKm: totalDistance,
    durationHours: totalHours,
    totalLabel: `${Math.round(totalDistance)} km · ${formatDurationHours(totalHours)}`,
    mode,
  };
}

async function fetchRouteForWaypoints(waypoints, mode = "road") {
  const key = `${mode}:${waypoints.map((waypoint) => waypoint.coords.join(",")).join("|")}`;
  if (routeCache.has(key)) {
    return routeCache.get(key);
  }

  if (mode === "train") {
    const fallbackRoute = buildFallbackRoute(waypoints, "train");
    routeCache.set(key, fallbackRoute);
    return fallbackRoute;
  }

  const coordinateString = waypoints.map((waypoint) => `${waypoint.coords[1]},${waypoint.coords[0]}`).join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coordinateString}?overview=full&geometries=geojson&steps=false`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable to load route");
  }

  const data = await response.json();
  const routeData = data.routes?.[0];
  if (!routeData?.geometry) {
    throw new Error("Unable to load route");
  }

  const route = {
    geometry: routeData.geometry,
    legs: (routeData.legs || []).map((leg, index) => ({
      from: waypoints[index].name,
      to: waypoints[index + 1].name,
      distanceKm: leg.distance / 1000,
      durationHours: leg.duration / 3600,
      label: `${Math.round(leg.distance / 1000)} km · ${formatDurationHours(leg.duration / 3600)}`,
    })),
    distanceKm: routeData.distance / 1000,
    durationHours: routeData.duration / 3600,
    totalLabel: `${Math.round(routeData.distance / 1000)} km · ${formatDurationHours(routeData.duration / 3600)}`,
    mode,
  };
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
    marker
      .addTo(map)
      .bindPopup(`<strong>${waypoint.name}</strong>`)
      .bindTooltip(waypoint.name, { permanent: true, direction: "top", offset: [0, -10] });
    addTrackedLayer(map, optionId, marker);
    bounds.push(waypoint.coords);
  });

  try {
    const route = await fetchRouteForWaypoints(waypoints, "road");
    config.routeStats = route;
    config.routeMessage = "";
    if (route?.geometry) {
      const polyline = window.L.geoJSON(route.geometry, {
        style: {
          color: "#2d6eaf",
          weight: 4,
          opacity: 0.8,
        },
      }).addTo(map);
      addTrackedLayer(map, optionId, polyline);
    }
  } catch {
    config.routeStats = buildFallbackRoute(waypoints, "road");
    config.routeMessage = "Route service did not return a full path, but the stop sequence is still valid.";
  }

  map.fitBounds(bounds, { padding: [24, 24] });
  requestAnimationFrame(() => map.invalidateSize());
  window.setTimeout(() => map.invalidateSize(), 150);
  updateRouteDetails(optionId);
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
  const legendMarkup = [];

  for (const [index, optionId] of appState.shortlist.entries()) {
    const config = appState.compareConfigs[optionId];
    const option = optionMap.get(optionId);
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
        marker
          .addTo(compareMasterMap)
          .bindPopup(`<strong>${waypoint.name}</strong>`)
          .bindTooltip(waypoint.name, { permanent: true, direction: "top", offset: [0, -8] });
        addTrackedLayer(compareMasterMap, "master", marker);
        masterBounds.push(waypoint.coords);
      });

      try {
        const route = await fetchRouteForWaypoints(waypoints, appState.compareTransport);
        if (route?.geometry) {
          const polyline = window.L.geoJSON(route.geometry, {
            style: {
              color: palette[index % palette.length],
              weight: 4,
              opacity: 0.75,
              dashArray: appState.compareTransport === "train" ? "10 8" : "",
            },
          }).addTo(compareMasterMap);
          addTrackedLayer(compareMasterMap, "master", polyline);
          legendMarkup.push(`<div class="route-legend-item">
            <span class="route-legend-swatch" style="--legend-color:${palette[index % palette.length]}"></span>
            <div>
              <strong>${option.name}</strong>
              <span>${appState.compareTransport === "train" ? "Train-style" : "Road"} · ${route.totalLabel}</span>
            </div>
          </div>`);
        }
      } catch {
        summaries.push(`${option.name}: route line unavailable`);
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
    : `${appState.compareTransport === "train" ? "Train-style" : "Road"} route view from Chennai across only the shortlisted destinations.`;
  compareMapLegend.innerHTML = legendMarkup.join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getFilteredFinalistStays(destinationId) {
  normalizePlanBudgetRange();
  return (FINALISTS_STAY_CATALOG[destinationId] || [])
    .filter(
      (stay) =>
        stay.estimatedNightly >= appState.planBudgetMin &&
        stay.estimatedNightly <= appState.planBudgetMax
    )
    .sort((a, b) => a.estimatedNightly - b.estimatedNightly);
}

function buildFinalistStayCard(stay) {
  return `
    <article class="stay-card stay-card-rich">
      <img class="stay-card-image" src="${escapeHtml(stay.image)}" alt="${escapeHtml(stay.name)}" loading="lazy" />
      <div>
        <div class="stay-card-topline">
          <div>
            <h4>${escapeHtml(stay.name)}</h4>
            <p class="stay-card-subline">${escapeHtml(stay.typeLabel)} · ${escapeHtml(stay.location)}</p>
          </div>
          <div class="stay-card-price">
            <span class="fact-label">Estimated nightly</span>
            <strong>${escapeHtml(formatInr(stay.estimatedNightly))}</strong>
          </div>
        </div>
        <p>${escapeHtml(stay.summary)}</p>
        <div class="stay-card-badges">
          <span class="stay-badge">${escapeHtml(stay.guests)}</span>
          <span class="stay-badge">${escapeHtml(stay.metaLabel)}</span>
        </div>
        <a class="text-link" href="${escapeHtml(stay.link)}" target="_blank" rel="noreferrer">Open Airbnb listing</a>
      </div>
    </article>
  `;
}

function renderFinalistStayList(destinationId, node) {
  if (!node) return 0;
  const matches = getFilteredFinalistStays(destinationId);
  if (!matches.length) {
    node.innerHTML = `
      <div class="stay-empty">
        No Airbnb options are inside this budget band right now. Widen the slider range to bring back more properties.
      </div>
    `;
    return 0;
  }

  node.innerHTML = matches.map((stay) => buildFinalistStayCard(stay)).join("");
  return matches.length;
}

function updatePlanBudgetUi() {
  normalizePlanBudgetRange();
  if (planBudgetMinInput) {
    planBudgetMinInput.value = String(appState.planBudgetMin);
  }
  if (planBudgetMaxInput) {
    planBudgetMaxInput.value = String(appState.planBudgetMax);
  }
  if (planBudgetMinValue) {
    planBudgetMinValue.textContent = formatInr(appState.planBudgetMin);
  }
  if (planBudgetMaxValue) {
    planBudgetMaxValue.textContent = formatInr(appState.planBudgetMax);
  }
}

function renderFinalistsTab() {
  updatePlanBudgetUi();
  const meghCount = renderFinalistStayList("meghamalai", meghamalaiStayList);
  const kemCount = renderFinalistStayList("kemmanagundi", kemmanagundiStayList);

  if (planBudgetSummary) {
    planBudgetSummary.textContent = `Showing ${meghCount + kemCount} Airbnb options across the two finalists whose estimated nightly stay price falls between ${formatInr(
      appState.planBudgetMin
    )} and ${formatInr(appState.planBudgetMax)}.`;
  }
}

function ensureFinalistsMap() {
  if (finalistsMap || typeof window.L === "undefined" || !finalistsMapNode) {
    return;
  }

  finalistsMap = window.L.map(finalistsMapNode, {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  window.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(finalistsMap);
}

function clearFinalistsMap() {
  finalistsMapLayers.splice(0).forEach((layer) => finalistsMap?.removeLayer(layer));
}

function renderFinalistsMap() {
  if (!finalistsMap) return;
  clearFinalistsMap();

  const bounds = [];
  const chennaiMarker = window.L.circleMarker(CHENNAI.coords, {
    radius: 7,
    color: "#102f2c",
    weight: 2,
    fillColor: "#102f2c",
    fillOpacity: 1,
  })
    .addTo(finalistsMap)
    .bindTooltip("Chennai", { permanent: true, direction: "top", offset: [0, -10] });
  finalistsMapLayers.push(chennaiMarker);
  bounds.push(CHENNAI.coords);

  FINALISTS_ROUTE_LINES.forEach((route) => {
    const polyline = window.L.polyline(
      route.waypoints.map((waypoint) => waypoint.coords),
      {
        color: route.color,
        weight: 4,
        opacity: 0.82,
      }
    ).addTo(finalistsMap);
    finalistsMapLayers.push(polyline);

    route.waypoints.slice(1).forEach((waypoint, index) => {
      const marker = window.L.circleMarker(waypoint.coords, {
        radius: index === route.waypoints.length - 2 ? 7 : 5,
        color: route.color,
        weight: 2,
        fillColor: route.color,
        fillOpacity: 0.92,
      })
        .addTo(finalistsMap)
        .bindTooltip(waypoint.name, { permanent: true, direction: "top", offset: [0, -10] });
      finalistsMapLayers.push(marker);
      bounds.push(waypoint.coords);
    });
  });

  finalistsMap.fitBounds(bounds, { padding: [28, 28] });
  requestAnimationFrame(() => finalistsMap.invalidateSize());
}

async function searchCustomStop(optionId, direction) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  const query = config.customQuery[direction].trim();
  if (!query) {
    config.searchMessage[direction] = "Type a place name first.";
    renderCompareTab();
    return;
  }

  config.searchLoading[direction] = true;
  config.searchMessage[direction] = "";
  config.searchResults[direction] = [];
  renderCompareTab();

  try {
    const results = await geocodePlace(query);
    config.searchLoading[direction] = false;
    if (!results.length) {
      config.searchMessage[direction] = "No resolvable stop found. Try a nearby city or town name instead.";
    } else {
      config.searchMessage[direction] = "Choose one of the closest resolvable matches below.";
      config.searchResults[direction] = results;
    }
  } catch (error) {
    config.searchLoading[direction] = false;
    config.searchMessage[direction] = error instanceof Error ? error.message : "Unable to resolve that stop.";
  }

  persistState();
  renderCompareTab();
}

function pickResolvedStop(optionId, direction, stop) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  const selectedStops = getStopsForDirection(config, direction);
  if (selectedStops.some((item) => item.name === stop.name)) {
    return;
  }
  config.pitStops[direction] = [
    ...selectedStops,
    {
      name: stop.name,
      lat: stop.lat ?? stop.coords?.[0],
      lng: stop.lng ?? stop.coords?.[1],
      label: stop.label || stop.note || stop.name,
    },
  ];
  config.searchMessage[direction] = "";
  config.searchResults[direction] = [];
  config.customQuery[direction] = "";
  persistState();
  renderCompareTab();
}

function removeResolvedStop(optionId, direction, stopIndex) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  config.pitStops[direction] = getStopsForDirection(config, direction).filter((_, index) => index !== stopIndex);
  persistState();
  renderCompareTab();
}

function clearPitStopDirection(optionId, direction) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  config.pitStops[direction] = [];
  config.searchResults[direction] = [];
  config.searchMessage[direction] = "";
  config.customQuery[direction] = "";
  persistState();
  renderCompareTab();
}

function clearPitStop(optionId) {
  const config = appState.compareConfigs[optionId];
  if (!config) return;
  config.pitStops = {
    going: [],
    coming: [],
  };
  config.searchResults = {
    going: [],
    coming: [],
  };
  config.searchMessage = {
    going: "",
    coming: "",
  };
  config.customQuery = {
    going: "",
    coming: "",
  };
  config.pitStopMode = "none";
  persistState();
  renderCompareTab();
}

function toggleRoutePanelFullscreen(optionId) {
  const panel = document.querySelector(`[data-route-panel="${optionId}"]`);
  if (!(panel instanceof HTMLElement)) return;
  if (document.fullscreenElement === panel) {
    document.exitFullscreen?.();
    return;
  }
  if (panel.requestFullscreen) {
    panel.requestFullscreen().catch(() => {
      panel.classList.toggle("is-expanded");
      window.setTimeout(() => renderCompareRoute(optionId), 80);
    });
    return;
  }
  panel.classList.toggle("is-expanded");
  window.setTimeout(() => renderCompareRoute(optionId), 80);
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
  renderFinalistsTab();
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

compareHeroShortlist.addEventListener("click", (event) => {
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
openPlanTabButton.addEventListener("click", () => setActiveTab("plan"));

planBudgetMinInput?.addEventListener("input", () => {
  appState.planBudgetMin = clampNumber(planBudgetMinInput.value, 3000, 12000, appState.planBudgetMin);
  normalizePlanBudgetRange();
  persistState();
  renderFinalistsTab();
});

planBudgetMaxInput?.addEventListener("input", () => {
  appState.planBudgetMax = clampNumber(planBudgetMaxInput.value, 3000, 12000, appState.planBudgetMax);
  normalizePlanBudgetRange();
  persistState();
  renderFinalistsTab();
});

planBudgetResetButton?.addEventListener("click", () => {
  appState.planBudgetMin = 3500;
  appState.planBudgetMax = 9000;
  persistState();
  renderFinalistsTab();
});

function adjustExploreTripLength(delta) {
  appState.filters.nights = clampNumber(appState.filters.nights + delta, 2, 3, appState.filters.nights);
  appState.manualSelection = false;
  persistState();
  renderExploreTab();
}

heroTripLengthDecrease.addEventListener("click", () => adjustExploreTripLength(-1));
heroTripLengthIncrease.addEventListener("click", () => adjustExploreTripLength(1));

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

shareComparePlanButton.addEventListener("click", async () => {
  if (!appState.shortlist.length) {
    setSharePlanStatus("Add at least one destination before sharing.");
    return;
  }

  const shareUrl = buildShareablePlanUrl();

  try {
    await copyTextToClipboard(shareUrl);
    shareComparePlanLink.select();
    setSharePlanStatus("Share link copied. Your friends will open the same compare plan.");
  } catch {
    shareComparePlanLink.focus();
    shareComparePlanLink.select();
    setSharePlanStatus("Copy failed. You can still share the current page URL manually.");
  }
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

compareTransportMode.addEventListener("change", () => {
  appState.compareTransport = compareTransportMode.value === "train" ? "train" : "road";
  persistState();
  renderCompareTab();
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
      const bounds = key === "days" ? [3, 10] : [2, 9];
      config[key] = clampNumber(config[key] + delta, bounds[0], bounds[1], config[key]);
      persistState();
      renderCompareTab();
    }
    return;
  }

  const stopButton = target.closest("[data-stop-name]");
  if (stopButton) {
    const optionId = stopButton.dataset.optionId;
    const direction = stopButton.dataset.stopDirection;
    const option = optionMap.get(optionId);
    const stop = option?.pitStops.find((item) => item.name === stopButton.dataset.stopName);
    if (stop && direction) {
      pickResolvedStop(optionId, direction, stop);
    }
    return;
  }

  const clearStopButton = target.closest("[data-clear-stop]");
  if (clearStopButton) {
    clearPitStop(clearStopButton.dataset.clearStop);
    return;
  }

  const clearDirectionButton = target.closest("[data-clear-direction]");
  if (clearDirectionButton) {
    clearPitStopDirection(clearDirectionButton.dataset.clearDirection, clearDirectionButton.dataset.stopDirection);
    return;
  }

  const removeStopButton = target.closest("[data-remove-stop]");
  if (removeStopButton) {
    removeResolvedStop(
      removeStopButton.dataset.removeStop,
      removeStopButton.dataset.stopDirection,
      Number(removeStopButton.dataset.stopIndex)
    );
    return;
  }

  const pickSearchButton = target.closest("[data-pick-search]");
  if (pickSearchButton) {
    const optionId = pickSearchButton.dataset.pickSearch;
    const direction = pickSearchButton.dataset.stopDirection;
    const index = Number(pickSearchButton.dataset.resultIndex);
    const config = appState.compareConfigs[optionId];
    const result = config?.searchResults[direction]?.[index];
    if (result && direction) {
      pickResolvedStop(optionId, direction, result);
    }
    return;
  }

  const searchButton = target.closest("[data-search-stop]");
  if (searchButton) {
    searchCustomStop(searchButton.dataset.searchStop, searchButton.dataset.stopDirection);
    return;
  }

  const refreshRouteButton = target.closest("[data-refresh-route]");
  if (refreshRouteButton) {
    renderCompareRoute(refreshRouteButton.dataset.refreshRoute);
    return;
  }

  const fullscreenRouteButton = target.closest("[data-fullscreen-route]");
  if (fullscreenRouteButton) {
    toggleRoutePanelFullscreen(fullscreenRouteButton.dataset.fullscreenRoute);
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
      pitStopMode: existingConfig.pitStopMode,
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
      config.routeStats = null;
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
    const direction = target.dataset.stopDirection;
    config.customQuery[direction] = target.value;
    persistState();
  }
});

createCardActions();
loadInitialState();
renderApp();
