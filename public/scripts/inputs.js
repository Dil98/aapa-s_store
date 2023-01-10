function autofillInputs() {
    let id = event.target.id;
    let inputProductTitle = document.getElementById("product-title");
    let inputUniqueName = document.getElementById("unique-product-name");
    let inputImage = document.getElementById("product-image");
    let inputDescription = document.getElementById("product-description");

    inputUniqueName.value = id;

    let valueTitle = document.getElementById(`${id}-title`);
    inputProductTitle.value = valueTitle.textContent;

    let valueImageUrl = document.getElementById(`${id}-img`);
    inputImage.value = valueImageUrl.src;

    let valueDescription = document.getElementById(`${id}-description`);
    inputDescription.innerText = valueDescription.textContent;
  }
