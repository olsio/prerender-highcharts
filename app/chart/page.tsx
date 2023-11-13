"use client";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useRef } from "react";

const options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export default function Chart() {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
    </div>
  );
}
