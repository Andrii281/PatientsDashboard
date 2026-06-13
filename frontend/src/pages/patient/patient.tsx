import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { useFetchLabEventsByAdmissionIdQuery } from "@/store/labEvents/api";
import { LabEventsTable } from "./components/labEventsTable";

export const PatientPage = () => {
  const { id } = useParams();

  const { data: labEvents, isSuccess } = useFetchLabEventsByAdmissionIdQuery(
    id ?? skipToken
  );

  console.log("data:", labEvents);

  return (
    <Box>
      Patient {id}
      {isSuccess && (
        <Box>
          <LabEventsTable labEvents={labEvents} />
        </Box>
      )}
    </Box>
  );
};
