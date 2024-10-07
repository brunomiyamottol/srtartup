import React,  { Fragment }from "react";
import Script from "next/script";

export default function VennDiagramChart() {
  return (
    <Fragment>
      <div
        id={"divChartVennDiagram"}
        style={{
          height: "500px",
        }}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              am5.ready(function() {
                var root = am5.Root.new("divChartVennDiagram");
                
                root.setThemes([
                  am5themes_Animated.new(root)
                ]);        
        
                var container = root.container.children.push(
                  am5.Container.new(root, {
                    width: am5.p100,
                    height: am5.p100,
                    layout: root.verticalLayout
                  })
                );

                var chart = container.children.push(
                  am5venn.Venn.new(root, {
                    categoryField: "name",
                    valueField: "value",
                    intersectionsField: "sets",
                    paddingTop: 40,
                    paddingBottom: 40,
                    paddingLeft: 40,
                    paddingRight: 40
                  })
                );
          
                chart.slices.template.setAll({
                  tooltipText: "{category}",
                  strokeOpacity: 0,
                  templateField: "sliceSettings"
                });
                
                chart.labels.template.setAll({
                  textAlign: "center",
                  templateField: "labelSettings"
                });  
      
                chart.hoverGraphics.setAll({
                  strokeDasharray: [3, 3],
                  stroke: am5.color(0xffffff),
                  strokeWidth: 2
                });
        
                chart.data.setAll([
                  { name: "PROJECT \\n VALUE", value: 10, sliceSettings: { fill: '#7cb6d4' }, labelSettings: { fill: 'white' } },
                  { name: "DEBT &\\n CAPITAL \\nSTRUCTURE", value: 20, sliceSettings: { fill: "#003571" }, labelSettings: { fill: 'white' }  },
                  { name: "QUALITATIVE \\nDATA", value: 20, sliceSettings: { fill: '#0b5f87' }, labelSettings: { fill: 'white' }  },
                  { name: "P&L \\n ASSUMPTIONS", value: 20, sliceSettings: { fill: '#0367a0' }, labelSettings: { fill: 'white' }  },
                  { name: "INVESTMENT \\nASSUMPTIONS", value: 20, sliceSettings: { fill: '#118bc5' }, labelSettings: { fill: 'white' }  },
                  { name: "", value: 10, sets: ["PROJECT \\n VALUE", "DEBT &\\n CAPITAL \\nSTRUCTURE"], sliceSettings: { fill: '#7cb6d4' }  },
                  { name: "", value: 10, sets: ["PROJECT \\n VALUE", "QUALITATIVE \\nDATA"], sliceSettings: { fill: '#7cb6d4' }  },
                  { name: "", value: 10, sets: ["PROJECT \\n VALUE", "P&L \\n ASSUMPTIONS"], sliceSettings: { fill: '#7cb6d4' }  },
                  { name: "", value: 10, sets: ["PROJECT \\n VALUE", "INVESTMENT \\nASSUMPTIONS"], sliceSettings: { fill: '#7cb6d4' }  }
                ]);
              });
            `,
        }}
      />
    </Fragment>
  );
}
