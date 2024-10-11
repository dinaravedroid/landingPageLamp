    const apiUrl = 'http://private-anon-13e834fbd8-lampshop.apiary-mock.com/lamps';
    let products = []; // Массив для хранения товаров

async function loadImages() {
    $('.spinner-grow.text-secondary').show();
    try {
        const response = await fetch(apiUrl);
        products = await response.json();
        displayInitialImages();
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    } finally {
        $('.spinner-grow.text-secondary').hide();
    }
}

    function displayInitialImages() {
    const blocks = document.querySelectorAll('.square img');
    const productsToDisplay = products.slice(0, blocks.length);

    productsToDisplay.forEach((product, index) => {
    if (product.image) {
    blocks[index].src = product.image;


    blocks[index].parentElement.onclick = function () {
    showOverlayImage(product.image);
    displayLampInfo(product);
};
}
});


    if (products.length > 0 && products[0].image) {
    showOverlayImage(products[0].image);
    displayLampInfo(products[0]);
}
}


    function showOverlayImage(imageSrc) {
    const overlayImage = document.getElementById('overlay-image');
    const overlayImage2 = document.getElementById('overlay-image2');
    if (overlayImage && overlayImage2) {
    overlayImage.src = imageSrc;
    overlayImage2.src = imageSrc;
}
}


    function displayLampInfo(product) {
    const dimensions = document.getElementById('dimensions');
    const material = document.getElementById('material');
    const weight = document.getElementById('weight');
    const electrification = document.getElementById('electrification');

    dimensions.innerHTML = `${'H ' + product.height + ' x ' + 'W ' + product.width || 'N/A'}`;
    material.innerHTML = `${product.material || 'N/A'}`;
    weight.innerHTML = `${product.weight + ' kg' || 'N/A'}`;
    electrification.innerHTML = `${product.electrification || 'N/A'}`;
}



    $(document).ready(loadImages);


