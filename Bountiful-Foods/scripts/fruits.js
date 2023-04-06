let allAboutFruits = [];
async function fetchData() {
    try {
      const response = await fetch('../JSON/fruit.json');
      const fruitsData = await response.json();
      console.table(fruitsData);
      allAboutFruits = fruitsData;
      createDrink(fruitsData);
    } catch (error) {
      console.error(error);
    }
  }
fetchData()

function createDrink(fruitsData){
    const options = document.querySelector(".options1")
    for(let i =0; i < 13; i++){
        const option = document.createElement("option");
        option.setAttribute("value", `${fruitsData[i].name}`)
        option.innerHTML = `${fruitsData[i].name}`
        options.appendChild(option);
    }
    const options2 = document.querySelector(".options2")
    for(let i =13; i < 26; i++){
        const option = document.createElement("option");
        option.setAttribute("value", `${fruitsData[i].name}`)
        option.innerHTML = `${fruitsData[i].name}`
        options2.appendChild(option);
    }
    const options3 = document.querySelector(".options3")
    for(let i =26; i < 39; i++){
        const option = document.createElement("option");
        option.setAttribute("value", `${fruitsData[i].name}`)
        option.innerHTML = `${fruitsData[i].name}`
        options3.appendChild(option);
    }
}

// This happens on submission
const form = document.getElementById("form");
form.addEventListener("submit", formSubmitted);

function formSubmitted(whatHappened){
    whatHappened.preventDefault();
    const fname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const firstOption = document.querySelector(".options1").value;
    const secondOption = document.querySelector(".options2").value;
    const thirdOption = document.querySelector(".options3").value;
    const form = document.getElementById("form");
    const div = document.getElementById("results");
    
    let email_res= document.getElementById("email-res")
    let phone_res= document.getElementById("phone-res")
    let name_res= document.getElementById("name-res")
    let date_res= document.getElementById("date-res")
    let carb_res = document.getElementById("carbs");
    let protein_res = document.getElementById("amino");
    let fat_res = document.getElementById("fat");
    let sugar_res = document.getElementById("sucrose");
    let cal_res = document.getElementById("cal");
    name_res.innerHTML = fname;
    email_res.innerHTML = email;
    phone_res.innerHTML = phone;
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    date_res.innerHTML = fulldate;
    let carbs1;
    let carbs2;
    let carbs3;
    let protein1;
    let protein2;
    let protein3;
    let fat1;
    let fat2;
    let fat3;
    let sugar1;
    let sugar2;
    let sugar3;
    let calories1;
    let calories2;
    let calories3;
    
    allAboutFruits.forEach(singleFruit => {
        if(singleFruit.name === firstOption){
            carbs1 = singleFruit.nutritions.carbohydrates;
            protein1 = singleFruit.nutritions.protein;
            fat1 = singleFruit.nutritions.fat;
            sugar1 = singleFruit.nutritions.sugar;
            calories1 = singleFruit.nutritions.calories;
        } else if(singleFruit.name === secondOption){
            carbs2 = singleFruit.nutritions.carbohydrates;
            protein2 = singleFruit.nutritions.protein;
            fat2 = singleFruit.nutritions.fat;
            sugar2 = singleFruit.nutritions.sugar;
            calories2 = singleFruit.nutritions.calories;
        } else if(singleFruit.name === thirdOption){
            carbs3 = singleFruit.nutritions.carbohydrates;
            protein3 = singleFruit.nutritions.protein;
            fat3 = singleFruit.nutritions.fat;
            sugar3 = singleFruit.nutritions.sugar;
            calories3 = singleFruit.nutritions.calories;
        }       
    });
    let carbohydrates = carbs1 + carbs2 + carbs3;
    let calories = calories1 + calories2 + calories3;
    let fat = fat1 + fat2 + fat3;
    let sugar = sugar1 + sugar2 + sugar3;
    let protein = protein1 + protein2 + protein3;
    carb_res.innerHTML = carbohydrates;
    protein_res.innerHTML = protein;
    fat_res.innerHTML = fat;
    sugar_res.innerHTML = sugar;
    cal_res.innerHTML = calories;
    form.replaceWith(div);
    div.style.display = "block";
}