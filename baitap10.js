function xuLyAnh() {
    var fileInput = document.getElementById('imageUpload');
    var preview = document.getElementById('preview');

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
var products=[];
function save(){
    var a ={
        code:document.getElementById("code").value,
        name:document.getElementById("name").value,
        imageUpload:document.getElementById("preview").src,
        old:document.getElementById("old").value,
        new:document.getElementById("new").value,
    }
    console.log(a);
    products.push(a);
}
function show(){
    var demo='';
    for (let i = 0; i < products.length; i++){
        demo+= '<div class="products">';
        demo+= '<div class="products-container">';
        demo+= '<div class="box">';
        demo+= '<img src="'+products[i].imageUpload+'">';
        demo += '<div class="box-text">';
        demo += '<h2 >'+products[i].name+'</h2>';
        demo += '<h6>'+products[i].code+'</h6>';
        demo += '<del>' + products[i].old + 'VND' + '</del>';
        demo += '<h3 class="price">'+products[i].new + '<span>' + 'VND' + '</span>' +'</h3>';
        demo += '<i class="ph ph-shopping-cart"></i>';
        demo += '<i class="ph-fill ph-heart"></i>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
    }
        console.log(demo);
        document.getElementById("products").innerHTML+= demo;
    
}
function reset(){
    document.getElementById("code").value='';
    document.getElementById("name").value='';
    document.getElementById("preview").src='';
    document.getElementById("old").value='';
    document.getElementById("new").value='';
}
