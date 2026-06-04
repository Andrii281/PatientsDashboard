import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

export const PatientPage = () => {
  const { id } = useParams();
  return <Box>Patient {id}</Box>;
};
