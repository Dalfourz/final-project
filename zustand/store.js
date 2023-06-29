import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

const createIdStore = create((set) => ({
  movieId: "",
}));

export { useModalStore, createIdStore };
