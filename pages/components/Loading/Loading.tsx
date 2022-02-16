import { useLottie } from "lottie-react";
import pikachuLoading from "../../../assets/22892-pikachu.json";
import { LoadingContainer } from "./Loading.styles";

export const Loading = () => {
  const options = {
    animationData: pikachuLoading,
    loop: true,
    autoplay: true,
    style: {
      width: 150,
    },
  };

  const { View } = useLottie(options);

  return <LoadingContainer>{View}</LoadingContainer>;
};
