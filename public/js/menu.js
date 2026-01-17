const API_URL = "http://localhost:3000/api/menu";

async function getMenu() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    renderMenu(data);
  } catch (err) {
    console.error("Error fetching menu:", err);
  }
}

function renderMenu(items) {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  items.forEach(item => {
    const imageSrc = item.image ? `/images/${item.image}` : `/images/default.png`;

    const div = document.createElement("div");
    div.classList.add("col-md-4", "mb-4");
    div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${imageSrc}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <p class="price">$${item.price}</p>
          <p class="category">${item.category}</p>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}


window.onload = getMenu;
