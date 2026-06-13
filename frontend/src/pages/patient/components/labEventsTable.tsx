import { type TLabEvents } from "@/types/TLabEvents";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type TLabEventsTableProps = {
  labEvents: TLabEvents[];
};

export const LabEventsTable = ({ labEvents }: TLabEventsTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>label</TableCell>
            <TableCell>value</TableCell>
            <TableCell>valueuom</TableCell>
            <TableCell>range</TableCell>
            <TableCell>fluid</TableCell>
            <TableCell>category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {labEvents.map((labEvent) => (
            <TableRow key={labEvent.labEventId}>
              <TableCell>{labEvent.label}</TableCell>
              <TableCell>{labEvent.value}</TableCell>
              <TableCell>{labEvent.valueuom}</TableCell>
              <TableCell>
                {labEvent.refRangeLower}-{labEvent.refRangeUpper}
              </TableCell>
              <TableCell>{labEvent.fluid}</TableCell>
              <TableCell>{labEvent.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
