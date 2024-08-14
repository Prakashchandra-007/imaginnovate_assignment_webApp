import React from "react";
import PropTypes from "prop-types";
import { COLORS } from "./constant";

const WeatherCard = ({
  date,
  temp,
  description,
  humidity,
  tempMin,
  tempMax,
  pressure,
}) => (
  <div style={styles.card}>
    <table style={styles.table}>
      <tbody>
        <tr>
          <td colspan="2" style={styles.header}>
            <h2>Date: {date}</h2>
          </td>
        </tr>
        <tr>
          <td colspan="2" style={styles.cell}>
            <h3>Temperature</h3>
          </td>
        </tr>
        <tr style={styles.border}>
          <td style={styles.cell}>
            <h4>Min</h4>
          </td>
          <td style={styles.cell}>
            <h4>Max</h4>
          </td>
        </tr>
        <tr style={styles.border}>
          <td style={styles.cell}>
            <p>{tempMin?.toFixed(2)}°C</p>
          </td>
          <td style={styles.cell}>
            <p>{tempMax?.toFixed(2)}°C</p>
          </td>
        </tr>
        <tr style={styles.border}>
          <td style={styles.cell}>
            <h4>Pressure</h4>
          </td>
          <td style={styles.cell}>
            <p>{pressure?.toFixed(2)} </p>
          </td>
        </tr>
        <tr style={styles.border}>
          <td style={styles.cell}>
            <h4>Humidity</h4>
          </td>
          <td style={styles.cell}>
            <p>{humidity?.toFixed(2)}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const styles = {
  card: {
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    width: 300,
    borderRadius: 8,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: 12,
  },
  header: {
    backgroundColor: COLORS.orange,
    color: COLORS.black,

    border: `1px solid ${COLORS.black}`,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  border: {
    border: `1px solid ${COLORS.black}`,
  },
  cell: {
    border: `1px solid ${COLORS.black}`,
  },
};

export default WeatherCard;
