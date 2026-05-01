// ============================================
// Функція "Діалог з користувачем"
// Використовує змінні, умовне розгалуження, цикл
// ============================================
function userDialog() {
    // Вступне повідомлення
    alert("Survey: Your car preferences\nTell us about yourself and your car preferences. This will help us better tailor information for you.");

    // 1. Змінні
    let userName = prompt("Please enter your name:");

    // 2. Умовне розгалуження
    if (userName === null) {
        alert("You canceled the input. Goodbye!");
        return;
    }

    if (userName.trim() === "") {
        alert("Name cannot be empty! You didn't enter your data.");
        return;
    }

    let continueDialog = true;

   
    while (continueDialog) {
        let carBody = "";
        let engineType = "";

        
        let q1 = prompt(
            "Dear " + userName + ", which body type do you like the most?\n" +
            "1 - Sedan\n" +
            "2 - SUV\n" +
            "3 - Hatchback"
        );

        if (q1 === null) {
            alert("You interrupted the survey.");
            break;
        } else if (q1 === "1") {
            carBody = "Sedan";
        } else if (q1 === "2") {
            carBody = "SUV";
        } else if (q1 === "3") {
            carBody = "Hatchback";
        } else {
            alert("Invalid choice. By default, we recorded: Sedan.");
            carBody = "Sedan";
        }

       
        let q2 = prompt(
            "Which engine type would you choose for your car?\n" +
            "1 - Classic (Petrol / Diesel)\n" +
            "2 - Electric\n" +
            "3 - Hybrid"
        );

        if (q2 === null) {
            alert("You interrupted the survey.");
            break;
        } else if (q2 === "1") {
            engineType = "Petrol / Diesel";
        } else if (q2 === "2") {
            engineType = "Electric";
        } else if (q2 === "3") {
            engineType = "Hybrid";
        } else {
            alert("Invalid choice. By default, we recorded: Hybrid.");
            engineType = "Hybrid";
        }

        
        let resultMessage = "Thank you for your answers, " + userName + "!\n\nYour profile:\n";
        resultMessage += "Favorite body type: " + carBody + "\n";
        resultMessage += "Engine type: " + engineType + "\n\n";

        if (engineType === "Electric") {
            resultMessage += "Great! We will prepare the latest information on charging stations and new eco-friendly cars for you.";
        } else {
            resultMessage += "Excellent choice! We will find the best deals and reviews for cars with this engine for you.";
        }

        alert(resultMessage);

        
        let repeatDialog = confirm("Would you like to fill out the survey again to change your preferences?");
        
        if (!repeatDialog) {
            alert("Thank you for your time! Information saved.");
            continueDialog = false; 
        }
    }
}



// Функція виводу інформації про розробника

function showDeveloperInfo(surname, name, position = "Developer") {
    let info = "Developer Information:\n\n" +
               "Surname: " + surname + "\n" +
               "Name: " + name + "\n" +
               "Position: " + position;
    alert(info);
}


// Функція порівняння двох рядків

function compareStrings(str1, str2) {
    let result;
    
    if (str1.length > str2.length) {
        result = "The first string is longer:\n\"" + str1 + "\"\n\nLength: " + str1.length;
    } else if (str2.length > str1.length) {
        result = "The second string is longer:\n\"" + str2 + "\"\n\nLength: " + str2.length;
    } else {
        result = "Both strings have the same length:\n" +
                 "\"" + str1 + "\" = " + str1.length + " characters";
    }
    
    alert(result);
}


// Функція зміни фону на 30 секунд
function changeBgFor30Seconds() {
  
    let originalBg = document.body.style.backgroundColor;
    
   
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    
  
    alert("Background changed to color: " + randomColor + "\n\nThe original background will be restored in 30 seconds.");
    

    setTimeout(function() {
        document.body.style.backgroundColor = originalBg;
        alert("Background restored to original!");
    }, 30000);
}


// Функція перенаправлення на іншу сторінку
function redirectToDiesel() {
    if (confirm("Are you sure you want to go to the 'Diesel' page?")) {
        location.href = "diesel-cars.html";
    }
}

function redirectToEV() {
    if (confirm("Are you sure you want to go to the 'EV' page?")) {
        location.href = "electric-cars.html";
    }
}

function redirectToBrands() {
    if (confirm("Are you sure you want to go to the 'Brands' page?")) {
        location.href = "brands.html";
    }
}


// Функції для інтерактивних інструментів сайту



const carModels = {
    "BMW": ["BMW 3 Series", "BMW 5 Series", "BMW X3", "BMW X5", "BMW M440i"],
    "Mercedes": ["Mercedes C-Class", "Mercedes E-Class", "Mercedes GLE", "Mercedes S-Class", "Mercedes AMG GT"],
    "Audi": ["Audi A4", "Audi A6", "Audi Q5", "Audi Q7", "Audi RS6"],
    "Volkswagen": ["Volkswagen Golf", "Volkswagen Passat", "Volkswagen Tiguan", "Volkswagen ID.4", "Volkswagen Touareg"],
    "Tesla": ["Tesla Model 3", "Tesla Model S", "Tesla Model X", "Tesla Model Y", "Tesla Cybertruck"],
    "Toyota": ["Toyota Camry", "Toyota Corolla", "Toyota RAV4", "Toyota Highlander", "Toyota Prius"]
};


// Функція додавання улюбленого автомобіля

function addCarToFavorites() {
    let carInput = document.getElementById("car-name-input");
    let carName = carInput.value.trim();
    
    if (carName === "") {
        alert("Please enter a car name!");
        return;
    }
    
    let favoritesList = document.getElementById("favorites-items");
    let emptyMsg = document.getElementById("empty-favorites-msg");
    
   
    if (emptyMsg) {
        emptyMsg.style.display = "none";
    }
    
  
    let listItem = document.createElement("li");
    listItem.style.padding = "10px";
    listItem.style.marginBottom = "8px";
    listItem.style.backgroundColor = "#c8e6c9";
    listItem.style.borderRadius = "3px";
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    listItem.style.alignItems = "center";
    
 
    let textSpan = document.createElement("span");
    textSpan.textContent = "🚗 " + carName;
    textSpan.style.fontWeight = "500";
    

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "✕ Remove";
    removeBtn.style.padding = "5px 10px";
    removeBtn.style.backgroundColor = "#d32f2f";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.borderRadius = "3px";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontSize = "12px";
    removeBtn.onclick = function() {
        listItem.remove();
        if (favoritesList.children.length === 0) {
            emptyMsg.style.display = "block";
        }
    };
    
  
    listItem.appendChild(textSpan);
    listItem.appendChild(removeBtn);
    favoritesList.appendChild(listItem);
    
   
    carInput.value = "";
    carInput.focus();
    
   
    alert("✅ Car \"" + carName + "\" added to favorites!");
}


// Функція пошуку моделей за маркою

function searchModelsByBrand() {
    let brandSelect = document.getElementById("brand-select");
    let selectedBrand = brandSelect.value;
    
    if (selectedBrand === "") {
        alert("Please select a car brand!");
        return;
    }
    
    let modelsResult = document.getElementById("models-result");
    let modelsTitle = document.getElementById("models-title");
    let modelsList = document.getElementById("models-list");
    
  
    let models = carModels[selectedBrand] || [];
    
    if (models.length > 0) {
        
        modelsTitle.innerHTML = "Models of brand <strong>" + selectedBrand + "</strong>:";
        
        
        let modelsText = "";
        for (let i = 0; i < models.length; i++) {
            modelsText += (i + 1) + ". " + models[i];
            if (i < models.length - 1) {
                modelsText += "<br>";
            }
        }
        
        
        modelsList.innerHTML = modelsText;
        modelsResult.style.display = "block";
        
        alert("✅ Found " + models.length + " models of brand " + selectedBrand);
    } else {
        alert("❌ Models for brand " + selectedBrand + " not found");
        modelsResult.style.display = "none";
    }
}

// ============================================
// DOM NODE MANIPULATION FUNCTIONS
// ============================================

// Функція редагування технічних характеристик (використовує replaceWith, createElement)
function editCarSpec(specId) {
    let specElement = document.getElementById(specId);
    if (!specElement) return;
    
    let currentText = specElement.textContent;
    let newText = prompt("Edit specification:", currentText);
    
    if (newText === null) return;
    
    // Створюємо новий елемент
    let newSpec = document.createElement("p");
    let textNode = document.createTextNode("📋 " + newText);
    newSpec.appendChild(textNode);
    newSpec.id = specId;
    newSpec.style.padding = "10px";
    newSpec.style.backgroundColor = "#e3f2fd";
    newSpec.style.borderLeft = "4px solid #2196f3";
    newSpec.style.borderRadius = "3px";
    newSpec.style.cursor = "pointer";
    newSpec.onclick = function() { editCarSpec(specId); };
    
    // Замінюємо старий елемент новим (replaceWith)
    specElement.replaceWith(newSpec);
    
    alert("✅ Specification updated!");
}

// Функція для додавання позначок до функцій (використовує after, createElement, createTextNode)
function markFeatureAsLiked(featureId) {
    let featureElement = document.getElementById(featureId);
    if (!featureElement) return;
    
    // Перевіряємо, чи вже додано позначку
    if (featureElement.classList.contains("liked")) {
        alert("You already liked this feature!");
        return;
    }
    
    // Створюємо позначку
    let badge = document.createElement("span");
    badge.textContent = " ❤️ LIKED!";
    badge.style.color = "#d32f2f";
    badge.style.fontWeight = "bold";
    badge.style.marginLeft = "8px";
    
    // Додаємо позначку після елемента (after)
    featureElement.after(badge);
    
    // Додаємо клас для відслідковування
    featureElement.classList.add("liked");
    
    alert("✅ Thank you for liking this feature!");
}

