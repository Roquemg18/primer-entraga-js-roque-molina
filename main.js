//precio de los productos
const globosCristal = 580;
const velas = 320;
const nieveLoca = 1500;
const globosPerlados = 1400;
const setGlobos = 1100;
const banioReposteroAguila = 300;
const disfrazPolicia = 6000;
const adornoDePlimPlim = 500;
const mangaDeReposteria = 1600;


const iva=21;
let precioProducto = 0;
let resultado = 0;
let cuotas=0;
let interes = 0;
let descuento = 0;

function calcularPrecio (producto,cantidad,interes,descuento){

    switch(producto){
        case('globos cristal'):
            precioProducto = globosCristal;
        break;
        case('velas numero'):
            precioProducto = velas;
        break;
        case('nieve loca'):
            precioProducto = nieveLoca;
        break;
        case('globos perlados'):
            precioProducto = globosPerlados;
        break;
        case('set de globos'):
            precioProducto = setGlobos;
        break;
        case('baño repostero aguila'):
            precioProducto = banioReposteroAguila;
        break;
        case('disfraz de policia'):
        precioProducto = disfrazPolicia;
        break;
        case('adorno de plim plim'):
            precioProducto = adornoDePlimPlim;
        break;
        case('manga de reposteria'):
            precioProducto = mangaDeReposteria;
        break;
        default:
            alert("el producto que ingreso no esta en la lista.Por favor intente de nuevo");
        break;
    }

    resultado = (cantidad * (precioProducto + ((21*precioProducto)/100)));
    let cantidadDeinteres = ((resultado * interes)/100);
    let cantidadDeDescuento = (resultado * descuento)/100;
    resultado = resultado - cantidadDeDescuento + cantidadDeinteres;

    if(cuotas == "12"){
        alert('el precio total es: ' + resultado);
        alert("serian 12 cuotas de: " + resultado/12);
    }else if(cuotas == "6"){
        alert('el precio total es: ' + resultado);
        alert("serian 6 cuotas de: " + resultado/6);
    }else if(cuotas == "3"){
        alert('el precio total es: ' + resultado);
        alert("serian 3 cuotas de: " + resultado/3);
    }else{
        alert('el precio total es: ' + resultado);
    }
}

let comprarOno = prompt("Quiere comprar algun producto? ");

while(comprarOno == "si"){
    let producto = prompt("ingrese el nombre del producto").toLowerCase();
    let cantidad = prompt("ingrese la cantidad que quiere del producto selecionado");
    let tipoDePago = prompt("efectivo, credito o devito").toLowerCase();

        if(tipoDePago == 'credito'){
            cuotas = prompt("3 cuotas: 0% interes 6 cuotas: 5% interes 12 cuotas: 10% interes");
            if(cuotas == "12"){
                interes = 10;
            }else if (cuotas == "6"){
                interes = 5;
            }else{
                interes = 0;
            }
        }else if (tipoDePago == "devito"){
            descuento = 0;
            interes = 0;
        }else{
            descuento = 10;
        }

    calcularPrecio(producto,cantidad,descuento,interes);

    comprarOno = prompt("Quiere seguir comprando?");
}

alert("Gracias por visitar la pagina")
