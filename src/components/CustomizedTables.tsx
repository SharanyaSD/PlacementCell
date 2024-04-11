import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CompanyPlacement } from "../api/auth";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface CustomizedTablesProps {
  company: CompanyPlacement[];
}

const CustomizedTables: React.FC<CustomizedTablesProps> = ({ company }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ margin: "10px", width: "auto", marginInline: "2rem" }}
    >
      <Table sx={{ minWidth: 50 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Year</StyledTableCell>
            <StyledTableCell align="left">Applied</StyledTableCell>
            <StyledTableCell align="left">Selected</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {company.map((comp) => (
            <StyledTableRow key={comp.id}>
              <StyledTableCell component="th" scope="row">
                {comp.year}
              </StyledTableCell>
              <StyledTableCell align="left">{comp.applied}</StyledTableCell>
              <StyledTableCell align="left">{comp.selected}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
