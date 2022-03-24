export default function PolygonComponent({ color, position, addedStyle }) {
  const polygonC =
    position === "top" ? (
      <div
        className={`polygon-component-top custom-shape-divider-top-1642282616 z-10 ${addedStyle}`}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={color}
          ></path>
        </svg>
      </div>
    ) : (
      <div
        className={`polygon-component-bottom custom-shape-divider-bottom-1642282880 ${addedStyle}`}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={color}
          ></path>
        </svg>
      </div>
    );
  return (
    <>
      {polygonC}
      <style>{`
        .custom-shape-divider-top-1642282616 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

      .custom-shape-divider-top-1642282616 svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 128px;
          transform: rotateY(180deg);
      }

      .custom-shape-divider-top-1642282616 .shape-fill {
          fill: #E1E7EF;
      }
      
      .custom-shape-divider-bottom-1642282880 {
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
      }

      .custom-shape-divider-bottom-1642282880 svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 128px;
          transform: rotateY(180deg);
      }

      .shape-fill-blueGray-200 {
          fill: #E1E7EF;
      }

      .shape-fill-white {
          fill: #fff;
      }

      .shape-fill-black {
          fill: #000;
      }

      .shape-fill-blueGray-800 {
        fill: #1E293B;
      }
    `}</style>
    </>
  );
}
