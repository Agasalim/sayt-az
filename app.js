let options = document.querySelector(".options");
let selected = document.querySelector(".selected");
let vebsaytList = document.querySelector(".vebsayt_list");
let domenList = document.querySelector(".domen_list");
let hostingList = document.querySelector(".hosting_list");
let xidmetList = document.querySelector(".xidmet_list");
let sirketList = document.querySelector(".sirket_list");
let domenName = document.querySelector("#domenName");
let domenExample = document.querySelector(".domen_example");
let domenFillingInfo = document.querySelector(".domen_filling_info");
let planCards = document.querySelectorAll(".plan_card");
let ayliqPlan = document.querySelector(".ayliq_plan");
let illikPlan = document.querySelector(".illik_plan");
let ecoPlanPrice = document.querySelector(".economic_plan .plan_price");
let standartPlanPrice = document.querySelector(".standart_plan .plan_price");
let proPlanPrice = document.querySelector(".professional_plan .plan_price");
let planPeriods = document.querySelectorAll(".plan_period");

vebsaytShow();
domenShow();
hostingShow();
xidmetShow();
sirketShow();
domenOption();
domenNumune();

options.style.display = "none"
selected.onclick = function(){
    if(options.style.display == "none") options.style.display ="block"
    else options.style.display = "none"
}
document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", function() {
        let selectedImg = document.querySelector(".selected img");
        let selectedValue = this.getAttribute("data-value"); // Seçilən dəyəri götür
        selectedImg.src = this.querySelector("img").src; // Seçilən bayrağı göstər
        selectedImg.setAttribute("data-value", selectedValue); // Seçilən dəyəri saxlamaq üçün
        document.querySelector(".options").style.display = "none";
    });
});
document.addEventListener("click", function(e) {
    if (!document.querySelector(".lang_selection").contains(e.target)) {
        document.querySelector(".options").style.display = "none";
    }
});
function openBar(){
    document.querySelector(".links").style.display = "initial"
    document.querySelector(".right_links").style.display = "initial"
    document.querySelector(".fa-bars").style.display = "none"
    document.querySelector(".fa-xmark").style.display = "initial" // Əlavə edildi
}
function closeBar(){
    document.querySelector(".links").style.display = "none"
    document.querySelector(".right_links").style.display = "none"
    document.querySelector(".fa-bars").style.display = "initial"
    document.querySelector(".fa-xmark").style.display = "none" // Əlavə edildi
}
document.addEventListener("click", function(event){
    const bars = document.querySelector(".fa-bars");
    const xmark = document.querySelector(".fa-xmark");
    const links = document.querySelector(".links");
    const rightLinks = document.querySelector(".right_links");
    
    if (!links.contains(event.target) && 
        !rightLinks.contains(event.target) && 
        !bars.contains(event.target) && 
        !xmark.contains(event.target) &&
        (links.style.display === "initial" || rightLinks.style.display === "initial")) {
        closeBar();
    }
});
document.querySelector(".fa-bars").addEventListener("click", function() {
    openBar();
});
document.querySelector(".fa-xmark").addEventListener("click", function() {
    closeBar();
});
document.querySelectorAll(".navlinks > li").forEach(function(item){
    item.addEventListener("click", function(event){
        event.stopPropagation(); // Klikin sənədə yayılmasının qarşısını al
        let ulTag = this.querySelector("ul");
        ulTag.style.display = ulTag.style.display == "block" ? "none" : "block"
    })
})
document.addEventListener("click", function(event) {
    document.querySelectorAll(".navlinks > li > ul").forEach(function(ul) {
        if (!ul.contains(event.target)) {
            ul.style.display = "none";
        }
    });
});
function vebsaytShow(){
    saytData.navLinks.vebsite.forEach(item => {
        vebsaytList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function domenShow(){
    saytData.navLinks.domen.forEach(item => {
        domenList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function hostingShow(){
    saytData.navLinks.hosting.forEach(item => {
        hostingList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function xidmetShow(){
    saytData.navLinks.xidmetler.forEach(item => {
        xidmetList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function sirketShow(){
    saytData.navLinks.sirket.forEach(item => {
        sirketList.innerHTML += `
            <li class="py-1 px-5 hover:bg-slate-50">
                <a href="#" class="flex items-center">
                    <img class="mr-4 p-3 bg-blue-100 w-12 h-12 rounded-lg" src="img/hokumet-kommersiya.svg" alt="link_img">
                    <div class="li_text">
                        <p class="block text-slate-700 font-medium text-base sm:w-full lg:w-max lg:pr-3">${item.name}</p>
                        <span class="block text-slate-500 md:text-sm text-xs lg:w-max">${item.name}</span>
                    </div>
                </a>
            </li>`
    })
}
function domenOption(){
    saytData.domenSelect.forEach(item => {
        domenName.innerHTML += `
            <option value="${item}">${item}</option>`
    })
}
function domenNumune(){
    saytData.domenSelect
    .slice(0, 6)
    .forEach(item => {
        domenExample.innerHTML += `
        <div class="flex gap-5">
            <div class="p-2 cursor-pointer border-none text-center" onclick="domenSec('${item}')">
                <div class="text-[#A271F2] font-semibold text-2xl">${item}</div>
                <div class="text-[#A271F2] font-semibold">$40/il</div>
            </div>
        </div>`
    })
}
function domenSec(domen){
    domenName.value = domen    
    domenName.onchange();
}
domenName.onchange = function(){
    domenFillingInfo.innerHTML = ""   
    domenFillingInfo.innerHTML = "*Domen adı düzgün deyil.Domen adında yalnız hərf, rəqəm və '-' işarəsi ola bilər"   
}
planCards.forEach(div => {
    div.onclick = function(){
        planCards.forEach(d => {
            d.classList.remove("selectedPlan")
        })
        this.classList.add("selectedPlan")
    }
})
ayliqPlan.onclick = function(){
    ayliqPlan.classList.remove("unSelected_plan_btn")
    ayliqPlan.classList.add("selected_plan_btn")
    illikPlan.classList.remove("selected_plan_btn")
    illikPlan.classList.add("unSelected_plan_btn")
    planPeriods.forEach(element => element.innerHTML = "/ay")
    ecoPlanPrice.innerHTML = "$5"
    standartPlanPrice.innerHTML = "$10"
    proPlanPrice.innerHTML = "$20"
}
illikPlan.onclick = function(){
    illikPlan.classList.remove("unSelected_plan_btn")
    illikPlan.classList.add("selected_plan_btn")
    ayliqPlan.classList.remove("selected_plan_btn")
    ayliqPlan.classList.add("unSelected_plan_btn")
    planPeriods.forEach(element => element.innerHTML = "/il")
    ecoPlanPrice.innerHTML = "$60"
    standartPlanPrice.innerHTML = "$120"
    proPlanPrice.innerHTML = "$240"
}
