export type TLabEvents = {
  labEventId: number;

  charttime: string;

  storetime: string | null;

  value: string | null;

  valuenum: string | null;

  valueuom: string | null;

  refRangeLower: string | null;

  refRangeUpper: string | null;

  flag: string | null;

  priority: string | null;

  comments: string | null;

  label: string;

  fluid: string;

  category: string;
};
