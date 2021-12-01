import * as gesPres from "./gestionpresupuesto.js";

function mostrarDatoEnId(idElemento, valor)
{
    document.getElementById(idElemento).innerHTML = valor;
}

function mostrarGastoWeb(idElemento, gasto)
{
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div.className ="gasto";
    div1.className="gasto-descripcion";
    div2.className="gasto-valor";

    div1.append(gasto.descripcion);
    div2.append(gasto.valor);

    div.append(div1);
    div.append(div2);

    let contenido = document.getElementById(idElemento);
    contenido.append(div);
}

function repintar()
{
    mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto());
    mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());
    mostrarDatoEnId("balance-total", gesPres.calcularBalance());

    document.getElementById("listado-gastos-completo").innerHTML = "";

    let nuevo = gesPres.listarGastos()
    
    for(let g of nuevo)
    {
        mostrarGastoWeb("listado-gastos-completo", g);
    }
}

function nuevoGastoWeb()
{
    this.handleEvent = function(e)
    {
        let desc = prompt("itrnnosduce desc");
        let valor = prompt("itrnoduce valor");
    
        let nuevogasto = new gesPres.CrearGasto(desc, valor);
        gesPres.anyadirGasto(nuevogasto);
    
        repintar();
    }
  
}
let manejadorNuevo = new nuevoGastoWeb();
let butNuevo = document.getElementById("anyadirGasto");
butNuevo.addEventListener("click", manejadorNuevo);


function nuevoGastoWebFormulario()
{
    this.handleEvent = function (e)
    {
        let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);
        var formulario = plantillaFormulario.querySelector("form");
        let manEnviar = new manejadorEnviar();
        formulario.addEventListener("submit", manEnviar);

        document.getElementById("controlesprincipales").append(formulario);
    }
}
let menajadorForm = new nuevoGastoWebFormulario();
let butForm = document.getElementById("anyadirgasto-formulario");
butForm.addEventListener("click", menajadorForm);

function manejadorEnviar()
{
    this.handleEvent = function(e)
    {
        e.preventDefault();
        let form = e.currentTarget;

        let desc = form.elements.descripcion.value;
        let valor = form.elements.valor.value;

        let nuevoForm = new gesPres.CrearGasto(desc, valor)

        gesPres.anyadirGasto(nuevoForm);

        repintar();
    }
}

function actualizarPresupuestoWeb()
{
    this.handleEvent = function(e)
    {
        let actPres = prompt("introduce nuevo rpesu");

        gesPres.actualizarPresupuesto(actPres);

        repintar();
    }
}

let manejadorActu = new actualizarPresupuestoWeb();
let butManActu = document.getElementById("actualizarpresupuesto");
butManActu.addEventListener("click", manejadorActu);

export {
    mostrarDatoEnId, 
    mostrarGastoWeb
}