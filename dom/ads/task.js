const rotatorCasesElements = document.querySelectorAll(".rotator__case");
const setIterator = function(elementsCollection) {
  let currentRotatorIndex = 0;
  let previousRotatorIndex = elementsCollection.length - 1;
  return function() {
    setInterval(() => {
      currentRotatorIndex = (currentRotatorIndex === elementsCollection.length - 1) ? 0 : currentRotatorIndex + 1;
      previousRotatorIndex = (previousRotatorIndex === elementsCollection.length - 1) ? 0 : previousRotatorIndex + 1;
      elementsCollection[currentRotatorIndex].classList.add("rotator__case_active");
      elementsCollection[previousRotatorIndex].classList.remove("rotator__case_active");
    }, 1000);
  }
};
setIterator(rotatorCasesElements)();