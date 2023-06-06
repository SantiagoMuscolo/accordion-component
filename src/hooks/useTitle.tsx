import { useEffect } from "react";



export const useTitle = () => {
    
    useEffect(() => {
        document.title = `Frontend Mentor | FAQ Accordion Card`
    });

    return null;
}
