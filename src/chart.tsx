import { onCleanup, onMount } from "solid-js";

export function Radar () {
  let svgRef: SVGSVGElement;

  const numLevels = 10; // Number of levels (from 1 to 10)
  const totalRadius = 70; // Total radius of the radar chart
  const centerX = 100; // Center X of the radar chart
  const centerY = 100; // Center Y of the radar chart
  const numLists = 3; // Number of lists to distribute over the full circle (360º)
  const sectorAngle = (2 * Math.PI) / numLists; // Angle for each sector (120º if numLists=3)

  const valueSets = [
    [2, 8, 2, 8, 3, 9, 3, 9], // First set of values
    [2, 8, 2, 8, 3, 9, 3, 9], // Second set of values
    [2, 8, 2, 8, 3, 9, 3, 9], // Third set of values
  ];

  const drawRadarChart = () => {
    const svg = svgRef;
    
    // Clear any previous drawings
    svg.innerHTML = "";

    // Iterate over each list of values
    valueSets.forEach((values, listIndex) => {
      const numValues = values.length; // Number of values in the list
      const startAngle = listIndex * sectorAngle; // Start angle for this sector
      const endAngle = startAngle + sectorAngle; // End angle for this sector

      // Draw circular grid lines (arcs) for each level
      for (let i = 1; i <= numLevels; i++) {
        const r = (totalRadius / numLevels) * i; // Radius for each level
        const largeArcFlag = 0;
        const startX = centerX + r * Math.cos(startAngle);
        const startY = centerY - r * Math.sin(startAngle);
        const endX = centerX + r * Math.cos(endAngle);
        const endY = centerY - r * Math.sin(endAngle);

        // Draw arc for this level
        const arcPath = `M${startX},${startY} A${r},${r} 0 ${largeArcFlag} 0 ${endX},${endY}`;
        const arc = document.createElementNS("http://www.w3.org/2000/svg", "path");
        arc.setAttribute("d", arcPath);
        arc.setAttribute("class", "grid-line");
        svg.appendChild(arc);
      }

      // Draw the startAngle and endAngle lines for this sector
      for (let i = 0; i < 2; i++) {
        const angle = i === 0 ? startAngle : endAngle;
        const x = centerX + totalRadius * Math.cos(angle);
        const y = centerY - totalRadius * Math.sin(angle);

        // Axis line
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", centerX.toString());
        line.setAttribute("y1", centerY.toString());
        line.setAttribute("x2", x.toString());
        line.setAttribute("y2", y.toString());
        line.setAttribute("class", "axis");
        svg.appendChild(line);
      }

      // Draw axes and data points for this list of values
      let previousPoint = null;
      values.forEach((value, i) => {
        const valueRadius = (totalRadius / numLevels) * value; // Get the radius based on the value
        const angle =
          startAngle + (i + 1) * ((endAngle - startAngle) / (numValues + 1)); // Calculate the angle for this value

        const x = centerX + valueRadius * Math.cos(angle);
        const y = centerY - valueRadius * Math.sin(angle);

        // Create a circle for the data point
        const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        point.setAttribute("cx", x.toString());
        point.setAttribute("cy", y.toString());
        point.setAttribute("r", "3"); // Radius of the data point
        point.setAttribute("class", "data-point");
        svg.appendChild(point);

        // If there's a previous point, draw a line between them
        if (previousPoint) {
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", previousPoint.x.toString());
          line.setAttribute("y1", previousPoint.y.toString());
          line.setAttribute("x2", x.toString());
          line.setAttribute("y2", y.toString());
          line.setAttribute("class", "data-line");
          svg.appendChild(line);
        }

        // Update the previous point
        previousPoint = { x, y };
      });
    });
  };

  onMount(() => {
    drawRadarChart();
  });

  return (
    <div class="radar-chart" style={{width: "1000px", height: "1000px"}}>
      <svg
        ref={svgRef!}
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
};