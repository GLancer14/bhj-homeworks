const rotatorCasesElements = document.querySelectorAll(".rotator__case");
const setIterator = function(elementsCollection) {
  let currentCaseIndex = 0;
  let previousCaseIndex = elementsCollection.length - 1;
  return function() {
    setInterval(() => {
      currentCaseIndex = (currentCaseIndex === elementsCollection.length - 1) ? 0 : currentCaseIndex + 1;
      previousCaseIndex = (previousCaseIndex === elementsCollection.length - 1) ? 0 : previousCaseIndex + 1;
      elementsCollection[currentCaseIndex].classList.add("rotator__case_active");
      elementsCollection[previousCaseIndex].classList.remove("rotator__case_active");
    }, 1000);
  }
};
setIterator(rotatorCasesElements)();