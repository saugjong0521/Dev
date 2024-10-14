import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube  } from "react-icons/fa";
import styled from "styled-components";


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

            <ServiceBtn>서비스 코드</ServiceBtn>

            <FooterInfo>
                <p>넥플릭스서비시스 코리아 유한회사 통신판매업 신고번호 : 제 2018-111111 전화번호 : 00-1111-1111(수신자부담)</p>
                <p>대표 : 홍길동</p>
                <p>이메일 주소 : abc@abc.com</p>
                <p>주소 : 대한민국 서울특별시 강님</p>
                <p>사업자 등록번호 : 111-11-111111</p>
                <p>클라우드 호스팅 : aaa</p>
                <p><a href="#">공정거래위원회 웹사이트</a></p>
            </FooterInfo>

        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    max-width: 980px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background: 000;
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    a{
        color: #fff;
        font-size: 20px;
    }
`

const FooterLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;   
    gap: 20px 0px;
    li{
        width: 25%;
        a{
            color: rgba(255, 255, 255, 0.6);
            display: block;
            font-size: 14px;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`

const ServiceBtn= styled.button `
    padding: 12px 24px;
    color:

`

const FooterInfo = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    p{}
`