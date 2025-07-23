(function () {
  const Y_OFFSET = 36.0;
  const ID = "definition_popup";
  // Create hidden definition popup
  let definition_popup = document.createElement("DIV");
  definition_popup.style.position = "absolute";
  definition_popup.style.opacity = 0;
  definition_popup.style.transition = "200ms opacity ease";
  definition_popup.style.display = "none";
  definition_popup.id = ID;
  document.body.append(definition_popup);

  let references = document.querySelectorAll(".footnote-reference>a");
  references.forEach((reference_el) => {
    // Get the definition of each reference
    let definition_el = document.querySelector(reference_el.hash);
    let definition = definition_el.querySelector("p").innerHTML;
    reference_el.addEventListener("mouseover", (ev) => {
      // Show popup text
      let definition_popup = document.getElementById(ID);
      definition_popup.innerHTML = definition;
      definition_popup.style.display = "block";
      // Move to absolute position
      let origin_y = reference_el.offsetTop;
      let origin_x = reference_el.offsetLeft;

      definition_popup.style.top = origin_y + Y_OFFSET + "px";
      definition_popup.style.left = origin_x + "px";
      definition_popup.style.opacity = 1;
    });
    reference_el.addEventListener("mouseleave", (ev) => {
      let definition_popup = document.getElementById(ID);
      definition_popup.style.opacity = 0;
      definition_popup.innerHTML = "";
      definition_popup.style.display = "none";
    });


    console.dir(definition)
  });

})();

// <div id="footnote-box"></div>
