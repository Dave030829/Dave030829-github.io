document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown_menu');

  toggleBtn.onclick = function(){
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');

      toggleBtnIcon.className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  }
});

const cuttingFoods = [
  { name: 'Grilled Chicken Breast', protein: 31.0, carbs: 0.0, fat: 3.6, calories: 165 },
  { name: 'Tuna', protein: 30.0, carbs: 0.0, fat: 1.0, calories: 132 },
  { name: 'Egg Whites', protein: 11.0, carbs: 0.7, fat: 0.2, calories: 51 },
  { name: 'Greek Yogurt', protein: 5.9, carbs: 3.6, fat: 0.4, calories: 59 },
  { name: 'Broccoli', protein: 2.8, carbs: 6.6, fat: 0.3, calories: 55 },
  { name: 'Spinach', protein: 2.9, carbs: 3.6, fat: 0.4, calories: 23 },
  { name: 'Cauliflower', protein: 1.9, carbs: 4.0, fat: 0.3, calories: 25 },
  { name: 'Lean Beef', protein: 26.0, carbs: 0.0, fat: 10.0, calories: 176 },
  { name: 'Salmon', protein: 20.0, carbs: 0.0, fat: 13.5, calories: 206 },
  { name: 'Quinoa', protein: 4.4, carbs: 21.3, fat: 1.9, calories: 120 },
  { name: 'Cottage Cheese', protein: 11.0, carbs: 3.4, fat: 4.3, calories: 98 },
  { name: 'Turkey Breast', protein: 29.0, carbs: 0.0, fat: 1.0, calories: 135 },
  { name: 'Spinach Salad', protein: 2.0, carbs: 2.0, fat: 0.1, calories: 14 },
  { name: 'Zucchini', protein: 1.2, carbs: 3.1, fat: 0.2, calories: 17 },
  { name: 'Eggs', protein: 6.3, carbs: 0.6, fat: 4.8, calories: 68 },
  { name: 'Cucumbers', protein: 0.7, carbs: 2.4, fat: 0.1, calories: 16 },
  { name: 'Asparagus', protein: 2.2, carbs: 3.9, fat: 0.2, calories: 20 },
  { name: 'Shrimp', protein: 24.0, carbs: 0.0, fat: 0.3, calories: 99 },
  { name: 'Cauliflower Rice', protein: 2.0, carbs: 5.0, fat: 0.2, calories: 29 },
  { name: 'Chicken Broth', protein: 6.0, carbs: 0.9, fat: 1.9, calories: 38 }
];

  
  const maintenanceFoods = [
    { name: 'Brown Rice', protein: 2.7, carbs: 23.0, fat: 0.8, calories: 111 },
    { name: 'Sweet Potatoes', protein: 1.6, carbs: 20.0, fat: 0.1, calories: 86 },
    { name: 'Oats', protein: 13.0, carbs: 68.0, fat: 7.0, calories: 389 },
    { name: 'Whole Wheat Bread', protein: 9.4, carbs: 49.0, fat: 2.5, calories: 266 },
    { name: 'Avocado', protein: 2.0, carbs: 9.0, fat: 14.7, calories: 160 },
    { name: 'Almonds', protein: 21.0, carbs: 22.0, fat: 49.0, calories: 576 },
    { name: 'Cottage Cheese', protein: 11.0, carbs: 3.4, fat: 4.3, calories: 98 },
    { name: 'Lentils', protein: 9.0, carbs: 20.0, fat: 0.4, calories: 116 },
    { name: 'Turkey Breast', protein: 29.0, carbs: 0.0, fat: 1.0, calories: 135 },
    { name: 'Asparagus', protein: 2.2, carbs: 3.9, fat: 0.2, calories: 20 },
    { name: 'Quinoa', protein: 4.4, carbs: 21.3, fat: 1.9, calories: 120 },
    { name: 'Cucumbers', protein: 0.7, carbs: 2.4, fat: 0.1, calories: 16 },
    { name: 'Apples', protein: 0.3, carbs: 13.8, fat: 0.4, calories: 52 },
    { name: 'Yogurt', protein: 3.5, carbs: 4.7, fat: 3.8, calories: 61 },
    { name: 'Carrots', protein: 0.9, carbs: 9.6, fat: 0.2, calories: 41 },
    { name: 'Celery', protein: 0.7, carbs: 2.9, fat: 0.1, calories: 16 },
    { name: 'Cauliflower Rice', protein: 2.0, carbs: 5.0, fat: 0.2, calories: 29 },
    { name: 'Greek Salad', protein: 8.0, carbs: 9.0, fat: 9.0, calories: 140 },
    { name: 'Tofu', protein: 8.0, carbs: 2.0, fat: 4.8, calories: 76 },
    { name: 'Chickpeas', protein: 8.9, carbs: 27.4, fat: 2.6, calories: 164 }
  ];
  
  
  const bulkingFoods = [
    { name: 'Whole Milk', protein: 3.2, carbs: 4.8, fat: 3.6, calories: 61 },
    { name: 'Peanut Butter', protein: 25.1, carbs: 20.0, fat: 50.0, calories: 588 },
    { name: 'Bananas', protein: 1.1, carbs: 22.0, fat: 0.2, calories: 96 },
    { name: 'Olive Oil', protein: 0.0, carbs: 0.0, fat: 100.0, calories: 884 },
    { name: 'Cheese', protein: 25.0, carbs: 1.3, fat: 33.0, calories: 402 },
    { name: 'Beef', protein: 26.0, carbs: 0.0, fat: 20.0, calories: 250 },
    { name: 'Pork', protein: 25.0, carbs: 0.0, fat: 20.0, calories: 250 },
    { name: 'Pasta', protein: 12.0, carbs: 75.0, fat: 1.4, calories: 371 },
    { name: 'Nuts (e.g., almonds, walnuts)', protein: 15.0, carbs: 7.0, fat: 50.0, calories: 607 },
    { name: 'Potatoes', protein: 2.0, carbs: 17.0, fat: 0.1, calories: 77 },
    { name: 'Rice', protein: 2.7, carbs: 28.0, fat: 0.3, calories: 130 },
    { name: 'Chicken Thighs', protein: 25.6, carbs: 0.0, fat: 19.0, calories: 279 },
    { name: 'Eggs', protein: 6.3, carbs: 0.6, fat: 4.8, calories: 68 },
    { name: 'Cereal (e.g., oats, granola)', protein: 8.0, carbs: 60.0, fat: 6.0, calories: 340 },
    { name: 'Tofu', protein: 8.0, carbs: 2.0, fat: 4.8, calories: 76 },
    { name: 'Whole Wheat Pasta', protein: 7.5, carbs: 37.0, fat: 2.0, calories: 200 },
    { name: 'Salmon', protein: 22.0, carbs: 0.0, fat: 13.0, calories: 206 },
    { name: 'Mashed Potatoes', protein: 2.0, carbs: 15.0, fat: 3.0, calories: 102 },
    { name: 'Beans (e.g., black beans, kidney beans)', protein: 15.0, carbs: 40.0, fat: 1.0, calories: 225 },
    { name: 'Peanuts', protein: 25.0, carbs: 9.0, fat: 49.0, calories: 567 }
  ];

  function printRandomFood() {
    const cuttingRadio = document.getElementById('cutting');
    const maintenanceRadio = document.getElementById('maintenance');
    const bulkingRadio = document.getElementById('bulking');
    const foodOutput = document.getElementById('food-output');

    let selectedFoodArray;

    if (cuttingRadio.checked) {
      selectedFoodArray = cuttingFoods;
    } else if (maintenanceRadio.checked) {
      selectedFoodArray = maintenanceFoods;
    } else if (bulkingRadio.checked) {
      selectedFoodArray = bulkingFoods;
    }

    if (selectedFoodArray) {
      const randomIndex = Math.floor(Math.random() * selectedFoodArray.length);
      const randomFood = selectedFoodArray[randomIndex];

      const foodName = randomFood.name;
      const cals = randomFood.calories;
      const protein = randomFood.protein;
      const carbs = randomFood.carbs;
      const fat = randomFood.fat;

      const outputHTML = `Name: ${foodName}<br>Calories: ${cals}<br>Protein: ${protein}<br>Carbs: ${carbs}<br>Fats: ${fat}`;

      foodOutput.innerHTML = outputHTML;
    }
  }