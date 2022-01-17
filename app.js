const large_img = document.querySelector('#nagykep')

var img_ids = [
    'kep1', 
    'kep2', 
    'kep3',
    'kep4',
    'kep5'
];

var img_names = [
    'kep01.jpg',
    'kep02.jpg',
    'kep03.jpg',
    'kep04.jpg',
    'kep05.jpg'
];

var img_elements = [];

for (let i=0; i<img_ids.length ; i++ ) {
    img_elements.push(document.querySelector('#'+img_ids[i]));
}

var set_img_position = (img, i) => {
    if (i<3) {
        img.style.left = (i*100 + i*5) + 'px';
        img.style.top = '0px';
    }else {
        img.style.top = ((i-2)*100 + i*5) -10 + 'px';
    }
}

for (let i=0; i<img_elements.length; i++) {
    img_elements[i].style.backgroundImage = 
        'url(images/' + img_names[i] + ')';
    set_img_position(img_elements[i], i);
}

for (let i=0; i<img_elements.length; i++) {
    img_elements[i].addEventListener('click', (event) => {
        console.log('működik')    
        set_large_image(event.target)
    })
}

var set_large_image = img => {
    large_img.style.backgroundImage = img.style.backgroundImage;
}