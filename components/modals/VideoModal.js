import useModalStore from "@/zustand/store";
import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

const ModalComponent = () => {
  const { isOpen, toggleModal } = useModalStore();


  // async function fetchMovie() {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/${movie?.media_type === "tv" ? "tv" : "movie"}/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
  //   );
  // }


  return (
    <Modal open={isOpen} className="flex justify-center items-center">
      <div className="w-[400px] h-[200px] bg-black opacity-50 text-white">
        This is a Modal
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
        <CloseIcon
          onclick={toggleModal}
          className="text-white w-5 h-5 hover:cursor-pointer"
        />
      </div>
    </Modal>
  );
};

export default ModalComponent;
