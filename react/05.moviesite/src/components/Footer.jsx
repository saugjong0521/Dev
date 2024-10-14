import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube  } from "react-icons/fa";


export default function Footer (){

    return (
        <FooterContainer>
            <SocialList>
                <li><a href="#" target="_blank"><FaFacebookF /></a></li>
                <li><a href="#" target="_blank"><FaInstagram /></a></li>
                <li><a href="#" target="_blank"><FaTwitter /></a></li>
                <li><a href="#" target="_blank"><FaYoutube  /></a></li>
            </SocialList>

            <FooterLinks>
                <li><a href="#" target="_blank">화면 해설</a></li>
                <li><a href="#" target="_blank">고객 센터</a></li>
                <li><a href="#" target="_blank">기프트카드</a></li>
                <li><a href="#" target="_blank">미디어 센터</a></li>
                <li><a href="#" target="_blank">투자 정보(IR)</a></li>
                <li><a href="#" target="_blank">입사 정보</a></li>
                <li><a href="#" target="_blank">이용 약관</a></li>
                <li><a href="#" target="_blank">개인 정보</a></li>
                <li><a href="#" target="_blank">법적 고지</a></li>
                <li><a href="#" target="_blank">쿠키 설정</a></li>
                <li><a href="#" target="_blank">회사 정보</a></li>
                <li><a href="#" target="_blank">문의하기</a></li>
            </FooterLinks>

        </FooterContainer>
    )
}