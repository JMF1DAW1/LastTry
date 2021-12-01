import * as gesPres from "./gestionPresupuesto.js";
import * as gesPresWeb from "./gestionPresupuestoWeb.js";

gesPres.actualizarPresupuesto(3500);

gesPresWeb.mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto());

gesPresWeb.mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());
gesPresWeb.mostrarDatoEnId("balance-total", gesPres.calcularBalance());

let g1 = new gesPres.CrearGasto("navi", 11234);
let g2 = new gesPres.CrearGasto("g2", 1231);
let g3 = new gesPres.CrearGasto("VirtusPor", 123545);

gesPres.anyadirGasto(g1);
gesPres.anyadirGasto(g2);
gesPres.anyadirGasto(g3);

let mostrar = gesPres.listarGastos();

for (let g of mostrar)
{
    gesPresWeb.mostrarGastoWeb("listado-gastos-completo", g);
}
