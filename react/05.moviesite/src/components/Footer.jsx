import { FaFacebook, FaInstagram, FaTwitter, FaYoutube  } from "react-icons/fa";


export default function Footer (){

    return (
        <FooterContainer>
            <SocialList>
                <li><a href="#" target="_blank"><FaFacebook /></a></li>
                <li><a href="#" target="_blank"><FaInstagram /></a></li>
                <li><a href="#" target="_blank"><FaTwitter /></a></li>
                <li><a href="#" target="_blank"><FaYoutube  /></a></li>
            </SocialList>


        </FooterContainer>
    )
}