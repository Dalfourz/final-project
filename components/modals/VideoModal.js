import { useModalStore } from "@/zustand/store";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import axios from "axios";

const ModalComponent = () => {
  const { isOpen, toggleModal } = useModalStore();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [movie, setMovie] = useState([]);

  async function fetchMovie() {

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    setMovie(data);

  }
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Modal open={isOpen} className="flex justify-center items-center">
      <div className="w-[400px] h-[200px] bg-black opacity-50 text-white">
        This is a Modal

        <CloseIcon
          onclick={toggleModal}
          className="text-white w-5 h-5 hover:cursor-pointer"
        />
        Overview:
      </div>
    </Modal>
  );
};

export default ModalComponent;
