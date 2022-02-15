document.body.style.background = '#1E293B';
document.body.style.color = '#94A38B';

onClick('sixteenGB', 'memory-cost', 300);
onClick('ssd2', 'storage-cost', 400);
onClick('ssd3', 'storage-cost', 500);
onClick('paid-delivery', 'delivery-cost', 20);


//parameter inserting to calculation function
function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price);
    })
}



//price calculation function
function updatePrice(itemId, price) {
    let memoryCost = document.getElementById(itemId);

    memoryCost.innerText = price;
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    console.log(totalPrice);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}