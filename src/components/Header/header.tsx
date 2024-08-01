"use client";
import { useState, FC } from "react";
import { LocaleSwitcher } from "./locale-switcher";
import { useLocale, useTranslations } from "next-intl";
import { Locale, cleanPhoneNumber, cn } from "@/lib";
import { facebook, instagram, phone } from "@/lib/contents";

interface HeaderProps {
  toggleHandler: () => void;
}

export const Header: FC<HeaderProps> = ({ toggleHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Common");
  const locale = useLocale() as Locale;

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
    toggleHandler();
  };
  return (
    <header className={"sticky top-0 z-[1] bg-white shadow"}>
      <div className="container">
        <div className="header py-4">
          <div className="logo">
            <a href={"/"}>
              <img src={`/assets/images/logo.svg`} alt="logo of company" />
            </a>
          </div>
          <div className="navigation-desktop">
            <ul className="navigation-desktop-list items-center">
              <li className="navigation-desktop-link">
                <a href={"/"}>{t("main")}</a>
              </li>
              <li className="navigation-desktop-link">
                <a href={`#about-us`}>{t("about")}</a>
              </li>
              <li className="navigation-desktop-link">
                <a href={`#our-services`}>{t("services")}</a>
              </li>
              <li className="navigation-desktop-link">
                <a href={`#calculation-of-services`}>{t("calculator")}</a>
              </li>
              <li className="navigation-desktop-link">
                <a href={`#contacts`}>{t("contacts")}</a>
              </li>
            </ul>
          </div>
          <LocaleSwitcher locale={locale} shouldHideOnMobileView />
          <div className="hamburger-menu" onClick={clickHandler}>
            <a className="hamburger-toggle">
              <span className={cn("hamburger-btn")} />
            </a>
          </div>
        </div>
        <div className="navigation-contacts">
          <svg
            width="22"
            height="22"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.93984 8.84083C9.39567 8.41331 8.82712 8.01466 8.31445 7.5443C8.10749 7.35537 7.95651 7.36018 7.72034 7.51495C7.53415 7.63717 7.36045 7.7763 7.2013 7.93515C7.03933 8.09608 6.86696 8.24292 6.67967 8.37249C6.5399 8.46914 6.40532 8.48144 6.25403 8.38854C6.07275 8.2786 5.9194 8.1328 5.75613 8.00304C4.79936 7.25545 4.07756 6.32787 3.60761 5.20782C3.49169 4.92992 3.36523 4.65544 3.28372 4.36519C3.23972 4.20831 3.27678 4.07866 3.40222 3.97734C3.48503 3.90967 3.572 3.84764 3.66143 3.78598C3.93177 3.6038 4.23221 3.47124 4.49081 3.26726C4.77551 3.03966 4.82077 2.88871 4.66251 2.55936C4.48113 2.18395 4.33735 1.79167 4.19075 1.40147C4.08364 1.11488 3.99197 0.82561 3.86625 0.546235C3.79911 0.393382 3.68552 0.316177 3.52132 0.308983C3.22268 0.296572 2.92695 0.314652 2.63476 0.375836C2.49515 0.404901 2.37071 0.466301 2.25519 0.551583C2.03788 0.714196 1.8623 0.915648 1.69749 1.12874C1.32326 1.61832 1.08345 2.16321 1.10992 2.78575C1.14997 3.65074 1.34676 4.48926 1.62255 5.3021C1.86204 6.0068 2.23968 6.64215 2.65848 7.25364C3.22067 8.07705 3.84877 8.84527 4.60942 9.49822C5.11501 9.93246 5.70284 10.2363 6.28111 10.5538C6.66303 10.7616 7.05035 10.9501 7.48868 11.0161C7.58247 11.0252 7.67834 11.0371 7.77287 11.0414C8.34604 11.0601 8.86984 10.891 9.37227 10.6311C9.64125 10.4913 9.84658 10.2918 9.96221 10.0062C10.0254 9.85291 10.0906 9.70246 10.1419 9.5449C10.2655 9.17285 10.2469 9.0799 9.93984 8.84083Z"
              fill="#54535F"
            />
          </svg>
          <a href={`tel:${cleanPhoneNumber(phone)}`}>{phone}</a>

          <ul className="navigation-contacts-social py-2 relative">
            <li className="flex justify-center align-center">
              <a href={facebook} className="svg-box">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 9.98962C20 12.0718 20 14.1539 20 16.2361C20 18.0113 18.7299 19.5462 16.992 19.8932C16.8048 19.9333 16.6043 19.96 16.4037 19.96C15.615 19.9733 14.8128 19.96 14.0241 19.9733C13.8235 19.9733 13.7567 19.9066 13.7567 19.7197C13.7567 17.3039 13.7567 14.888 13.7567 12.4722C13.7567 12.272 13.8235 12.2052 14.0241 12.2052C14.7059 12.2186 15.4011 12.2052 16.0829 12.2052C16.2968 12.2052 16.3636 12.1385 16.3904 11.925C16.4706 11.1508 16.5909 10.39 16.6845 9.6159C16.6845 9.5892 16.6845 9.57586 16.6979 9.54916C16.7246 9.26887 16.7246 9.26887 16.4572 9.26887C15.8957 9.26887 15.3342 9.26887 14.7727 9.26887C14.5053 9.26887 14.238 9.26887 13.984 9.26887C13.8369 9.26887 13.7567 9.21548 13.7567 9.05532C13.7701 8.34792 13.7166 7.65386 13.7968 6.94646C13.877 6.23906 14.2513 5.87869 14.9733 5.85199C15.508 5.83865 16.0428 5.8253 16.5775 5.8253C16.7647 5.8253 16.8449 5.77191 16.8449 5.5717C16.8316 4.8643 16.8316 4.1569 16.8449 3.43616C16.8449 3.26264 16.7914 3.16921 16.6043 3.15587C15.7487 3.10248 14.893 3.03574 14.0241 3.10248C12.3396 3.2226 11.0561 4.39715 10.7888 6.0789C10.6952 6.65282 10.7353 7.22675 10.7219 7.80068C10.7219 8.21444 10.7219 8.61486 10.7219 9.02862C10.7219 9.21548 10.6551 9.28222 10.4679 9.28222C9.77273 9.28222 9.07754 9.28222 8.38235 9.28222C8.18182 9.28222 8.1016 9.33561 8.1016 9.54916C8.11497 10.3633 8.11497 11.1642 8.1016 11.9783C8.1016 12.1652 8.15508 12.2319 8.34225 12.2319C9.02406 12.2186 9.71925 12.2319 10.4011 12.2186C10.6283 12.2186 10.7086 12.2853 10.7086 12.5122C10.7086 14.9014 10.7086 17.3039 10.7086 19.693C10.7086 19.9066 10.6417 20 10.4144 20C8.19519 19.9867 5.97594 20 3.77005 20C1.67112 20 0.013369 18.3449 0 16.2361C0 12.5256 0 8.84176 0.013369 5.15794C0.013369 4.54397 -0.026738 3.93 0.040107 3.32938C0.254011 1.46077 1.85829 0.0192793 3.74332 0.00593208C6.13636 0.00593208 8.52941 0.00593208 10.9358 0.00593208C12.7273 0.00593208 14.5053 -0.0074151 16.2968 0.00593208C18.0481 0.0192793 19.5722 1.28726 19.9332 2.98235C19.9866 3.26264 20 3.52959 20 3.80988C20 5.87869 20 7.93415 20 9.98962Z" />
                </svg>
              </a>
            </li>
            <li className="flex justify-center align-center">
              <a href={instagram} className="svg-box">
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1592 0.607196C13.5864 0.607196 14.0135 0.60603 14.4407 0.604863C15.4017 0.602239 16.3628 0.599615 17.3239 0.610275C18.4258 0.622594 19.5247 0.699583 20.5928 1.00138C21.7194 1.3155 22.7259 1.84211 23.5416 2.69823C24.5604 3.76992 25.1483 5.06026 25.4161 6.50458C25.5516 7.23752 25.5947 7.97662 25.6008 8.72188C25.6064 9.53002 25.6152 10.3371 25.6241 11.1443L25.6241 11.1461C25.63 11.6856 25.6359 12.2252 25.6408 12.7654C25.6501 14.3021 25.6408 15.8419 25.6224 17.3786C25.607 18.5119 25.5085 19.6359 25.1791 20.7353C24.6004 22.6662 23.3631 24.0058 21.5408 24.8219C20.6143 25.2376 19.6355 25.4409 18.6259 25.5117C17.4225 25.5982 16.2191 25.5981 15.0156 25.598L14.8953 25.598C14.5149 25.598 14.1345 25.5983 13.7542 25.5986C12.4231 25.5996 11.0921 25.6007 9.76105 25.5887C8.92689 25.5826 8.09273 25.5733 7.26165 25.4779C5.94732 25.3239 4.69146 24.9913 3.59875 24.2121C2.31827 23.2944 1.50873 22.0441 1.08088 20.5413C0.846948 19.7252 0.736137 18.8906 0.705357 18.0407C0.629093 15.8733 0.641402 13.7058 0.653702 11.5398C0.657288 10.9083 0.660874 10.277 0.662264 9.64575C0.662264 8.94361 0.677654 8.24147 0.739215 7.5424C0.850026 6.27978 1.11474 5.05718 1.76729 3.9547C2.53065 2.66743 3.63876 1.78359 5.02697 1.24467C5.92885 0.893596 6.86766 0.72422 7.82802 0.662628C9.03184 0.585396 10.2371 0.594468 11.4418 0.603536C12.0145 0.607847 12.587 0.612157 13.1592 0.607196ZM13.1592 23.3375H15.3724C16.739 23.3375 18.1026 23.3314 19.4601 23.0973C20.4266 22.928 21.27 22.5245 21.9687 21.8532C22.6274 21.2188 22.9783 20.4027 23.126 19.5066C23.3169 18.3671 23.3846 17.2154 23.3938 16.0636C23.3958 15.7884 23.3979 15.5131 23.4 15.2378L23.4 15.2366C23.4148 13.3036 23.4296 11.3688 23.3785 9.43634C23.3569 8.57098 23.3169 7.71178 23.1691 6.85258C23.0029 5.88559 22.6182 5.03563 21.9625 4.32424C21.3192 3.62826 20.4851 3.26795 19.5647 3.11089C18.4166 2.91688 17.2531 2.85221 16.0926 2.84297L15.4133 2.83799C13.4513 2.82333 11.4895 2.80867 9.5302 2.85837C8.59446 2.883 7.6618 2.92304 6.7353 3.10473C5.75648 3.29875 4.91616 3.73297 4.22975 4.44743C3.65415 5.04795 3.33711 5.7932 3.19244 6.60621C3.00468 7.67174 2.9308 8.75268 2.92465 9.83361C2.92208 10.2488 2.91883 10.6641 2.91558 11.0793C2.89934 13.1554 2.88309 15.2316 2.95235 17.3077C2.96158 17.6157 2.97082 17.9206 2.98929 18.2285C3.02315 18.7952 3.14935 19.3433 3.28478 19.8884C3.59875 21.1326 4.28823 22.0842 5.4579 22.66C6.0058 22.931 6.59063 23.0696 7.19701 23.1343L7.34732 23.1507C8.17173 23.2411 8.99888 23.3317 9.82877 23.3375C10.5645 23.3396 11.3031 23.3389 12.0434 23.3382H12.0448C12.4158 23.3379 12.7874 23.3375 13.1592 23.3375ZM19.5155 13.0923C19.6017 16.3166 16.9299 19.5378 13.0916 19.5378C9.69646 19.5378 6.64917 16.8062 6.64917 13.0923C6.64917 9.58461 9.52101 6.65593 13.107 6.64361C16.8376 6.62821 19.6171 9.8125 19.5155 13.0923ZM13.0885 17.2158C15.3417 17.262 17.2716 15.3804 17.2747 13.1077C17.2778 10.7056 15.3109 8.90711 13.0947 8.90403C10.9061 8.90095 8.91463 10.7025 8.89924 13.083C8.88693 15.4943 10.9831 17.2682 13.0885 17.2158ZM18.2689 6.38472C18.2689 7.17926 19.0015 7.9122 19.7956 7.9122C20.5898 7.9122 21.3254 7.18234 21.3316 6.39396C21.3347 5.59635 20.5898 4.848 19.7956 4.85108C19.0077 4.85108 18.2689 5.59635 18.2689 6.38472Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
