export interface Birds {

  _id: number;
  namePtBr: string;
  nameEng: string;
  species: string;
  family: string;
  size: number;
  gender: string;
  color: string;
  habitat: Array<Array<boolean>>;
  photo: string;
  localization: string;
}
