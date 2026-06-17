import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { type TLabEvents } from "@/shared/types/TLabEvents";

type TLabEventsTableProps = {
  labEvents: TLabEvents[];
};

export const LabEventsTable = ({ labEvents }: TLabEventsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Label
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Value
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Valueuom
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Range
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Fluid
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Category
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {labEvents.map((labEvent) => (
            <TableRow key={labEvent.labEventId}>
              <TableCell sx={{ fontSize: "0.9rem" }}>
                {labEvent.label}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {labEvent.value}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {labEvent.valueuom}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {labEvent.refRangeLower}-{labEvent.refRangeUpper}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {labEvent.fluid}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {labEvent.category}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
