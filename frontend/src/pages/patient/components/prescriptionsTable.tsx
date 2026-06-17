import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { type TPrescriptions } from "@/shared/types/TPrescriptions";

type TPrescriptionsProps = {
  prescriptions: TPrescriptions[];
};

export const PrescriptionsTable = ({ prescriptions }: TPrescriptionsProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
              Drug
            </TableCell>
            <TableCell sx={{ fontSize: "0.9rem", fontWeight: "bold" }}>
              Strength
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Dose
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Unit
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              DosesPer24Hrs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prescriptions.map((prescription) => (
            <TableRow key={prescription.prescriptionId}>
              <TableCell sx={{ fontSize: "0.9rem" }}>
                {prescription.drug}
              </TableCell>
              <TableCell sx={{ fontSize: "0.9rem" }}>
                {prescription.prodStrength}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {prescription.doseValRx}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {prescription.doseUnitRx}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "0.9rem" }}>
                {prescription.dosesPer24Hrs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
