import { Dispatch, SetStateAction } from "react";

export interface FavouriteButtonProps {
  isFavourite: boolean;
  setIsFavourite: Dispatch<SetStateAction<boolean>>;
  onPress: () => void;
}
