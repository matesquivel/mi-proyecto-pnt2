import React , {useState} from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100){
            setVisible(true);
        } else if (scrolled <= 100){
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    };

    window.addEventListener("scroll",toggleVisible);

    return (
        <div>
        <Button>
            <FaArrowAltCircleUp
            onClick={scrollToTop}
            style={{display: visible ? "inline" : "none"}}
            />
        </Button>
        </div>
    )
}

export default ScrollButton;