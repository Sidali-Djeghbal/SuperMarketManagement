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
      name: "Sidali DJEGHBAL",
      role: "manager",
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
    <div className="w-full h-full flex flex-col border border-[#595959]/45 p-6 rounded-lg shadow-lg bg-[#1A1A1A]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Staff Management</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-blue-600/20 text-blue-500 hover:bg-blue-600/30 transition-colors rounded-md flex items-center gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="currentColor"
            />
          </svg>
          Add Employee
        </button>
      </div>

      {showAddForm && (
        <div className="mb-6 p-6 border border-[#595959]/45 rounded-lg bg-[#232323]/50 shadow-inner">
          <h3 className="text-white text-xl mb-4 font-medium">
            Add New Employee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#A0A0A0] text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Enter employee name"
                className="bg-[#2A2A2A] text-white p-3 rounded-md border border-[#3A3A3A] focus:border-blue-500 focus:outline-none transition-colors"
                value={newEmployee.name || ""}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#A0A0A0] text-sm">Role</label>
              <select
                className="bg-[#2A2A2A] text-white p-3 rounded-md border border-[#3A3A3A] focus:border-blue-500 focus:outline-none transition-colors"
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
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#A0A0A0] text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-[#2A2A2A] text-white p-3 rounded-md border border-[#3A3A3A] focus:border-blue-500 focus:outline-none transition-colors"
                value={newEmployee.email || ""}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#A0A0A0] text-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="bg-[#2A2A2A] text-white p-3 rounded-md border border-[#3A3A3A] focus:border-blue-500 focus:outline-none transition-colors"
                value={newEmployee.phone || ""}
                onChange={(e) =>
                  setNewEmployee({ ...newEmployee, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddEmployee}
              className="px-6 py-3 bg-green-600/20 text-green-500 hover:bg-green-600/30 transition-colors rounded-md flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                  fill="currentColor"
                />
              </svg>
              Save Employee
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="px-6 py-3 bg-red-600/20 text-red-500 hover:bg-red-600/30 transition-colors rounded-md flex items-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill="currentColor"
                />
              </svg>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-6 p-4 bg-[#232323] text-sm mb-4 text-left gap-4 text-white font-medium rounded-t-lg">
          <div>Name</div>
          <div>Role</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Hire Date</div>
          <div>Actions</div>
        </div>
        {employees.length === 0 ? (
          <div className="text-center py-8 text-[#595959]">
            No employees found. Add your first employee using the button above.
          </div>
        ) : (
          employees.map((employee) => (
            <div
              key={employee.id}
              className="grid grid-cols-6 items-center text-white text-sm mb-2 p-4 hover:bg-[#232323]/50 rounded-md border border-transparent hover:border-[#3A3A3A] transition-all"
            >
              <div className="font-medium">{employee.name}</div>
              <div className="capitalize px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs inline-block w-fit">
                {employee.role}
              </div>
              <div>{employee.email}</div>
              <div>{employee.phone}</div>
              <div>{employee.hireDate}</div>
              <div>
                <button
                  onClick={() => handleRemoveEmployee(employee.id)}
                  className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                      fill="currentColor"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
