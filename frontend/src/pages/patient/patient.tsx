import * as React from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useParams } from "react-router-dom";
import { Tabs, Tab, Box, Grid } from "@mui/material";

import { useFetchLabEventsByAdmissionIdQuery } from "@/store/labEvents/api";
import { LabEventsTable } from "./components/labEventsTable";
import { useFetchPrescriptionsByAdmissionIdQuery } from "@/store/prescriptions/api";
import { PrescriptionsTable } from "./components/prescriptionsTable";
import { Chat } from "@/widgets/chat/chat";
import { useAppSelector } from "@/hooks/useAppSelector";
import { EStoreStatus } from "@/shared/types/EStoreStatus";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchPatients } from "@/store/patients/actions";
import { Profile } from "./components/profile";
import { type TAdmissions } from "@/shared/types/TAdmissions";

export const PatientPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const [tab, setTab] = React.useState(0);

  const patientsStatus = useAppSelector((state) => state.patients.status);

  const patient = useAppSelector((state) => {
    const patient = state.patients.patients.find((patient) =>
      patient.admissions.some((admission) => String(admission.hadmId) === id)
    );
    if (!patient) return null;
    return {
      ...patient,
      admissions: [
        patient.admissions.find(
          (admission) => String(admission.hadmId) === String(id)
        ) as TAdmissions,
      ],
    };
  });

  console.log("patient:", patient);

  const { data: labEvents, isSuccess: isLabEventsLoaded } =
    useFetchLabEventsByAdmissionIdQuery(id ?? skipToken);

  const { data: prescriptions, isSuccess: isPrescriptionsLoaded } =
    useFetchPrescriptionsByAdmissionIdQuery(id ?? skipToken);

  React.useLayoutEffect(() => {
    if (patientsStatus !== EStoreStatus.Success) {
      dispatch(fetchPatients());
    }
  }, []);

  return (
    <Box sx={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        <Grid size={8} sx={{ height: "100%" }}>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="Profile" />
            <Tab label="lab events" />
            <Tab label="Prescriptions" />
          </Tabs>
          <Box sx={{ width: "100%", height: "100%", overflowY: "auto" }}>
            {tab === 0 && patient && (
              <Profile
                subjectId={patient.subjectId}
                firstName={patient.firstName}
                lastName={patient.lastName}
                gender={patient.gender}
                age={patient.anchorAge}
                language={patient.admissions[0].language}
                maritalStatus={patient.admissions[0].maritalStatus}
                race={patient.admissions[0].race}
              />
            )}
            {tab === 1 && isLabEventsLoaded && (
              <LabEventsTable labEvents={labEvents} />
            )}
            {tab === 2 && isPrescriptionsLoaded && (
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
