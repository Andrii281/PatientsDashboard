import type { IPatient } from "../types/IPatient";

export interface IGetAllPatientsDto {
    status: "ok";

    response: IPatient[];
}