import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";

import { useFetchLabEventsByAdmissionIdQuery } from "@/store/labEvents/api";
import { LabEventsTable } from "./components/labEventsTable";
import { useFetchPrescriptionsByAdmissionIdQuery } from "@/store/prescriptions/api";
import { PrescriptionsTable } from "./components/prescriptionsTable";

export const PatientPage = () => {
  const [tab, setTab] = useState(0);

  const { id } = useParams();

  const { data: labEvents, isSuccess: isLabEventsLoaded } =
    useFetchLabEventsByAdmissionIdQuery(id ?? skipToken);

  const { data: prescriptions, isSuccess: isPrescriptionsLoaded } =
    useFetchPrescriptionsByAdmissionIdQuery(id ?? skipToken);

  return (
    <Box>
      Patient {id}
      <Tabs value={tab} onChange={(_, value) => setTab(value)}>
        <Tab label="lab events" />
        <Tab label="Prescriptions" />
      </Tabs>
      {tab === 0 && isLabEventsLoaded && (
        <LabEventsTable labEvents={labEvents} />
      )}
      {tab === 1 && isPrescriptionsLoaded && (
        <PrescriptionsTable prescriptions={prescriptions} />
      )}
    </Box>
  );
};
