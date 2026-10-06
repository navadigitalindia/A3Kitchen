// ==========================================================================
// A3 KITCHEN — DIGITAL RESTAURANT MENU & EDITORIAL SKETCHBOOK ENGINE
// Upgraded with ThreeUI MengToSketchbookLandingPage Interaction System
// Production Quality, Accessible, Secure, and Performance-Optimized
// ==========================================================================

// 1. STANDARDIZED MENU ITEMS DATABASE (100% Local Restaurant Photography)
const menuItems = [
  {
    id: "paneer-tikka",
    name: "Paneer Tikka",
    plateNo: "PLATE № 01",
    isVeg: true,
    cat: "starters",
    tags: ["starters", "veg"],
    desc: "Smoky grilled paneer cubes marinated in yogurt and hand-pounded spices.",
    price: "₹180",
    img: "assets/images/paneer-tikka.jpg"
  },
  {
    id: "chicken-65",
    name: "Chicken 65",
    plateNo: "PLATE № 02",
    isVeg: false,
    cat: "starters",
    tags: ["starters", "nonveg", "chinese"],
    desc: "Crispy chicken chunks tossed with tempered curry leaves and green chilies.",
    price: "₹200",
    img: "assets/images/chicken-65.jpg"
  },
  {
    id: "veg-fried-rice",
    name: "Veg Fried Rice",
    plateNo: "PLATE № 03",
    isVeg: true,
    cat: "chinese",
    tags: ["main", "chinese", "veg"],
    desc: "A wok-tossed blend of crunchy garden vegetables and fragrant rice.",
    price: "₹160",
    img: "assets/images/veg-fried-rice.jpg"
  },
  {
    id: "mutton-biryani",
    name: "Mutton Biryani",
    plateNo: "PLATE № 04",
    isVeg: false,
    cat: "biryani",
    tags: ["biryani", "main", "nonveg"],
    desc: "Aromatic basmati rice layered with tender mutton and traditional spices.",
    price: "₹280",
    img: "assets/images/mutton-biryani-special.jpg"
  },
  {
    id: "chefs-biryani",
    name: "A3 Special Biryani",
    plateNo: "PLATE № 05",
    isVeg: false,
    cat: "biryani",
    tags: ["biryani", "main", "nonveg"],
    desc: "A royal blend of saffron rice, prime meat cuts, and roasted whole spices.",
    price: "₹320",
    img: "assets/images/chefs-special-biryani.jpg"
  },
  {
    id: "butter-chicken",
    name: "Butter Chicken",
    plateNo: "PLATE № 06",
    isVeg: false,
    cat: "main",
    tags: ["main", "nonveg"],
    desc: "Tender tandoori chicken simmered in a velvet tomato, cream and butter gravy.",
    price: "₹260",
    img: "assets/images/butter-chicken.jpg"
  },
  {
    id: "mutton-rogan-josh",
    name: "Mutton Rogan Josh",
    plateNo: "PLATE № 07",
    isVeg: false,
    cat: "main",
    tags: ["main", "nonveg"],
    desc: "Classic slow-cooked mutton curry infused with authentic aromatic spices.",
    price: "₹300",
    img: "assets/images/mutton-rogan-josh.jpg"
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    plateNo: "PLATE № 08",
    isVeg: true,
    cat: "desserts",
    tags: ["desserts", "veg"],
    desc: "Soft milk dumplings soaked in warm rose and green cardamom syrup.",
    price: "₹90",
    img: "assets/images/gulab-jamun.jpg"
  },
  {
    id: "mango-lassi",
    name: "Mango Lassi",
    plateNo: "PLATE № 09",
    isVeg: true,
    cat: "beverages",
    tags: ["beverages", "veg"],
    desc: "Chilled sweet mango pulp blended with rich artisan fresh curd.",
    price: "₹110",
    img: "assets/images/mango-lassi.jpg"
  },
  {
    id: "masala-chai",
    name: "Masala Chai",
    plateNo: "PLATE № 10",
    isVeg: true,
    cat: "beverages",
    tags: ["beverages", "veg"],
    desc: "Fresh tea leaves brewed with crushed ginger, green cardamom, and cloves.",
    price: "₹60",
    img: "assets/images/dum-cooking.jpg"
  }
];

// State & Element Cache
let currentCategory = "all";
let modalTriggerElement = null;

const gridElement = document.getElementById("grid");
const categoriesContainer = document.getElementById("cats");

const modalElement = document.getElementById("modal");
const modalCloseBtn = document.getElementById("close");
const modalCloseActionBtn = document.getElementById("modalCloseActionBtn");

const galleryModalElement = document.getElementById("galleryModal");
const galleryCloseBtn = document.getElementById("galleryClose");
const openGalleryBtn = document.getElementById("openGallery");

const bookingSuccessModal = document.getElementById("bookingSuccessModal");
const btnDoneBooking = document.getElementById("btnDoneBooking");

const hambBtn = document.getElementById("hamb");
const drawerElement = document.getElementById("drawer");

// ==========================================================================
// PART 1 — CINEMATIC WELCOME SEQUENCE (2.5 - 3.5 Seconds)
// Refined Luxury Hospitality Reveal with Skip & Keyboard Controls
// ==========================================================================

function initCinematicWelcome() {
  const welcomeOverlay = document.getElementById("cinematicWelcome");
  const stage1 = document.getElementById("stage1");
  const stage2 = document.getElementById("stage2");
  const stage3 = document.getElementById("stage3");
  const skipBtn = document.getElementById("skipWelcomeBtn");
  const exploreBtn = document.getElementById("welcomeExploreBtn");

  if (!welcomeOverlay) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    welcomeOverlay.style.display = "none";
    return;
  }

  let isDismissed = false;

  function dismissWelcome(targetHash) {
    if (isDismissed) return;
    isDismissed = true;
    welcomeOverlay.classList.add("fade-out");

    setTimeout(() => {
      welcomeOverlay.style.display = "none";
      if (targetHash) {
        const targetEl = document.querySelector(targetHash);
        if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 700);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", () => dismissWelcome(null));
  }

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => dismissWelcome("#menu"));
  }

  welcomeOverlay.classList.add("zooming");

  // Stage 1: Brand reveal (0ms - 900ms)
  if (stage1) stage1.classList.add("active");

  // Stage 2: Atmosphere & Heritage (900ms - 1900ms)
  const timerStage2 = setTimeout(() => {
    if (isDismissed) return;
    if (stage1) stage1.classList.remove("active");
    if (stage2) stage2.classList.add("active");
  }, 900);

  // Stage 3 & 4: Welcome & Restaurant Entrance (1900ms - 3200ms)
  const timerStage3 = setTimeout(() => {
    if (isDismissed) return;
    if (stage2) stage2.classList.remove("active");
    if (stage3) stage3.classList.add("active");
  }, 1900);

  // Auto transition to main website at ~3.2s
  const timerAutoDismiss = setTimeout(() => {
    if (!isDismissed) {
      dismissWelcome(null);
    }
  }, 3200);

  // Quick escape dismissal
  window.addEventListener("keydown", function onWelcomeKey(e) {
    if (e.key === "Escape" && !isDismissed) {
      clearTimeout(timerStage2);
      clearTimeout(timerStage3);
      clearTimeout(timerAutoDismiss);
      dismissWelcome(null);
      window.removeEventListener("keydown", onWelcomeKey);
    }
  });
}

// ==========================================================================
// PART 2 — MENU RENDERER & ACCESSIBLE FOOD CARDS (TACTILE SKETCHBOOK)
// ==========================================================================

function filterMenuItems() {
  if (currentCategory === "all") return menuItems;
  if (currentCategory === "veg") return menuItems.filter(item => item.isVeg);
  if (currentCategory === "nonveg") return menuItems.filter(item => !item.isVeg);
  return menuItems.filter(item => item.tags.includes(currentCategory) || item.cat === currentCategory);
}

function renderMenu() {
  if (!gridElement) return;
  const filtered = filterMenuItems();

  if (filtered.length === 0) {
    gridElement.textContent = "";
    const emptyMsg = document.createElement("div");
    emptyMsg.style.gridColumn = "1/-1";
    emptyMsg.style.textAlign = "center";
    emptyMsg.style.padding = "40px";
    emptyMsg.style.color = "var(--color-ink-muted)";
    emptyMsg.textContent = "No plates available in this category index.";
    gridElement.appendChild(emptyMsg);
    return;
  }

  gridElement.textContent = "";

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "dish-card";
    card.dataset.id = item.id;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${item.name}, ${item.plateNo}, ${item.price}, ${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}`);

    // Thumbnail Wrap with Plate Tag
    const thumbWrap = document.createElement("div");
    thumbWrap.className = "dish-card-thumb";

    const plateTag = document.createElement("span");
    plateTag.className = "dish-card-plate-tag";
    plateTag.textContent = item.plateNo;
    thumbWrap.appendChild(plateTag);

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.loading = "lazy";
    img.width = 400;
    img.height = 300;
    thumbWrap.appendChild(img);

    // Body
    const body = document.createElement("div");
    body.className = "dish-card-body";

    // Title & Dietary Row
    const titleRow = document.createElement("div");
    titleRow.className = "dish-title-row";

    const title = document.createElement("h3");
    title.className = "dish-name";
    title.textContent = item.name;

    const diet = document.createElement("div");
    diet.className = `diet-indicator ${item.isVeg ? "veg" : "nonveg"}`;
    diet.title = item.isVeg ? "Vegetarian" : "Non-Vegetarian";
    const dietBox = document.createElement("span");
    dietBox.className = "diet-box";
    const dietDot = document.createElement("span");
    dietDot.className = "diet-dot";
    dietBox.appendChild(dietDot);
    diet.appendChild(dietBox);

    titleRow.appendChild(title);
    titleRow.appendChild(diet);

    // Description
    const desc = document.createElement("p");
    desc.className = "dish-desc";
    desc.textContent = item.desc;

    // Footer with Price & Inspect CTA
    const footer = document.createElement("div");
    footer.className = "dish-card-footer";

    const price = document.createElement("div");
    price.className = "dish-price";
    price.textContent = item.price;

    const viewBtn = document.createElement("span");
    viewBtn.className = "dish-view-btn";
    viewBtn.textContent = "View Plate →";

    footer.appendChild(price);
    footer.appendChild(viewBtn);

    body.appendChild(titleRow);
    body.appendChild(desc);
    body.appendChild(footer);

    // Curled Page Corner (Tactile Sketchbook Detail)
    const curlCorner = document.createElement("div");
    curlCorner.className = "curled-corner";
    curlCorner.setAttribute("aria-hidden", "true");

    card.appendChild(thumbWrap);
    card.appendChild(body);
    card.appendChild(curlCorner);

    gridElement.appendChild(card);
  });

  if (typeof attachCard3DSpotlights === "function") {
    attachCard3DSpotlights();
  }
}



// Category Tabs Interaction (Editorial Index Navigation)
if (categoriesContainer) {
  categoriesContainer.addEventListener("click", e => {
    const btn = e.target.closest(".cat-pill");
    if (!btn) return;
    document.querySelectorAll(".cat-pill").forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    currentCategory = btn.dataset.cat;
    renderMenu();
  });
}

// ==========================================================================
// PART 3 — ACCESSIBLE FOOD DETAIL MODAL / BOTTOM SHEET (TACTILE SHEET)
// Focus Management, Scroll Locking, Keyboard Controls
// ==========================================================================

function openDishModal(item, triggerEl) {
  if (!item || !modalElement) return;

  modalTriggerElement = triggerEl || document.activeElement;

  const modalImg = document.getElementById("mi");
  modalImg.src = item.img;
  modalImg.alt = item.name;

  const plateKicker = document.getElementById("mPlateKicker");
  if (plateKicker) {
    plateKicker.textContent = `${item.plateNo} · ARCHIVAL FOLIO`;
  }

  document.getElementById("mt").textContent = item.name;
  document.getElementById("md").textContent = item.desc;
  document.getElementById("mp").textContent = item.price;

  const dietLabel = document.getElementById("mc");
  dietLabel.textContent = item.isVeg ? "Vegetarian" : "Non-Vegetarian";

  const dietIndicator = document.getElementById("mdietInd");
  dietIndicator.className = `diet-indicator ${item.isVeg ? "veg" : "nonveg"}`;

  // Reset modal loupe if active
  const modalLoupe = document.getElementById("modalLoupe");
  const modalInspectToggle = document.getElementById("modalInspectToggle");
  if (modalLoupe) modalLoupe.classList.remove("active");
  if (modalInspectToggle) modalInspectToggle.classList.remove("active");

  document.body.classList.add("modal-open");
  modalElement.classList.add("open");
  modalElement.setAttribute("aria-hidden", "false");

  if (modalCloseBtn) {
    modalCloseBtn.focus();
  }
}

function closeDishModal() {
  if (!modalElement) return;
  modalElement.classList.remove("open");
  modalElement.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (modalTriggerElement && typeof modalTriggerElement.focus === "function") {
    modalTriggerElement.focus();
  }
}

// Card Click and Keyboard Open Listeners
function handleCardActivation(card) {
  if (!card) return;
  const item = menuItems.find(x => x.id === card.dataset.id);
  if (item) openDishModal(item, card);
}

if (gridElement) {
  gridElement.addEventListener("click", e => {
    const card = e.target.closest(".dish-card");
    handleCardActivation(card);
  });
  gridElement.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".dish-card");
      if (card) {
        e.preventDefault();
        handleCardActivation(card);
      }
    }
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeDishModal);
if (modalCloseActionBtn) modalCloseActionBtn.addEventListener("click", closeDishModal);

if (modalElement) {
  modalElement.addEventListener("click", e => {
    if (e.target === modalElement) closeDishModal();
  });
}

// ==========================================================================
// PART 4 — INTERIOR GALLERY LIGHTBOX
// ==========================================================================

function openGallery() {
  if (!galleryModalElement) return;
  modalTriggerElement = openGalleryBtn || document.activeElement;
  document.body.classList.add("modal-open");
  galleryModalElement.classList.add("open");
  galleryModalElement.setAttribute("aria-hidden", "false");
  if (galleryCloseBtn) galleryCloseBtn.focus();
}

function closeGallery() {
  if (!galleryModalElement) return;
  galleryModalElement.classList.remove("open");
  galleryModalElement.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (modalTriggerElement && typeof modalTriggerElement.focus === "function") {
    modalTriggerElement.focus();
  }
}

if (openGalleryBtn) openGalleryBtn.addEventListener("click", openGallery);
if (galleryCloseBtn) galleryCloseBtn.addEventListener("click", closeGallery);
if (galleryModalElement) {
  galleryModalElement.addEventListener("click", e => {
    if (e.target === galleryModalElement) closeGallery();
  });
}

// ==========================================================================
// PART 5 — TACTILE DRAGGABLE MAGNIFYING GLASS LOUPE CONTROLLER
// High precision optical lens, touch-safe, zero scroll disruption
// ==========================================================================

let specialZoomLevel = 2.5;
let isSpecialLoupeActive = false;

function initTactileLoupe() {
  const container = document.getElementById("specialPlateContainer");
  const loupe = document.getElementById("specialLoupe");
  const img = document.getElementById("specialPlateImg");
  const inspectBtn = document.getElementById("inspectSpecialBtn");
  const inspectBtnText = document.getElementById("inspectBtnText");
  const zoomInBtn = document.getElementById("zoomInBtn");
  const zoomOutBtn = document.getElementById("zoomOutBtn");
  const zoomResetBtn = document.getElementById("zoomResetBtn");
  const zoomIndicator = document.getElementById("zoomLevelIndicator");
  const loupeTag = document.getElementById("specialLoupeTag");

  if (!container || !loupe || !img) return;

  function updateLoupeBackground(x, y) {
    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const clampedX = Math.max(0, Math.min(x, rect.width));
    const clampedY = Math.max(0, Math.min(y, rect.height));

    loupe.style.left = `${clampedX}px`;
    loupe.style.top = `${clampedY}px`;

    const percX = (clampedX / rect.width) * 100;
    const percY = (clampedY / rect.height) * 100;

    loupe.style.backgroundImage = `url('${img.currentSrc || img.src}')`;
    loupe.style.backgroundSize = `${rect.width * specialZoomLevel}px ${rect.height * specialZoomLevel}px`;
    loupe.style.backgroundPosition = `${percX}% ${percY}%`;
  }

  function setZoom(newZoom) {
    specialZoomLevel = Math.max(1.5, Math.min(newZoom, 4.0));
    if (zoomIndicator) zoomIndicator.textContent = `${specialZoomLevel.toFixed(1)}×`;
    if (loupeTag) loupeTag.textContent = `${specialZoomLevel.toFixed(1)}× TACTILE ZOOM`;
    const rect = container.getBoundingClientRect();
    const currX = parseFloat(loupe.style.left) || rect.width / 2;
    const currY = parseFloat(loupe.style.top) || rect.height / 2;
    updateLoupeBackground(currX, currY);
  }

  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", e => {
      e.stopPropagation();
      setZoom(specialZoomLevel + 0.5);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", e => {
      e.stopPropagation();
      setZoom(specialZoomLevel - 0.5);
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener("click", e => {
      e.stopPropagation();
      setZoom(2.5);
    });
  }

  if (inspectBtn) {
    inspectBtn.addEventListener("click", e => {
      e.stopPropagation();
      isSpecialLoupeActive = !isSpecialLoupeActive;
      loupe.classList.toggle("active", isSpecialLoupeActive);
      inspectBtn.classList.toggle("active", isSpecialLoupeActive);
      if (inspectBtnText) {
        inspectBtnText.textContent = isSpecialLoupeActive ? "Hide Loupe" : "Inspect Spices";
      }
      if (isSpecialLoupeActive) {
        const rect = container.getBoundingClientRect();
        updateLoupeBackground(rect.width / 2, rect.height / 2);
      }
    });
  }

  // Pointer move / dragging support
  container.addEventListener("pointermove", e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!isSpecialLoupeActive) {
      isSpecialLoupeActive = true;
      loupe.classList.add("active");
      if (inspectBtn) inspectBtn.classList.add("active");
      if (inspectBtnText) inspectBtnText.textContent = "Hide Loupe";
    }
    updateLoupeBackground(x, y);
  });

  container.addEventListener("pointerleave", () => {
    // Only auto hide on desktop hover leave
    if (!window.matchMedia("(pointer: coarse)").matches) {
      loupe.classList.remove("active");
      isSpecialLoupeActive = false;
      if (inspectBtn) inspectBtn.classList.remove("active");
      if (inspectBtnText) inspectBtnText.textContent = "Inspect Spices";
    }
  });

  // Modal Dish Magnification Loupe
  const modalImgWrap = document.getElementById("modalImgWrap");
  const modalLoupe = document.getElementById("modalLoupe");
  const modalImg = document.getElementById("mi");
  const modalInspectToggle = document.getElementById("modalInspectToggle");
  let isModalLoupeActive = false;

  if (modalImgWrap && modalLoupe && modalImg) {
    function updateModalLoupe(x, y) {
      const rect = modalImgWrap.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const clampedX = Math.max(0, Math.min(x, rect.width));
      const clampedY = Math.max(0, Math.min(y, rect.height));

      modalLoupe.style.left = `${clampedX}px`;
      modalLoupe.style.top = `${clampedY}px`;

      const percX = (clampedX / rect.width) * 100;
      const percY = (clampedY / rect.height) * 100;

      modalLoupe.style.backgroundImage = `url('${modalImg.src}')`;
      modalLoupe.style.backgroundSize = `${rect.width * 2.5}px ${rect.height * 2.5}px`;
      modalLoupe.style.backgroundPosition = `${percX}% ${percY}%`;
    }

    if (modalInspectToggle) {
      modalInspectToggle.addEventListener("click", e => {
        e.stopPropagation();
        isModalLoupeActive = !isModalLoupeActive;
        modalLoupe.classList.toggle("active", isModalLoupeActive);
        modalInspectToggle.classList.toggle("active", isModalLoupeActive);
        if (isModalLoupeActive) {
          const rect = modalImgWrap.getBoundingClientRect();
          updateModalLoupe(rect.width / 2, rect.height / 2);
        }
      });
    }

    modalImgWrap.addEventListener("pointermove", e => {
      const rect = modalImgWrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (isModalLoupeActive) {
        updateModalLoupe(x, y);
      }
    });

    modalImgWrap.addEventListener("pointerleave", () => {
      if (!window.matchMedia("(pointer: coarse)").matches) {
        modalLoupe.classList.remove("active");
        isModalLoupeActive = false;
        if (modalInspectToggle) modalInspectToggle.classList.remove("active");
      }
    });
  }
}

// ==========================================================================
// PART 6 — BOOK A TABLE FORM (SECURE DOM MANIPULATION & VALIDATION)
// 100% textContent, No Raw innerHTML Injection, Strict Validation
// ==========================================================================

const bookingForm = document.getElementById("bookingForm");
const nameInput = document.getElementById("bName");
const phoneInput = document.getElementById("bPhone");
const dateInput = document.getElementById("bDate");
const timeInput = document.getElementById("bTime");
const guestsInput = document.getElementById("bGuests");
const requestInput = document.getElementById("bRequest");

// Configure minimal date to today (without pre-filling fake date/time)
if (dateInput) {
  const todayStr = new Date().toISOString().split("T")[0];
  dateInput.min = todayStr;
}

function setFieldError(fieldId, errorId, errorMsg) {
  const inputEl = document.getElementById(fieldId);
  const errorEl = document.getElementById(errorId);
  if (!inputEl || !errorEl) return;

  const parentGroup = inputEl.closest(".form-group");
  if (errorMsg) {
    if (parentGroup) parentGroup.classList.add("has-error");
    errorEl.textContent = errorMsg;
    inputEl.setAttribute("aria-invalid", "true");
  } else {
    if (parentGroup) parentGroup.classList.remove("has-error");
    errorEl.textContent = "";
    inputEl.removeAttribute("aria-invalid");
  }
}

function validateBookingForm() {
  let isValid = true;

  // Name validation: 2-60 chars
  const nameVal = nameInput ? nameInput.value.trim() : "";
  if (!nameVal || nameVal.length < 2) {
    setFieldError("bName", "nameError", "Please enter your full name (minimum 2 characters).");
    isValid = false;
  } else {
    setFieldError("bName", "nameError", "");
  }

  // Phone validation: Indian 10-digit mobile number format
  const phoneVal = phoneInput ? phoneInput.value.trim().replace(/[\s-]/g, "") : "";
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  if (!phoneRegex.test(phoneVal)) {
    setFieldError("bPhone", "phoneError", "Please enter a valid 10-digit mobile number.");
    isValid = false;
  } else {
    setFieldError("bPhone", "phoneError", "");
  }

  // Date validation: must be selected and not in past
  const dateVal = dateInput ? dateInput.value : "";
  if (!dateVal) {
    setFieldError("bDate", "dateError", "Please select your preferred reservation date.");
    isValid = false;
  } else {
    const selectedDate = new Date(dateVal);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      setFieldError("bDate", "dateError", "Reservation date cannot be in the past.");
      isValid = false;
    } else {
      setFieldError("bDate", "dateError", "");
    }
  }

  // Time validation: between 11:00 AM and 10:00 PM
  const timeVal = timeInput ? timeInput.value : "";
  if (!timeVal) {
    setFieldError("bTime", "timeError", "Please select a dining time.");
    isValid = false;
  } else {
    const [hrs, mins] = timeVal.split(":").map(Number);
    const totalMinutes = hrs * 60 + mins;
    if (totalMinutes < 660 || totalMinutes > 1320) {
      setFieldError("bTime", "timeError", "Reservations available between 11:00 AM and 10:00 PM.");
      isValid = false;
    } else {
      setFieldError("bTime", "timeError", "");
    }
  }

  // Guests validation
  const guestsVal = guestsInput ? guestsInput.value : "";
  if (!guestsVal) {
    setFieldError("bGuests", "guestsError", "Please specify the party size.");
    isValid = false;
  } else {
    setFieldError("bGuests", "guestsError", "");
  }

  return isValid;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", e => {
    e.preventDefault();

    if (!validateBookingForm()) {
      return;
    }

    const name = nameInput.value.trim().slice(0, 60);
    const phone = phoneInput.value.trim().slice(0, 15);
    const date = dateInput.value;
    const time = timeInput.value;
    const guests = guestsInput.value;
    const request = requestInput ? requestInput.value.trim().slice(0, 200) : "";
    const refCode = "A3-FOLIO-" + Math.floor(1000 + Math.random() * 9000);

    // SECURE DOM CREATION: Zero innerHTML interpolation with user values
    const receipt = document.getElementById("bookingReceipt");
    receipt.textContent = "";

    function appendReceiptLine(label, value) {
      const line = document.createElement("div");
      line.className = "receipt-line";

      const labelSpan = document.createElement("span");
      labelSpan.textContent = label + ":";

      const valStrong = document.createElement("strong");
      valStrong.textContent = value;

      line.appendChild(labelSpan);
      line.appendChild(valStrong);
      receipt.appendChild(line);
    }

    appendReceiptLine("Reservation Ref", "#" + refCode);
    appendReceiptLine("Guest Name", name);
    appendReceiptLine("Contact", phone);
    appendReceiptLine("Date & Time", `${date} at ${time}`);
    appendReceiptLine("Party Size", `${guests} ${guests === "1" ? "Guest" : "Guests"}`);
    if (request) {
      appendReceiptLine("Special Notes", request);
    }

    const successBody = document.getElementById("successModalBody");
    if (successBody) {
      successBody.textContent = `Thank you, ${name}! Your table reservation request has been prepared for the hospitality desk. Please note this website is in digital dining demo mode.`;
    }

    modalTriggerElement = document.getElementById("btnSubmitBooking");
    document.body.classList.add("modal-open");
    bookingSuccessModal.classList.add("open");
    bookingSuccessModal.setAttribute("aria-hidden", "false");

    if (btnDoneBooking) btnDoneBooking.focus();

    bookingForm.reset();
  });
}

function closeSuccessModal() {
  if (!bookingSuccessModal) return;
  bookingSuccessModal.classList.remove("open");
  bookingSuccessModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (modalTriggerElement && typeof modalTriggerElement.focus === "function") {
    modalTriggerElement.focus();
  }
}

if (btnDoneBooking) btnDoneBooking.addEventListener("click", closeSuccessModal);
if (bookingSuccessModal) {
  bookingSuccessModal.addEventListener("click", e => {
    if (e.target === bookingSuccessModal) closeSuccessModal();
  });
}

// ==========================================================================
// PART 7 — MOBILE NAVIGATION DRAWER
// ==========================================================================

if (hambBtn && drawerElement) {
  hambBtn.addEventListener("click", () => {
    const isOpen = drawerElement.classList.toggle("open");
    hambBtn.classList.toggle("active", isOpen);
    hambBtn.setAttribute("aria-expanded", isOpen.toString());
    drawerElement.setAttribute("aria-hidden", (!isOpen).toString());
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  });

  drawerElement.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      drawerElement.classList.remove("open");
      hambBtn.classList.remove("active");
      hambBtn.setAttribute("aria-expanded", "false");
      drawerElement.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  });
}

// Global Escape Key Handler for All Overlays
window.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeDishModal();
    closeGallery();
    closeSuccessModal();
    if (drawerElement && drawerElement.classList.contains("open")) {
      drawerElement.classList.remove("open");
      if (hambBtn) {
        hambBtn.classList.remove("active");
        hambBtn.setAttribute("aria-expanded", "false");
        hambBtn.focus();
      }
      document.body.classList.remove("modal-open");
    }
  }
});

// ==========================================================================
// PART 8 — INTERSECTION OBSERVERS (SCROLL SPY & REVEAL ANIMATIONS)
// Performance Optimized — Zero Continuous Polling Loops
// ==========================================================================

const revealElements = document.querySelectorAll(".reveal-on-scroll");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));

  // Active Nav Link Spy via IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(sec => navObserver.observe(sec));
} else {
  // Fallback for older browsers
  revealElements.forEach(el => el.classList.add("revealed"));
}

// ==========================================================================
// PART 9 — APPLE-STYLE 3D SCROLL PARALLAX & CARD TILT SYSTEM
// Performance Optimized with requestAnimationFrame — Zero jank
// ==========================================================================

// --- Hero Background Parallax on Scroll ---
(function initHeroParallax() {
  const heroBg = document.getElementById("heroBg");
  const heroSection = document.getElementById("home");
  if (!heroBg || !heroSection) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        if (scrollY <= heroHeight) {
          const parallaxOffset = scrollY * 0.35;
          const scale = 1.1 + (scrollY / heroHeight) * 0.08;
          heroBg.style.transform = `translateY(${parallaxOffset}px) scale(${scale})`;
          heroBg.style.filter = `brightness(${Math.max(0.15, 0.35 - (scrollY / heroHeight) * 0.2)}) saturate(1.2)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();

// --- 3D Card Tilt Effect on Hover ---
(function init3DCardTilt() {
  const cards = document.querySelectorAll(".dish-card, .signature-card, .contact-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
})();

// --- Staggered Reveal for Grid Children ---
(function initStaggeredReveal() {
  const grids = document.querySelectorAll(".dishes-grid, .contact-grid");

  if ("IntersectionObserver" in window) {
    const gridObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            child.style.opacity = "0";
            child.style.transform = "translateY(40px)";
            child.style.transition = `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`;
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
              });
            });
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    grids.forEach(grid => gridObserver.observe(grid));
  }
})();

// --- Smooth Section Parallax (sections with data-speed) ---
(function initSectionParallax() {
  const parallaxSections = document.querySelectorAll("[data-speed]");
  if (parallaxSections.length === 0) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        parallaxSections.forEach(section => {
          const speed = parseFloat(section.dataset.speed) || 0.1;
          const rect = section.getBoundingClientRect();
          const offset = rect.top * speed;
          section.style.transform = `translateY(${offset}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
})();

// --- Smooth Navbar Show/Hide on Scroll ---
(function initNavbarScrollBehavior() {
  const header = document.getElementById("header");
  if (!header) return;

  let lastScrollY = 0;
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
          header.style.borderBottomColor = "rgba(255, 255, 255, 0.08)";
          header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
        } else {
          header.style.borderBottomColor = "rgba(255, 255, 255, 0.04)";
          header.style.backgroundColor = "rgba(0, 0, 0, 0.72)";
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// --- Experience Section Image Parallax ---
(function initShowcaseParallax() {
  const showcase = document.querySelector(".experience-showcase");
  const showcaseImg = document.querySelector(".showcase-img");
  if (!showcase || !showcaseImg) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = showcase.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const translateY = (progress - 0.5) * -50;
          showcaseImg.style.transform = `scale(1.1) translateY(${translateY}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// ==========================================================================
// PART 10 — THREE.JS 3D AMBIENT RESTAURANT LIGHTING & VOLUMETRIC SCENE
// Warm orange/amber restaurant illumination, floating embers, 3D cursor light
// ==========================================================================

function init3DRestaurantAtmosphere() {
  try {
    const canvas = document.getElementById("bg-canvas-3d");
    if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 32);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Ambient Lighting (Warm Deep Burgundy/Espresso Base)
  const ambientLight = new THREE.AmbientLight(0x281204, 1.4);
  scene.add(ambientLight);

  // 2. Volumetric Orange & Amber Restaurant Lights
  // Chandelier / Ceiling Pendant Warm Glow (Amber)
  const amberPointLight = new THREE.PointLight(0xff8c00, 3.8, 55, 1.5);
  amberPointLight.position.set(12, 14, 10);
  scene.add(amberPointLight);

  // Deep Hearth / Flame Heat Glow (Orange-Red Warmth)
  const hearthPointLight = new THREE.PointLight(0xff4500, 2.5, 60, 1.6);
  hearthPointLight.position.set(-16, -12, 8);
  scene.add(hearthPointLight);

  // Soft Golden Candle Light
  const candleLight = new THREE.PointLight(0xffbe40, 2.2, 40, 1.8);
  candleLight.position.set(0, -6, 12);
  scene.add(candleLight);

  // Interactive 3D Cursor Light (Follows mouse in 3D perspective space)
  const cursorPointLight = new THREE.PointLight(0xffa726, 3.0, 32, 1.8);
  cursorPointLight.position.set(0, 0, 15);
  scene.add(cursorPointLight);

  // 3. Floating 3D Golden Embers & Bokeh Culinary Particles
  function createGlowTexture() {
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255, 240, 180, 1)");
    gradient.addColorStop(0.25, "rgba(255, 160, 30, 0.85)");
    gradient.addColorStop(0.65, "rgba(240, 90, 0, 0.35)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(pCanvas);
  }

  const particleCount = 220;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 60;
    const y = (Math.random() - 0.5) * 60;
    const z = (Math.random() - 0.5) * 35;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      speedY: 0.015 + Math.random() * 0.035,
      swaySpeed: 0.5 + Math.random() * 1.5,
      swayRadius: 0.3 + Math.random() * 0.8,
      seed: Math.random() * Math.PI * 2
    });
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 2.2,
    map: createGlowTexture(),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // 4. Subtle 3D Luxury Wireframe Geometry
  const ringGeo = new THREE.TorusGeometry(12, 0.15, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffa028,
    transparent: true,
    opacity: 0.15,
    wireframe: true
  });
  const luxuryRing = new THREE.Mesh(ringGeo, ringMat);
  luxuryRing.position.set(0, 0, -5);
  luxuryRing.rotation.x = Math.PI / 3;
  scene.add(luxuryRing);

  const crystalGeo = new THREE.IcosahedronGeometry(7, 1);
  const crystalMat = new THREE.MeshBasicMaterial({
    color: 0xff7010,
    wireframe: true,
    transparent: true,
    opacity: 0.10
  });
  const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
  crystalMesh.position.set(16, -10, -10);
  scene.add(crystalMesh);

  // Mouse & Scroll Interactivity
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let scrollProgress = 0;

  window.addEventListener("mousemove", e => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });

  window.addEventListener("scroll", () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });

  // Animation Loop with Candlelight Breathing
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    if (document.hidden) return;

    const elapsedTime = clock.getElapsedTime();

    // Smooth mouse coordinates
    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    // 1. Oscillate Restaurant Point Lights (Flickering Warm Ambiance)
    amberPointLight.position.x = 12 + Math.sin(elapsedTime * 0.7) * 4;
    amberPointLight.position.y = 14 + Math.cos(elapsedTime * 0.5) * 3;
    amberPointLight.intensity = 3.6 + Math.sin(elapsedTime * 2.2) * 0.4;

    hearthPointLight.position.x = -16 + Math.cos(elapsedTime * 0.6) * 3;
    hearthPointLight.position.y = -12 + Math.sin(elapsedTime * 0.8) * 4;
    hearthPointLight.intensity = 2.4 + Math.cos(elapsedTime * 1.8) * 0.35;

    // Move interactive cursor spotlight in 3D
    cursorPointLight.position.x = mouse.x * 24;
    cursorPointLight.position.y = mouse.y * 18;

    // 2. Camera Parallax & Scroll Depth
    camera.position.x = mouse.x * 3;
    camera.position.y = mouse.y * 2 - scrollProgress * 15;
    camera.position.z = 32 - scrollProgress * 10;
    camera.lookAt(0, -scrollProgress * 12, 0);

    // 3. Float 3D Particles
    const pos = particleGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const v = velocities[i];
      pos[i * 3 + 1] += v.speedY; // rise
      pos[i * 3] += Math.sin(elapsedTime * v.swaySpeed + v.seed) * 0.02; // sway

      // Wrap around when rising past ceiling
      if (pos[i * 3 + 1] > 32) {
        pos[i * 3 + 1] = -32;
        pos[i * 3] = (Math.random() - 0.5) * 60;
      }
    }
    particleGeo.attributes.position.needsUpdate = true;

    // 4. Rotate 3D Geometry
    luxuryRing.rotation.z += 0.002;
    luxuryRing.rotation.y += 0.0015;
    crystalMesh.rotation.x += 0.003;
    crystalMesh.rotation.y += 0.004;

    renderer.render(scene, camera);
  }

  animate();
  } catch (err) {
    console.warn("3D WebGL atmosphere fallback:", err);
  }
}

// ==========================================================================
// PART 11 — INITIALIZATION & INTERACTIVE CARD SPOTLIGHTS
// ==========================================================================

initCinematicWelcome();
renderMenu();
initTactileLoupe();
init3DRestaurantAtmosphere();

// Re-initialize 3D tilt and warm spotlights after menu renders
function attachCard3DSpotlights() {
  const cards = document.querySelectorAll(".dish-card, .contact-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Pass coordinates to CSS for dynamic radial spotlight
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

requestAnimationFrame(attachCard3DSpotlights);