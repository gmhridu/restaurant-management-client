import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {
 const menuData = async () => {
   const { data } = await axios(`${import.meta.env.VITE_API_URL}/menus`);
   return data;
 };

 const {
  data: menus = [],
  isLoading,
  } = useQuery({
   queryKey: ["menus"],
   queryFn: menuData,
   staleTime: 1000 * 60 * 60,
   cacheTime: 1000 * 60 * 60,
   refetchInterval: 1000 * 60 * 60,
   refetchIntervalInBackground: true,
  });
 return [menus, isLoading];
 
}

export default useMenu;