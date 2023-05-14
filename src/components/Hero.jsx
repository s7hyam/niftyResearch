import { Table, TableBody, TableHead, TableRow, useTheme } from "@mui/material";
import React from "react";
// import formatCurrency from "../../utils/formatCurrency";
import { TableData } from "../../data/foi";
import JanData from "../data/2023/jan";
import { BodyCell } from "./common/Table";
// import InferenceButton from "../InferenceButton";
// import { BodyCell, HeadCell, TableContainer } from "../common/Table";

const TableHeadData = [
  "Time",
  "Inference",
  "Oi Impact",
  "Change in LTP",
  "LTP",
  "Open Interest",
  "Commulative Oi",
  "Volume",
  "Level Break LTP",
];

function Hero() {
  const theme = useTheme();

  return (
    <TableContainer>
      <Table
        sx={{
          "& th": {
            color: theme.palette.white.main,
          },
        }}
      >
        <TableHead
          sx={{
            backgroundColor: theme.palette.primary.main,
            position: "sticky",
            top: "0",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.5)",
            marginBottom: "10px",
          }}
        >
          <TableRow sx={{ textAlign: "center" }}>
            {TableHeadData.map((item, index) => {
              return <HeadCell key={index}>{item}</HeadCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody sx={{ paddingTop: "10px" }}>
          <TableRow sx={{ height: "10px" }} />
          {JanData.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  "textAlign": "center",
                  "padding": "10px 0",
                  "backgroundColor":
                    index % 2 === 0 ? "rgba(0, 150, 199, 0.06)" : "transparent",
                  ":hover": { bgcolor: "rgba(0, 150, 199, 0.2)" },
                }}
              >
                <BodyCell>{item.time}</BodyCell>
                <BodyCell>
                  {/* <InferenceButton
                    type={item.inference.toLowerCase().split(" ").join("-")}
                    />{" "} */}
                  {item.inference}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OiImpact,
                  })}
                </BodyCell>
                <BodyCell
                  styles={{
                    color: item.oiChange > 0 ? "#64BB78" : "#EC4545",
                  }}
                >
                  {item.ChangeInLtp}
                </BodyCell>
                <BodyCell>{item.LTP}</BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OpenInterese,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.CommulativeOi,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.Volume,
                  })}
                </BodyCell>
                <BodyCell>{item.LevelBreak}</BodyCell>
              </TableRow>
            );
          })}
          {TableData.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  "textAlign": "center",
                  "padding": "10px 0",
                  "backgroundColor":
                    index % 2 === 0 ? "rgba(0, 150, 199, 0.06)" : "transparent",
                  ":hover": { bgcolor: "rgba(0, 150, 199, 0.2)" },
                }}
              >
                <BodyCell>{item.time}</BodyCell>
                <BodyCell>
                  <InferenceButton
                    text={item.inference}
                    type={item.inference.toLowerCase().split(" ").join("-")}
                  />{" "}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OiImpact,
                  })}
                </BodyCell>
                <BodyCell
                  styles={{
                    color: item.oiChange > 0 ? "#64BB78" : "#EC4545",
                  }}
                >
                  {item.ChangeInLtp}
                </BodyCell>
                <BodyCell>{item.LTP}</BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OpenInterese,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.CommulativeOi,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.Volume,
                  })}
                </BodyCell>
                <BodyCell>{item.LevelBreak}</BodyCell>
              </TableRow>
            );
          })}
          {TableData.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  "textAlign": "center",
                  "padding": "10px 0",
                  "backgroundColor":
                    index % 2 === 0 ? "rgba(0, 150, 199, 0.06)" : "transparent",
                  ":hover": { bgcolor: "rgba(0, 150, 199, 0.2)" },
                }}
              >
                <BodyCell>{item.time}</BodyCell>
                <BodyCell>
                  <InferenceButton
                    text={item.inference}
                    type={item.inference.toLowerCase().split(" ").join("-")}
                  />{" "}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OiImpact,
                  })}
                </BodyCell>
                <BodyCell
                  styles={{
                    color: item.oiChange > 0 ? "#64BB78" : "#EC4545",
                  }}
                >
                  {item.ChangeInLtp}
                </BodyCell>
                <BodyCell>{item.LTP}</BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OpenInterese,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.CommulativeOi,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.Volume,
                  })}
                </BodyCell>
                <BodyCell>{item.LevelBreak}</BodyCell>
              </TableRow>
            );
          })}
          {TableData.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  "textAlign": "center",
                  "padding": "10px 0",
                  "backgroundColor":
                    index % 2 === 0 ? "rgba(0, 150, 199, 0.06)" : "transparent",
                  ":hover": { bgcolor: "rgba(0, 150, 199, 0.2)" },
                }}
              >
                <BodyCell>{item.time}</BodyCell>
                <BodyCell>
                  <InferenceButton
                    text={item.inference}
                    type={item.inference.toLowerCase().split(" ").join("-")}
                  />{" "}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OiImpact,
                  })}
                </BodyCell>
                <BodyCell
                  styles={{
                    color: item.oiChange > 0 ? "#64BB78" : "#EC4545",
                  }}
                >
                  {item.ChangeInLtp}
                </BodyCell>
                <BodyCell>{item.LTP}</BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.OpenInterese,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.CommulativeOi,
                  })}
                </BodyCell>
                <BodyCell>
                  {formatCurrency({
                    value: item.Volume,
                  })}
                </BodyCell>
                <BodyCell>{item.LevelBreak}</BodyCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Hero;
