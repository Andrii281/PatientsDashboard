import { makeAutoObservable } from "mobx";

import { EStoreState } from "@/types/EStoreState";
import { patientsApi } from "@/api/patientsApi";
import { type IPatient } from "@/types/IPatient";

export class PatientsStore {
  private _patients: IPatient[] = [];
  private _status: EStoreState = EStoreState.Idle;

  constructor() {
    makeAutoObservable(this);
  }

  get patients(): IPatient[] {
    return this._patients;
  }

  get status(): EStoreState {
    return this._status;
  }

  async fetch(): Promise<void> {
    this._status = EStoreState.Loading;
    const result = await patientsApi.getAll();
    this._status = EStoreState.Success;
    this._patients = result.response;
  }
}
