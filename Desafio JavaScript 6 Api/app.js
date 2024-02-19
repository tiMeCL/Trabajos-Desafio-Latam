async function calcular() {
  const selector = document.querySelector("#moneda-cambio");
  const valorDivisa = selector.options[selector.selectedIndex].value;

  if (valorDivisa !== "Seleccionar moneda") {
    try {
      const res = await fetch(`https://mindicador.cl/api/${valorDivisa}`);
      const data = await res.json();

      const resultado = document.querySelector("#cambio-resultado");
      const pesos = Number(document.querySelector("#clp").value);
      
      let newPesos = new Intl.NumberFormat

      const divisa = Number(data.serie[0].valor);

      const preCalculo = pesos / divisa;
      const calculo = Number(preCalculo.toFixed(2));

      switch (valorDivisa) {
        case "dolar":
          resultado.innerHTML = `Valor en Dolares: ` + calculo;
          break;
        case "euro":
          resultado.innerHTML = `Valor en Euros: ` + calculo;
          break;
        case "bitcoin":
          resultado.innerHTML = `Valor en Bitcoin: ` + calculo;
          break;
        case "uf":
          resultado.innerHTML = `Valor en UF: ` + calculo;
          break;
        case "utm":
          resultado.innerHTML = `Valor en UTM: ` + calculo;
          break;
      }
      graphCurrency(valorDivisa);
    } catch (error) {
      alert(error.message);
    }
  } else {
    alert("Error: Debes seleccionar una moneda");
  }
}

let myChart;

async function graphCurrency(valorDivisa) {
  try {
    const res = await fetch(`https://mindicador.cl/api/${valorDivisa}`);
    const data = await res.json();

    const xValues = [];
    const yValues = [];
    for (let i = 9; i >= 0; i--) {
      xValues[i] = data.serie[i].fecha.substring(0, 10);
      yValues[i] = data.serie[i].valor;
    }

    const plugin = {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues.reverse(),
        datasets: [
          {
            label:
              "Estos son los 10 valores mas actualizados de la Divisa Seleccionada en el Histórico " + valorDivisa.toUpperCase(),
            backgroundColor: "black",
            borderColor: "green",
            data: yValues.reverse(),
            id: valorDivisa,
          },
        ],
      },
      options: {
        plugins: {
          customCanvasBackgroundColor: {
            color: "white",
          },
        },
      },
      plugins: [plugin],
    });
  } catch (error) {
    alert(error.message);
  }
}
