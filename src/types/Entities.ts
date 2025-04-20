interface BaseEmployee {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Worker extends BaseEmployee {
  staffType: "worker";
}

export interface Cashier extends BaseEmployee {
  staffType: "cashier";
  machineNumber: number;
}

export interface Machine {
  id: number;
  machineNumber: number;
}

export type Employee = Worker | Cashier;

export type StaffItem = Employee | Machine;
