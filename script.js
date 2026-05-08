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


// DOM NODE MANIPULATION FUNCTIONS


// Функція редагування технічних характеристик (використовує replaceWith, createElement)
function editCarSpec(specId) {
    let specElement = document.getElementById(specId);
    if (!specElement) return;
    
    let currentText = specElement.textContent.replace("📋 ", "");
    let newText = prompt("Редагувати характеристику (залиште порожнім, щоб видалити):", currentText);
    
    if (newText === null) return;
    
    if (newText.trim() === "") {
        if (confirm("Ви впевнені, що хочете видалити цю характеристику?")) {
            specElement.outerHTML = ""; 
            alert("🗑️ Характеристику видалено!");
        }
        return;
    }
    
    let newSpec = document.createElement("p");
    
    let textNode = document.createTextNode("");
    textNode.nodeValue = "📋 " + newText.trim(); 
    
    newSpec.appendChild(textNode);
    newSpec.id = specId;
    
    newSpec.style.padding = "10px";
    newSpec.style.backgroundColor = "#e3f2fd";
    newSpec.style.borderLeft = "4px solid #2196f3";
    newSpec.style.borderRadius = "3px";
    newSpec.style.cursor = "pointer";
    newSpec.onclick = function() { editCarSpec(specId); };
    
    specElement.replaceWith(newSpec);
    alert("✅ Характеристику оновлено!");
}

// Функція для додавання позначок до функцій
function markFeatureAsLiked(featureId) {
    let featureElement = document.getElementById(featureId);
    if (!featureElement) return;
    
    if (featureElement.classList.contains("liked")) {
        alert("You already liked this feature!");
        return;
    }
    
    let badge = document.createElement("span");
    badge.innerHTML = " ❤️ <b>LIKED!</b>"; 
    badge.style.color = "#d32f2f";
    badge.style.marginLeft = "8px";
    
    featureElement.after(badge);
    featureElement.classList.add("liked");
    
    alert("✅ Thank you for liking this feature!");
}

// ============================================
// ЧАСТИНА 1: РОБОТА З ПОДІЯМИ МИШІ
// ============================================

// 1.1 Basic mouse event handlers - Vehicle selection theme
function selectCarHandler(event) {
    console.log("Car selection clicked!", event);
    alert("🚗 Vehicle Selection Event Triggered!\n\nElement: " + event.target.tagName + 
          "\nMouse Position: X=" + event.clientX + ", Y=" + event.clientY);
}

function carPreviewHandler(event) {
    event.target.style.backgroundColor = "#a5bdc9";
    event.target.style.transform = "scale(1.05)";
    event.target.style.boxShadow = "0 4px 12px rgba(255, 193, 7, 0.5)";
}

function carPreviewLeaveHandler(event) {
    event.target.style.backgroundColor = "";
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "";
}

function carSelectDownHandler(event) {
    console.log("Car selection initiated at:", event.clientX, event.clientY);
    event.target.style.opacity = "0.7";
    event.target.textContent = "🔒 Selecting...";
}

function carSelectUpHandler(event) {
    console.log("Car selection completed at:", event.clientX, event.clientY);
    event.target.style.opacity = "1";
    event.target.textContent = "Select This Car Model";
}

// 1.2 Additional handlers for addEventListener - Vehicle action listeners
function viewCarSpecsListener(event) {
    const log = document.getElementById("multiple-listeners-log");
    log.innerHTML += `<div style="color: #4a148c; margin-bottom: 3px;">✅ <b>Listener 1:</b> Specifications data loaded.</div>`;
    console.log("✅ Listener 1: Specs displayed");
}

function checkAvailabilityListener(event) {
    const log = document.getElementById("multiple-listeners-log");
    log.innerHTML += `<div style="color: #7b1fa2; margin-bottom: 3px;">✅ <b>Listener 2:</b> Stock status: 5 units available.</div>`;
    console.log("✅ Listener 2: Availability checked");
}

function requestTestDriveListener(event) {
    const log = document.getElementById("multiple-listeners-log");
    log.innerHTML += `<div style="color: #9c27b0; margin-bottom: 3px;">✅ <b>Listener 3:</b> Test drive request initiated!</div>`;
    console.log("✅ Listener 3: Test drive requested");
}

// 1.3 Object with handleEvent method - Vehicle configuration handler
const carConfigurationHandler = {
    handleEvent: function(event) {
       
        const logContainer = document.getElementById("config-log");
        
       
        const timestamp = new Date().toLocaleTimeString();
        
        const htmlMessage = `
            <div style="color: #2e7d32; font-weight: bold; margin-bottom: 5px;">🚗 CONFIGURATION ACTIVATED (${timestamp})</div>
            <ul style="margin: 0; padding-left: 20px; list-style-type: square;">
                <li><strong>Event:</strong> ${event.type}</li>
                <li><strong>Container ID:</strong> ${event.currentTarget.id}</li>
                <li><strong>Element:</strong> &lt;${event.target.tagName.toLowerCase()}&gt;</li>
            </ul>
            <p style="margin-top: 5px; color: #1565c0;">✔ You selected a vehicle configuration option!</p>
        `;

        
        logContainer.innerHTML = htmlMessage;
        
    
        console.log("🚗 Car configuration updated on page");
    }
};

// 1.4 Function to demonstrate removeEventListener - Vehicle watchlist feature
// 1. ОДИНАРНА функція-обробник
function toggleWatchlistHandler(event) {
    const status = document.getElementById("watchlist-status");
    if (status) {
        status.innerHTML = "⭐ <b style='color: #7b1fa2;'>Monitoring active:</b> Searching for price drops...";
    }
    console.log("⭐ Watchlist handler triggered - vehicle monitoring active");
}

// 2. Функція для додавання прослуховувача
function setupRemoveEventListenerDemo() {
    
    const targetButton = document.getElementById("target-car-button");
    const status = document.getElementById("watchlist-status");

    if (!targetButton) return;
    
    targetButton.addEventListener("click", toggleWatchlistHandler);
    
    console.log("✅ Watchlist listener added");
    if (status) status.innerText = "✅ Monitor ACTIVATED for the button above.";
}

// 3. Функція для видалення прослуховувача
function removeEventListenerDemo() {
  
    const targetButton = document.getElementById("target-car-button");
    const status = document.getElementById("watchlist-status");

    if (!targetButton) return;
    
    targetButton.removeEventListener("click", toggleWatchlistHandler);
    
    console.log("❌ Watchlist listener removed");
    if (status) status.innerText = "❌ Monitor DEACTIVATED. Click no longer works.";
}

// 4. Ініціалізація (прив'язуємо функції до кнопок "Add" та "Remove")
document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("add-listener-btn");
    const removeBtn = document.getElementById("remove-listener-btn");

    if (addBtn) addBtn.onclick = setupRemoveEventListenerDemo;
    if (removeBtn) removeBtn.onclick = removeEventListenerDemo;
});

// Ініціалізація обробників при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function() {
    
    
    const carSelectBtn = document.getElementById("btn-property");
    if (carSelectBtn) {
        carSelectBtn.onmouseover = carPreviewHandler;
        carSelectBtn.onmouseout = carPreviewLeaveHandler;
        carSelectBtn.onmousedown = carSelectDownHandler;
        carSelectBtn.onmouseup = carSelectUpHandler;
    }
    
    
    const compareCarBtn = document.getElementById("btn-multiple-listeners");
    if (compareCarBtn) {
        compareCarBtn.addEventListener("click", viewCarSpecsListener);
        compareCarBtn.addEventListener("click", checkAvailabilityListener);
        compareCarBtn.addEventListener("click", requestTestDriveListener);
      
    }
    
    
    const configureBtn = document.getElementById("btn-handle-event");
    if (configureBtn) {
        configureBtn.addEventListener("click", carConfigurationHandler);
    }
    

});


// ============================================
// PART 2: VEHICLE TYPE SELECTION
// ============================================

// 2.1 Initialize vehicle type highlighting with event.target
function initVehicleTypeSelection() {
    const vehicleList = document.getElementById("interactive-list");
    if (!vehicleList) return;
    
    
    vehicleList.onclick = function(event) {
        
        const selectedVehicle = event.target;
        
       
        if (selectedVehicle.tagName === "LI") {
            
            const previousSelection = vehicleList.querySelector(".highlighted");
            if (previousSelection) {
                previousSelection.classList.remove("highlighted");
            }
            
            
            selectedVehicle.classList.add("highlighted");
            
            console.log("Selected vehicle type:", selectedVehicle.textContent);
            console.log("event.target:", event.target.textContent);
            console.log("event.currentTarget (list container):", event.currentTarget.id);
        }
    };
}


// ============================================
// PART 3: VEHICLE PORTAL MENU (BEHAVIOR PATTERN)
// ============================================

// 3.1 Vehicle action methods mapped to menu buttons
const vehicleActions = {
    compareCars: function() {
        alert("🔍 Car Comparison Tool\n\nCompare specs, prices, and features of multiple vehicles to find the perfect match!");
        console.log("Compare cars method called");
    },
    
    filterByBrand: function() {
        alert("🏷️ Filter by Brand\n\nFilter vehicles by manufacturer: BMW, Mercedes, Tesla, Toyota, and more!");
        console.log("Filter by brand method called");
    },
    
    vehicleSettings: function() {
        alert("⚙️ Vehicle Preferences\n\nCustomize your search:\n- Engine type (Petrol, Diesel, Electric, Hybrid)\n- Price range\n- Body type (Sedan, SUV, Coupe)\n- Transmission type");
        console.log("Vehicle settings method called");
    },
    
    aboutVehicles: function() {
        alert("ℹ️ About World of Cars\n\n🌍 Premium Automotive Portal\nVersion 1.0\n\nYour comprehensive source for car information, comparisons, and reviews.");
        console.log("About vehicles method called");
    },
    
    drivingTips: function() {
        alert("📚 Driving Tips & Guide\n\nLearn about:\n✓ Fuel efficiency tips\n✓ Vehicle maintenance\n✓ Eco-driving practices\n✓ Safety features explained");
        console.log("Driving tips method called");
    }
};

// 3.2 Initialize menu with Behavior pattern using data-* attributes
function initVehicleActionMenu() {
    const menu = document.getElementById("behavior-menu");
    if (!menu) return;
    
    
    menu.addEventListener("click", function(event) {
        
        const actionButton = event.target;
        
        
        if (actionButton.tagName === "BUTTON" && actionButton.hasAttribute("data-action")) {
            
            const actionName = actionButton.getAttribute("data-action");
            
            console.log("Vehicle action triggered:", actionName);
            console.log("Menu container:", event.currentTarget.id);
            
           
            if (typeof vehicleActions[actionName] === "function") {
                vehicleActions[actionName]();
            } else {
                alert("⚠️ Unknown action: " + actionName);
            }
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    initVehicleTypeSelection();
    initVehicleActionMenu();
});
