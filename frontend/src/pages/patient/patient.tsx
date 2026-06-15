import * as React from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { Tabs, Tab, Box, Grid } from "@mui/material";

import { useFetchLabEventsByAdmissionIdQuery } from "@/store/labEvents/api";
import { LabEventsTable } from "./components/labEventsTable";
import { useFetchPrescriptionsByAdmissionIdQuery } from "@/store/prescriptions/api";
import { PrescriptionsTable } from "./components/prescriptionsTable";
import { Chat } from "@/widgets/chat/chat";

export const PatientPage = () => {
  const [tab, setTab] = React.useState(0);

  const { id } = useParams();

  const { data: labEvents, isSuccess: isLabEventsLoaded } =
    useFetchLabEventsByAdmissionIdQuery(id ?? skipToken);

  const { data: prescriptions, isSuccess: isPrescriptionsLoaded } =
    useFetchPrescriptionsByAdmissionIdQuery(id ?? skipToken);

  return (
    <Box sx={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        <Grid size={8} sx={{ height: "100%" }}>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="lab events" />
            <Tab label="Prescriptions" />
          </Tabs>
          <Box sx={{ width: "100%", height: "100%", overflowY: "auto" }}>
            {tab === 0 && isLabEventsLoaded && (
              <LabEventsTable labEvents={labEvents} />
            )}
            {tab === 1 && isPrescriptionsLoaded && (
              <PrescriptionsTable prescriptions={prescriptions} />
            )}
          </Box>
        </Grid>
        <Grid size={4} sx={{ height: "100%" }}>
          {id && <Chat admissionId={id} />}
        </Grid>
      </Grid>
    </Box>
  );
};
