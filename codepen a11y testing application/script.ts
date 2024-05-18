// script.ts

window.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("gender") as HTMLSelectElement;
  selectElement.addEventListener("keydown", handleKeyDown);
});

function handleKeyDown(event: KeyboardEvent) {
  const selectElement = event.target as HTMLSelectElement;
  const selectedIndex = selectElement.selectedIndex;
  const optionsLength = selectElement.options.length;

  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      selectElement.selectedIndex =
        selectedIndex === 0 ? optionsLength - 1 : selectedIndex - 1;
      break;
    case "ArrowDown":
      event.preventDefault();
      selectElement.selectedIndex =
        selectedIndex === optionsLength - 1 ? 0 : selectedIndex + 1;
      break;
  }
}

function handleGenderChange(selectElement: HTMLSelectElement) {
  // Handle the gender change event
  const selectedValue = selectElement.value;
  console.log(`Selected gender: ${selectedValue}`);
  // Add your custom logic here
}

function handleGenderKeyDown(
  event: KeyboardEvent,
  selectElement: HTMLSelectElement
) {
  // Handle the keydown event on the gender dropdown
  // Add your custom logic here
}
