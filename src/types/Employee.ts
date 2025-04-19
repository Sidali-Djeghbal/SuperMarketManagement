export interface Employee {
  id: number;
  name: string;
  role: "cashier" | "manager";
  email: string;
  phone: string;
  hireDate: string;
  status: "active" | "inactive";
}
