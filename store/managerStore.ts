import { create } from "zustand";

type Manager = {
  id: number;
  role: string;
  username: string;
};

type ManagerStore = {
  manager: Manager | null;
  setManager: (manager: Manager) => void;
  clearManager: () => void;
};

export const useManagerStore = create<ManagerStore>((set) => ({
  manager: null,
  setManager: (manager) => set({ manager }),
  clearManager: () => set({ manager: null }),
}));