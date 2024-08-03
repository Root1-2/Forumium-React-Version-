import { useLogout } from "../services/useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import SpinnerMini from "../ui/SpinnerMini";

export default function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? (
        <HiArrowRightOnRectangle color="white" size={24} />
      ) : (
        <SpinnerMini />
      )}
    </ButtonIcon>
  );
}
