export enum hexagonBackground {
  greenDark = 'green-dark',
  teal = 'teal',
  green = 'green',
  yellow = 'yellow',
  orange = 'orange',
  red = 'red',
  pink = 'pink',
  purple = 'purple',
  blueDark = 'blue-dark',
  blue = 'blue',
  silver = 'silver',
  gold = 'gold',
}

export default function Hexagon({ children, size, color }: any) {
  return (
    <div className="border-container">
      <div className={`hexagon-container ${color}`}>
        <div className="content">{children}</div>
      </div>
      <style jsx>
        {`
          .border-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: ${size * 0.645 * 1.1}rem;
            height: ${size * 1.1}rem;
            background: #ddd;
            border-radius: ${size / 8}rem;
          }
          .hexagon-container {
            position: relative;
            width: ${size * 0.645}rem;
            height: ${size}rem;
            border-radius: ${size / 8}rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .hexagon-container,
          .hexagon-container:before,
          .hexagon-container:after {
            z-index: 1;
          }
          .border-container:before,
          .border-container:after,
          .hexagon-container:before,
          .hexagon-container:after {
            position: absolute;
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background: inherit;
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
          .border-container:before,
          .hexagon-container:before {
            transform: rotate(60deg);
          }
          .border-container:after,
          .hexagon-container:after {
            transform: rotate(-60deg);
          }
          .content {
            position: absolute;
            z-index: 2;
          }
          .yellow {
            background: linear-gradient(
              to bottom right,
              #ffeb3b 0%,
              #fbc02d 100%
            );
            color: #ffb300;
          }

          .orange {
            background: linear-gradient(
              to bottom right,
              #ffc107 0%,
              #f57c00 100%
            );
            color: #f68401;
          }

          .pink {
            background: linear-gradient(
              to bottom right,
              #f48fb1 0%,
              #d81b60 100%
            );
            color: #dc306f;
          }

          .red {
            background: linear-gradient(
              to bottom right,
              #f4511e 0%,
              #b71c1c 100%
            );
            color: #c62828;
          }

          .purple {
            background: linear-gradient(
              to bottom right,
              #ab47bc 0%,
              #4527a0 100%
            );
            color: #7127a8;
          }

          .teal {
            background: linear-gradient(
              to bottom right,
              #4db6ac 0%,
              #00796b 100%
            );
            color: #34a297;
          }

          .blue {
            background: linear-gradient(
              to bottom right,
              #4fc3f7 0%,
              #2196f3 100%
            );
            color: #259af3;
          }

          .blue-dark {
            background: linear-gradient(
              to bottom right,
              #1976d2 0%,
              #283593 100%
            );
            color: #1c68c5;
          }

          .green {
            background: linear-gradient(
              to bottom right,
              #cddc39 0%,
              #8bc34a 100%
            );
            color: #7cb342;
          }

          .green-dark {
            background: linear-gradient(
              to bottom right,
              #4caf50 0%,
              #1b5e20 100%
            );
            color: #00944a;
          }

          .silver {
            background: linear-gradient(
              to bottom right,
              #e0e0e0 0%,
              #bdbdbd 100%
            );
            color: #9e9e9e;
          }

          .gold {
            background: linear-gradient(
              to bottom right,
              #e6ce6a 0%,
              #b7892b 100%
            );
            color: #b7892b;
          }
        `}
      </style>
    </div>
  )
}
