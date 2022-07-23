let productos = document.getElementById("productos");
let cerrar = document.getElementById("cerrar");
let drop = document.getElementById("abrir");

function abb() {
    cerrar.classList.remove("d-none");
    productos.classList.remove("d-none");
    drop.classList.add("d-none");
}
function crr() {
    cerrar.classList.add("d-none");
    productos.classList.add("d-none");
    drop.classList.remove("d-none");
}
function expandir() {
    document.getElementById("menu").style.width = "205px";
    document.getElementById("links").style.display = "block";
    document.getElementById("barras").style.display = "none";
}