const tripOptions = [
  {
    id: "coonoor",
    name: "Coonoor + Ooty + Kotagiri",
    min: 6500,
    max: 11000,
    tags: ["cooler", "drives", "balanced"],
    reason:
      "Best mix of weather, scenic drives, and group hangout value without making the travel too painful.",
  },
  {
    id: "yercaud",
    name: "Yercaud",
    min: 4500,
    max: 8000,
    tags: ["budget", "easy", "balanced"],
    reason:
      "The best value option when the group wants a genuine hill break without stretching money too much.",
  },
  {
    id: "yelagiri",
    name: "Yelagiri",
    min: 4000,
    max: 7000,
    tags: ["budget", "easy"],
    reason:
      "Best when the group cares most about short travel time and a very low-effort plan from Chennai.",
  },
  {
    id: "kodai",
    name: "Kodaikanal",
    min: 7000,
    max: 12000,
    tags: ["cooler"],
    reason:
      "Worth keeping as a colder backup, but the travel and cost are both a little heavier for this brief.",
  },
];

const stylePriority = {
  balanced: ["coonoor", "yercaud", "yelagiri", "kodai"],
  budget: ["yercaud", "yelagiri", "coonoor", "kodai"],
  cooler: ["coonoor", "kodai", "yercaud", "yelagiri"],
  easy: ["yelagiri", "yercaud", "coonoor", "kodai"],
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
        option.id === "coonoor"
          ? "Stay in Coonoor or Kotagiri"
          : option.id === "yercaud"
            ? "Best with a shared villa or 3 rooms"
            : option.id === "yelagiri"
              ? "Shortest travel, smallest destination"
              : "Colder feel, longer ride";

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
