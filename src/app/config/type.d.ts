type Component = () => JSX.Element | Promise<JSX.Element>;
type ClsValue = string | number | boolean | undefined | null;
type ClsMapping = Record<string, unknown>;
type ClsArgumentArray = Array<ClsArgument>;
type ClsArgument = ClsValue | ClsMapping | ClsArgumentArray;

type COPYRIGHT = {
  byName: string;
  brandWebsite: string;
};

type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: {
    city: string;
  };
};
