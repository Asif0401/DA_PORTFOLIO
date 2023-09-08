import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;
    body {
    
      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        height: 100%;
        padding: 15px;
      }
    }
        

        .header ul {
          
          background-color: ${theme.colors.background};
        }
        .grey-color {
          color: black;
        }


        .header li a {
          color: ${theme.colors.header_color};
          background-color: ${theme.colors.header};
          padding: 20px 15px;

        }

        @media only screen and (max-width: 75em) {
          .header li a {
            padding: 0px 0px;

            color: ${theme.colors.header_color};
            background-color: ${theme.colors.header};

          }

        }

          .header li a:hover,
          .header .menu-btn:hover {
            background-color: ${theme.colors.header};
            color: ${theme.colors.logo_color};

          }
       
        @font-face{
          font-family: "BeautyDemo";
          font-size: 40px;
          src: url("./BeautyDemo.ttf") format("truetype");
        }

        .header .logo-name {
          color: ${theme.colors.logo_color};
        }

       
        .header li a:after {
          color: ${theme.colors.logo_color};


        }

        .header li a:before {
          color: ${theme.colors.logo_color};


        }



        //university card image:
       
       
        .body-header {
            
            background-color: ${theme.colors.degree_card_header_bgcolor}; 
            
        }

       

        

        .card-body {
            background-color: ${theme.colors.degree_card_bgcolor}; 
            
        }

        

      .experience-card {
        background-color:${theme.colors.exp_card_bgcolor};
    }
    

      .experience-accord .b4 {
          background-color: ${theme.colors.accordian_background};
          color: ${theme.colors.accordian_text_color};
          font-family: 'cassette';
      }

      .experience-accord .ba {
          color: ${theme.colors.accordian_text_color};
          font-family: 'cassette';
      }

      .experience-accord .bu {
          background-color: ${theme.colors.accordian_background_2};
          color: ${theme.colors.accordian_p_text_color};
          font-family: 'cassette';
      }


      .accord-panel {
          font-family: 'Google Sans Regular';
      }

      @media (max-width: 768px) {
          .experience-accord{
              margin: 20px;
              margin-left: 45px;
          }
      }


      .subTitle {
        color: ${theme.colors.greetings_p_color}
      }

      

        .carousel .slide {
          min-width: 100%;
          margin: 0;
          position: relative;
          text-align: center;
          background:${theme.colors.carousal_bgcolor};
          color: ${theme.colors.carousal_color};
      }

      .textcs{

        color:${theme.colors.carousal_color};
      }

      .main-button {
        background-color: ${theme.colors.main_btn_color};
        border: solid 1px ${theme.colors.main_btn_color};
        color: white;
        font-weight: 500;
        line-height: 1.1;
        width: max-content;
        padding: 13px 22px;
        margin-right: 0px;
        /* text-transform: uppercase; */
        border-radius: 6px;
        text-align: center;
        text-decoration: none;
        font-family: "Google Sans Regular";
        display: block;
        margin-top: 20px;
        font-size: 18px;
        cursor: pointer;
      }
      .main-button:hover {
        background-color: #ffffff;
        color: black;
        transition: ease-in 0.3s;
      }
      .project-button{
        display: flex;
        justify-content: center;
        margin-top: 20px;
      
      }
      /* Media Query */
      @media (max-width: 768px) {
        .main-button {
          font-size: 15px;
          padding: 12px 18px;
          margin-right: 0px;
        }
      }
      @media (max-width: 320px) {
        .main-button {
          font-size: 12px;
        }
      }
      
}

}
`}
`;