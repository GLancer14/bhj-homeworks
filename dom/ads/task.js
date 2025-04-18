const rotatorElements = document.querySelectorAll(".rotator");
function setIterator(elementsCollection) {
  const lastCaseIndex = elementsCollection.length - 1;
  let currentCaseIndex = 0;
  let previousCaseIndex = lastCaseIndex;
  function setChangingTimeout() {
    const currentCase = elementsCollection[currentCaseIndex];
    currentCase.classList.add("rotator__case_active");
    currentCase.style.color = currentCase.dataset.color;
    elementsCollection[previousCaseIndex].classList.remove("rotator__case_active");
    setTimeout(setChangingTimeout, currentCase.dataset.speed);
    currentCaseIndex = (currentCaseIndex === lastCaseIndex) ? 0 : currentCaseIndex + 1;
    previousCaseIndex = (previousCaseIndex === lastCaseIndex) ? 0 : previousCaseIndex + 1;
  }

  setChangingTimeout();
}

rotatorElements.forEach(item => setIterator(item.children));