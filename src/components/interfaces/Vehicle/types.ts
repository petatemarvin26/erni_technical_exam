import {Vehicle} from 'ducks/vehicle/types';

type VehicleProps = Vehicle & {
  vehicle_id: string;
};

type VehicleState = {
  side: string;
  space: string;
};

export type {VehicleProps, VehicleState};
