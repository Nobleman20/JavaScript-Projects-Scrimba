"use strict";

const tabButton = document.querySelector(".tab-btn");
let delBtn = document.querySelector(".del");
let buttonEl = document.querySelector("#input-btn");
let ulEl = document.querySelector(".ul-el");
let myLead = [];
let inputEl = document.querySelector("#input-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLead = leadsFromLocalStorage;
  render(myLead);
}

buttonEl.addEventListener("click", saveButton);
tabButton.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLead.push(tabs[0].url);
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
  });
});
delBtn.addEventListener("dblclick", delButton);

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
          <a target='_blank' href='${leads[i]}'>
              ${leads[i]}
          </a>
      </li>
      `;
  }
  ulEl.innerHTML = listItems;
  inputEl.value = "";
}

function saveButton() {
  myLead.push(inputEl.value);
  localStorage.setItem("myLead", JSON.stringify(myLead));
  console.log(localStorage.getItem("myLead"));
  render(myLead);
}

function delButton() {
  localStorage.clear();
  myLead = [];
  render(myLead);
}
