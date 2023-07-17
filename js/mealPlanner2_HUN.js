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
    { name: 'Grillezett csirkemell', protein: 31.0, carbs: 0.0, fat: 3.6, calories: 165 },
    { name: 'Tonhal', protein: 30.0, carbs: 0.0, fat: 1.0, calories: 132 },
    { name: 'Tojásfehérje', protein: 11.0, carbs: 0.7, fat: 0.2, calories: 51 },
    { name: 'Görög joghurt', protein: 5.9, carbs: 3.6, fat: 0.4, calories: 59 },
    { name: 'Brokkoli', protein: 2.8, carbs: 6.6, fat: 0.3, calories: 55 },
    { name: 'Spenót', protein: 2.9, carbs: 3.6, fat: 0.4, calories: 23 },
    { name: 'Karfiol', protein: 1.9, carbs: 4.0, fat: 0.3, calories: 25 },
    { name: 'Sovány marhahús', protein: 26.0, carbs: 0.0, fat: 10.0, calories: 176 },
    { name: 'Lazac', protein: 20.0, carbs: 0.0, fat: 13.5, calories: 206 },
    { name: 'Quinoa', protein: 4.4, carbs: 21.3, fat: 1.9, calories: 120 },
    { name: 'Túró', protein: 11.0, carbs: 3.4, fat: 4.3, calories: 98 },
    { name: 'Pulykamell', protein: 29.0, carbs: 0.0, fat: 1.0, calories: 135 },
    { name: 'Spenótsaláta', protein: 2.0, carbs: 2.0, fat: 0.1, calories: 14 },
    { name: 'Cukkini', protein: 1.2, carbs: 3.1, fat: 0.2, calories: 17 },
    { name: 'Tojások', protein: 6.3, carbs: 0.6, fat: 4.8, calories: 68 },
    { name: 'Uborka', protein: 0.7, carbs: 2.4, fat: 0.1, calories: 16 },
    { name: 'Spárga', protein: 2.2, carbs: 3.9, fat: 0.2, calories: 20 },
    { name: 'Garnélarák', protein: 24.0, carbs: 0.0, fat: 0.3, calories: 99 },
    { name: 'Karfiolrizs', protein: 2.0, carbs: 5.0, fat: 0.2, calories: 29 },
    { name: 'Csirkehúsleves', protein: 6.0, carbs: 0.9, fat: 1.9, calories: 38 }
    ];
  
    
    const maintenanceFoods = [
        { name: 'Barna rizs', protein: 2.7, carbs: 23.0, fat: 0.8, calories: 111 },
        { name: 'Édesburgonya', protein: 1.6, carbs: 20.0, fat: 0.1, calories: 86 },
        { name: 'Zabpehely', protein: 13.0, carbs: 68.0, fat: 7.0, calories: 389 },
        { name: 'Teljes kiőrlésű kenyér', protein: 9.4, carbs: 49.0, fat: 2.5, calories: 266 },
        { name: 'Avokádó', protein: 2.0, carbs: 9.0, fat: 14.7, calories: 160 },
        { name: 'Mandula', protein: 21.0, carbs: 22.0, fat: 49.0, calories: 576 },
        { name: 'Túró', protein: 11.0, carbs: 3.4, fat: 4.3, calories: 98 },
        { name: 'Lencse', protein: 9.0, carbs: 20.0, fat: 0.4, calories: 116 },
        { name: 'Pulykamell', protein: 29.0, carbs: 0.0, fat: 1.0, calories: 135 },
        { name: 'Spárga', protein: 2.2, carbs: 3.9, fat: 0.2, calories: 20 },
        { name: 'Quinoa', protein: 4.4, carbs: 21.3, fat: 1.9, calories: 120 },
        { name: 'Uborka', protein: 0.7, carbs: 2.4, fat: 0.1, calories: 16 },
        { name: 'Alma', protein: 0.3, carbs: 13.8, fat: 0.4, calories: 52 },
        { name: 'Joghurt', protein: 3.5, carbs: 4.7, fat: 3.8, calories: 61 },
        { name: 'Répa', protein: 0.9, carbs: 9.6, fat: 0.2, calories: 41 },
        { name: 'Zeller', protein: 0.7, carbs: 2.9, fat: 0.1, calories: 16 },
        { name: 'Karfiolrizs', protein: 2.0, carbs: 5.0, fat: 0.2, calories: 29 },
        { name: 'Görög saláta', protein: 8.0, carbs: 9.0, fat: 9.0, calories: 140 },
        { name: 'Tofu', protein: 8.0, carbs: 2.0, fat: 4.8, calories: 76 },
        { name: 'Csicseriborsó', protein: 8.9, carbs: 27.4, fat: 2.6, calories: 164 }
        ];
    
    
    const bulkingFoods = [
        { name: 'Teljes tej', protein: 3.2, carbs: 4.8, fat: 3.6, calories: 61 },
        { name: 'Mogyoróvaj', protein: 25.1, carbs: 20.0, fat: 50.0, calories: 588 },
        { name: 'Banán', protein: 1.1, carbs: 22.0, fat: 0.2, calories: 96 },
        { name: 'Olívaolaj', protein: 0.0, carbs: 0.0, fat: 100.0, calories: 884 },
        { name: 'Sajt', protein: 25.0, carbs: 1.3, fat: 33.0, calories: 402 },
        { name: 'Marhahús', protein: 26.0, carbs: 0.0, fat: 20.0, calories: 250 },
        { name: 'Sertéshús', protein: 25.0, carbs: 0.0, fat: 20.0, calories: 250 },
        { name: 'Tészta', protein: 12.0, carbs: 75.0, fat: 1.4, calories: 371 },
        { name: 'Dió (pl. mandula, dió)', protein: 15.0, carbs: 7.0, fat: 50.0, calories: 607 },
        { name: 'Krumpli', protein: 2.0, carbs: 17.0, fat: 0.1, calories: 77 },
        { name: 'Rizs', protein: 2.7, carbs: 28.0, fat: 0.3, calories: 130 },
        { name: 'Csirkecomb', protein: 25.6, carbs: 0.0, fat: 19.0, calories: 279 },
        { name: 'Tojások', protein: 6.3, carbs: 0.6, fat: 4.8, calories: 68 },
        { name: 'Gabona (pl. zab, granola)', protein: 8.0, carbs: 60.0, fat: 6.0, calories: 340 },
        { name: 'Tofu', protein: 8.0, carbs: 2.0, fat: 4.8, calories: 76 },
        { name: 'Teljes kiőrlésű tészta', protein: 7.5, carbs: 37.0, fat: 2.0, calories: 200 },
        { name: 'Lazac', protein: 22.0, carbs: 0.0, fat: 13.0, calories: 206 },
        { name: 'Krumplipüré', protein: 2.0, carbs: 15.0, fat: 3.0, calories: 102 },
        { name: 'Bab (pl. fekete bab, vesebab)', protein: 15.0, carbs: 40.0, fat: 1.0, calories: 225 },
        { name: 'Mogyoró', protein: 25.0, carbs: 9.0, fat: 49.0, calories: 567 }
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
  
        const outputHTML = `Név: ${foodName}<br>Kalória: ${cals}<br>Fehérje: ${protein}<br>Szénhidrát: ${carbs}<br>Zsír: ${fat}`;
  
        foodOutput.innerHTML = outputHTML;
      }
    }