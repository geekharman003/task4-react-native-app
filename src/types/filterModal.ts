import { Dispatch, SetStateAction } from "react";
import { Station } from "./station";

export interface FilterModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  data: Station[] | [];
  setFilteredStations: Dispatch<SetStateAction<Station[] | []>>;
}
