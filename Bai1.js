const btnHideText = document.getElementById('hideText');
const btnShowText = document.getElementById('showText');
const Text = document.querySelector(".div");
//Khi click vào nút “Hide text”, dòng chữ bên trên sẽ được ẩn đi

btnHideText.addEventListener('click', function () {
    Text.style.display = "none";
});

//Khi click vào nút “Show text”, dòng chữ bên trên sẽ được hiện ra
btnShowText.addEventListener('click', function () {
    Text.style.display = "block";
})

//Bài 2

// Khi click vào nút Open Modal, một hộp chứa dòng text “Some text in the Modal” sẽ được hiển thị ra và màn hình xung quanh phải tối đi

// Khi click vào nút “x” hoặc màn hình tối xung quanh, Modal ở trên phải ẩn đi

const btnOpenModal = document.getElementById('openModal');
const btnCloseModal = document.getElementById('closeModal');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', function () {
    btnOpenModal.classList.add('display-modal');
});

btnCloseModal.addEventListener('click', function () {
    btnOpenModal.classList.remove('display-modal');
});

window.addEventListener('click', (event) => {
    if (event.target === btnOpenModal) {
        btnOpenModal.classList.remove('display-modal');
    }
})

//Khi hơ chuột đi qua ô vuông nào, background nền phải đổi màu sắc theo ô vuông đó bằng onmouseover Event

function backGroundBlock(element) {
    var outer = document.getElementById('outer');
    var color = window.getComputedStyle(element).getPropertyValue('background-color');
    outer.style.backgroundColor = color;
}

function backGroundNone() {
    var outer = document.getElementById('outer');
    outer.style.backgroundColor = '#98fc98';
}

//Khi hơ chuột đi qua dòng text “Hover over me”, một Tooltip sẽ được hiện ra
//Khi hơ chuột ra ngoài dòng text “Hover over me”, Tooltip sẽ biến mấ

function showTooltip() {
    var tooltip = document.createElement('div');
    tooltip.innerHTML = "Tooltip text";
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);
}

function hideTooltip() {
    var tooltips = document.getElementsByClassName('tooltip');
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].parentNode.removeChild(tooltips[i]);
    }
}


//Bai 5:
const toggleButton = document.getElementById('toggle-button');
const bgapp = document.getElementById('bgGroup');

bgapp.addEventListener('click', () => {
    if (!bgapp.classList.contains('app_dark')) {
        bgapp.classList.add('app_dark');
    }
    else {
        bgapp.classList.remove('app_dark');
    }
});