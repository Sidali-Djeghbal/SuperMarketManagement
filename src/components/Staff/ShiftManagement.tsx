"use client";

import React, { useState, useEffect } from "react";
import type { Employee, Machine } from "@/types/Entities";
import type { Shift } from "@/types/Shift";

interface ShiftManagementProps {
  machines: Machine[];
  employees: Employee[];
}

export default function ShiftManagement({
  machines,
  employees,
}: ShiftManagementProps) {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated API call to fetch shifts
    // Replace this with actual API call
    const fetchShifts = async () => {
      try {
        setLoading(true);
        // Simulated API response
        const mockShifts: Shift[] = [
          {
            id: 1,
            machineId: 1,
            cashierId: 1,
            startTime: "2024-01-01T09:00:00",
            endTime: "2024-01-01T17:00:00",
          },
          {
            id: 2,
            machineId: 2,
            cashierId: 2,
            startTime: "2024-01-01T10:00:00",
            endTime: "2024-01-01T18:00:00",
          },
        ];

        setShifts(mockShifts);
        setError(null);
      } catch (err) {
        setError(
          `Failed to fetch shifts: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchShifts();
  }, []);

  const getCashierName = (cashierId: number) => {
    const cashier = employees.find((emp) => emp.id === cashierId);
    return cashier?.username || "Unknown";
  };

  const getMachineLabel = (machineId: number) => {
    const machine = machines.find((m) => m.id === machineId);
    return machine ? `Machine ${machine.id}` : "Unknown Machine";
  };

  const formatDateTime = (dateTimeStr: string) => {
    return new Date(dateTimeStr).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8 text-[#595959]">
        Loading shifts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-medium text-white mb-4">Shifts</h3>
      <div className="grid grid-cols-4 p-4 bg-[#232323] text-sm mb-4 text-left gap-4 text-white font-medium rounded-t-lg">
        <div>Machine</div>
        <div>Cashier</div>
        <div>Start Time</div>
        <div>End Time</div>
      </div>
      {shifts.length === 0 ? (
        <div className="text-center py-8 text-[#595959]">
          No shifts available.
        </div>
      ) : (
        shifts.map((shift) => (
          <div
            key={shift.id}
            className="grid grid-cols-4 items-center text-white text-sm mb-2 p-4 hover:bg-[#232323]/50 rounded-md border border-transparent hover:border-[#3A3A3A] transition-all"
          >
            <div className="font-medium">
              {getMachineLabel(shift.machineId)}
            </div>
            <div>{getCashierName(shift.cashierId)}</div>
            <div>{formatDateTime(shift.startTime)}</div>
            <div>{formatDateTime(shift.endTime)}</div>
          </div>
        ))
      )}
    </div>
  );
}
