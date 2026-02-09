// Full car inventory (add all cars with images)
// Sample Car Inventory Expanded
const cars = [
  { brand: "Audi", model: "A4", year: 2021, price: 27000000, color: "Black", img: "images/audi-a4.jpg" },
  { brand: "Audi", model: "Q7", year: 2022, price: 45000000, color: "White", img: "images/audi-q7.jpg" },
  { brand: "Volkswagen", model: "Tiguan", year: 2021, price: 23500000, color: "Blue", img: "images/volkswagen-tiguan.jpg" },
  { brand: "Volkswagen", model: "Passat", year: 2020, price: 19500000, color: "Silver", img: "images/volkswagen-passat.jpg" },
  { brand: "Chevrolet", model: "Malibu", year: 2021, price: 18900000, color: "Red", img: "images/chevrolet-malibu.jpg" },
  { brand: "Chevrolet", model: "Tahoe", year: 2022, price: 41000000, color: "Black", img: "images/chevrolet-tahoe.jpg" },
  { brand: "Peugeot", model: "3008", year: 2021, price: 17000000, color: "Gray", img: "images/peugeot-3008.jpg" },
  { brand: "Peugeot", model: "508", year: 2020, price: 15800000, color: "White", img: "images/peugeot-508.jpg" },
  { brand: "Jeep", model: "Wrangler", year: 2022, price: 39000000, color: "Green", img: "images/jeep-wrangler.jpg" },
  { brand: "Jeep", model: "Grand Cherokee", year: 2021, price: 36500000, color: "Black", img: "images/jeep-grand-cherokee.jpg" },
  { brand: "Mazda", model: "CX-5", year: 2022, price: 20500000, color: "Red", img: "images/mazda-cx5.jpg" },
  { brand: "Mazda", model: "6", year: 2020, price: 17200000, color: "Silver", img: "images/mazda-6.jpg" },
  { brand: "Subaru", model: "Forester", year: 2021, price: 19900000, color: "White", img: "images/subaru-forester.jpg" },
  { brand: "Subaru", model: "Outback", year: 2022, price: 22800000, color: "Blue", img: "images/subaru-outback.jpg" },
  { brand: "Toyota", model: "Corolla", year: 2021, price: 14200000, color: "White", img: "images/toyota-corolla.jpg" },
  { brand: "Toyota", model: "Camry", year: 2020, price: 18000000, color: "Black", img: "images/toyota-camry.jpg" },
  { brand: "Toyota", model: "Highlander", year: 2022, price: 29000000, color: "Silver", img: "images/toyota-highlander.jpg" },
  { brand: "Lexus", model: "RX 350", year: 2022, price: 28000000, color: "Gray", img: "images/lexus-rx350.jpg" },
  { brand: "Lexus", model: "ES 350", year: 2021, price: 26500000, color: "White", img: "images/lexus-es350.jpg" },
  { brand: "Mercedes Benz", model: "C300", year: 2021, price: 32000000, color: "White", img: "images/mercedes-c300.jpg" },
  { brand: "Mercedes Benz", model: "E350", year: 2022, price: 38000000, color: "Black", img: "images/mercedes-e350.jpg" },
  { brand: "BMW", model: "X5", year: 2021, price: 35000000, color: "Blue", img: "images/bmw-x5.jpg" },
  { brand: "BMW", model: "530i", year: 2020, price: 30000000, color: "Black", img: "images/bmw-530i.jpg" },
  { brand: "Honda", model: "Accord", year: 2019, price: 15500000, color: "Gray", img: "images/honda-accord.jpg" },
  { brand: "Honda", model: "CR-V", year: 2022, price: 21000000, color: "Red", img: "images/honda-crv.jpg" },
  { brand: "Range Rover", model: "Evoque", year: 2022, price: 42000000, color: "Silver", img: "images/range-rover-evoque.jpg" },
  { brand: "Ford", model: "Explorer", year: 2020, price: 22000000, color: "Red", img: "images/ford-explorer.jpg" },
  { brand: "Hyundai", model: "Tucson", year: 2022, price: 19000000, color: "White", img: "images/hyundai-tucson.jpg" },
  { brand: "Kia", model: "Sportage", year: 2021, price: 17500000, color: "Black", img: "images/kia-sportage.jpg" },
  { brand: "Nissan", model: "Altima", year: 2020, price: 16800000, color: "Brown", img: "images/nissan-altima.jpg" },
  { brand: "Nissan", model: "Rogue", year: 2021, price: 20000000, color: "Silver", img: "images/nissan-rogue.jpg" },
  { brand: "Porsche", model: "Cayenne", year: 2022, price: 55000000, color: "White", img: "images/porsche-cayenne.jpg" },
  { brand: "Tesla", model: "Model 3", year: 2022, price: 32500000, color: "Red", img: "images/tesla-model3.jpg" },
  { brand: "Tesla", model: "Model X", year: 2022, price: 75000000, color: "White", img: "images/tesla-modelx.jpg" },
  { brand: "Ferrari", model: "Portofino", year: 2021, price: 120000000, color: "Red", img: "images/ferrari-portofino.jpg" },
  { brand: "Lamborghini", model: "Urus", year: 2022, price: 150000000, color: "Yellow", img: "images/lamborghini-urus.jpg" }
];
];

let currentPage = 1;
const carsPerPage = 9;

function displayCars() {
  const start = (currentPage - 1) * carsPerPage;
  const end = start + carsPerPage;
  const carGrid = document.getElementById("car-grid");
  if (!carGrid) return;
  carGrid.innerHTML = "";
  cars.slice(start, end).forEach(car => {
    const card = document.createElement("div");
    card.classList.add("bg-white shadow-lg rounded p-4 flex flex-col items-center");
    card.innerHTML = `
      <img src="${car.img}" alt="${car.brand} ${car.model}" class="w-full h-48 object-cover mb-4 rounded">
      <h3 class="text-xl font-bold mb-2">${car.brand} ${car.model}</h3>
      <p>Year: ${car.year}</p>
      <p>Color: ${car.color}</p>
      <p>Price: ₦${car.price.toLocaleString()}</p>
      <button onclick="orderCar('${car.brand} ${car.model} ${car.year} ${car.color}')"
        class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Order</button>
    `;
    carGrid.appendChild(card);
  });
}

document.getElementById("prevBtn")?.addEventListener("click", () => {
  if(currentPage > 1) { currentPage--; displayCars(); }
});
document.getElementById("nextBtn")?.addEventListener("click", () => {
  if(currentPage * carsPerPage < cars.length) { currentPage++; displayCars(); }
});

function orderCar(carName) {
  alert(`You selected ${carName}. Proceed to order.`);
}
