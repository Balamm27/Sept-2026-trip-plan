const tripOptions = [
  {
    id: "meghamalai",
    name: "Meghamalai",
    min: 6800,
    max: 11800,
    reason:
      "Best deep-cut Tamil Nadu option when the group wants colder hill roads, quieter stays, and a trip that still feels under the radar.",
    heroNote: "for cloud-forest roads and a deeper-cut Tamil Nadu vibe",
    stayText: "Choose one strong stay and treat the drives as the main event",
  },
  {
    id: "valparai",
    name: "Valparai",
    min: 6000,
    max: 10500,
    reason:
      "Best offbeat drive-heavy option for a chilled group that wants something less regular than the standard hill-station list.",
    heroNote: "with Aliyar and Sholayar side drives",
    stayText: "Best with a car and a scenic-road mindset",
  },
  {
    id: "vattavada",
    name: "Vattavada + Kanthalloor",
    min: 8200,
    max: 13500,
    reason:
      "Best if the group wants one of the coldest, quietest, least-standard Kerala hill bases and is okay with a longer first-day transfer.",
    heroNote: "for colder valley farms and border-road scenery",
    stayText: "Worth it only if the group is happy to trade time for uniqueness",
  },
  {
    id: "kotagiri",
    name: "Kotagiri + Coonoor",
    min: 6500,
    max: 11000,
    reason:
      "Best option when the group wants cooler weather and less September weather risk without falling back into the most crowded Ooty version.",
    heroNote: "for easier cool weather with less rain gamble",
    stayText: "Stay in Kotagiri or Coonoor, not busy Ooty center",
  },
  {
    id: "sakleshpur",
    name: "Sakleshpur",
    min: 7000,
    max: 12000,
    reason:
      "Strong outside-Tamil-Nadu option for a slower estate-stay mood, provided the group is okay with a few extra travel hours.",
    heroNote: "for coffee-estate mist and longer, softer days",
    stayText: "Estate stay vibe works better than a rushed sightseeing list",
  },
  {
    id: "kemmanagundi",
    name: "Kemmanagundi",
    min: 8500,
    max: 14500,
    reason:
      "Best if you want a rarer Karnataka hill retreat than the usual Chikmagalur plan and are fine with the heavier access time.",
    heroNote: "for old-school hill-retreat quiet and misty ridges",
    stayText: "Pick this for uniqueness, not for the fastest logistics",
  },
  {
    id: "vagamon",
    name: "Vagamon",
    min: 7500,
    max: 12500,
    reason:
      "Beautiful and genuinely different, but it should be chosen only if the group actively likes a monsoon-green, rain-shaped trip.",
    heroNote: "if everyone is actively into monsoon-green weather",
    stayText: "Pick only if the group is fine with September rain moods",
  },
  {
    id: "javadi",
    name: "Javadi Hills",
    min: 5200,
    max: 9000,
    reason:
      "Best nearby hidden-gem pick when the group wants lighter travel effort but still wants to avoid more obvious Tamil Nadu hill names.",
    heroNote: "for a lower-effort hidden-gem answer from Chennai",
    stayText: "Not luxury-heavy, but very good for a simpler hidden-road trip",
  },
  {
    id: "kolli",
    name: "Kolli Hills",
    min: 5000,
    max: 8500,
    reason:
      "A closer and more rugged road-trip style option if the group wants mountain-road energy over polished hill-town comfort.",
    heroNote: "for hairpin-bend fun with shorter access",
    stayText: "Shorter access and stronger road-trip energy",
  },
  {
    id: "wayanad",
    name: "Wayanad",
    min: 7500,
    max: 13000,
    reason:
      "Best when the group wants a larger, more adventurous landscape and is okay with a longer access day plus some September rain flexibility.",
    heroNote: "for a larger landscape with more spread-out drives",
    stayText: "Larger destination, so pick one side and do it well",
  },
];

const rankMatrix = {
  3: {
    balanced: [
      "meghamalai",
      "valparai",
      "vattavada",
      "kotagiri",
      "sakleshpur",
      "kemmanagundi",
      "javadi",
      "wayanad",
      "vagamon",
      "kolli",
    ],
    budget: [
      "kolli",
      "javadi",
      "valparai",
      "meghamalai",
      "kotagiri",
      "sakleshpur",
      "vagamon",
      "wayanad",
      "vattavada",
      "kemmanagundi",
    ],
    cooler: [
      "vattavada",
      "kotagiri",
      "meghamalai",
      "kemmanagundi",
      "valparai",
      "sakleshpur",
      "vagamon",
      "wayanad",
      "javadi",
      "kolli",
    ],
    easy: [
      "javadi",
      "kolli",
      "kotagiri",
      "valparai",
      "meghamalai",
      "sakleshpur",
      "vagamon",
      "wayanad",
      "vattavada",
      "kemmanagundi",
    ],
  },
  2: {
    balanced: [
      "valparai",
      "kotagiri",
      "javadi",
      "kolli",
      "meghamalai",
      "sakleshpur",
      "vagamon",
      "wayanad",
      "vattavada",
      "kemmanagundi",
    ],
    budget: [
      "kolli",
      "javadi",
      "valparai",
      "kotagiri",
      "meghamalai",
      "sakleshpur",
      "vagamon",
      "wayanad",
      "vattavada",
      "kemmanagundi",
    ],
    cooler: [
      "kotagiri",
      "meghamalai",
      "valparai",
      "javadi",
      "sakleshpur",
      "vattavada",
      "kolli",
      "vagamon",
      "wayanad",
      "kemmanagundi",
    ],
    easy: [
      "javadi",
      "kolli",
      "kotagiri",
      "valparai",
      "meghamalai",
      "sakleshpur",
      "vagamon",
      "wayanad",
      "vattavada",
      "kemmanagundi",
    ],
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
const optionsGrid = document.getElementById("optionsGrid");

const cardNodes = Array.from(document.querySelectorAll(".destination-card[data-option-id]"));

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

function renderCards(ranked) {
  ranked.forEach((option, index) => {
    const card = cardNodes.find((node) => node.dataset.optionId === option.id);
    if (!card) {
      return;
    }

    optionsGrid.appendChild(card);

    const pill = card.querySelector(".pill");
    const rank = card.querySelector(".rank");
    const isLeader = index === 0;

    card.classList.toggle("recommended", isLeader);
    if (pill) {
      pill.textContent = isLeader ? "Recommended" : card.dataset.pill || "Option";
      pill.classList.toggle("muted", !isLeader);
    }
    if (rank) {
      rank.textContent = `#${index + 1}`;
    }
  });
}

function render() {
  const groupSize = Number(groupSizeInput.value);
  const nights = Number(nightsSelect.value);
  const style = styleSelect.value;

  groupSizeValue.textContent = String(groupSize);
  syncTopFilters();

  const ranked = rankOptions(style, nights);
  const leader = ranked[0];

  if (leader) {
    liveRecommendation.textContent = leader.name;
    liveReason.textContent = leader.reason;
    heroBestName.textContent = `${leader.name} base`;
    heroBestNote.textContent = leader.heroNote;
  }

  renderCards(ranked);

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
