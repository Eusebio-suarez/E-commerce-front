import ReactECharts from "echarts-for-react";
import type { Order } from "../../../types/orders";

type Props = {
  orders: Order[];
};

export const OrdersChart = ({ orders }: Props) => {
  const contarPorEstado = (ordenes: Order[]) => {
    const conteo: Record<string, number> = {};
    ordenes.forEach(order => {
      conteo[order.estado] = (conteo[order.estado] || 0) + 1;
    });
    return conteo;
  };

  const datosPorEstado = contarPorEstado(orders);
  const estados = Object.keys(datosPorEstado);
  const cantidades = Object.values(datosPorEstado);

  const dataPie = estados.map((estado, i) => ({
    name: estado,
    value: cantidades[i]
  }));

  const options = {
    title: {
        text: "Estadistica General",
        left: "center"
    },
    tooltip: {
        trigger: "item",
    },
    legend: {
        top:"bottom"
    },
    series: [
      {
        name: "Órdenes",
        type: "pie",
        radius: "50%",
        data: dataPie,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: "400px", width: "100%", padding:"50px" }} />;
};

