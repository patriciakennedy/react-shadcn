// src/store/useUserStore.js
import create from 'zustand';

const useUserStore = create((set) => ({
    role: null, // initially no role is set
    setRole: (role) => set({ role }),
}));

export default useUserStore;
