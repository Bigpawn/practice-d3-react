import { useEffect, useRef } from "react";
import { range, timer } from "d3";

const CanvasRandomMotion = () => {
  const canvasRef = useRef<any>();

  const initChart = () => {
    const num = 20000;
    const width = (canvasRef.current.width = 960);
    const height = (canvasRef.current.height = 500);
    const ctx = canvasRef.current.getContext("2d");

    const particles = range(num).map(() => {
      return [
        Math.round(width * Math.random()),
        Math.round(height * Math.random()),
      ];
    });

    function drawPoint(p: any) {
      ctx.fillRect(p[0], p[1], 1, 1);
    }

    const step = () => {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      particles.forEach(function (p) {
        p[0] += Math.round(2 * Math.random() - 1);
        p[1] += Math.round(2 * Math.random() - 1);
        if (p[0] < 0) p[0] = width;
        if (p[0] > width) p[0] = 0;
        if (p[1] < 0) p[1] = height;
        if (p[1] > height) p[1] = 0;
        drawPoint(p);
      });
    };

    timer(step);
  };

  useEffect(() => {
    initChart();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasRandomMotion;
