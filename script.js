const LISTS = {
  rucksack: [
    "Work laptop",
    "Pass",
    "Train tickets",
    "Hotel booking",
    "iPhone charger",
    "Water",
    "Supper",
    "Headphones",
  ],
  case: [
    "Notepad",
    "Toiletries",
    "Pants + socks",
    "PJ",
    "Office clothes",
    "Watch charger",
    "Laptop charger",
    "Book",
    "Breakfast",
  ],
};

const STORAGE_KEY = "packing-checklist-state";

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

function itemId(listKey, index) {
  return `${listKey}-${index}`;
}

function render() {
  Object.entries(LISTS).forEach(([listKey, items]) => {
    const ul = document.getElementById(`${listKey}-list`);
    ul.innerHTML = "";

    items.forEach((label, index) => {
      const id = itemId(listKey, index);
      const checked = !!state[id];

      const li = document.createElement("li");
      const labelEl = document.createElement("label");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = checked;
      checkbox.id = id;
      checkbox.addEventListener("change", () => {
        state[id] = checkbox.checked;
        saveState(state);
        updateCounts();
      });

      const textSpan = document.createElement("span");
      textSpan.className = "item-text";
      textSpan.textContent = label;

      labelEl.appendChild(checkbox);
      labelEl.appendChild(textSpan);
      li.appendChild(labelEl);
      ul.appendChild(li);
    });
  });

  updateCounts();
}

function updateCounts() {
  let totalItems = 0;
  let totalChecked = 0;

  Object.entries(LISTS).forEach(([listKey, items]) => {
    const checkedCount = items.filter((_, index) => state[itemId(listKey, index)]).length;
    totalItems += items.length;
    totalChecked += checkedCount;

    const countEl = document.querySelector(`[data-count="${listKey}"]`);
    if (countEl) {
      countEl.textContent = `${checkedCount} / ${items.length}`;
    }
  });

  const overallFill = document.getElementById("overall-fill");
  const overallLabel = document.getElementById("overall-label");
  const pct = totalItems === 0 ? 0 : Math.round((totalChecked / totalItems) * 100);
  overallFill.style.width = `${pct}%`;
  overallLabel.textContent = `${totalChecked} / ${totalItems} packed`;
}

document.getElementById("reset-btn").addEventListener("click", () => {
  if (!confirm("Uncheck all items?")) return;
  state = {};
  saveState(state);
  render();
});

render();
