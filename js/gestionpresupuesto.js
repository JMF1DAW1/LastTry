let presupuesto = 0;
let idGasto = 0;
let gastos =[];

function actualizarPresupuesto (valor)
{
    presupuesto = valor;
}

function mostrarPresupuesto()
{
    return (`Tu presuwpuesto es de: ${presupuesto} €.`)
}

function CrearGasto(descripcion, valor, fecha)
{
    this.descripcion = descripcion;

    this.valor = valor;

    if(fecha)
    {
        this.fecha = Date.parse(fecha);
    }
    else
    {
        this.fecha = Date.now(fecha);
    }


    this.mostrarGasto = function()
    {
        return (`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.`)
    }

}

function anyadirGasto(gasto)
{
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

function calcularTotalGastos()
{
    let totalGastos = 0;

    for (let i=0; i < gastos.length; i++)
    {
        totalGastos = totalGastos + gastos[i].valor;
    }

    return totalGastos;
}

function calcularBalance()
{
    let balance;

    balance = presupuesto - calcularTotalGastos();

    return balance;
}

function listarGastos()
{
    return gastos;
}

export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    calcularTotalGastos,
    calcularBalance
}