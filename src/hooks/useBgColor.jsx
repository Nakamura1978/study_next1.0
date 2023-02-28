import { useRouter } from "next/router"
import { useEffect, useMemo } from "react";


export const useBgColor = () => {
    const router = useRouter();
    
    const bgColor = useMemo(() => {
            switch(router.pathname){
                case "/":
                    return "lightpink";
                case "/about":
                    return "lightblue";
                case "/content":
                    return "lightgreen";
                case "/product":
                    return "lightyellow";
            }
    }, [router.pathname]);
    
    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
        return () => {
            document.body.style.backgroundColor = "lime";
        }
    }, [bgColor]);
}