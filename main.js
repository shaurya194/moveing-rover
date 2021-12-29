canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
rover_width = 100;
rover_height = 100;
rover_x = 10;
rover_y = 10;

nasa_mars_images_array = ["https://mars.nasa.gov/system/news_items/main_images/8944_1-PIA24546-1280.jpg", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f53fbab099efa47007b0912%2FLandscape-on-planet-Mars--scenic-desert-scene-on-the-red-planet%2F960x0.jpg%3Ffit%3Dscale", "https://cdna.artstation.com/p/assets/images/images/035/799/018/large/anton-mars.jpg?1615925932", "https://ichef.bbci.co.uk/news/976/cpsprodpb/9353/production/_117351773_mars_perseverance_nrf_0009_0667756352_693ecm_n0030000ncam05000_01_295j.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
background_image = nasa_mars_images_array[random_number];

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadeBackground;
    background_imgTag.src =background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploaderover;
    rover_imgTag.src = "rover.png";
}

function uploadeBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploaderover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
    }

    if (keyPressed == '40') {
        down();
    }

    if (keyPressed == '37') {
        left();
    }

    if (keyPressed == '39') {
        right();
    }

}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadeBackground();
        uploaderover();

    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadeBackground();
        uploaderover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadeBackground();
        uploaderover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadeBackground();
        uploaderover();
    }
}