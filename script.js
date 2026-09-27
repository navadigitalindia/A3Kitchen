/**
 * A3 Kitchen — Digital Restaurant Menu
 * High-performance, clean UI logic & digital menu catalog
 */

// 1. Menu Dataset
const dishes = [
  // STARTERS
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Starters",
    isVeg: true,
    price: "₹180",
    desc: "Smoky grilled cottage cheese cubes infused with spiced yogurt marinade and roasted herbs.",
    details: "Tender, fresh cottage cheese cubes marinated in Kashmiri chili, crushed coriander, hung yogurt, and mustard oil, then charred to smoky perfection in our traditional clay tandoor. Served with mint chutney and pickled shallots.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 2,
    name: "Chicken 65",
    category: "Starters",
    isVeg: false,
    price: "₹220",
    desc: "Crispy boneless chicken bites tossed with fresh curry leaves, crushed pepper, and green chillies.",
    details: "Authentic southern delicacy featuring tender boneless chicken morsels marinated in spiced cornflour batter, deep fried until crisp, and finished in a smoking wok with fresh curry leaves, mustard seeds, and crushed peppercorns.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 3,
    name: "Veg Manchurian Dry",
    category: "Starters",
    isVeg: true,
    price: "₹170",
    desc: "Crispy vegetable dumplings wok-tossed with ginger, garlic, spring onions, and oriental sauces.",
    details: "Crisp hand-rolled vegetable dumplings made from finely minced cabbage, carrots, and beans, flash-fried and tossed in a savory dark soy and chili glaze garnished with scallions.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: 4,
    name: "Tandoori Chicken",
    category: "Starters",
    isVeg: false,
    price: "₹250",
    desc: "Classic bone-in chicken slow-roasted in our clay oven with house-blended garam masala and lemon butter.",
    details: "Whole chicken cuts deeply scored and marinated overnight in strained curd, degi mirch, kasoori methi, and garlic. Roasted over glowing coals until juicy inside with a delectable smoky crust.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },

  // MAIN COURSE
  {
    id: 5,
    name: "Butter Chicken",
    category: "Main Course",
    isVeg: false,
    price: "₹280",
    desc: "Tender tandoori chicken simmered in a velvety tomato, butter, and cashew nut cream sauce.",
    details: "Succulent shredded tandoori chicken simmered in a slow-cooked makhani gravy enriched with ripe farm tomatoes, white butter, fragrant fenugreek leaves, and silky cashew cream.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    isVeg: true,
    price: "₹240",
    desc: "Soft paneer cubes bathed in a rich, mildly spiced gravy of tomatoes, butter, and aromatic spices.",
    details: "Melt-in-mouth cottage cheese simmered in a fragrant tomato-cashew reduction, tempered with cumin and topped with fresh dairy cream and dried fenugreek.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: 7,
    name: "Dal Makhani",
    category: "Main Course",
    isVeg: true,
    price: "₹210",
    desc: "Slow-cooked black lentils and kidney beans simmered overnight with cream and gentle spices.",
    details: "Traditional Punjabi black urad lentils slow-cooked over gentle embers for 12 hours with vine-ripened tomatoes, fresh ginger, churned butter, and cream.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 8,
    name: "Mutton Rogan Josh",
    category: "Main Course",
    isVeg: false,
    price: "₹340",
    desc: "Kashmiri-style tender braised lamb cooked in aromatic gravy flavored with fennel and dry ginger.",
    details: "Prime tender mutton pieces slow-braised in a vibrant, jewel-toned gravy scented with whole Kashmiri spices, ratan jot, fennel seeds, and shallot broth.",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },

  // BIRYANI
  {
    id: 9,
    name: "Special Chicken Biryani",
    category: "Biryani",
    isVeg: false,
    price: "₹260",
    desc: "Aromatic long-grain basmati rice layered with spiced chicken, caramelized onions, and fresh mint.",
    details: "A3 Kitchen's signature dish: fragrant aged basmati rice cooked on dum in a sealed pot with marinated tender chicken, saffron milk, brown onions, and whole cardamom.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 10,
    name: "Hyderabadi Mutton Biryani",
    category: "Biryani",
    isVeg: false,
    price: "₹320",
    desc: "Royal dum-cooked biryani featuring juicy cuts of mutton, saffron essence, and royal spices.",
    details: "Prepared according to traditional royal recipes: tender mutton marinated with yogurt, raw papaya, and roasted spices, layered with fluffy basmati and slow-steamed to perfection.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 11,
    name: "Subz Dum Biryani",
    category: "Biryani",
    isVeg: true,
    price: "₹220",
    desc: "Garden fresh seasonal vegetables cooked with long-grain basmati rice, mint, and saffron infusion.",
    details: "Fluffy basmati rice layered with spiced florets of cauliflower, green peas, carrots, french beans, and paneer, sealed with dough and steamed on gentle dum heat.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },

  // CHINESE
  {
    id: 12,
    name: "Chilli Chicken",
    category: "Chinese",
    isVeg: false,
    price: "₹230",
    desc: "Crisp chicken pieces wok-tossed with crunchy bell peppers, green chillies, and savory soy glaze.",
    details: "Classic Indo-Chinese preparation of wok-seared marinated chicken cubes tossed with diced sweet onions, bell peppers, fresh garlic, and spicy umami soy seasoning.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: 13,
    name: "Veg Hakka Noodles",
    category: "Chinese",
    isVeg: true,
    price: "₹170",
    desc: "Classic thin wheat noodles tossed on high heat with crisp julienned vegetables and light seasoning.",
    details: "Hand-tossed eggless noodles stir-fried in a smoking wok with finely sliced cabbage, bell peppers, spring greens, and a touch of white pepper and light soy.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: 14,
    name: "Veg Fried Rice",
    category: "Chinese",
    isVeg: true,
    price: "₹160",
    desc: "Fragrant rice tossed in a smoking wok with crisp vegetables, aromatic garlic, and sesame oil.",
    details: "Steamed grain-separated rice stir-fried over roaring flame with diced carrots, beans, baby corn, spring onions, and light seasoning with fragrant sesame oil.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },

  // BEVERAGES
  {
    id: 15,
    name: "Fresh Lime Soda",
    category: "Beverages",
    isVeg: true,
    price: "₹80",
    desc: "Chilled sparkling soda infused with freshly squeezed lime juice, mint, and crushed rock salt.",
    details: "Handcrafted refreshing cooler prepared with sparkling club soda, freshly pressed lime, a dash of roasted cumin, rock salt, and cane syrup.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: 16,
    name: "Mango Lassi",
    category: "Beverages",
    isVeg: true,
    price: "₹110",
    desc: "Thick creamy yogurt smoothie blended with ripe Alphonso mango pulp and fragrant green cardamom.",
    details: "Rich, chilled yogurt smoothie blended silky smooth with pure seasonal mango puree, crushed cardamom seeds, and garnished with slivered almonds.",
    image: "https://images.unsplash.com/photo-1570701564993-e00652af8aa7?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 17,
    name: "Masala Chai",
    category: "Beverages",
    isVeg: true,
    price: "₹60",
    desc: "Brewed Assam tea steeped with fresh ginger, crushed green cardamom, cinnamon, and whole milk.",
    details: "Authentic slow-simmered Indian milk tea infused with hand-crushed whole spices: fresh ginger root, green cardamom pods, cinnamon bark, and cloves.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },

  // DESSERTS
  {
    id: 18,
    name: "Gulab Jamun",
    category: "Desserts",
    isVeg: true,
    price: "₹90",
    desc: "Warm melt-in-mouth milk dumplings soaked in rose water and green cardamom scented sugar syrup.",
    details: "Golden-brown dumplings made from reduced mawa milk solids, gently fried and soaked in warm, fragrant rose water and cardamom sugar syrup. Served two pieces per portion.",
    image: "https://images.unsplash.com/photo-1666190094762-72b6c4d8f2ad?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: 19,
    name: "Royal Rasmalai",
    category: "Desserts",
    isVeg: true,
    price: "₹120",
    desc: "Delicate cottage cheese patties poached in sweetened, saffron and pistachio infused condensed milk.",
    details: "Soft, spongy chhena patties poached in light sugar broth and immersed in chilled, thickened saffron rabdi flavored with cardamom, rose water, and slivered pistachios.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: 20,
    name: "Kesar Pista Kulfi",
    category: "Desserts",
    isVeg: true,
    price: "₹110",
    desc: "Traditional dense Indian ice cream enriched with pure Kashmiri saffron threads and chopped pistachios.",
    details: "Authentic slow-reduced whole milk frozen in conical moulds, enriched with golden saffron threads, toasted pistachio nuts, and cardamom.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  }
];

// 2. DOM Elements
const dishGrid = document.getElementById("dishGrid");
const menuCount = document.getElementById("menuCount");
const activeCategoryHeading = document.getElementById("activeCategoryHeading");
const categoryTabs = document.querySelectorAll(".category-tab");

// Food Details Modal Elements
const foodModal = document.getElementById("foodModal");
const closeFoodModal = document.getElementById("closeFoodModal");
const closeFoodBackdrop = document.getElementById("closeFoodBackdrop");
const modalFoodImg = document.getElementById("modalFoodImg");
const modalFoodDiet = document.getElementById("modalFoodDiet");
const modalFoodDietLabel = document.getElementById("modalFoodDietLabel");
const modalFoodCategory = document.getElementById("modalFoodCategory");
const modalDishTitle = document.getElementById("modalDishTitle");
const modalDishDesc = document.getElementById("modalDishDesc");
const modalDishPrice = document.getElementById("modalDishPrice");

// Table Booking Modal Elements
const bookingModal = document.getElementById("bookingModal");
const openBooking = document.getElementById("openBooking");
const closeBooking = document.getElementById("closeBooking");
const closeBookingBackdrop = document.getElementById("closeBookingBackdrop");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

// Mobile Drawer Elements
const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// 3. Render Food Cards in Menu Grid
function renderDishes(filter = "All") {
  let filtered = [];

  if (filter === "All") {
    filtered = dishes;
    activeCategoryHeading.textContent = "All Dishes";
  } else if (filter === "Veg") {
    filtered = dishes.filter(d => d.isVeg === true);
    activeCategoryHeading.textContent = "Vegetarian Selections";
  } else if (filter === "Non-Veg") {
    filtered = dishes.filter(d => d.isVeg === false);
    activeCategoryHeading.textContent = "Non-Vegetarian Specialties";
  } else {
    filtered = dishes.filter(d => d.category.toLowerCase() === filter.toLowerCase());
    activeCategoryHeading.textContent = filter;
  }

  // Update Item Count
  menuCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? "dish" : "dishes"}`;

  // Render Grid
  dishGrid.innerHTML = filtered.map(dish => `
    <article class="dish-card" data-dish-id="${dish.id}" tabindex="0" role="button" aria-label="View details for ${dish.name}">
      <div class="dish-image-wrap">
        <img class="dish-image" src="${dish.image}" alt="${dish.name}" loading="lazy" />
        ${dish.isPopular ? '<span class="dish-badge-popular">Chef\'s Pick</span>' : ''}
      </div>
      <div class="dish-body">
        <div class="dish-header-row">
          <span class="diet-indicator ${dish.isVeg ? 'veg' : 'non-veg'}" title="${dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
          <span class="dish-category-tag">${dish.category}</span>
        </div>
        <h4 class="dish-name">${dish.name}</h4>
        <p class="dish-desc">${dish.desc}</p>
        <div class="dish-footer">
          <span class="dish-price">${dish.price}</span>
          <span class="dish-view-hint">Details</span>
        </div>
      </div>
    </article>
  `).join("");

  // Attach click & enter listeners to new cards
  document.querySelectorAll(".dish-card").forEach(card => {
    const dishId = parseInt(card.dataset.dishId, 10);
    const dish = dishes.find(d => d.id === dishId);

    if (dish) {
      card.addEventListener("click", () => openFoodDetail(dish));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openFoodDetail(dish);
        }
      });
    }
  });
}

// 4. Food Detail Modal Controller
function openFoodDetail(dish) {
  modalFoodImg.src = dish.image;
  modalFoodImg.alt = dish.name;
  modalFoodDiet.className = `diet-indicator ${dish.isVeg ? 'veg' : 'non-veg'}`;
  modalFoodDietLabel.textContent = dish.isVeg ? "Vegetarian" : "Non-Vegetarian";
  modalFoodCategory.textContent = dish.category;
  modalDishTitle.textContent = dish.name;
  modalDishDesc.textContent = dish.details;
  modalDishPrice.textContent = dish.price;

  foodModal.classList.add("open");
  foodModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeFoodDetail() {
  foodModal.classList.remove("open");
  foodModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeFoodModal.addEventListener("click", closeFoodDetail);
closeFoodBackdrop.addEventListener("click", closeFoodDetail);

// 5. Category Tab Switching
categoryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    categoryTabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const category = tab.dataset.category;
    renderDishes(category);
  });
});

// 6. Booking Modal Controller
function setBookingModal(isOpen) {
  bookingModal.classList.toggle("open", isOpen);
  bookingModal.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";

  if (isOpen) {
    formMessage.textContent = "";
    const nameInput = document.getElementById("bookName");
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
  }
}

openBooking.addEventListener("click", () => setBookingModal(true));
closeBooking.addEventListener("click", () => setBookingModal(false));
closeBookingBackdrop.addEventListener("click", () => setBookingModal(false));

// Booking Form Submission (Demo mode with real client confirmation feedback)
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("bookName").value.trim();
  const guests = document.getElementById("bookGuests").value;
  const date = document.getElementById("bookDate").value;
  const time = document.getElementById("bookTime").value;

  if (!name) {
    formMessage.textContent = "Please enter your name.";
    return;
  }

  // Format date nicely if available
  let formattedDate = date;
  if (date) {
    const parts = date.split("-");
    if (parts.length === 3) formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  formMessage.innerHTML = `Thank you, <strong>${name}</strong>! Your reservation request for <strong>${guests}</strong> on <strong>${formattedDate || "selected date"}</strong> at <strong>${time || "selected time"}</strong> has been received.<br><small style="color:var(--color-text-muted-dark); display:block; margin-top:6px;">This is a demonstration menu; our restaurant team would confirm your table via WhatsApp or SMS in live deployment.</small>`;

  bookingForm.reset();
});

// 7. Global Keyboard (Escape closes any open modal)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (foodModal.classList.contains("open")) closeFoodDetail();
    if (bookingModal.classList.contains("open")) setBookingModal(false);
    if (mobileDrawer.classList.contains("open")) toggleMobileDrawer(false);
  }
});

// 8. Mobile Navigation Drawer Controller
function toggleMobileDrawer(forceState) {
  const willOpen = typeof forceState === "boolean" ? forceState : !mobileDrawer.classList.contains("open");
  mobileDrawer.classList.toggle("open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  mobileDrawer.setAttribute("aria-hidden", String(!willOpen));
  document.body.style.overflow = willOpen ? "hidden" : "";
}

menuToggle.addEventListener("click", () => toggleMobileDrawer());

mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMobileDrawer(false);
  });
});

// Close mobile drawer on desktop resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 820 && mobileDrawer.classList.contains("open")) {
    toggleMobileDrawer(false);
  }
});

// 9. Scrollspy for Desktop Navigation
const sections = document.querySelectorAll("main > section, footer");
const navLinks = document.querySelectorAll(".desktop-nav .nav-link");

window.addEventListener("scroll", () => {
  let currentId = "home";
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollPosition >= top && scrollPosition < top + height) {
      currentId = section.getAttribute("id") || currentId;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute("href").replace("#", "");
    if (href === currentId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}, { passive: true });

// 10. Initial Render
renderDishes("All");
