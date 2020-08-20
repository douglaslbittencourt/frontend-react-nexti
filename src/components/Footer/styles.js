import styled from 'styled-components';

export const FooterPrincipal = styled.footer `
  background: #333;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
  padding: 55px 50px;

 .footer-left,
 .footer-center,
 .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

 .footer-left{
	width: 35%;
}

/* The company logo */

 h3{
	color:  #ffffff;
	font: normal 36px 'Open Sans', cursive;
	margin: 0;
}

 h3 span{
	color:  lightseagreen;
}

/* Footer links */

 .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

 .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
}

 .footer-company-name{
	color:  #92999f;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

 .footer-center{
	width: 35%;
}

 .footer-center i{
  background-color:  #333;
	border-radius: 2px;

	font-size: 25px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}

 /* .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
} */

 .footer-center p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
}

 .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

 .footer-center p a{
	color:  lightseagreen;
	text-decoration: none;;
}

 .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

 .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

 .footer-right{
	width: 20%;
}

 .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

 .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}
`;
