const tripOptions = [
  {
    id: "meghamalai",
    name: "Meghamalai",
    min: 6800,
    max: 11800,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic%20view%20of%20Meghamalai.jpg",
    reason:
      "Best deep-cut Tamil Nadu option when the group wants colder hill roads, quieter stays, and a trip that still feels under the radar.",
    heroNote: "for cloud-forest roads and a deeper-cut Tamil Nadu vibe",
    stayText: "Choose one strong stay and treat the drives as the main event",
    itineraryMeta: "slow scenic-drive pace",
    chips: ["Remote dam roads", "Quiet stay-first vibe", "Best with a car"],
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
    min: 6000,
    max: 10500,
    heroImage: "./assets/optimized/valparai-hero.jpg",
    reason:
      "Best offbeat drive-heavy option for a chilled group that wants something less regular than the standard hill-station list.",
    heroNote: "with Aliyar and Sholayar side drives",
    stayText: "Best with a car and a scenic-road mindset",
    itineraryMeta: "ghat-road heavy pacing",
    chips: ["Aliyar climb", "Tea-estate roads", "Great for 3N / 4D"],
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
    min: 8200,
    max: 13500,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Morning%20of%20vattavada.jpg",
    reason:
      "Best if the group wants one of the coldest, quietest, least-standard Kerala hill bases and is okay with a longer first-day transfer.",
    heroNote: "for colder valley farms and border-road scenery",
    stayText: "Worth it only if the group is happy to trade time for uniqueness",
    itineraryMeta: "colder valley-road pacing",
    chips: ["Farm-country valley", "Long transfer", "Very unusual base"],
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
    min: 6500,
    max: 11000,
    heroImage: "./assets/optimized/kotagiri-hero.jpg",
    reason:
      "Best option when the group wants cooler weather and less September weather risk without falling back into the most crowded Ooty version.",
    heroNote: "for easier cool weather with less rain gamble",
    stayText: "Stay in Kotagiri or Coonoor, not busy Ooty center",
    itineraryMeta: "weather-safe hill-town pacing",
    chips: ["Cooler air", "Easy to access", "Good cafe + road mix"],
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
    min: 7000,
    max: 12000,
    heroImage: "./assets/optimized/sakleshpur-hero.jpg",
    reason:
      "Strong outside-Tamil-Nadu option for a slower estate-stay mood, provided the group is okay with a few extra travel hours.",
    heroNote: "for coffee-estate mist and longer, softer days",
    stayText: "Estate stay vibe works better than a rushed sightseeing list",
    itineraryMeta: "estate-stay pacing",
    chips: ["Coffee-estate mood", "Longer access", "Better with one villa"],
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
    min: 8500,
    max: 14500,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kemmanagundi%20View.jpg",
    reason:
      "Best if you want a rarer Karnataka hill retreat than the usual Chikmagalur plan and are fine with the heavier access time.",
    heroNote: "for old-school hill-retreat quiet and misty ridges",
    stayText: "Pick this for uniqueness, not for the fastest logistics",
    itineraryMeta: "long-haul hidden-retreat pacing",
    chips: ["Longest journey", "Classic ridge views", "Very under-planned"],
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
    min: 7500,
    max: 12500,
    heroImage: "./assets/optimized/vagamon-meadows.jpg",
    reason:
      "Beautiful and genuinely different, but it should be chosen only if the group actively likes a monsoon-green, rain-shaped trip.",
    heroNote: "if everyone is actively into monsoon-green weather",
    stayText: "Pick only if the group is fine with September rain moods",
    itineraryMeta: "weather-led pacing",
    chips: ["Monsoon-green mood", "Flexible plans", "Best with a backup car"],
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
    min: 5200,
    max: 9000,
    heroImage:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Javadi%20Hills%20in%20Tamil%20Nadu.jpg",
    reason:
      "Best nearby hidden-gem pick when the group wants lighter travel effort but still wants to avoid more obvious Tamil Nadu hill names.",
    heroNote: "for a lower-effort hidden-gem answer from Chennai",
    stayText: "Not luxury-heavy, but very good for a simpler hidden-road trip",
    itineraryMeta: "low-effort hidden-road pacing",
    chips: ["Closer from Chennai", "Simple road-trip mood", "Good for 2N / 3D"],
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
    min: 5000,
    max: 8500,
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/34_Hairpin_Kolli_Hills.jpg/1280px-34_Hairpin_Kolli_Hills.jpg",
    reason:
      "A closer and more rugged road-trip style option if the group wants mountain-road energy over polished hill-town comfort.",
    heroNote: "for hairpin-bend fun with shorter access",
    stayText: "Shorter access and stronger road-trip energy",
    itineraryMeta: "shorter-access road-trip pacing",
    chips: ["Hairpin-road energy", "Budget-friendly", "Closer than most"],
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
    min: 7500,
    max: 13000,
    heroImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/1280px-Blue%2C_Green_%26_White.jpg",
    reason:
      "Best when the group wants a larger, more adventurous landscape and is okay with a longer access day plus some September rain flexibility.",
    heroNote: "for a larger landscape with more spread-out drives",
    stayText: "Larger destination, so pick one side and do it well",
    itineraryMeta: "big-canvas pacing",
    chips: ["More spread out", "Adventure feel", "Needs tighter planning"],
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

const groupSizeInput = document.getElementById("groupSize");
const groupSizeValue = document.getElementById("groupSizeValue");
const nightsSelect = document.getElementById("nights");
const styleSelect = document.getElementById("style");
const heroNightsSelect = document.getElementById("heroNights");
const heroStyleSelect = document.getElementById("heroStyle");
const budgetCards = document.getElementById("budgetCards");
const liveRecommendation = document.getElementById("liveRecommendation");
const liveReason = document.getElementById("liveReason");
const heroBestName = document.getElementById("heroBestName");
const heroBestNote = document.getElementById("heroBestNote");
const heroBestCard = document.getElementById("heroBestCard");
const optionsGrid = document.getElementById("optionsGrid");
const itineraryHeading = document.getElementById("itineraryHeading");
const itineraryIntro = document.getElementById("itineraryIntro");
const itineraryCurrent = document.getElementById("itineraryCurrent");
const itineraryMeta = document.getElementById("itineraryMeta");
const itineraryChips = document.getElementById("itineraryChips");
const itineraryTimeline = document.getElementById("itineraryTimeline");

const cardNodes = Array.from(document.querySelectorAll(".destination-card[data-option-id]"));

let selectedOptionId = "meghamalai";
let manualSelection = false;

function computeEstimate(option, nights, groupSize) {
  const nightFactor = nights === 2 ? 0.88 : 1;
  const groupFactor = groupSize === 5 ? 1.03 : groupSize === 7 ? 0.97 : 1;
  const low = Math.round(option.min * nightFactor * groupFactor);
  const high = Math.round(option.max * nightFactor * groupFactor);
  return { low, high };
}

function rankOptions(style, nights) {
  const order = rankMatrix[nights]?.[style] || rankMatrix[3].balanced;
  return order.map((id) => optionMap.get(id)).filter(Boolean);
}

function syncTopFilters() {
  heroNightsSelect.value = nightsSelect.value;
  heroStyleSelect.value = styleSelect.value;
}

function syncPlannerFilters() {
  nightsSelect.value = heroNightsSelect.value;
  styleSelect.value = heroStyleSelect.value;
}

function createCardActions() {
  cardNodes.forEach((card) => {
    if (card.querySelector(".card-actions")) {
      return;
    }

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const planButton = document.createElement("button");
    planButton.type = "button";
    planButton.className = "card-action-primary";
    planButton.dataset.optionAction = "itinerary";
    planButton.textContent = "View full itinerary";

    const hint = document.createElement("span");
    hint.className = "card-action-hint";
    hint.textContent = "Loads the full plan below";

    actions.append(planButton, hint);

    const budgetTag = card.querySelector(".budget-tag");
    if (budgetTag) {
      budgetTag.insertAdjacentElement("afterend", actions);
    } else {
      card.appendChild(actions);
    }
  });
}

function setSelectedOption(optionId, { scroll = false, manual = true } = {}) {
  if (!optionMap.has(optionId)) {
    return;
  }

  selectedOptionId = optionId;
  manualSelection = manual;

  if (scroll) {
    document.getElementById("itinerary").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderCards(ranked) {
  ranked.forEach((option, index) => {
    const card = cardNodes.find((node) => node.dataset.optionId === option.id);
    if (!card) {
      return;
    }

    optionsGrid.appendChild(card);

    const pill = card.querySelector(".pill");
    const rank = card.querySelector(".rank");
    const actionButton = card.querySelector(".card-action-primary");
    const isLeader = index === 0;
    const isSelected = option.id === selectedOptionId;

    card.classList.toggle("recommended", isLeader);
    card.classList.toggle("selected", isSelected);

    if (pill) {
      pill.textContent = isLeader ? "Recommended" : card.dataset.pill || "Option";
      pill.classList.toggle("muted", !isLeader);
    }

    if (rank) {
      rank.textContent = `#${index + 1}`;
    }

    if (actionButton) {
      actionButton.textContent = isSelected ? "Viewing full itinerary" : "View full itinerary";
      actionButton.classList.toggle("is-active", isSelected);
    }
  });
}

function buildItineraryDays(option, nights) {
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

function renderItinerary(option, nights) {
  const itineraryDays = buildItineraryDays(option, nights);
  const tripLabel = nights === 3 ? "3 nights / 4 days" : "2 nights / 3 days";

  itineraryHeading.textContent = `${option.name} full itinerary`;
  itineraryIntro.textContent =
    `This is the detailed ${tripLabel} version for ${option.name}. Use any tile's itinerary button to swap the plan instantly.`;
  itineraryCurrent.textContent = option.name;
  itineraryMeta.textContent = `${tripLabel} with a ${option.itineraryMeta}.`;

  itineraryChips.innerHTML = option.chips
    .map((chip) => `<span class="itinerary-chip">${chip}</span>`)
    .join("");

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

function renderCompare(ranked, nights, groupSize) {
  budgetCards.innerHTML = ranked
    .map((option, index) => {
      const estimate = computeEstimate(option, nights, groupSize);
      const classes = index === 0 ? "budget-card featured" : "budget-card";

      return `
        <article class="${classes}">
          <p class="score">#${index + 1} fit for this mode</p>
          <h4>${option.name}</h4>
          <p class="price">₹${estimate.low.toLocaleString()} - ₹${estimate.high.toLocaleString()}</p>
          <p class="meta">Per person estimate for ${groupSize} friends</p>
          <p>${option.stayText}</p>
        </article>
      `;
    })
    .join("");
}

function render() {
  const groupSize = Number(groupSizeInput.value);
  const nights = Number(nightsSelect.value);
  const style = styleSelect.value;
  const ranked = rankOptions(style, nights);
  const leader = ranked[0];

  groupSizeValue.textContent = String(groupSize);
  syncTopFilters();

  if (!manualSelection && leader) {
    selectedOptionId = leader.id;
  }

  if (!optionMap.has(selectedOptionId) && leader) {
    selectedOptionId = leader.id;
    manualSelection = false;
  }

  if (leader) {
    liveRecommendation.textContent = leader.name;
    liveReason.textContent = leader.reason;
    heroBestName.textContent = `${leader.name} base`;
    heroBestNote.textContent = leader.heroNote;
    heroBestCard?.style.setProperty("--hero-photo", `url("${leader.heroImage}")`);
  }

  renderCards(ranked);
  renderCompare(ranked, nights, groupSize);
  renderItinerary(optionMap.get(selectedOptionId) || leader, nights);
}

createCardActions();

optionsGrid.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const button = target.closest("[data-option-action='itinerary']");
  if (!button) {
    return;
  }

  const card = button.closest(".destination-card[data-option-id]");
  if (!card) {
    return;
  }

  setSelectedOption(card.dataset.optionId, { scroll: true, manual: true });
  render();
});

groupSizeInput.addEventListener("input", render);
nightsSelect.addEventListener("change", render);
styleSelect.addEventListener("change", render);

heroNightsSelect.addEventListener("change", () => {
  syncPlannerFilters();
  render();
});

heroStyleSelect.addEventListener("change", () => {
  syncPlannerFilters();
  render();
});

syncTopFilters();
render();
