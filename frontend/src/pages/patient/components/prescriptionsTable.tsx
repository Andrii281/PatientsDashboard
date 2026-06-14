import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { type TPrescriptions } from "@/types/TPrescriptions";

type TPrescriptionsProps = {
  prescriptions: TPrescriptions[];
};

export const PrescriptionsTable = ({ prescriptions }: TPrescriptionsProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>drug</TableCell>
            <TableCell>prodStrength</TableCell>
            <TableCell>doseValRx</TableCell>
            <TableCell>doseUnitRx</TableCell>
            <TableCell>dosesPer24Hrs</TableCell>
            <TableCell>route</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prescriptions.map((prescription) => (
            <TableRow>
              <TableCell>{prescription.drug}</TableCell>
              <TableCell>{prescription.prodStrength}</TableCell>
              <TableCell>{prescription.doseValRx}</TableCell>
              <TableCell>{prescription.doseUnitRx}</TableCell>
              <TableCell>{prescription.dosesPer24Hrs}</TableCell>
              <TableCell>{prescription.route}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
