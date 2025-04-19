"use client";

import React, { useState } from "react";
import type { Employee } from "@/types/Employee";

interface StaffManagementProps {
  onAddEmployee?: (employee: Employee) => void;
  onRemoveEmployee?: (employeeId: number) => void;
}

export default function StaffManagement({
  onAddEmployee,
  onRemoveEmployee,
}: StaffManagementProps) {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "John Doe",
      role: "cashier",
      email: "john@example.com",
      phone: "123-456-7890",
      hireDate: "2024-01-01",
      status: "active",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({
    role: "cashier",
    status: "active",
  });

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.phone) {
      alert("Please fill in all required fields");
      return;
    }

    const employee: Employee = {
      id: Date.now(),
      name: newEmployee.name,
      role: newEmployee.role || "cashier",
      email: newEmployee.email,
      phone: newEmployee.phone,
      hireDate: new Date().toISOString().split("T")[0],
      status: newEmployee.status || "active",
    };

    setEmployees([...employees, employee]);
    if (onAddEmployee) onAddEmployee(employee);
    setShowAddForm(false);
    setNewEmployee({ role: "cashier", status: "active" });
  };

  const handleRemoveEmployee = (id: number) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    if (onRemoveEmployee) onRemoveEmployee(id);
  };

  return (
    <div className="w-full h-full flex flex-col border border-[#595959]/45 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white">Staff Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="p-2 bg-blue-600/20 text-blue-500 hover:bg-blue-600/30 transition-colors rounded-md"
        >
          + Add Employee
        </button>
      </div>

      {showAddForm && (
        <div className="mb-4 p-4 border border-[#595959]/45 rounded-md">
          <h3 className="text-white mb-3">Add New Employee</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#232323] text-white p-2 rounded-md"
              value={newEmployee.name || ""}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, name: e.target.value })
              }
            />
            <select
              className="bg-[#232323] text-white p-2 rounded-md"
              value={newEmployee.role}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  role: e.target.value as "cashier" | "manager",
                })
              }
            >
              <option value="cashier">Cashier</option>
              <option value="manager">Manager</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              className="bg-[#232323] text-white p-2 rounded-md"
              value={newEmployee.email || ""}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bg-[#232323] text-white p-2 rounded-md"
              value={newEmployee.phone || ""}
              onChange={(e) =>
                setNewEmployee({ ...newEmployee, phone: e.target.value })
              }
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleAddEmployee}
              className="p-2 bg-green-600/20 text-green-500 hover:bg-green-600/30 transition-colors rounded-md"
            >
              Save
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-2 bg-red-600/20 text-red-500 hover:bg-red-600/30 transition-colors rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-6 p-2 bg-[#232323] text-sm mb-2 text-left py-2 gap-2 text-white">
          <div>Name</div>
          <div>Role</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Hire Date</div>
          <div>Actions</div>
        </div>
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="grid grid-cols-6 items-center text-white text-sm mb-1 p-2 hover:bg-[#232323]/50 rounded-md"
          >
            <div>{employee.name}</div>
            <div className="capitalize">{employee.role}</div>
            <div>{employee.email}</div>
            <div>{employee.phone}</div>
            <div>{employee.hireDate}</div>
            <div>
              <button
                onClick={() => handleRemoveEmployee(employee.id)}
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
