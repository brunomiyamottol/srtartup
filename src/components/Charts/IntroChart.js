import React, { Fragment } from "react";
import Script from "next/script";

export default function IntroChart() {
  return (
    <Fragment>
      <div id={"introchart"} style={{ width: "100%", height: "100%", zIndex: -1 }}>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  var root = am5.Root.new("introchart");

                  root.setThemes([
                  am5themes_Animated.new(root), am5themes_Dark.new(root)
                  ]);

                  var container = root.container.children.push(am5.Container.new(root, { width: am5.p100, height: am5.p100 }));
                  var value = 100;

                  function generateChartData() {
                  var chartData = [];
                  var firstDate = new Date();
                  firstDate.setDate(firstDate.getDate() - 1000);
                  firstDate.setHours(0, 0, 0, 0);

                  for (var i = 0; i < 16; i++) {
                      var newDate = new Date(firstDate);
                      newDate.setDate(newDate.getDate() + i);

                      value += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10;

                      chartData.push({
                      date: newDate.getTime(),
                      value: value
                      });
                  }
                  return chartData;
                  }

                  var data = generateChartData();
                  
                  var chart = container.children.push(am5xy.XYChart.new(root, {
                  focusable: true,
                  panX: true,
                  panY: true,
                  wheelX: "none",
                  wheelY: "none",
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0
                  }));

                  chart.zoomOutButton.set("forceHidden", true);

                  var easing = am5.ease.out(am5.ease.cubic);

                  var xRenderer = am5xy.AxisRendererX.new(root, {
                  minGridDistance: 50,
                  inside: true
                  })

                  xRenderer.labels.template.setAll({ fontSize: 9, opacity: 0.5 })
                  xRenderer.grid.template.setAll({stroke:am5.color(0xffffff), strokeOpacity:0.05})
                  
                  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                  maxDeviation: 0.5,
                  groupData: false,
                  extraMax: 0.1,
                  extraMin: -0.05,
                  baseInterval: {
                      timeUnit: "day",
                      count: 1
                  },
                  renderer: xRenderer,
                  tooltip: am5.Tooltip.new(root, {})
                  }));

                  var yRenderer = am5xy.AxisRendererY.new(root, {
                  minGridDistance: 50,
                  inside: true
                  })

                  yRenderer.labels.template.setAll({ fontSize: 9, opacity: 0.5, minPosition: 0.02, maxPosition: 0.98 })
                  yRenderer.grid.template.setAll({stroke:am5.color(0xffffff), strokeOpacity:0.05})

                  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                  maxPrecision: 0,
                  renderer: yRenderer
                  }));

                  var series = chart.series.push(am5xy.LineSeries.new(root, {
                  minBulletDistance: 10,
                  name: "Series 1",
                  xAxis: xAxis,
                  yAxis: yAxis,
                  stroke:am5.color(0x40a3ff),
                  fill:am5.color(0x40a3ff),
                  "valueYField": "value",
                  "valueXField": "date"
                  }));

                  series.strokes.template.setAll({ strokeDasharray: [2, 2] })

                  series.data.setAll(data);

                  var tooltip = am5.Tooltip.new(root, {
                  pointerOrientation: "horizontal"
                  });
                  tooltip.label.set("text", "{valueY}");
                  series.set("tooltip", tooltip);

                  series.bullets.push(function() {
                  return am5.Bullet.new(root, {
                      locationX: undefined,
                      sprite: am5.Circle.new(root, {
                      radius: 4,
                      fill: am5.color(0xffba00),
                      stroke: am5.color(0x000000)
                      })
                  })
                  });

                  setInterval(function() {
                  addData();
                  }, 2000)


                  function addData() {
                  if (!document.hidden) {

                      var lastDataItem = series.dataItems[series.dataItems.length - 1];
                      var lastValue = lastDataItem.get("valueY");
                      var newValue = value + (Math.random() < 0.5 ? 1 : -1) * Math.random() * 5;
                      var lastDate = new Date(lastDataItem.get("valueX"));
                      var time = am5.time.add(new Date(lastDate), "day", 1).getTime();
                      series.data.removeIndex(0);
                      series.data.push({
                      date: time,
                      value: newValue
                      })

                      var newDataItem = series.dataItems[series.dataItems.length - 1];
                      newDataItem.animate({
                      key: "valueYWorking",
                      to: newValue,
                      from: lastValue,
                      duration: 1000,
                      easing: easing
                      });

                      var animation = newDataItem.animate({
                      key: "locationX",
                      to: 0.5,
                      from: -0.5,
                      duration: 1000,
                      easing:easing
                      });
                      if (animation) {
                      var tooltip = xAxis.get("tooltip");
                      if (tooltip && !tooltip.isHidden()) {
                          animation.events.on("stopped", function() {
                          xAxis.updateTooltip();
                          })
                      }
                      }
                  }
                  }

                  chart.appear(1000, 100);

                  series.appear(1000, 100);                  
              `,
          }}
        />
      </div>
    </Fragment>
  );
}
