import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../api/apiConfig";
import storage from "../utilities/storage";
import { StudentPlacement } from "../api/auth";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const GetStudentPlacement = () => {
  const { id } = useParams<{ id: string }>();
  const [studentPlaced, setStudentPlaced] = useState<StudentPlacement[]>([]);

  const fetchStudentPlacements = async () => {
    if (id) {
      try {
        const response = await axios.get<StudentPlacement[]>(
          `${API_BASE_URL}/companies/${id}/student_placements`,
          {
            headers: { Authorization: `Bearer ${storage.getToken()}` },
          }
        );
        setStudentPlaced(response.data);
      } catch (error) {
        console.error("Error fetching student placements:", error);
      }
    }
  };

  useEffect(() => {
    fetchStudentPlacements();
  }, [id]);

  return (
    <div>
      <h1>Student Placed</h1>
      <TableContainer
        component={Paper}
        sx={{ margin: "10px", width: "auto", marginInline: "2rem" }}
      >
        <Table sx={{ minWidth: 300 }} aria-label="student placements table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Id</StyledTableCell>
              <StyledTableCell align="left">Designation</StyledTableCell>
              <StyledTableCell align="left">Package</StyledTableCell>
              <StyledTableCell align="left">Requirement</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentPlaced.map((student) => (
              <StyledTableRow key={student.id}>
                <StyledTableCell>{student.user_id}</StyledTableCell>
                <StyledTableCell align="left">
                  {student.designation}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {student.package}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {student.requirements}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GetStudentPlacement;
