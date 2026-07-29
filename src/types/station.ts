export interface StationCardProps {
  name: string;
  address: string;
  distance: number;
  connectorType: string;
  availableSlots: number;
  rating: number;
}

export interface Station {
  address: string;
  availableSlots: number;
  city: string;
  connectorType: string;
  distance: number;
  id: string;
  isFavourite: boolean;
  name: string;
  rating: number;
}
