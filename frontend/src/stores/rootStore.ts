import { PatientsStore } from "./patients";

export class RootStore {
  private readonly _patientsStore: PatientsStore;

  constructor() {
    this._patientsStore = new PatientsStore();
  }

  get patientsStore() {
    return this._patientsStore;
  }
}
