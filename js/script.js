let allProducts = [];

fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    showProducts(allProducts);
  });

function showProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(p => {
    const promoText = p.promo > 0 ? `<p>Promo: ${p.promo}% OFF</p>` : "";
    container.innerHTML += `
      <div class="product-card">
        <img src="images/${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>Kategori: ${p.category}</p>
        <p class="price">Rp ${p.price.toLocaleString("id-ID")}</p>
        ${promoText}
      </div>
    `;
  });
}

function filterProducts(type) {
  let filtered;

  switch(type) {
    case 'new':
      filtered = allProducts.filter(p => p.isNew);
      break;
    case 'best':
      filtered = allProducts.filter(p => p.isBestSeller);
      break;
    case 'promo':
      filtered = allProducts.filter(p => p.promo > 0);
      break;
    default:
      filtered = allProducts;
  }

  showProducts(filtered);
}
