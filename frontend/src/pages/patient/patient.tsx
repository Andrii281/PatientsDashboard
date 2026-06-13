import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { useFetchLabEventsByAdmissionIdQuery } from "@/store/labEvents/api";

export const PatientPage = () => {
  const { id } = useParams();

  const { data } = useFetchLabEventsByAdmissionIdQuery(id ?? skipToken);

  console.log("data:", data);

  return <Box>Patient {id}</Box>;
};
