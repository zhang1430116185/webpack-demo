import c3 from './c3.jpg';
function createImg(){
    var root = document.getElementById('root');
    
    var img = new Image();
    img.src = c3;
    img.classList.add('avatar');
    root.appendChild(img);
}
export default createImg;