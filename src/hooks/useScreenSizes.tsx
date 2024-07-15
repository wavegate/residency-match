import { useMediaQuery } from "@uidotdev/usehooks";

export default function useScreenSizes() {
  const sm = useMediaQuery("only screen and (min-width : 640px)");
  const md = useMediaQuery("only screen and (min-width : 768px)");
  const lg = useMediaQuery("only screen and (min-width : 1024px)");

  return { sm, md, lg };
}
