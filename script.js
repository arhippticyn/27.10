const $colors = document.querySelectorAll('#colors li');
let $activeColor = document.querySelector('#colors li.active');
let $activeImage = document.querySelector('left .active');

const handleColorClick = (event) => {
    $activeColor.classList.remove('active');
    $activeColor = event.target;
    $activeColor.classList.add('active');

    const color = $activeColor.CDATA_SECTION_NODE.color;
    $activeImage.classList.remove('active');
    $activeImage = document.querySelector('left .${color}');
    $activeImage.classList.add('active');
}

$colors.forEach(($ele) => {
    $ele.addEventListener ('click'
    handleColorClick);
});