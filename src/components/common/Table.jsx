import { TableCell, TableContainer as MuiTableContainer } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
// import Scrollbar from "./Scrollbar";

function HeadCell({ children, styles, onClick }) {
  return (
    <TableCell
      sx={{
        color: (theme) => theme.palette.primary.main,
        fontWeight: "500",
        fontSize: "14px",
        textAlign: "center",
        minWidth: "120px",
        padding: "12px 16px",
        whiteSpace: "nowrap",
        textTransform: "capitalize",
        ...styles,
      }}
      onClick={onClick}
    >
      {children}
    </TableCell>
  );
}

function BodyCell({ children, styles }) {
  return (
    <TableCell
      sx={{
        color: (theme) => theme.palette.black.main,
        fontWeight: "400",
        fontSize: "14px",
        textAlign: "center",
        minWidth: "120px",
        padding: "10px 16px",
        whiteSpace: "nowrap",
        ...styles,
      }}
    >
      {children}
    </TableCell>
  );
}

function TableContainer({ children, styles }) {
  return (
    <MuiTableContainer
      sx={{
        overflow: "hidden",
        border: "1px solid ",
        borderColor: (theme) => theme.palette.primary.main,
        borderRadius: "4px",
      }}
      style={{ ...styles }}
    >
      {/* <Scrollbar height="100vh"> */}
      {children}
      {/* </Scrollbar> */}
    </MuiTableContainer>
  );
}
export { HeadCell, BodyCell, TableContainer };
HeadCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  styles: PropTypes.object,
  onClick: PropTypes.func,
};

BodyCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  styles: PropTypes.object,
};
TableContainer.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
};
