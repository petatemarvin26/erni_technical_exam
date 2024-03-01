import {Vehicle} from 'ducks/vehicle/types';

type VehicleProps = Vehicle & {
  vehicle_id: string;
};

type VehicleState = {};

export type {VehicleProps, VehicleState};
