import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";
import Context from "../../context/context";
import firebase from "firebase";
import { BeatLoader } from "react-spinners";

function Svg() {
  const [ash, setAsh] = useState(false);

  const ash127 = () => {
    setAsh(true);
  };

  return (
    <>
      <h1>Svg page </h1>
      <button onClick={ash127}>click</button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1200}
        scale={10}
        height={600.0}
        viewBox="0.0 0.0 900.000 600.000"
        version="1.1"
      >
        <title>Produce by Acme CAD Converter</title>
        <desc>Produce by Acme CAD Converter</desc>

        {ash ? (
          <polyline
            points="193.66,266.18 211.98,266.18"
            style={{
              fill: "none",
              stroke: "red",
              strokeWidth: "0.5",
            }}
          />
        ) : (
          <polyline
            points="193.66,266.18 211.98,266.18"
            style={{
              fill: "none",
              stroke: "white",
              strokeWidth: "0.5",
            }}
          />
        )}
        <polyline
          points="211.98,266.18 211.98,290.29"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="247.38,228.63 247.38,224.98"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="247.38,224.98 196.97,224.98"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="196.97,224.98 196.97,262.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="196.97,262.83 215.95,262.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="215.95,262.83 215.95,290.28"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="207.93,290.29 207.93,276.15"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="207.93,276.15 189.25,276.15"
          style={{
            fill: "none",
            stroke: "white",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="203.92,290.28 203.92,279.61"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="203.92,279.61 189.19,279.61"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="200.07,290.29 200.07,282.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="200.07,282.1 189.05,282.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="195.72,290.31 195.72,284.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="195.72,284.83 188.59,284.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="218.29,290.28 193.16,290.28"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="255.84,228.63 255.84,208.38"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="255.84,208.38 426.97,208.38"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="426.97,208.38 426.97,226.58"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="258.25,228.63 258.25,210.71"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="258.25,210.71 424.34,210.71"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="424.34,210.71 424.34,226.6"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="429.01,226.6 429.01,219.45"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="429.01,219.45 453.56,219.45"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="431.9,226.56 431.9,222.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="431.9,222.2 453.51,222.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="434.38,226.56 421.84,226.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="307.22,220.56 321.14,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="332.37,220.56 346.3,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="362.05,220.56 375.98,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="276.57,249.27 283.12,249.27"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="295.37,249.25 306.03,249.25"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="316.55,249.3 323.82,249.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="340.33,248.78 348.28,248.78"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="367.08,248.55 377.87,248.55"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="385.28,248.85 392.19,248.85"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="309.34,220.56 309.34,215.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="309.34,215.7 190.33,215.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="190.33,215.7 190.33,269.48"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="190.33,269.48 223.62,269.48"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="223.62,269.48 223.62,311.11"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="223.62,311.11 209.91,311.11"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="209.91,311.11 209.91,306.05"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="218.35,306.1 193.09,306.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="213.25,306.1 213.25,308.6"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="213.25,308.6 220.27,308.6"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="220.27,308.6 220.27,272.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="220.27,272.83 187.01,272.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="187.01,272.83 187.01,212.87"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="187.01,212.87 312.31,212.87"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="312.31,212.87 312.31,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="315.25,220.56 315.25,215.21"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="315.25,215.21 337.97,215.21"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="337.97,215.21 337.97,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="341.05,220.56 341.05,215.19"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="341.05,215.19 368.68,215.19"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="368.68,215.19 368.68,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="371.51,220.56 371.51,215.21"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="371.51,215.21 402.37,215.21"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="402.37,215.21 402.37,237.78"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="402.37,237.78 416.58,237.78"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="416.58,237.78 416.58,250.18"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="430.08,250.14 406,250.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="413.58,250.14 413.58,239.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="413.58,239.83 399.43,239.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="399.43,239.83 399.43,217.37"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="399.43,217.37 374.18,217.37"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="374.18,217.37 374.18,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="365.97,220.56 365.97,217.35"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="365.97,217.35 344.03,217.35"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="344.03,217.35 344.03,220.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="410.67,250.14 410.67,243.18"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="410.67,243.18 371.36,243.18"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="371.36,243.18 371.36,248.55"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="369.01,248.55 369.01,243.17"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="369.01,243.17 299.53,243.17"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="299.53,243.17 299.53,249.25"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="318.65,243.17 318.65,249.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="297.3,249.25 297.3,243.12"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="297.3,243.12 260.1,243.12"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="260.1,243.12 260.1,251.87"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="278.25,243.12 278.25,249.27"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="264.75,251.85 239.5,251.85"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="247.95,251.85 247.95,244.8"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="247.95,244.8 203.79,244.8"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="211.56,244.8 211.56,250.68"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="206.57,250.68 218.53,250.68"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="255.01,235.1 257.44,235.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="257.44,235.1 257.44,251.85"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="249.02,235.07 250.45,235.07"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="250.45,235.07 250.45,251.85"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="261.2,251.85 261.2,276.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="261.2,276.65 304.72,276.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="304.72,276.65 304.72,289.58"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="258.02,251.85 258.02,278.79"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="258.02,278.79 302.54,278.79"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="302.54,278.79 302.54,289.59"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="262.36,251.85 262.36,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="262.36,244.97 301.84,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="301.84,244.97 301.84,249.25"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="304.12,249.25 304.12,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="304.12,244.97 373.72,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="373.72,244.97 373.72,248.55"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="375.87,248.55 375.87,244.94"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="375.87,244.94 407.98,244.94"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="407.98,244.94 407.98,250.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="280.96,249.27 280.96,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="321.43,249.3 321.43,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="342.65,248.78 342.65,243.17"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="345.41,248.78 345.41,244.97"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="387.09,248.85 387.09,243.18"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="389.88,248.85 389.88,244.94"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="425.72,233.2 426.47,233.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="426.47,233.2 426.47,240.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="426.47,240.7 424.07,240.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="424.07,240.7 424.07,250.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="431.74,233.18 433.47,233.18"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="433.47,233.18 433.47,240.68"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="433.47,240.68 427.98,240.68"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="427.98,240.68 427.98,250.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="408.35,250.14 408.35,278.81"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="408.35,278.81 375.34,278.81"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="375.34,278.81 375.34,282.94"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="411.09,250.14 411.09,276.63"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="411.09,276.63 372.99,276.63"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="372.99,276.63 372.99,282.93"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="370.97,282.92 370.97,276.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="370.97,276.65 306.96,276.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="306.96,276.65 306.96,289.59"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="368.62,282.91 368.62,278.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="368.62,278.82 309.12,278.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="309.12,278.82 309.12,289.58"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="339.29,276.65 339.29,282.96"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="342.04,278.82 342.04,282.96"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="345.88,282.92 336.25,282.92"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="377.76,282.9 358.05,282.9"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="394.37,276.63 394.37,282.98"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="398.75,282.96 383.38,282.96"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="424.19,250.14 424.19,304.85"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="427.09,250.14 427.09,304.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="427.09,254.38 437.08,254.38"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="437.08,254.38 437.08,260.06"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="424.19,256.48 434.85,256.48"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="434.85,256.48 434.85,260.07"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="432.2,260.02 440.46,260.02"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="416.83,250.14 416.83,300.32"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="416.83,300.32 379.45,300.32"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="379.45,300.32 379.45,306.92"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="413.75,250.14 413.75,296.95"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="413.75,296.95 376.11,296.95"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="376.11,296.95 376.11,306.92"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="399.95,296.95 399.95,306.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="402.66,300.32 402.66,306.68"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="404.39,306.6 398.2,306.6"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="381.96,306.93 366.75,306.93"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="372.5,306.93 372.5,296.99"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="372.5,296.99 330.21,296.99"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="330.21,296.99 330.21,362.73"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="330.21,362.73 206.56,362.73"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="206.56,362.73 206.56,306.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="203.25,306.1 203.25,365.74"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="203.25,365.74 333.54,365.74"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="333.54,365.74 333.54,300.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="333.54,300.3 368.84,300.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="368.84,300.3 368.84,306.93"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="199.92,306.1 199.92,369.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="199.92,369.41 346.87,369.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="346.87,369.41 346.87,326.11"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="346.87,326.11 372.1,326.11"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="372.1,326.11 372.1,334.07"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="368.55,334.05 368.55,329.4"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="368.55,329.4 350.18,329.4"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="350.18,329.4 350.18,372.42"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="350.18,372.42 196.58,372.42"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="196.58,372.42 196.58,306.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="246.78,251.85 246.78,260.33"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="246.78,260.33 237,260.33"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="237,260.33 237,341.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="240.31,341.41 227.41,341.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="234.22,341.41 234.22,258.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="234.22,258.39 244.11,258.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="244.11,258.39 244.11,251.85"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="237,320.91 220.23,320.91"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="220.23,320.91 220.23,327.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="234.22,318.08 216.9,318.08"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="216.9,318.08 216.9,327.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="223.07,327.81 215.15,327.81"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="250.84,251.85 250.84,303.79"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="250.84,303.79 256.73,303.79"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="256.73,303.79 243.62,303.79"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="246.27,303.79 246.27,321.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="246.27,321.14 241.79,321.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="241.79,321.14 251.92,321.14"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="250.17,303.79 250.17,314.44"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="250.17,314.44 262.6,314.44"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="262.6,314.44 262.6,323.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="262.6,323.39 258.24,323.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="258.24,323.39 272.3,323.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="266.7,323.39 266.7,326.24"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="254.11,303.79 254.11,311.27"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="254.11,311.27 281.82,311.27"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="281.82,311.27 281.82,326.56"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="268.07,244.97 268.07,285.48"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="300.69,289.58 300.69,280.93"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="300.69,280.93 270.82,280.93"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="270.82,280.93 270.82,285.49"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="286.39,280.93 286.39,326.63"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="279.93,326.57 288.27,326.57"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="273.74,285.47 265.15,285.47"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="298.98,289.57 311.45,289.57"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="363.09,334.05 380.07,334.05"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="367.79,334.05 367.79,344.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="371.4,334.05 371.4,344.82"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="364.37,344.79 373.42,344.79"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="375.6,334.05 375.6,329.25"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="375.6,329.25 396.59,329.25"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="396.59,329.25 396.59,333.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="399.94,333.64 399.94,329.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="399.94,329.3 421.6,329.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="421.6,329.3 421.6,304.77"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="433.67,304.87 433.67,328.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="433.67,328.83 430.67,328.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="430.67,328.83 438.83,328.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="419.28,304.84 438.91,304.84"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="436.56,304.84 436.56,301.13"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="436.56,301.13 449.69,301.13"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="449.69,301.13 449.69,314.42"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="449.69,314.42 452.91,314.42"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="452.91,314.42 446.53,314.42"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="436.31,304.84 436.31,328.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="254.26,351.43 254.26,346.11"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="254.26,346.11 266.58,346.11"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="266.58,346.11 266.58,365.74"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="257.1,351.32 257.1,348.71"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="257.1,348.71 263.74,348.71"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="263.74,348.71 263.74,362.73"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="308.05,351.3 308.05,346.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="308.05,346.1 320.38,346.1"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="320.38,346.1 320.38,365.74"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="317.55,362.73 317.55,348.66"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="317.55,348.66 310.88,348.66"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="310.88,348.66 310.88,351.36"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="313.67,351.29 305.1,351.29"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="261.1,351.36 249.5,351.36"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="301.27,297.61 301.27,300.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="301.27,300.39 309.59,300.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="301.27,300.39 300.13,300.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="308.31,297.77 308.31,300.39"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="303.18,300.39 303.18,325.29"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="307.08,300.39 307.08,325.26"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="307.08,325.26 300.24,325.26"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="307.08,325.26 309.7,325.26"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="305.49,325.26 305.49,344.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="305.49,344.41 266.56,344.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="266.56,344.41 266.56,328.87"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="266.56,328.87 266.56,328.77"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="266.56,328.77 267.89,328.77"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="267.89,328.77 267.89,326.24"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="267.89,326.24 265.34,326.24"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="265.34,326.24 265.34,328.77"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="265.34,328.77 266.56,328.77"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="396.59,333.7 393.15,333.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="393.15,333.7 403.38,333.7"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="215.15,250.68 215.15,253.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="215.15,253.2 216.38,253.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="216.38,253.2 216.38,255.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="216.38,255.2 213.81,255.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="213.81,255.2 213.81,253.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="213.81,253.2 215.15,253.2"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="215.08,255.2 215.08,256.46"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="215.08,256.46 222.57,256.46"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="222.57,256.46 222.57,254.3"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="222.57,254.3 222.57,258.42"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="423.53,226.56 423.53,230.83"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="423.53,230.83 422.81,231.21 422.28,231.83 422.01,232.6 422.03,233.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="422.03,233.41 422.22,234.12 422.73,234.66 423.42,234.88 424.15,234.75 424.72,234.29 425,233.61"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="425,233.61 425.03,232.94 424.76,232.32 424.25,231.89 423.59,231.73 422.94,231.88 422.42,232.31"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="422.42,232.31 422.07,232.97 422.06,233.71 422.4,234.37"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="422.01,235.63 422.21,234.9 422.74,234.38 423.46,234.18 424.18,234.38 424.71,234.9 424.9,235.63 424.71,236.35 424.18,236.88 423.46,237.07 422.74,236.88 422.21,236.35 422.01,235.63"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="423.53,237.07 423.53,239.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="423.53,239.65 422.35,239.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="422.35,239.65 424.89,239.65"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="299.68,293.96 299.86,293.25 300.35,292.7 301.03,292.44 301.76,292.53 302.36,292.94 302.7,293.59 302.7,294.33 302.36,294.98 301.76,295.39 301.03,295.48 300.35,295.22 299.86,294.67 299.68,293.96"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="302.07,294.89 302.24,294.17 302.73,293.62 303.42,293.36 304.14,293.45 304.75,293.87 305.09,294.52 305.09,295.25 304.75,295.9 304.14,296.32 303.42,296.41 302.73,296.15 302.24,295.6 302.07,294.89"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="299.79,296.06 299.96,295.35 300.45,294.8 301.14,294.54 301.86,294.63 302.47,295.05 302.81,295.7 302.81,296.43 302.47,297.08 301.86,297.49 301.14,297.58 300.45,297.32 299.96,296.77 299.79,296.06"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="306.85,294.06 307.03,293.35 307.52,292.8 308.2,292.54 308.93,292.63 309.53,293.04 309.87,293.69 309.87,294.42 309.53,295.07 308.93,295.49 308.2,295.58 307.52,295.32 307.03,294.77 306.85,294.06"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="309.03,295.26 309.21,294.55 309.7,294 310.38,293.74 311.11,293.82 311.71,294.24 312.05,294.89 312.05,295.62 311.71,296.27 311.11,296.69 310.38,296.78 309.7,296.52 309.21,295.97 309.03,295.26"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="306.81,296.12 306.99,295.41 307.47,294.86 308.16,294.6 308.89,294.69 309.49,295.1 309.83,295.75 309.83,296.49 309.49,297.14 308.89,297.55 308.16,297.64 307.47,297.38 306.99,296.83 306.81,296.12"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="305.13,294.9 305.9,294.9"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="305.9,294.9 305.9,298.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="305.9,298.41 314.58,298.41"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="314.58,298.41 314.58,300.04"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="314.58,298.41 314.58,293.59"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="314.58,295.06 312.09,295.06"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="301.23,289.57 301.22,292.43"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="308.45,289.57 308.45,292.53"
          style={{
            fill: "none",
            stroke: "RGB(94,103,175)",
            strokeWidth: "0.5",
          }}
        />
        <polyline
          points="230.49,347.05 231.52,345.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="232.55,347.05 232.55,343.96 231.22,343.96 230.78,344.11 230.63,344.25 230.49,344.55 230.49,344.84 230.63,345.14 230.78,345.29 231.22,345.43 232.55,345.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="235.35,346.61 235.05,346.91 234.76,347.05 234.32,347.05 234.02,346.91 233.87,346.76 233.73,346.61 233.58,346.17 233.58,345.88 233.73,345.43 234.02,345.14 234.32,344.99 234.76,344.99 235.05,345.14 235.35,345.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="235.35,344.99 235.35,347.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="236.53,344.99 236.53,348.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="236.53,345.43 236.82,345.14 237.12,344.99 237.56,344.99 237.85,345.14 238.15,345.43 238.3,345.88 238.3,346.17 238.15,346.61 237.85,346.91 237.56,347.05 237.12,347.05 236.82,346.91 236.53,346.61"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="241.39,347.05 241.39,344.99 240.36,346.61 239.33,344.99 239.33,347.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="244.19,346.61 243.89,346.91 243.6,347.05 243.16,347.05 242.86,346.91 242.72,346.76 242.57,346.61 242.42,346.17 242.42,345.88 242.57,345.43 242.86,345.14 243.16,344.99 243.6,344.99 243.89,345.14 244.19,345.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="244.19,344.99 244.19,347.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="245.22,345.43 245.37,345.14 245.81,344.99 246.25,344.99 246.69,345.14 246.84,345.43 246.69,345.73 246.4,345.88 245.66,346.02 245.37,346.17 245.22,346.46 245.22,346.61 245.37,346.91 245.81,347.05 246.25,347.05 246.69,346.91 246.84,346.61"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="248.63,352.59 248.63,355.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="247.6,352.59 249.66,352.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="252.02,355.24 251.73,355.54 251.43,355.68 250.99,355.68 250.69,355.54 250.55,355.39 250.4,355.24 250.25,354.8 250.25,354.51 250.4,354.06 250.69,353.77 250.99,353.62 251.43,353.62 251.73,353.77 252.02,354.06"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="252.02,353.62 252.02,355.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="256.15,355.68 256.15,353.62"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="256.15,355.09 255.7,355.54 255.41,355.68 255.11,355.68 254.82,355.54 254.67,355.09 254.67,353.62"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="254.67,355.09 254.23,355.54 253.94,355.68 253.64,355.68 253.35,355.54 253.2,355.09 253.2,353.62"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="257.18,354.06 257.32,353.77 257.77,353.62 258.21,353.62 258.65,353.77 258.8,354.06 258.65,354.36 258.36,354.51 257.62,354.65 257.32,354.8 257.18,355.09 257.18,355.24 257.32,355.54 257.77,355.68 258.21,355.68 258.65,355.54 258.8,355.24"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="261.45,355.24 261.16,355.54 260.86,355.68 260.42,355.68 260.12,355.54 259.98,355.39 259.83,355.24 259.68,354.8 259.68,354.51 259.83,354.06 260.12,353.77 260.42,353.62 260.86,353.62 261.16,353.77 261.45,354.06"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="261.45,353.62 261.45,355.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="262.63,353.62 262.63,355.09 262.78,355.54 263.07,355.68 263.51,355.68 263.81,355.54 264.25,355.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="264.25,353.62 264.25,355.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="262.92,353.03 263.07,353.18 263.37,353.33 263.66,353.33 263.95,353.18 264.1,353.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="303,354.53 304.48,354.53"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="302.56,355.56 303.74,352.47 304.92,355.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="305.65,353.5 305.65,356.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="305.65,353.94 305.95,353.65 306.24,353.5 306.69,353.5 306.98,353.65 307.28,353.94 307.42,354.38 307.42,354.68 307.28,355.12 306.98,355.42 306.69,355.56 306.24,355.56 305.95,355.42 305.65,355.12"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="308.45,353.5 308.45,354.97 308.6,355.42 308.9,355.56 309.34,355.56 309.63,355.42 310.07,354.97"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="310.07,353.5 310.07,355.56 310.37,355.56 310.37,356"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="312.87,355.12 312.58,355.42 312.28,355.56 311.84,355.56 311.55,355.42 311.4,355.27 311.25,355.12 311.11,354.68 311.11,354.38 311.25,353.94 311.55,353.65 311.84,353.5 312.28,353.5 312.58,353.65 312.87,353.94"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="312.87,353.5 312.87,355.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="314.05,353.5 314.05,355.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="314.05,354.09 314.49,353.65 314.79,353.5 315.08,353.5 315.38,353.65 315.53,354.09 315.53,355.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="315.53,354.09 315.97,353.65 316.26,353.5 316.56,353.5 316.85,353.65 317,354.09 317,355.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="277.87,328.05 277.87,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="276.84,328.05 278.9,328.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="280.23,329.08 280.67,329.08 280.96,329.23 281.26,329.53 281.41,329.97 281.41,330.26 281.26,330.7 280.96,331 280.67,331.15 280.23,331.15 279.93,331 279.64,330.7 279.49,330.26 279.49,329.97 279.64,329.53 279.93,329.23 280.23,329.08"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="283.91,329.08 283.03,329.08 283.03,330.56 282.88,331 282.58,331.15 282.29,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="283.91,329.08 283.91,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="284.94,329.53 285.09,329.23 285.53,329.08 285.97,329.08 286.42,329.23 286.56,329.53 286.42,329.82 286.12,329.97 285.38,330.11 285.09,330.26 284.94,330.56 284.94,330.7 285.09,331 285.53,331.15 285.97,331.15 286.42,331 286.56,330.7"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="288.18,329.08 288.63,329.08 288.92,329.23 289.22,329.53 289.36,329.97 289.36,330.26 289.22,330.7 288.92,331 288.63,331.15 288.18,331.15 287.89,331 287.59,330.7 287.45,330.26 287.45,329.97 287.59,329.53 287.89,329.23 288.18,329.08"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="290.39,329.08 290.39,330.56 290.54,331 290.84,331.15 291.28,331.15 291.57,331 292.01,330.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="292.01,329.08 292.01,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="290.69,328.49 290.84,328.64 291.13,328.79 291.43,328.79 291.72,328.64 291.87,328.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="293.19,329.08 293.19,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="293.19,329.67 293.64,329.23 293.93,329.08 294.22,329.08 294.52,329.23 294.67,329.67 294.67,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="294.67,329.67 295.11,329.23 295.4,329.08 295.7,329.08 295.99,329.23 296.14,329.67 296.14,331.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="251.76,326.62 251.76,329.71 254.12,329.71 254.12,330.3"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="253.83,326.62 253.83,329.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="254.71,328.09 255,327.8 255.3,327.65 255.74,327.65 256.04,327.8 256.33,328.09 256.48,328.54 256.48,328.83 256.33,329.27 256.04,329.57 255.74,329.71 255.3,329.71 255,329.57 254.71,329.27"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="256.48,328.68 255.59,328.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="257.51,328.09 257.8,327.8 258.1,327.65 258.54,327.36 258.69,327.06 258.54,326.77 258.39,326.62 257.95,326.62 257.66,326.77 257.51,326.92 257.51,329.13 257.66,329.42 257.8,329.57 258.1,329.71 258.54,329.71 258.84,329.57 259.13,329.27 259.28,328.83 259.28,328.54 259.13,328.09 258.84,327.8 258.54,327.65 258.1,327.65"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="260.01,328.09 260.31,327.8 260.6,327.65 261.05,327.65 261.34,327.8 261.63,328.09 261.78,328.54 261.78,328.83 261.63,329.27 261.34,329.57 261.05,329.71 260.6,329.71 260.31,329.57 260.01,329.27"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="261.78,328.68 260.9,328.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="262.81,327.65 262.81,330.75"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="262.81,328.09 263.11,327.8 263.4,327.65 263.85,327.65 264.14,327.8 264.43,328.09 264.58,328.54 264.58,328.83 264.43,329.27 264.14,329.57 263.85,329.71 263.4,329.71 263.11,329.57 262.81,329.27"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="267.09,327.65 266.2,327.65 266.2,329.13 266.06,329.57 265.76,329.71 265.47,329.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="267.09,327.65 267.09,329.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="267.97,328.09 268.27,327.8 268.56,327.65 269,327.65 269.3,327.8 269.59,328.09 269.74,328.54 269.74,328.83 269.59,329.27 269.3,329.57 269,329.71 268.56,329.71 268.27,329.57 267.97,329.27"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="269.74,328.68 268.85,328.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="270.33,327.65 271.95,329.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="271.95,327.65 270.33,329.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="241.22,322.65 239.45,322.65 239.45,325.74"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="241.81,324.57 243.58,324.57 243.58,324.27 243.43,323.98 243.28,323.83 242.99,323.68 242.55,323.68 242.25,323.83 241.96,324.12 241.81,324.57 241.81,324.86 241.96,325.3 242.25,325.6 242.55,325.74 242.99,325.74 243.28,325.6 243.58,325.3"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="245.2,323.68 245.64,323.68 245.94,323.83 246.23,324.12 246.38,324.57 246.38,324.86 246.23,325.3 245.94,325.6 245.64,325.74 245.2,325.74 244.9,325.6 244.61,325.3 244.46,324.86 244.46,324.57 244.61,324.12 244.9,323.83 245.2,323.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="213.98,330.46 212.36,330.46 212.36,333.55 213.68,333.55 214.13,333.41 214.27,333.26 214.42,332.96 214.42,332.52 214.27,332.23 214.13,332.08 213.68,331.93 212.36,331.93"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="215.01,331.49 215.89,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="216.78,331.49 215.89,333.55 215.6,334.14 215.31,334.44 215.01,334.59 214.86,334.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="217.37,333.55 217.96,332.82"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="218.84,333.55 218.84,331.49 217.96,331.49 217.66,331.64 217.52,331.79 217.37,332.08 217.37,332.23 217.52,332.52 217.66,332.67 217.96,332.82 218.84,332.82"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="220.02,332.52 221.64,332.52"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="221.64,331.49 221.64,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="220.02,331.49 220.02,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="222.82,331.49 222.82,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="222.82,332.08 223.26,331.64 223.56,331.49 223.85,331.49 224.15,331.64 224.29,332.08 224.29,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="224.29,332.08 224.74,331.64 225.03,331.49 225.32,331.49 225.62,331.64 225.77,332.08 225.77,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="226.36,332.23 229.01,332.23"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="232.4,330.46 231.37,332.96 231.22,333.26 231.07,333.41 230.78,333.55 230.63,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="230.33,330.46 231.37,332.96"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="232.69,331.49 234.31,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="234.31,331.49 232.69,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="236.67,333.11 236.38,333.41 236.08,333.55 235.64,333.55 235.34,333.41 235.2,333.26 235.05,333.11 234.9,332.67 234.9,332.38 235.05,331.93 235.34,331.64 235.64,331.49 236.08,331.49 236.38,331.64 236.67,331.93"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="236.67,331.49 236.67,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="239.47,333.11 239.17,333.41 238.88,333.55 238.44,333.55 238.14,333.41 238,333.26 237.85,333.11 237.7,332.67 237.7,332.38 237.85,331.93 238.14,331.64 238.44,331.49 238.88,331.49 239.17,331.64 239.47,331.93"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="239.47,331.49 239.47,333.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="188.97,300.94 188.82,300.65 188.68,300.5 188.53,300.35 188.23,300.2 187.64,300.2 187.35,300.35 187.2,300.5 187.06,300.65 186.91,300.94 186.76,301.38 186.76,302.12 186.91,302.56 187.06,302.86 187.35,303.15 187.64,303.3 188.23,303.3 188.53,303.15 188.82,302.86 188.97,302.56"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="190.44,301.24 190.89,301.24 191.18,301.38 191.48,301.68 191.62,302.12 191.62,302.41 191.48,302.86 191.18,303.15 190.89,303.3 190.44,303.3 190.15,303.15 189.85,302.86 189.71,302.41 189.71,302.12 189.85,301.68 190.15,301.38 190.44,301.24"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="192.65,302.27 194.27,302.27"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="194.27,301.24 194.27,303.3"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="192.65,301.24 192.65,303.3"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="195.31,301.68 195.45,301.38 195.9,301.24 196.34,301.24 196.78,301.38 196.93,301.68 196.78,301.97 196.49,302.12 195.75,302.27 195.45,302.41 195.31,302.71 195.31,302.86 195.45,303.15 195.9,303.3 196.34,303.3 196.78,303.15 196.93,302.86"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="197.96,301.24 197.96,302.71 198.11,303.15 198.4,303.3 198.84,303.3 199.14,303.15 199.58,302.71"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="199.58,301.24 199.58,303.3"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="200.76,302.27 202.38,302.27"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="202.38,301.24 202.38,303.3"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="200.76,301.24 200.76,303.3"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="204.15,301.24 204.59,301.24 204.88,301.38 205.18,301.68 205.33,302.12 205.33,302.41 205.18,302.86 204.88,303.15 204.59,303.3 204.15,303.3 203.85,303.15 203.56,302.86 203.41,302.41 203.41,302.12 203.56,301.68 203.85,301.38 204.15,301.24"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="200.51,253.24 199.3,253.24 199.3,255.57 200.29,255.57 200.62,255.46 200.73,255.34 200.84,255.12 200.84,254.79 200.73,254.57 200.62,254.46 200.29,254.35 199.3,254.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="202.83,255.23 202.61,255.46 202.39,255.57 202.06,255.57 201.84,255.46 201.73,255.34 201.62,255.23 201.51,254.9 201.51,254.68 201.62,254.35 201.84,254.13 202.06,254.02 202.39,254.02 202.61,254.13 202.83,254.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="202.83,254.02 202.83,255.57"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="203.61,255.57 204.05,255.01"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="204.71,255.57 204.71,254.02 204.05,254.02 203.83,254.13 203.72,254.24 203.61,254.46 203.61,254.57 203.72,254.79 203.83,254.9 204.05,255.01 204.71,255.01"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="205.6,254.79 206.81,254.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="206.81,254.02 206.81,255.57"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="205.6,254.02 205.6,255.57"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="199.3,257.89 199.3,258.44 199.41,258.77 199.63,258.88 199.96,258.88 200.18,258.77 200.51,258.44"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="200.51,257.89 200.51,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="202.61,259.1 202.39,259.32 202.17,259.43 201.84,259.43 201.62,259.32 201.51,259.21 201.4,259.1 201.29,258.77 201.29,258.55 201.4,258.22 201.62,258 201.84,257.89 202.17,257.89 202.39,258 202.61,258.22"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="202.61,257.89 202.61,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="203.5,258.66 204.71,258.66"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="204.71,257.89 204.71,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="203.5,257.89 203.5,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="206.81,258.22 206.7,258.11 206.59,258 206.37,257.89 206.04,257.89 205.82,258 205.6,258.22 205.49,258.55 205.49,258.77 205.6,259.1 205.82,259.32 206.04,259.43 206.37,259.43 206.59,259.32 206.81,259.1"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="206.81,257.89 206.81,259.65 206.7,259.99 206.59,260.1 206.37,260.21 206.04,260.21 205.82,260.1"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="209.24,259.43 209.24,257.89 208.47,259.1 207.7,257.89 207.7,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="211.34,259.1 211.12,259.32 210.9,259.43 210.57,259.43 210.35,259.32 210.24,259.21 210.13,259.1 210.02,258.77 210.02,258.55 210.13,258.22 210.35,258 210.57,257.89 210.9,257.89 211.12,258 211.34,258.22"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="211.34,257.89 211.34,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="212.23,258.66 213.44,258.66"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="213.44,257.89 213.44,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="212.23,257.89 212.23,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="214.33,258.55 214.44,258.44 214.66,258.33 214.99,258.33 215.1,258.33 215.32,258.44 215.43,258.55 215.54,258.77 215.54,258.99 215.43,259.21 215.32,259.32 215.1,259.43 214.66,259.43 214.44,259.32 214.33,259.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="214.33,257.89 214.33,259.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="225.06,254.21 225.06,251.88 224.18,253.54 223.29,251.88 223.29,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="226.39,252.66 226.72,252.66 226.94,252.77 227.16,252.99 227.27,253.32 227.27,253.54 227.16,253.87 226.94,254.09 226.72,254.21 226.39,254.21 226.17,254.09 225.95,253.87 225.84,253.54 225.84,253.32 225.95,252.99 226.17,252.77 226.39,252.66"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="228.05,253.43 229.26,253.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="229.26,252.66 229.26,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="228.05,252.66 228.05,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="230.15,253.43 231.36,253.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="231.36,252.66 231.36,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="230.15,252.66 230.15,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="233.46,253.87 233.24,254.09 233.02,254.21 232.69,254.21 232.47,254.09 232.36,253.98 232.24,253.87 232.13,253.54 232.13,253.32 232.24,252.99 232.47,252.77 232.69,252.66 233.02,252.66 233.24,252.77 233.46,252.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="233.46,252.66 233.46,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="234.34,252.66 234.34,254.98"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="234.34,252.99 234.57,252.77 234.79,252.66 235.12,252.66 235.34,252.77 235.56,252.99 235.67,253.32 235.67,253.54 235.56,253.87 235.34,254.09 235.12,254.21 234.79,254.21 234.57,254.09 234.34,253.87"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="237.66,253.87 237.44,254.09 237.22,254.21 236.89,254.21 236.67,254.09 236.55,253.98 236.44,253.87 236.33,253.54 236.33,253.32 236.44,252.99 236.67,252.77 236.89,252.66 237.22,252.66 237.44,252.77 237.66,252.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="237.66,252.66 237.66,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="238.54,253.43 239.76,253.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="239.76,252.66 239.76,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="238.54,252.66 238.54,254.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="223.29,255.75 223.29,258.07"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="223.29,256.86 224.84,256.86"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="224.84,258.07 224.84,255.75"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="225.72,255.75 225.72,258.07 227.49,258.07 227.49,258.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="227.27,255.75 227.27,258.07"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="229.7,256.3 229.59,256.08 229.48,255.97 229.37,255.86 229.15,255.75 228.71,255.75 228.49,255.86 228.38,255.97 228.27,256.08 228.16,256.3 228.05,256.64 228.05,257.19 228.16,257.52 228.27,257.74 228.49,257.96 228.71,258.07 229.15,258.07 229.37,257.96 229.59,257.74 229.7,257.52"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="220.72,234.39 220.72,236.71 222.27,234.39 222.27,236.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="224.37,234.39 222.82,236.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="222.82,234.39 224.37,236.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="226.14,234.39 224.92,234.39 224.92,236.71 225.92,236.71 226.25,236.6 226.36,236.49 226.47,236.27 226.47,235.94 226.36,235.72 226.25,235.61 225.92,235.5 224.92,235.5"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="226.8,235.72 228.79,235.72"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="230.78,234.39 229.68,235.94 231.33,235.94"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="230.78,234.39 230.78,236.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="307.02,222.24 307.02,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="307.02,223.34 308.56,223.34"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="308.56,224.56 308.56,222.24"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="310.66,224.23 310.44,224.45 310.22,224.56 309.89,224.56 309.67,224.45 309.56,224.34 309.45,224.23 309.34,223.89 309.34,223.67 309.45,223.34 309.67,223.12 309.89,223.01 310.22,223.01 310.44,223.12 310.66,223.34"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="310.66,223.01 310.66,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="311.55,223.01 311.55,224.11 311.66,224.45 311.88,224.56 312.21,224.56 312.43,224.45 312.76,224.11"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="312.76,223.01 312.76,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="311.77,222.57 311.88,222.68 312.1,222.79 312.32,222.79 312.54,222.68 312.65,222.57"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="313.65,223.01 313.65,225.33"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="313.65,223.34 313.87,223.12 314.09,223.01 314.42,223.01 314.64,223.12 314.86,223.34 314.97,223.67 314.97,223.89 314.86,224.23 314.64,224.45 314.42,224.56 314.09,224.56 313.87,224.45 313.65,224.23"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="316.96,224.23 316.74,224.45 316.52,224.56 316.19,224.56 315.97,224.45 315.86,224.34 315.75,224.23 315.63,223.89 315.63,223.67 315.75,223.34 315.97,223.12 316.19,223.01 316.52,223.01 316.74,223.12 316.96,223.34"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="316.96,223.01 316.96,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="319.39,224.56 319.39,223.01 318.62,224.23 317.84,223.01 317.84,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="321.49,223.34 321.38,223.23 321.27,223.12 321.05,223.01 320.72,223.01 320.5,223.12 320.28,223.34 320.17,223.67 320.17,223.89 320.28,224.23 320.5,224.45 320.72,224.56 321.05,224.56 321.27,224.45 321.49,224.23"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="321.49,223.01 321.49,224.78 321.38,225.11 321.27,225.22 321.05,225.33 320.72,225.33 320.5,225.22"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="323.59,224.23 323.37,224.45 323.15,224.56 322.82,224.56 322.6,224.45 322.49,224.34 322.38,224.23 322.27,223.89 322.27,223.67 322.38,223.34 322.6,223.12 322.82,223.01 323.15,223.01 323.37,223.12 323.59,223.34"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="323.59,223.01 323.59,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="325.58,223.01 324.92,223.01 324.92,224.11 324.81,224.45 324.59,224.56 324.36,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="325.58,223.01 325.58,224.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="334.23,222.1 334.23,224.42"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="333.46,222.1 335,222.1"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="335.45,223.54 336.77,223.54 336.77,223.32 336.66,223.09 336.55,222.98 336.33,222.87 336,222.87 335.78,222.98 335.56,223.2 335.45,223.54 335.45,223.76 335.56,224.09 335.78,224.31 336,224.42 336.33,224.42 336.55,224.31 336.77,224.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="338.65,222.87 337.99,222.87 337.99,223.98 337.88,224.31 337.66,224.42 337.44,224.42"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="338.65,222.87 338.65,224.42"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="339.42,223.54 340.75,223.54 340.75,223.32 340.64,223.09 340.53,222.98 340.31,222.87 339.98,222.87 339.76,222.98 339.53,223.2 339.42,223.54 339.42,223.76 339.53,224.09 339.76,224.31 339.98,224.42 340.31,224.42 340.53,224.31 340.75,224.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="341.52,223.2 341.75,222.98 341.97,222.87 342.3,222.65 342.41,222.43 342.3,222.21 342.19,222.1 341.86,222.1 341.63,222.21 341.52,222.32 341.52,223.98 341.63,224.2 341.75,224.31 341.97,224.42 342.3,224.42 342.52,224.31 342.74,224.09 342.85,223.76 342.85,223.54 342.74,223.2 342.52,222.98 342.3,222.87 341.97,222.87"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="343.62,222.87 343.62,223.98 343.73,224.31 343.96,224.42 344.29,224.42 344.51,224.31 344.84,223.98"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="344.84,222.87 344.84,224.42"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="346.17,223.54 346.39,223.65 346.5,223.76 346.61,223.98 346.5,224.2 346.39,224.31 346.17,224.42 345.72,224.42 345.39,224.31"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="345.39,222.98 345.72,222.87 346.05,222.87 346.39,222.98 346.5,223.2 346.39,223.43 346.17,223.54 345.83,223.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="365.6,222.58 365.49,222.36 365.38,222.25 365.27,222.14 365.05,222.03 364.61,222.03 364.39,222.14 364.28,222.25 364.17,222.36 364.05,222.58 363.94,222.91 363.94,223.47 364.05,223.8 364.17,224.02 364.39,224.24 364.61,224.35 365.05,224.35 365.27,224.24 365.49,224.02 365.6,223.8"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="366.04,223.13 366.26,222.91 366.49,222.8 366.82,222.8 367.04,222.91 367.26,223.13 367.37,223.47 367.37,223.69 367.26,224.02 367.04,224.24 366.82,224.35 366.49,224.35 366.26,224.24 366.04,224.02"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="367.37,223.58 366.71,223.58"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="369.25,222.8 368.59,222.8 368.59,223.91 368.47,224.24 368.25,224.35 368.03,224.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="369.25,222.8 369.25,224.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.24,222.03 371.02,222.14 370.46,222.25 370.24,222.36 370.13,222.58 370.13,223.91 370.24,224.13 370.35,224.24 370.57,224.35 370.91,224.35 371.13,224.24 371.35,224.02 371.46,223.69 371.46,223.47 371.35,223.13 371.24,223.02 371.13,222.91 370.91,222.8 370.57,222.8 370.35,222.91 370.13,223.13"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="372.01,223.13 372.23,222.91 372.45,222.8 372.78,222.8 373.01,222.91 373.23,223.13 373.34,223.47 373.34,223.69 373.23,224.02 373.01,224.24 372.78,224.35 372.45,224.35 372.23,224.24 372.01,224.02"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="373.34,223.58 372.67,223.58"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="385.34,250.47 384.57,252.35 384.46,252.57 384.35,252.68 384.13,252.79 384.02,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="383.8,250.47 384.57,252.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="387,251.24 386.34,251.24 386.34,252.35 386.23,252.68 386.01,252.79 385.79,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="387,251.24 387,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="389.1,252.46 388.88,252.68 388.66,252.79 388.33,252.79 388.11,252.68 388,252.57 387.88,252.46 387.77,252.13 387.77,251.91 387.88,251.58 388.11,251.35 388.33,251.24 388.66,251.24 388.88,251.35 389.1,251.58"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="389.1,251.24 389.1,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="391.2,252.46 390.98,252.68 390.76,252.79 390.43,252.79 390.21,252.68 390.09,252.57 389.98,252.46 389.87,252.13 389.87,251.91 389.98,251.58 390.21,251.35 390.43,251.24 390.76,251.24 390.98,251.35 391.2,251.58"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="391.2,251.24 391.2,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="392.08,252.02 393.3,252.02"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="393.3,251.24 393.3,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="392.08,251.24 392.08,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="393.85,251.24 395.07,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="395.07,251.24 393.85,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="395.29,251.24 395.95,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="396.61,251.24 395.95,252.79 395.73,253.23 395.51,253.45 395.29,253.57 395.18,253.57"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="398.38,252.46 398.16,252.68 397.94,252.79 397.61,252.79 397.39,252.68 397.28,252.57 397.17,252.46 397.06,252.13 397.06,251.91 397.17,251.58 397.39,251.35 397.61,251.24 397.94,251.24 398.16,251.35 398.38,251.58"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="398.38,251.24 398.38,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="399.27,251.24 399.27,253.57"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="399.27,251.58 399.49,251.35 399.71,251.24 400.04,251.24 400.26,251.35 400.48,251.58 400.59,251.91 400.59,252.13 400.48,252.46 400.26,252.68 400.04,252.79 399.71,252.79 399.49,252.68 399.27,252.46"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="402.58,252.46 402.36,252.68 402.14,252.79 401.81,252.79 401.59,252.68 401.48,252.57 401.37,252.46 401.26,252.13 401.26,251.91 401.37,251.58 401.59,251.35 401.81,251.24 402.14,251.24 402.36,251.35 402.58,251.58"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="402.58,251.24 402.58,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="403.47,252.02 404.68,252.02"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="404.68,251.24 404.68,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="403.47,251.24 403.47,252.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="366.68,252.77 366.68,252.32 364.47,252.32 364.47,252.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="364.69,252.32 365.02,251.99 365.13,251.77 365.24,251.33 365.24,250 366.46,250 366.46,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="367.78,250.78 368.12,250.78 368.34,250.89 368.56,251.11 368.67,251.44 368.67,251.66 368.56,251.99 368.34,252.21 368.12,252.32 367.78,252.32 367.56,252.21 367.34,251.99 367.23,251.66 367.23,251.44 367.34,251.11 367.56,250.89 367.78,250.78"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="369.44,250.78 369.44,253.1"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="369.44,251.11 369.66,250.89 369.88,250.78 370.22,250.78 370.44,250.89 370.66,251.11 370.77,251.44 370.77,251.66 370.66,251.99 370.44,252.21 370.22,252.32 369.88,252.32 369.66,252.21 369.44,251.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.54,251.55 372.76,251.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="372.76,250.78 372.76,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.54,250.78 371.54,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="374.08,250.78 374.41,250.78 374.64,250.89 374.86,251.11 374.97,251.44 374.97,251.66 374.86,251.99 374.64,252.21 374.41,252.32 374.08,252.32 373.86,252.21 373.64,251.99 373.53,251.66 373.53,251.44 373.64,251.11 373.86,250.89 374.08,250.78"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="376.96,251.11 376.85,251 376.74,250.89 376.51,250.78 376.18,250.78 375.96,250.89 375.74,251.11 375.63,251.44 375.63,251.66 375.74,251.99 375.96,252.21 376.18,252.32 376.51,252.32 376.74,252.21 376.96,251.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="376.96,250.78 376.96,252.55 376.85,252.88 376.74,252.99 376.51,253.1 376.18,253.1 375.96,252.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="377.4,251.33 379.39,251.33"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="380.38,250.56 380.38,250.45 380.49,250.22 380.6,250.11 380.82,250 381.27,250 381.49,250.11 381.6,250.22 381.71,250.45 381.71,250.67 381.6,250.89 381.38,251.22 380.27,252.32 381.82,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="340.98,253.15 340.98,252.71 338.77,252.71 338.77,253.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="338.99,252.71 339.32,252.38 339.43,252.15 339.54,251.71 339.54,250.39 340.76,250.39 340.76,252.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="342.86,252.38 342.64,252.6 342.42,252.71 342.09,252.71 341.87,252.6 341.75,252.49 341.64,252.38 341.53,252.04 341.53,251.82 341.64,251.49 341.87,251.27 342.09,251.16 342.42,251.16 342.64,251.27 342.86,251.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="342.86,251.16 342.86,252.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="343.74,251.16 343.74,253.48"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="343.74,251.49 343.96,251.27 344.19,251.16 344.52,251.16 344.74,251.27 344.96,251.49 345.07,251.82 345.07,252.04 344.96,252.38 344.74,252.6 344.52,252.71 344.19,252.71 343.96,252.6 343.74,252.38"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="345.84,251.82 345.95,251.71 346.17,251.6 346.51,251.6 346.62,251.6 346.84,251.71 346.95,251.82 347.06,252.04 347.06,252.26 346.95,252.49 346.84,252.6 346.62,252.71 346.17,252.71 345.95,252.6 345.84,252.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="345.84,251.16 345.84,252.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="347.39,251.71 349.38,251.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="350.93,251.49 352.03,251.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="350.48,250.72 350.71,250.5 350.93,250.39 351.37,250.39 351.59,250.5 351.81,250.72 351.92,250.94 352.03,251.27 352.03,251.82 351.92,252.15 351.81,252.38 351.59,252.6 351.37,252.71 350.93,252.71 350.71,252.6 350.48,252.38"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="352.47,251.16 353.69,252.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="353.69,251.16 352.47,252.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="315.18,250.17 314.41,252.05 314.3,252.27 314.19,252.38 313.97,252.49 313.86,252.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="313.63,250.17 314.41,252.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="317.28,252.49 317.28,250.94 316.51,252.16 315.73,250.94 315.73,252.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="319.38,252.16 319.16,252.38 318.94,252.49 318.61,252.49 318.39,252.38 318.28,252.27 318.16,252.16 318.05,251.83 318.05,251.61 318.16,251.27 318.39,251.05 318.61,250.94 318.94,250.94 319.16,251.05 319.38,251.27"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="319.38,250.94 319.38,252.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="320.26,250.94 320.26,253.26"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="320.26,251.27 320.49,251.05 320.71,250.94 321.04,250.94 321.26,251.05 321.48,251.27 321.59,251.61 321.59,251.83 321.48,252.16 321.26,252.38 321.04,252.49 320.71,252.49 320.49,252.38 320.26,252.16"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="323.58,251.27 323.47,251.16 323.36,251.05 323.14,250.94 322.81,250.94 322.59,251.05 322.36,251.27 322.25,251.61 322.25,251.83 322.36,252.16 322.59,252.38 322.81,252.49 323.14,252.49 323.36,252.38 323.58,252.16"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="323.58,250.94 323.58,252.71 323.47,253.04 323.36,253.15 323.14,253.26 322.81,253.26 322.59,253.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="293.29,250 293.29,252.32 295.61,252.32 295.61,250"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="294.5,250 294.5,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="296.93,250.77 297.27,250.77 297.49,250.88 297.71,251.1 297.82,251.44 297.82,251.66 297.71,251.99 297.49,252.21 297.27,252.32 296.93,252.32 296.71,252.21 296.49,251.99 296.38,251.66 296.38,251.44 296.49,251.1 296.71,250.88 296.93,250.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="298.59,251.55 299.81,251.55"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="299.81,250.77 299.81,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="298.59,250.77 298.59,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="300.36,250.77 301.58,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="301.58,250.77 300.36,252.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="302.57,250.77 302.9,250.77 303.12,250.88 303.34,251.1 303.45,251.44 303.45,251.66 303.34,251.99 303.12,252.21 302.9,252.32 302.57,252.32 302.35,252.21 302.13,251.99 302.02,251.66 302.02,251.44 302.13,251.1 302.35,250.88 302.57,250.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="304.23,250.77 304.23,253.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="304.23,251.1 304.45,250.88 304.67,250.77 305,250.77 305.22,250.88 305.44,251.1 305.55,251.44 305.55,251.66 305.44,251.99 305.22,252.21 305,252.32 304.67,252.32 304.45,252.21 304.23,251.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="275.94,250.33 274.73,250.33 274.73,252.65 275.72,252.65 276.05,252.54 276.16,252.43 276.28,252.21 276.28,251.88 276.16,251.66 276.05,251.55 275.72,251.44 274.73,251.44"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="278.26,252.32 278.04,252.54 277.82,252.65 277.49,252.65 277.27,252.54 277.16,252.43 277.05,252.32 276.94,251.99 276.94,251.77 277.05,251.44 277.27,251.22 277.49,251.11 277.82,251.11 278.04,251.22 278.26,251.44"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="278.26,251.11 278.26,252.65"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="279.15,251.11 279.15,253.43"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="279.15,251.44 279.37,251.22 279.59,251.11 279.92,251.11 280.14,251.22 280.36,251.44 280.47,251.77 280.47,251.99 280.36,252.32 280.14,252.54 279.92,252.65 279.59,252.65 279.37,252.54 279.15,252.32"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="280.92,251.11 281.58,252.65"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="282.24,251.11 281.58,252.65 281.36,253.1 281.14,253.32 280.92,253.43 280.81,253.43"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="282.46,251.11 283.13,252.65"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="283.79,251.11 283.13,252.65 282.91,253.1 282.68,253.32 282.46,253.43 282.35,253.43"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="284.34,251.88 285.56,251.88"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="285.56,251.11 285.56,252.65"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="284.34,251.11 284.34,252.65"
          style={{ fill: "none", stroke: "RGB(153,27,30)", strokeWidth: "0.5" }}
        />
        <polyline
          points="263.5,289.99 263.5,289.54 261.29,289.54 261.29,289.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="261.51,289.54 261.84,289.21 261.95,288.99 262.06,288.55 262.06,287.22 263.28,287.22 263.28,289.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="263.83,288 264.49,289.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="265.16,288 264.49,289.54 264.27,289.99 264.05,290.21 263.83,290.32 263.72,290.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="265.71,288.77 266.93,288.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="266.93,288 266.93,289.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="265.71,288 265.71,289.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="269.03,288.33 268.92,288.22 268.8,288.11 268.58,288 268.25,288 268.03,288.11 267.81,288.33 267.7,288.66 267.7,288.88 267.81,289.21 268.03,289.43 268.25,289.54 268.58,289.54 268.8,289.43 269.03,289.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="269.03,288 269.03,289.76 268.92,290.1 268.8,290.21 268.58,290.32 268.25,290.32 268.03,290.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="269.8,288.33 269.91,288.11 270.24,288 270.57,288 270.9,288.11 271.01,288.33 270.9,288.55 270.68,288.66 270.13,288.77 269.91,288.88 269.8,289.1 269.8,289.21 269.91,289.43 270.24,289.54 270.57,289.54 270.9,289.43 271.01,289.21"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="272.23,288 272.56,288 272.78,288.11 273,288.33 273.11,288.66 273.11,288.88 273,289.21 272.78,289.43 272.56,289.54 272.23,289.54 272.01,289.43 271.79,289.21 271.68,288.88 271.68,288.66 271.79,288.33 272.01,288.11 272.23,288"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="274.99,288 274.33,288 274.33,289.1 274.22,289.43 274,289.54 273.78,289.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="274.99,288 274.99,289.54"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="315.56,291.17 315.56,293.49 317.1,291.17 317.1,293.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="319.2,291.17 317.66,293.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="317.66,291.17 319.2,293.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="320.97,291.17 319.76,291.17 319.76,293.49 320.75,293.49 321.08,293.38 321.19,293.27 321.3,293.05 321.3,292.71 321.19,292.49 321.08,292.38 320.75,292.27 319.76,292.27"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="321.63,292.49 323.62,292.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="324.73,291.17 325.94,291.17 325.28,292.05 325.61,292.05 325.83,292.16 325.94,292.27 326.05,292.6 326.05,292.82 325.94,293.16 325.72,293.38 325.39,293.49 325.06,293.49 324.73,293.38 324.62,293.27 324.51,293.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="332.8,285.76 332.91,285.87 332.8,285.98 332.69,285.87 332.69,285.76 332.8,285.54 332.91,285.43 333.13,285.32 333.46,285.32 333.79,285.43 333.9,285.65 333.9,285.87 333.79,286.09 333.68,286.2 333.46,286.31 333.24,286.53 333.24,286.87"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="333.24,287.42 333.13,287.53 333.24,287.64 333.35,287.53 333.24,287.42"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="336.67,287.64 336.67,286.09 335.89,287.31 335.12,286.09 335.12,287.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="337.55,286.87 338.77,286.87"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="338.77,286.09 338.77,287.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="337.55,286.09 337.55,287.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="339.32,285.76 339.43,285.87 339.32,285.98 339.21,285.87 339.21,285.76 339.32,285.54 339.43,285.43 339.65,285.32 339.98,285.32 340.31,285.43 340.42,285.65 340.42,285.87 340.31,286.09 340.2,286.2 339.98,286.31 339.76,286.53 339.76,286.87"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="339.76,287.42 339.65,287.53 339.76,287.64 339.87,287.53 339.76,287.42"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="342.85,286.42 342.74,286.31 342.63,286.2 342.41,286.09 342.08,286.09 341.86,286.2 341.64,286.42 341.53,286.75 341.53,286.98 341.64,287.31 341.86,287.53 342.08,287.64 342.41,287.64 342.63,287.53 342.85,287.31"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="342.85,286.09 342.85,287.86 342.74,288.19 342.63,288.3 342.41,288.41 342.08,288.41 341.86,288.3"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="366.09,285.05 366.09,287.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="365.32,285.05 366.87,285.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="367.09,285.82 367.75,287.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="368.42,285.82 367.75,287.37 367.53,287.81 367.31,288.03 367.09,288.14 366.98,288.14"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="368.64,285.82 369.3,287.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="369.96,285.82 369.3,287.37 369.08,287.81 368.86,288.03 368.64,288.14 368.53,288.14"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.62,285.82 370.96,285.82 370.96,286.93 370.85,287.26 370.63,287.37 370.4,287.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.62,285.82 371.62,287.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="390.72,286.64 391.82,286.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="390.39,287.41 391.27,285.09 392.16,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="394.26,287.41 394.26,285.86 393.48,287.08 392.71,285.86 392.71,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="395.03,286.19 395.14,285.97 395.47,285.86 395.8,285.86 396.13,285.97 396.24,286.19 396.13,286.41 395.91,286.53 395.36,286.64 395.14,286.75 395.03,286.97 395.03,287.08 395.14,287.3 395.47,287.41 395.8,287.41 396.13,287.3 396.24,287.08"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="398.23,287.08 398.01,287.3 397.79,287.41 397.46,287.41 397.24,287.3 397.13,287.19 397.02,287.08 396.91,286.75 396.91,286.53 397.02,286.19 397.24,285.97 397.46,285.86 397.79,285.86 398.01,285.97 398.23,286.19"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="398.23,285.86 398.23,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="400.22,285.86 399.56,285.86 399.56,286.97 399.45,287.3 399.23,287.41 399.01,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="400.22,285.86 400.22,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="402.32,287.08 402.1,287.3 401.88,287.41 401.55,287.41 401.33,287.3 401.22,287.19 401.11,287.08 401,286.75 401,286.53 401.11,286.19 401.33,285.97 401.55,285.86 401.88,285.86 402.1,285.97 402.32,286.19"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="402.32,285.86 402.32,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="403.21,286.64 404.42,286.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="404.42,285.86 404.42,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="403.21,285.86 403.21,287.41"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="433.82,261.71 431.76,264.8"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="431.76,261.71 433.82,264.8"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="434.11,262.3 434.26,262.45 434.11,262.59 433.97,262.45 433.97,262.3 434.11,262.01 434.26,261.86 434.56,261.71 435,261.71 435.44,261.86 435.59,262.15 435.59,262.45 435.44,262.74 435.29,262.89 435,263.04 434.7,263.33 434.7,263.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="434.7,264.51 434.56,264.66 434.7,264.8 434.85,264.66 434.7,264.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="437.21,262.74 437.21,265.84"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="437.21,263.18 437.5,262.89 437.8,262.74 438.24,262.74 438.53,262.89 438.83,263.18 438.98,263.63 438.98,263.92 438.83,264.36 438.53,264.66 438.24,264.8 437.8,264.8 437.5,264.66 437.21,264.36"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="439.57,262.74 441.19,264.8"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="441.19,262.74 439.57,264.8"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="441.92,262.74 441.92,265.84"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="441.92,263.18 442.22,262.89 442.51,262.74 442.95,262.74 443.25,262.89 443.54,263.18 443.69,263.63 443.69,263.92 443.54,264.36 443.25,264.66 442.95,264.8 442.51,264.8 442.22,264.66 441.92,264.36"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="444.43,263.18 444.72,262.89 445.02,262.74 445.46,262.74 445.75,262.89 446.05,263.18 446.2,263.63 446.2,263.92 446.05,264.36 445.75,264.66 445.46,264.8 445.02,264.8 444.72,264.66 444.43,264.36"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="446.2,263.77 445.31,263.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="446.93,263.18 447.23,262.89 447.52,262.74 447.96,262.74 448.26,262.89 448.55,263.18 448.7,263.63 448.7,263.92 448.55,264.36 448.26,264.66 447.96,264.8 447.52,264.8 447.23,264.66 446.93,264.36"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="448.7,263.77 447.82,263.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="439.8,228.7 438.77,231.2 438.62,231.5 438.47,231.64 438.18,231.79 438.03,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="437.74,228.7 438.77,231.2"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="442.01,229.73 441.13,229.73 441.13,231.2 440.98,231.64 440.68,231.79 440.39,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="442.01,229.73 442.01,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="444.81,231.35 444.52,231.64 444.22,231.79 443.78,231.79 443.48,231.64 443.34,231.5 443.19,231.35 443.04,230.91 443.04,230.61 443.19,230.17 443.48,229.88 443.78,229.73 444.22,229.73 444.52,229.88 444.81,230.17"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="444.81,229.73 444.81,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="447.61,231.35 447.31,231.64 447.02,231.79 446.58,231.79 446.28,231.64 446.14,231.5 445.99,231.35 445.84,230.91 445.84,230.61 445.99,230.17 446.28,229.88 446.58,229.73 447.02,229.73 447.31,229.88 447.61,230.17"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="447.61,229.73 447.61,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="448.79,230.76 450.41,230.76"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="450.41,229.73 450.41,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="448.79,229.73 448.79,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="453.06,228.7 452.77,228.85 452.03,228.99 451.73,229.14 451.59,229.43 451.59,231.2 451.73,231.5 451.88,231.64 452.18,231.79 452.62,231.79 452.91,231.64 453.21,231.35 453.36,230.91 453.36,230.61 453.21,230.17 453.06,230.02 452.91,229.88 452.62,229.73 452.18,229.73 451.88,229.88 451.59,230.17"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="456.01,231.35 455.71,231.64 455.42,231.79 454.98,231.79 454.68,231.64 454.53,231.5 454.39,231.35 454.24,230.91 454.24,230.61 454.39,230.17 454.68,229.88 454.98,229.73 455.42,229.73 455.71,229.88 456.01,230.17"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="456.01,229.73 456.01,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="458.81,231.35 458.51,231.64 458.22,231.79 457.78,231.79 457.48,231.64 457.33,231.5 457.19,231.35 457.04,230.91 457.04,230.61 457.19,230.17 457.48,229.88 457.78,229.73 458.22,229.73 458.51,229.88 458.81,230.17"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="458.81,229.73 458.81,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="459.99,229.73 459.99,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="459.99,230.32 460.43,229.88 460.72,229.73 461.02,229.73 461.31,229.88 461.46,230.32 461.46,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="461.46,230.32 461.9,229.88 462.2,229.73 462.49,229.73 462.79,229.88 462.93,230.32 462.93,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="465.73,231.35 465.44,231.64 465.14,231.79 464.7,231.79 464.41,231.64 464.26,231.5 464.11,231.35 463.96,230.91 463.96,230.61 464.11,230.17 464.41,229.88 464.7,229.73 465.14,229.73 465.44,229.88 465.73,230.17"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="465.73,229.73 465.73,231.79"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="466.91,229.73 466.91,232.82"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="466.91,230.17 467.21,229.88 467.5,229.73 467.94,229.73 468.24,229.88 468.53,230.17 468.68,230.61 468.68,230.91 468.53,231.35 468.24,231.64 467.94,231.79 467.5,231.79 467.21,231.64 466.91,231.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="442.17,215.3 440.55,215.3 440.55,218.4 441.87,218.4 442.31,218.25 442.46,218.1 442.61,217.81 442.61,217.37 442.46,217.07 442.31,216.93 441.87,216.78 440.55,216.78"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="445.26,217.96 444.97,218.25 444.67,218.4 444.23,218.4 443.94,218.25 443.79,218.1 443.64,217.96 443.49,217.51 443.49,217.22 443.64,216.78 443.94,216.48 444.23,216.34 444.67,216.34 444.97,216.48 445.26,216.78"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="445.26,216.34 445.26,218.4"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="446.29,216.78 446.44,216.48 446.88,216.34 447.32,216.34 447.77,216.48 447.91,216.78 447.77,217.07 447.47,217.22 446.73,217.37 446.44,217.51 446.29,217.81 446.29,217.96 446.44,218.25 446.88,218.4 447.32,218.4 447.77,218.25 447.91,217.96"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="450.57,217.96 450.27,218.25 449.98,218.4 449.53,218.4 449.24,218.25 449.09,218.1 448.94,217.96 448.8,217.51 448.8,217.22 448.94,216.78 449.24,216.48 449.53,216.34 449.98,216.34 450.27,216.48 450.57,216.78"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="450.57,216.34 450.57,218.4"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="451.74,217.37 453.36,217.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="453.36,216.34 453.36,218.4"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="451.74,216.34 451.74,218.4"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="454.1,216.34 454.99,218.4"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="455.87,216.34 454.99,218.4 454.69,218.99 454.4,219.28 454.1,219.43 453.95,219.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="456.16,216.34 457.05,218.4"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="457.93,216.34 457.05,218.4 456.75,218.99 456.46,219.28 456.16,219.43 456.02,219.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="458.67,216.34 458.67,219.43"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="458.67,216.78 458.96,216.48 459.26,216.34 459.7,216.34 460,216.48 460.29,216.78 460.44,217.22 460.44,217.51 460.29,217.96 460,218.25 459.7,218.4 459.26,218.4 458.96,218.25 458.67,217.96"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="364.65,348.83 363.03,348.83 363.03,351.93 364.36,351.93 364.8,351.78 364.95,351.63 365.09,351.34 365.09,350.9 364.95,350.6 364.8,350.45 364.36,350.31 363.03,350.31"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="365.68,349.42 365.83,349.57 365.68,349.72 365.54,349.57 365.54,349.42 365.68,349.13 365.83,348.98 366.13,348.83 366.57,348.83 367.01,348.98 367.16,349.28 367.16,349.57 367.01,349.87 366.86,350.01 366.57,350.16 366.27,350.45 366.27,350.9"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="366.27,351.63 366.13,351.78 366.27,351.93 366.42,351.78 366.27,351.63"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="368.34,349.87 369.96,351.93"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="369.96,349.87 368.34,351.93"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="370.25,349.42 370.4,349.57 370.25,349.72 370.1,349.57 370.1,349.42 370.25,349.13 370.4,348.98 370.69,348.83 371.14,348.83 371.58,348.98 371.73,349.28 371.73,349.57 371.58,349.87 371.43,350.01 371.14,350.16 370.84,350.45 370.84,350.9"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="370.84,351.63 370.69,351.78 370.84,351.93 370.99,351.78 370.84,351.63"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="373.2,350.31 373.35,350.01 373.79,349.87 374.23,349.87 374.67,350.01 374.82,350.31 374.67,350.6 374.38,350.75 373.64,350.9 373.35,351.04 373.2,351.34 373.2,351.49 373.35,351.78 373.79,351.93 374.23,351.93 374.67,351.78 374.82,351.49"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="363.03,353.99 363.03,357.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="363.03,355.46 365.09,355.46"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="365.09,357.09 365.09,353.99"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="366.27,353.99 366.27,357.09 368.63,357.09 368.63,357.67"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="368.34,353.99 368.34,357.09"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.58,354.73 371.43,354.43 371.28,354.29 371.14,354.14 370.84,353.99 370.25,353.99 369.96,354.14 369.81,354.29 369.66,354.43 369.52,354.73 369.37,355.17 369.37,355.91 369.52,356.35 369.66,356.64 369.96,356.94 370.25,357.09 370.84,357.09 371.14,356.94 371.43,356.64 371.58,356.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="374.66,335.93 372.59,339.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="372.59,335.93 374.66,339.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="374.95,336.52 375.1,336.67 374.95,336.82 374.8,336.67 374.8,336.52 374.95,336.23 375.1,336.08 375.39,335.93 375.83,335.93 376.28,336.08 376.42,336.38 376.42,336.67 376.28,336.97 376.13,337.11 375.83,337.26 375.54,337.55 375.54,338"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="375.54,338.73 375.39,338.88 375.54,339.03 375.69,338.88 375.54,338.73"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="380.99,339.03 380.99,336.97"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="380.99,338.44 380.55,338.88 380.25,339.03 379.96,339.03 379.67,338.88 379.52,338.44 379.52,336.97"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="379.52,338.44 379.08,338.88 378.78,339.03 378.49,339.03 378.19,338.88 378.04,338.44 378.04,336.97"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="382.17,336.97 382.17,338.44 382.32,338.88 382.61,339.03 383.05,339.03 383.35,338.88 383.79,338.44"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="383.79,336.97 383.79,339.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="384.82,337.41 384.97,337.11 385.41,336.97 385.85,336.97 386.3,337.11 386.44,337.41 386.3,337.7 386,337.85 385.26,338 384.97,338.14 384.82,338.44 384.82,338.59 384.97,338.88 385.41,339.03 385.85,339.03 386.3,338.88 386.44,338.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="387.47,336.97 387.47,339.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="387.47,337.55 387.92,337.11 388.21,336.97 388.51,336.97 388.8,337.11 388.95,337.55 388.95,339.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="388.95,337.55 389.39,337.11 389.68,336.97 389.98,336.97 390.27,337.11 390.42,337.55 390.42,339.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="392.55,335.59 392.55,338.68 394.61,335.59 394.61,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="397.27,336.62 396.38,336.62 396.38,338.09 396.24,338.53 395.94,338.68 395.65,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="397.27,336.62 397.27,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="398.3,336.62 398.3,337.35 398.45,337.8 398.74,337.94 399.18,337.94 399.48,337.8 399.92,337.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="399.92,336.62 399.92,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="400.51,337.35 403.16,337.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="406.55,335.59 404.93,335.59 404.93,338.68 406.25,338.68 406.7,338.53 406.84,338.39 406.99,338.09 406.99,337.65 406.84,337.35 406.7,337.21 406.25,337.06 404.93,337.06"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="409.64,338.24 409.35,338.53 409.05,338.68 408.61,338.68 408.32,338.53 408.17,338.39 408.02,338.24 407.88,337.8 407.88,337.5 408.02,337.06 408.32,336.76 408.61,336.62 409.05,336.62 409.35,336.76 409.64,337.06"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="409.64,336.62 409.64,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="410.68,338.68 411.26,337.94"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="412.15,338.68 412.15,336.62 411.26,336.62 410.97,336.76 410.82,336.91 410.68,337.21 410.68,337.35 410.82,337.65 410.97,337.8 411.26,337.94 412.15,337.94"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="413.33,337.65 414.95,337.65"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="414.95,336.62 414.95,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="413.33,336.62 413.33,338.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="430.73,332 430.58,331.7 430.43,331.55 430.29,331.41 429.99,331.26 429.4,331.26 429.11,331.41 428.96,331.55 428.81,331.7 428.67,332 428.52,332.44 428.52,333.17 428.67,333.62 428.81,333.91 429.11,334.21 429.4,334.35 429.99,334.35 430.29,334.21 430.58,333.91 430.73,333.62"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="433.23,333.91 432.94,334.21 432.64,334.35 432.2,334.35 431.91,334.21 431.76,334.06 431.61,333.91 431.46,333.47 431.46,333.17 431.61,332.73 431.91,332.44 432.2,332.29 432.64,332.29 432.94,332.44 433.23,332.73"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="433.23,332.29 433.23,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="435.89,332.29 435,332.29 435,333.76 434.85,334.21 434.56,334.35 434.26,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="435.89,332.29 435.89,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="436.62,332.29 438.24,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="438.24,332.29 436.62,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="438.98,332.29 438.98,333.76 439.13,334.21 439.42,334.35 439.86,334.35 440.16,334.21 440.6,333.76"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="440.6,332.29 440.6,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="441.78,332.29 441.78,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="441.78,332.88 442.22,332.44 442.52,332.29 442.81,332.29 443.1,332.44 443.25,332.88 443.25,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="443.25,332.88 443.69,332.44 443.99,332.29 444.28,332.29 444.58,332.44 444.73,332.88 444.73,334.35"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="430.73,337.15 430.58,336.86 430.43,336.71 430.29,336.56 429.99,336.42 429.4,336.42 429.11,336.56 428.96,336.71 428.81,336.86 428.67,337.15 428.52,337.59 428.52,338.33 428.67,338.77 428.81,339.07 429.11,339.36 429.4,339.51 429.99,339.51 430.29,339.36 430.58,339.07 430.73,338.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="431.61,336.42 431.61,339.51 433.97,339.51 433.97,340.1"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="433.68,336.42 433.68,339.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="436.92,337.15 436.77,336.86 436.62,336.71 436.47,336.56 436.18,336.42 435.59,336.42 435.3,336.56 435.15,336.71 435,336.86 434.85,337.15 434.71,337.59 434.71,338.33 434.85,338.77 435,339.07 435.3,339.36 435.59,339.51 436.18,339.51 436.47,339.36 436.77,339.07 436.92,338.77"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="421.06,306.19 421.06,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="421.06,307.29 422.6,307.29"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="422.6,308.51 422.6,306.19"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="424.7,308.18 424.48,308.4 424.26,308.51 423.93,308.51 423.71,308.4 423.6,308.29 423.49,308.18 423.38,307.85 423.38,307.62 423.49,307.29 423.71,307.07 423.93,306.96 424.26,306.96 424.48,307.07 424.7,307.29"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="424.7,306.96 424.7,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="426.69,306.96 426.03,306.96 426.03,308.07 425.92,308.4 425.7,308.51 425.48,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="426.69,306.96 426.69,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="428.79,308.18 428.57,308.4 428.35,308.51 428.02,308.51 427.8,308.4 427.69,308.29 427.58,308.18 427.47,307.85 427.47,307.62 427.58,307.29 427.8,307.07 428.02,306.96 428.35,306.96 428.57,307.07 428.79,307.29"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="428.79,306.96 428.79,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="429.68,306.96 429.68,308.07 429.79,308.4 430.01,308.51 430.34,308.51 430.56,308.4 430.89,308.07"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="430.89,306.96 430.89,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="429.9,306.52 430.01,306.63 430.23,306.74 430.45,306.74 430.67,306.63 430.78,306.52"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="431.44,306.96 432.66,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="432.66,306.96 431.44,308.51"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="397.09,311.04 397.09,310.59 394.88,310.59 394.88,311.04"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="395.1,310.59 395.43,310.26 395.54,310.04 395.65,309.6 395.65,308.27 396.87,308.27 396.87,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="397.42,308.72 397.53,308.83 397.42,308.94 397.31,308.83 397.31,308.72 397.42,308.49 397.53,308.38 397.75,308.27 398.08,308.27 398.41,308.38 398.52,308.61 398.52,308.83 398.41,309.05 398.3,309.16 398.08,309.27 397.86,309.49 397.86,309.82"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="397.86,310.37 397.75,310.48 397.86,310.59 397.97,310.48 397.86,310.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="399.74,309.82 400.95,309.82"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="400.95,309.05 400.95,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="399.74,309.05 399.74,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="401.51,310.59 402.28,309.71"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="403.61,309.05 402.61,310.04 401.62,309.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="402.61,309.05 402.61,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="402.94,309.71 403.72,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="404.27,309.05 404.27,310.15 404.38,310.48 404.6,310.59 404.93,310.59 405.15,310.48 405.48,310.15"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="405.48,309.05 405.48,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="406.37,309.82 407.58,309.82"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="407.58,309.05 407.58,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="406.37,309.05 406.37,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="408.36,309.38 408.47,309.16 408.8,309.05 409.13,309.05 409.46,309.16 409.57,309.38 409.46,309.6 409.24,309.71 408.69,309.82 408.47,309.93 408.36,310.15 408.36,310.26 408.47,310.48 408.8,310.59 409.13,310.59 409.46,310.48 409.57,310.26"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="411.56,310.26 411.34,310.48 411.12,310.59 410.79,310.59 410.57,310.48 410.46,310.37 410.35,310.26 410.24,309.93 410.24,309.71 410.35,309.38 410.57,309.16 410.79,309.05 411.12,309.05 411.34,309.16 411.56,309.38"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="411.56,309.05 411.56,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="412.45,309.05 412.45,311.37"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="412.45,309.38 412.67,309.16 412.89,309.05 413.22,309.05 413.44,309.16 413.66,309.38 413.77,309.71 413.77,309.93 413.66,310.26 413.44,310.48 413.22,310.59 412.89,310.59 412.67,310.48 412.45,310.26"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="415.76,310.26 415.54,310.48 415.32,310.59 414.99,310.59 414.77,310.48 414.66,310.37 414.55,310.26 414.44,309.93 414.44,309.71 414.55,309.38 414.77,309.16 414.99,309.05 415.32,309.05 415.54,309.16 415.76,309.38"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="415.76,309.05 415.76,310.59"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="416.65,309.38 416.87,309.16 417.09,309.05 417.42,308.83 417.53,308.61 417.42,308.38 417.31,308.27 416.98,308.27 416.76,308.38 416.65,308.49 416.65,310.15 416.76,310.37 416.87,310.48 417.09,310.59 417.42,310.59 417.64,310.48 417.86,310.26 417.97,309.93 417.97,309.71 417.86,309.38 417.64,309.16 417.42,309.05 417.09,309.05"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="367.53,308.04 367.97,307.93 368.3,307.93 368.64,308.04 368.75,308.26 368.75,308.48 368.64,308.7 368.3,308.92 368.64,309.03 368.86,309.25 368.97,309.47 368.97,309.69 368.86,309.91 368.64,310.14 368.3,310.25 367.97,310.25 367.64,310.14 367.31,309.91"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="368.3,308.92 367.86,308.92"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="370.85,309.91 370.63,310.14 370.4,310.25 370.07,310.25 369.85,310.14 369.74,310.02 369.63,309.91 369.52,309.58 369.52,309.36 369.63,309.03 369.85,308.81 370.07,308.7 370.4,308.7 370.63,308.81 370.85,309.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="370.85,308.7 370.85,310.25"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.73,308.7 371.73,309.8 371.84,310.14 372.06,310.25 372.39,310.25 372.61,310.14 372.95,309.8"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="372.95,308.7 372.95,310.25"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="371.95,308.26 372.06,308.37 372.28,308.48 372.5,308.48 372.73,308.37 372.84,308.26"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="375.05,309.03 374.82,308.81 374.6,308.7 374.27,308.7 374.05,308.81 373.83,309.03 373.72,309.36 373.72,309.58 373.83,309.91 374.05,310.14 374.27,310.25 374.6,310.25 374.82,310.14 375.05,309.91"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="376.92,309.91 376.7,310.14 376.48,310.25 376.15,310.25 375.93,310.14 375.82,310.02 375.71,309.91 375.6,309.58 375.6,309.36 375.71,309.03 375.93,308.81 376.15,308.7 376.48,308.7 376.7,308.81 376.92,309.03"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="376.92,308.7 376.92,310.25"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="377.81,309.47 379.02,309.47"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="379.02,308.7 379.02,310.25"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="377.81,308.7 377.81,310.25"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="314.95,326.23 314.95,325.64 312.01,325.64 312.01,326.23"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="312.3,325.64 312.74,325.2 312.89,324.9 313.04,324.32 313.04,322.55 314.66,322.55 314.66,325.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="315.84,322.55 315.84,325.64 318.2,325.64 318.2,326.23"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="317.9,322.55 317.9,325.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="321.14,323.28 321,322.99 320.85,322.84 320.7,322.69 320.41,322.55 319.82,322.55 319.52,322.69 319.37,322.84 319.23,322.99 319.08,323.28 318.93,323.73 318.93,324.46 319.08,324.9 319.23,325.2 319.52,325.49 319.82,325.64 320.41,325.64 320.7,325.49 321,325.2 321.14,324.9"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="321.44,324.32 324.09,324.32"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="325.42,323.28 325.42,323.14 325.56,322.84 325.71,322.69 326.01,322.55 326.59,322.55 326.89,322.69 327.04,322.84 327.18,323.14 327.18,323.43 327.04,323.73 326.74,324.17 325.27,325.64 327.33,325.64"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="445.45,318.57 444.23,318.57 444.23,320.89 445.23,320.89 445.56,320.78 445.67,320.67 445.78,320.45 445.78,320.12 445.67,319.9 445.56,319.79 445.23,319.68 444.23,319.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="447.77,320.56 447.55,320.78 447.33,320.89 446.99,320.89 446.77,320.78 446.66,320.67 446.55,320.56 446.44,320.23 446.44,320.01 446.55,319.68 446.77,319.46 446.99,319.35 447.33,319.35 447.55,319.46 447.77,319.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="447.77,319.35 447.77,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="448.54,319.68 448.65,319.46 448.98,319.35 449.31,319.35 449.65,319.46 449.76,319.68 449.65,319.9 449.43,320.01 448.87,320.12 448.65,320.23 448.54,320.45 448.54,320.56 448.65,320.78 448.98,320.89 449.31,320.89 449.65,320.78 449.76,320.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="451.75,320.56 451.53,320.78 451.3,320.89 450.97,320.89 450.75,320.78 450.64,320.67 450.53,320.56 450.42,320.23 450.42,320.01 450.53,319.68 450.75,319.46 450.97,319.35 451.3,319.35 451.53,319.46 451.75,319.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="451.75,319.35 451.75,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="452.3,319.35 453.51,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="453.51,319.35 452.3,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="455.28,320.56 455.06,320.78 454.84,320.89 454.51,320.89 454.29,320.78 454.18,320.67 454.07,320.56 453.96,320.23 453.96,320.01 454.07,319.68 454.29,319.46 454.51,319.35 454.84,319.35 455.06,319.46 455.28,319.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="455.28,319.35 455.28,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="456.17,320.12 457.38,320.12"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="457.38,319.35 457.38,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="456.17,319.35 456.17,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="458.16,319.68 458.27,319.46 458.6,319.35 458.93,319.35 459.26,319.46 459.37,319.68 459.26,319.9 459.04,320.01 458.49,320.12 458.27,320.23 458.16,320.45 458.16,320.56 458.27,320.78 458.6,320.89 458.93,320.89 459.26,320.78 459.37,320.56"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="461.36,320.56 461.14,320.78 460.92,320.89 460.59,320.89 460.37,320.78 460.26,320.67 460.14,320.56 460.03,320.23 460.03,320.01 460.14,319.68 460.37,319.46 460.59,319.35 460.92,319.35 461.14,319.46 461.36,319.68"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="461.36,319.35 461.36,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="462.24,319.35 462.24,320.45 462.35,320.78 462.58,320.89 462.91,320.89 463.13,320.78 463.46,320.45"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="463.46,319.35 463.46,320.89"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
        <polyline
          points="462.47,318.91 462.58,319.02 462.8,319.13 463.02,319.13 463.24,319.02 463.35,318.91"
          style={{ fill: "none", stroke: "black", strokeWidth: "0.5" }}
        />
      </svg>
    </>
  );
}

export default Svg;
