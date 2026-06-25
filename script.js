const tripOptions = [
  {
    id: "valparai",
    name: "Valparai",
    min: 6000,
    max: 10500,
    tags: ["balanced", "drives", "budget"],
    reason:
      "Best offbeat drive-heavy option for a chilled group that wants something less regular than the standard hill-station list.",
  },
  {
    id: "kotagiri",
    name: "Kotagiri + Coonoor",
    min: 6500,
    max: 11000,
    tags: ["cooler", "easy", "balanced"],
    reason:
      "Best option when the group wants cooler weather and less September weather risk without falling back into the most crowded Ooty version.",
  },
  {
    id: "sakleshpur",
    name: "Sakleshpur",
    min: 7000,
    max: 12000,
    tags: ["balanced", "cooler"],
    reason:
      "Strong outside-Tamil-Nadu option for a slower estate-stay mood, provided the group is okay with a few extra travel hours.",
  },
  {
    id: "vagamon",
    name: "Vagamon",
    min: 7500,
    max: 12500,
    tags: ["cooler"],
    reason:
      "Beautiful and genuinely different, but it should be chosen only if the group actively likes a monsoon-green, rain-shaped trip.",
  },
];

const stylePriority = {
  balanced: ["valparai", "kotagiri", "sakleshpur", "vagamon"],
  budget: ["valparai", "kotagiri", "sakleshpur", "vagamon"],
  cooler: ["kotagiri", "valparai", "sakleshpur", "vagamon"],
  easy: ["kotagiri", "valparai", "sakleshpur", "vagamon"],
};

const groupSizeInput = document.getElementById("groupSize");
const groupSizeValue = document.getElementById("groupSizeValue");
const nightsSelect = document.getElementById("nights");
const styleSelect = document.getElementById("style");
const budgetCards = document.getElementById("budgetCards");
const liveRecommendation = document.getElementById("liveRecommendation");
const liveReason = document.getElementById("liveReason");

function computeEstimate(option, nights, groupSize) {
  const nightFactor = nights === 2 ? 0.88 : 1;
  const groupFactor = groupSize === 5 ? 1.03 : groupSize === 7 ? 0.97 : 1;
  const low = Math.round(option.min * nightFactor * groupFactor);
  const high = Math.round(option.max * nightFactor * groupFactor);
  return { low, high };
}

function rankOptions(style) {
  const order = stylePriority[style] || stylePriority.balanced;
  return [...tripOptions].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
  );
}

function render() {
  const groupSize = Number(groupSizeInput.value);
  const nights = Number(nightsSelect.value);
  const style = styleSelect.value;

  groupSizeValue.textContent = String(groupSize);

  const ranked = rankOptions(style);
  const leader = ranked[0];

  liveRecommendation.textContent = leader.name;
  liveReason.textContent = leader.reason;

  budgetCards.innerHTML = ranked
    .map((option, index) => {
      const estimate = computeEstimate(option, nights, groupSize);
      const classes = index === 0 ? "budget-card featured" : "budget-card";
      const stayText =
        option.id === "valparai"
          ? "Best with a car and a scenic-road mindset"
          : option.id === "kotagiri"
            ? "Stay in Kotagiri or Coonoor, not busy Ooty center"
            : option.id === "sakleshpur"
              ? "Estate stay vibe works better than a rushed sightseeing list"
              : "Pick only if the group is fine with September rain moods";

      return `
        <article class="${classes}">
          <p class="score">#${index + 1} fit for this mode</p>
          <h4>${option.name}</h4>
          <p class="price">₹${estimate.low.toLocaleString()} - ₹${estimate.high.toLocaleString()}</p>
          <p class="meta">Per person estimate for ${groupSize} friends</p>
          <p>${stayText}</p>
        </article>
      `;
    })
    .join("");
}

groupSizeInput.addEventListener("input", render);
nightsSelect.addEventListener("change", render);
styleSelect.addEventListener("change", render);

render();
