const samplePlants = [
  {
    id: "rosa-rubiginosa",
    common: "Sweet Briar",
    scientific: "Rosa rubiginosa",
    family: "Rosaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Rosa_rubiginosa_2.jpg/320px-Rosa_rubiginosa_2.jpg",
    details: "A species of rose native to Europe and western Asia.",
  },
  {
    id: "ocimum-tenuiflorum",
    common: "Tulsi (Holy Basil)",
    scientific: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ocimum_tenuiflorum_%28Tulsi%29.jpg/320px-Ocimum_tenuiflorum_%28Tulsi%29.jpg",
    details: "Sacred plant widely used in Ayurveda.",
  },
  {
    id: "musa-paradisiaca",
    common: "Plantain",
    scientific: "Musa paradisiaca",
    family: "Musaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Banana_and_cross_section.jpg/320px-Banana_and_cross_section.jpg",
    details: "Edible banana/plantain species.",
  },
  {
    id: "ficus-religiosa",
    common: "Peepal",
    scientific: "Ficus religiosa",
    family: "Moraceae",
    region: "Subtropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ficus_religiosa_linden.jpg/320px-Ficus_religiosa_linden.jpg",
    details: "A sacred fig tree native to the Indian subcontinent.",
  },
  {
    id: "azadirachta-indica",
    common: "Neem",
    scientific: "Azadirachta indica",
    family: "Meliaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Neem_tree.jpg/320px-Neem_tree.jpg",
    details: "Medicinal tree native to the Indian subcontinent.",
  },
  {
    id: "magnolia-grandiflora",
    common: "Southern Magnolia",
    scientific: "Magnolia grandiflora",
    family: "Magnoliaceae",
    region: "Subtropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Magnolia-grandiflora-flowers.jpg/320px-Magnolia-grandiflora-flowers.jpg",
    details: "Large evergreen tree known for its white flowers.",
  },
  {
    id: "aloe-vera",
    common: "Aloe Vera",
    scientific: "Aloe vera",
    family: "Asphodelaceae",
    region: "Arid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aloe_vera_flower.JPG/320px-Aloe_vera_flower.JPG",
    details: "Plant known for medicinal gel.",
  },
  {
    id: "hedera-helix",
    common: "English Ivy",
    scientific: "Hedera helix",
    family: "Araliaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hedera_helix_leaf.jpg/320px-Hedera_helix_leaf.jpg",
    details: "Climbing evergreen vine.",
  },
  {
    id: "lavandula-angustifolia",
    common: "Lavender",
    scientific: "Lavandula angustifolia",
    family: "Lamiaceae",
    region: "Mediterranean",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Lavandula_angustifolia_1.jpg/320px-Lavandula_angustifolia_1.jpg",
    details: "Aromatic flowering herb.",
  },
  {
    id: "mentha-spicata",
    common: "Spearmint",
    scientific: "Mentha spicata",
    family: "Lamiaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Mentha_spicata_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-093.jpg/320px-Mentha_spicata_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-093.jpg",
    details: "Common culinary mint.",
  },
  {
    id: "zingiber-officinale",
    common: "Ginger",
    scientific: "Zingiber officinale",
    family: "Zingiberaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Zingiber_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-178.jpg/320px-Zingiber_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-178.jpg",
    details: "Widely used spice and medicinal plant.",
  },
  {
    id: "mangifera-indica",
    common: "Mango",
    scientific: "Mangifera indica",
    family: "Anacardiaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mangoes_pic.jpg/320px-Mangoes_pic.jpg",
    details: "Known as the king of fruits.",
  },
  {
    id: "cocos-nucifera",
    common: "Coconut",
    scientific: "Cocos nucifera",
    family: "Arecaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Coconut_cluster.JPG/320px-Coconut_cluster.JPG",
    details: "Important multipurpose palm.",
  },
  {
    id: "solanum-lycopersicum",
    common: "Tomato",
    scientific: "Solanum lycopersicum",
    family: "Solanaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/320px-Tomato_je.jpg",
    details: "Widely cultivated fruit.",
  },
  {
    id: "oryza-sativa",
    common: "Rice",
    scientific: "Oryza sativa",
    family: "Poaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rice_plants.jpg/320px-Rice_plants.jpg",
    details: "Staple cereal crop.",
  },
  {
    id: "coffea-arabica",
    common: "Arabica Coffee",
    scientific: "Coffea arabica",
    family: "Rubiaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Coffea_arabica_fruit.jpg/320px-Coffea_arabica_fruit.jpg",
    details: "The most popular species of coffee.",
  },
  {
    id: "allium-sativum",
    common: "Garlic",
    scientific: "Allium sativum",
    family: "Amaryllidaceae",
    region: "Subtropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Garlic_cloves.jpg/320px-Garlic_cloves.jpg",
    details: "A species in the onion genus, widely used as a flavoring.",
  },
  {
    id: "quercus-robur",
    common: "English Oak",
    scientific: "Quercus robur",
    family: "Fagaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Quercus_robur_L._%2828551408800%29.jpg/320px-Quercus_robur_L._%2828551408800%29.jpg",
    details: "A large deciduous tree native to Europe.",
  },
  {
    id: "cannabis-sativa",
    common: "Hemp/Marijuana",
    scientific: "Cannabis sativa",
    family: "Cannabaceae",
    region: "Varied",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cannabis_sativa_close-up.jpg/320px-Cannabis_sativa_close-up.jpg",
    details: "Source of fiber, oil, and medicinal/recreational compounds.",
  },
  {
    id: "saccharum-officinarum",
    common: "Sugarcane",
    scientific: "Saccharum officinarum",
    family: "Poaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sugarcane.JPG/320px-Sugarcane.JPG",
    details: "Primary source of sugar worldwide.",
  },
  {
    id: "opuntia-ficus-indica",
    common: "Prickly Pear",
    scientific: "Opuntia ficus-indica",
    family: "Cactaceae",
    region: "Arid",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Opuntia_ficus-indica.JPG/320px-Opuntia_ficus-indica.JPG",
    details: "A cactus species with edible fruit and pads.",
  },
  {
    id: "hevea-brasiliensis",
    common: "Rubber Tree",
    scientific: "Hevea brasiliensis",
    family: "Euphorbiaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hevea_brasiliensis_Tree.JPG/320px-Hevea_brasiliensis_Tree.JPG",
    details: "Main source of natural rubber (latex).",
  },
  {
    id: "papilionanthe-teres",
    common: "Vanda Miss Joaquim",
    scientific: "Papilionanthe teres",
    family: "Orchidaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Vanda_Miss_Joaquim.jpg/320px-Vanda_Miss_Joaquim.jpg",
    details: "Singapore's national flower (a hybrid orchid).",
  },
  {
    id: "digitalis-purpurea",
    common: "Foxglove",
    scientific: "Digitalis purpurea",
    family: "Plantaginaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Digitalis_purpurea_01.jpg/320px-Digitalis_purpurea_01.jpg",
    details: "Source of the heart medicine Digoxin; highly poisonous.",
  },
  {
    id: "daucus-carota",
    common: "Wild Carrot",
    scientific: "Daucus carota",
    family: "Apiaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Daucus_carota_flowering.jpg/320px-Daucus_carota_flowering.jpg",
    details: "The wild ancestor of the cultivated carrot.",
  },
  {
    id: "vanilla-planifolia",
    common: "Vanilla Orchid",
    scientific: "Vanilla planifolia",
    family: "Orchidaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Vanilla_planifolia.jpg/320px-Vanilla_planifolia.jpg",
    details: "Primary source of vanilla flavoring.",
  },
  {
    id: "theobroma-cacao",
    common: "Cocoa",
    scientific: "Theobroma cacao",
    family: "Malvaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cacao_fruit.jpg/320px-Cacao_fruit.jpg",
    details: "Source of cocoa solids and cocoa butter for chocolate.",
  },
  {
    id: "vitis-vinifera",
    common: "Common Grape Vine",
    scientific: "Vitis vinifera",
    family: "Vitaceae",
    region: "Mediterranean",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Grape_vine_leaves.jpg/320px-Grape_vine_leaves.jpg",
    details: "The source of most common wine and table grapes.",
  },
  {
    id: "nymphaea-nouchali",
    common: "Blue Lotus",
    scientific: "Nymphaea nouchali",
    family: "Nymphaeaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Nymphaea_nouchali_DSC08035.JPG/320px-Nymphaea_nouchali_DSC08035.JPG",
    details: "Water lily often considered sacred in various cultures.",
  },
  {
    id: "ginkgo-biloba",
    common: "Ginkgo",
    scientific: "Ginkgo biloba",
    family: "Ginkgoaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ginkgo_Biloba_leaves.JPG/320px-Ginkgo_Biloba_leaves.JPG",
    details: 'A "living fossil" tree with fan-shaped leaves.',
  },
  {
    id: "eucalyptus-globulus",
    common: "Blue Gum",
    scientific: "Eucalyptus globulus",
    family: "Myrtaceae",
    region: "Temperate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Eucalyptus_globulus_leaves.jpg/320px-Eucalyptus_globulus_leaves.jpg",
    details: "Fast-growing evergreen tree, source of eucalyptus oil.",
  },
  {
    id: "cinnamomum-verum",
    common: "Ceylon Cinnamon",
    scientific: "Cinnamomum verum",
    family: "Lauraceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Cinnamon_bark.jpg/320px-Cinnamon_bark.jpg",
    details: "The source of true cinnamon spice.",
  },
  {
    id: "papyrus",
    common: "Cyperus papyrus",
    scientific: "Cyperus papyrus",
    family: "Cyperaceae",
    region: "Tropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Papyrus_plant.jpg/320px-Papyrus_plant.jpg",
    details: "Tall grass used by ancient Egyptians to make paper.",
  },
  {
    id: "capsicum-annuum",
    common: "Bell Pepper/Chili",
    scientific: "Capsicum annuum",
    family: "Solanaceae",
    region: "Subtropical",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Capsicum_annuum_fruit.jpg/320px-Capsicum_annuum_fruit.jpg",
    details:
      "The most common and extensively cultivated species of chili pepper.",
  },
  {
    id: "lilium-candidum",
    common: "Madonna Lily",
    scientific: "Lilium candidum",
    family: "Liliaceae",
    region: "Mediterranean",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lilium_candidum_flower.jpg/320px-Lilium_candidum_flower.jpg",
    details: "A white-flowered lily native to the Balkans and the Middle East.",
  },
];

let plants = [...samplePlants];
let favorites = [];
try {
  favorites = JSON.parse(localStorage.getItem("botany_favs") || "[]");
} catch (e) {
  favorites = [];
}
let page = 0;
const pageSize = 6;

const grid = document.getElementById("grid");
const familyFilter = document.getElementById("familyFilter");
const regionFilter = document.getElementById("regionFilter");
const favList = document.getElementById("favList");
const favListMobile = document.getElementById("favListMobile");
const searchInput = document.getElementById("search");
const loadMoreBtn = document.getElementById("loadMore");
const clearBtn = document.getElementById("clearBtn");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalExtract = document.getElementById("modalExtract");
const modalFamily = document.getElementById("modalFamily");
const modalRegion = document.getElementById("modalRegion");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");
const wikiBtn = document.getElementById("wikiBtn");

// Mobile navigation elements
const mobileNav = document.getElementById("mobileNav");
const plantsView = document.getElementById("plantsView");
const favoritesView = document.getElementById("favoritesView");
const resourcesView = document.getElementById("resourcesView");

function renderGrid(reset = false) {
  if (reset) {
    grid.innerHTML = "";
    page = 0;
  }
  const q = searchInput.value.trim().toLowerCase();
  const family = familyFilter.value;
  const region = regionFilter.value;
  const filtered = plants.filter((p) => {
    if (family && p.family !== family) return false;
    if (region && p.region !== region) return false;
    if (!q) return true;
    return (
      p.common.toLowerCase().includes(q) ||
      p.scientific.toLowerCase().includes(q)
    );
  });
  const start = page * pageSize;
  const slice = filtered.slice(start, start + pageSize);
  for (const p of slice) grid.appendChild(cardFor(p));
  page++;
  loadMoreBtn.style.display = start + pageSize < filtered.length ? "" : "none";
}

function cardFor(p) {
  const el = document.createElement("div");
  el.className = "card";
  const thumb = document.createElement("div");
  thumb.className = "thumb";

  const img = document.createElement("img");
  img.src = p.image || "";
  img.alt = p.common;
  img.onerror = function () {
    this.style.display = "none";
    thumb.innerHTML = '<div style="color:#666;font-size:40px">🌿</div>';
  };
  thumb.appendChild(img);

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = p.common;
  const sci = document.createElement("div");
  sci.className = "scientific";
  sci.textContent = p.scientific;
  const meta = document.createElement("div");
  meta.className = "meta";

  const left = document.createElement("div");
  left.appendChild(name);
  left.appendChild(sci);
  const right = document.createElement("div");
  right.className = "btn-group";

  const favBtn = document.createElement("button");
  favBtn.className = "btn";
  favBtn.textContent = favorites.includes(p.id) ? "★" : "☆";
  favBtn.title = "Toggle favorite";
  favBtn.addEventListener("click", (ev) => {
    ev.stopPropagation();
    toggleFav(p);
    favBtn.textContent = favorites.includes(p.id) ? "★" : "☆";
  });

  const viewBtn = document.createElement("button");
  viewBtn.className = "btn primary";
  viewBtn.textContent = "View";
  viewBtn.addEventListener("click", (ev) => {
    ev.stopPropagation();
    openModal(p);
  });

  right.appendChild(favBtn);
  right.appendChild(viewBtn);
  meta.appendChild(left);
  meta.appendChild(right);

  el.appendChild(thumb);
  el.appendChild(meta);
  el.addEventListener("click", () => openModal(p));
  return el;
}

function populateFilters() {
  const families = Array.from(new Set(plants.map((p) => p.family))).sort();
  familyFilter.innerHTML =
    '<option value="">All families</option>' +
    families.map((f) => `<option>${f}</option>`).join("");
  const regions = Array.from(new Set(plants.map((p) => p.region))).sort();
  regionFilter.innerHTML =
    '<option value="">All regions</option>' +
    regions.map((r) => `<option>${r}</option>`).join("");
}

function toggleFav(p) {
  if (favorites.includes(p.id)) {
    favorites = favorites.filter((x) => x !== p.id);
  } else {
    favorites.push(p.id);
  }
  try {
    localStorage.setItem("botany_favs", JSON.stringify(favorites));
  } catch (e) {
    console.error("Could not save favorites");
  }
  renderFavs();
}

function renderFavs() {
  const items = favorites
    .map((id) => plants.find((p) => p.id === id))
    .filter(Boolean);
  const emptyMsg =
    '<div class="muted">No favorites yet — click the star on a plant card.</div>';

  // Render for desktop sidebar
  favList.innerHTML = items.length ? "" : emptyMsg;

  // Render for mobile view
  favListMobile.innerHTML = items.length ? "" : emptyMsg;

  for (const p of items) {
    const el = createFavItem(p);
    const elMobile = createFavItem(p);
    favList.appendChild(el);
    favListMobile.appendChild(elMobile);
  }
}

function createFavItem(p) {
  const el = document.createElement("div");
  el.className = "fav-item";
  const st = document.createElement("div");
  st.className = "small-thumb";
  const im = document.createElement("img");
  im.src = p.image;
  im.onerror = function () {
    this.style.display = "none";
    st.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#666">🌿</div>';
  };
  st.appendChild(im);
  const t = document.createElement("div");
  t.style.flex = "1";
  t.innerHTML = `<div style="font-weight:600">${p.common}</div><div class="muted" style="font-size:12px">${p.scientific}</div>`;
  const rm = document.createElement("button");
  rm.className = "btn";
  rm.textContent = "✕";
  rm.title = "Remove";
  rm.addEventListener("click", () => {
    favorites = favorites.filter((x) => x !== p.id);
    try {
      localStorage.setItem("botany_favs", JSON.stringify(favorites));
    } catch (e) {}
    renderFavs();
    renderGrid(true);
  });
  el.appendChild(st);
  el.appendChild(t);
  el.appendChild(rm);
  return el;
}

function openModal(p) {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = p.common + " — " + p.scientific;
  modalImage.src = p.image || "";
  modalImage.onerror = function () {
    this.style.display = "none";
  };
  modalFamily.textContent = "Family: " + (p.family || "—");
  modalRegion.textContent = "Region: " + (p.region || "—");
  modalDetails.textContent = p.details || "—";
  modalExtract.textContent = "Fetching info from Wikipedia...";
  wikiBtn.onclick = () => {
    const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(
      p.scientific
    )}`;
    window.open(url, "_blank");
  };

  fetchWikipediaSummary(p.scientific)
    .then((res) => {
      if (res) {
        modalExtract.textContent = res.extract || "No summary found.";
        if (res.thumbnail && res.thumbnail.source) {
          modalImage.src = res.thumbnail.source;
        }
        if (
          res.content_urls &&
          res.content_urls.desktop &&
          res.content_urls.desktop.page
        ) {
          wikiBtn.onclick = () =>
            window.open(res.content_urls.desktop.page, "_blank");
        }
      } else {
        modalExtract.textContent = "No Wikipedia info available.";
      }
    })
    .catch((err) => {
      modalExtract.textContent = "Could not fetch Wikipedia info.";
    });
}

async function fetchWikipediaSummary(title) {
  try {
    const res = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
        encodeURIComponent(title)
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

// Mobile navigation handler
function switchMobileView(viewName) {
  // Hide all views
  plantsView.style.display = "none";
  favoritesView.style.display = "none";
  resourcesView.style.display = "none";

  // Remove active class from all buttons
  const navBtns = mobileNav.querySelectorAll(".mobile-nav-btn");
  navBtns.forEach((btn) => btn.classList.remove("active"));

  // Show selected view and activate button
  if (viewName === "plants") {
    plantsView.style.display = "block";
    document.querySelector('[data-view="plants"]').classList.add("active");
  } else if (viewName === "favorites") {
    favoritesView.style.display = "block";
    document.querySelector('[data-view="favorites"]').classList.add("active");
  } else if (viewName === "resources") {
    resourcesView.style.display = "block";
    document.querySelector('[data-view="resources"]').classList.add("active");
  }
}

// Add event listeners to mobile nav buttons
document.querySelectorAll(".mobile-nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.getAttribute("data-view");
    switchMobileView(view);
  });
});

loadMoreBtn.addEventListener("click", () => renderGrid(false));
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
});
window.addEventListener("click", (ev) => {
  if (ev.target === modal) {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  }
});
searchInput.addEventListener(
  "input",
  debounce(() => {
    renderGrid(true);
  }, 300)
);
familyFilter.addEventListener("change", () => renderGrid(true));
regionFilter.addEventListener("change", () => renderGrid(true));
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  familyFilter.value = "";
  regionFilter.value = "";
  renderGrid(true);
});

function debounce(fn, ms) {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), ms);
  };
}

function init() {
  populateFilters();
  renderGrid(true);
  renderFavs();
  // Initialize mobile view to plants (default)
  switchMobileView("plants");
}

init();
