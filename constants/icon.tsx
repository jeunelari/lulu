import { Feather } from "@expo/vector-icons";

export const icon: Record<string, (props: any) => JSX.Element> = {
  index: (props) => <Feather name="home" size={24} color={"#222"} {...props} />,
  recherche: (props) => (
    <Feather name="search" size={24} color={"#222"} {...props} />
  ),
  surprendsmoi: (props) => (
    <Feather name="shuffle" size={24} color={"#222"} {...props} />
  ),
  mesfavoris: (props) => (
    <Feather name="heart" size={24} color={"#222"} {...props} />
  ),
  profil: (props) => (
    <Feather name="user" size={24} color={"#222"} {...props} />
  ),
};
