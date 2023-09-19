import footLogo from "../asserts/images/logo__footer.png";
import coinMarket from "../asserts/images/coinmarket-1.svg";
import facebook from "../asserts/images/facebook-icon.svg";
import reddit from "../asserts/images/reddit-1.svg";
import linkedin from "../asserts/images/linktree-1.svg";
import discord from "../asserts/images/discord-icon.svg";
import telegram from "../asserts/images/telegram-icon.svg";
import instagram from "../asserts/images/instagram-1.svg";
import youtube from "../asserts/images/youtube-1.svg";
import twitter from "../asserts/images/twitter-icon.svg";
export default function Footer() {
  return (
    <footer className="footer dark-blue">
      <div className="footer__container">
        <div className="footer__wrap">
          <div className="footer__logo">
            <img width="252" height="277" src={footLogo} alt="" />
          </div>

          <div className="footer__content">
            <div className="right">
              <div className="social__list">
                <a
                  href="https://twitter.com/shibamemu"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCsllUSLIp-phR5JUWsn6cDg"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={youtube}
                    alt="YouTube"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://www.instagram.com/shibamemu/"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://t.me/ShibaMemu"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={telegram}
                    alt="Telegram"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://discord.gg/uar6GcWTtj"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={discord}
                    alt="Discord"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://linktr.ee/shibamemu"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Linktree"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://www.reddit.com/r/ShibaMemu/"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={reddit}
                    alt="Reddit"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100093624217395&amp;sk=about"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
                <a
                  href="https://coinmarketcap.com/community/profile/ShibaMemu/"
                  target="_blank"
                  className="social__link"
                  rel="noreferrer"
                >
                  <img
                    src={coinMarket}
                    alt="CoinMarket"
                    width="45"
                    height="45"
                    className="entered lazyloaded"
                  />
                </a>
              </div>
            </div>
            <div className="left">
              <div className="footer__address">
                <div className="email__address">
                  <svg
                    width="39"
                    height="26"
                    viewBox="0 0 39 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.3907 9.46519C36.8583 6.75404 36.8459 1.57003 33.777 0.40218C32.0251 -0.264828 29.4305 0.0996357 27.5958 0.0972843C24.5152 0.0941491 21.4362 0.250124 18.3727 0.575398C12.4361 1.20557 6.63095 2.48237 0.934164 4.27804C0.452855 4.4301 0.313569 4.88861 0.414938 5.27346C0.193629 5.31892 -0.00678799 5.4843 0.000176299 5.74844C0.16345 11.1629 0.623867 17.2859 2.34637 22.4503C3.37553 25.5369 5.08333 26.1529 8.26214 25.9719C14.3768 25.6231 20.5201 24.6567 26.6107 24.003C29.5071 23.6926 35.7571 24.3753 37.9408 21.9432C40.3512 19.2587 37.9772 12.4499 37.3914 9.46519H37.3907ZM1.00381 5.85268C1.10982 5.86914 1.22666 5.86287 1.35357 5.8229C9.32768 3.30614 17.5533 1.83025 25.9166 1.70485C27.465 1.68133 29.3129 1.47754 30.862 1.77539C29.2277 3.05219 27.5958 4.33055 25.9685 5.61676C23.9805 7.18748 20.5139 11.1127 17.9371 11.4231C15.9677 11.6606 12.0569 9.4644 10.1239 8.83893C7.10065 7.86076 4.07428 6.9061 1.02702 6.01022C1.02006 5.95693 1.01232 5.90441 1.00458 5.8519L1.00381 5.85268ZM2.83 17.1205C2.16607 13.7557 1.65768 10.3658 1.16631 6.97194C4.52774 8.28166 7.91315 9.52083 11.3094 10.7389C11.7102 10.8823 12.1768 11.0845 12.6798 11.3095C10.2462 15.4283 7.78315 19.5393 5.48726 23.7396C3.38714 22.3445 3.2997 19.4977 2.83 17.1205ZM23.274 22.7011C19.3818 23.1212 15.4895 23.5413 11.5973 23.9614C10.3089 24.1002 8.37744 24.71 7.07512 24.409C6.78262 24.3416 6.52107 24.2507 6.27268 24.1503C8.90595 20.1154 11.3829 15.9707 13.8839 11.8511C15.5468 12.5894 17.3745 13.3152 18.625 13.0863C20.4349 12.7548 22.4995 10.3924 23.8289 9.34135C23.8467 9.32724 23.8645 9.31313 23.8823 9.29902C27.4139 13.004 31.1313 16.6189 34.9462 20.037C31.885 22.6674 27.2607 22.2708 23.2733 22.7011H23.274ZM36.1773 19.2023C32.4607 15.5756 28.5483 12.0697 24.5617 8.75664C27.2685 6.61374 29.9683 4.46145 32.6565 2.29347C34.2753 3.00124 34.5554 4.16047 35.101 6.5965C35.4708 8.24795 35.8067 9.90803 36.1085 11.5736C36.3104 12.6842 36.4961 13.7972 36.6656 14.9133C37.6236 16.749 37.4487 18.1731 36.1781 19.2023H36.1773Z"
                      fill="#AFFFF5"
                    ></path>
                  </svg>
                  <a href="mailto:contact@shibamemu.com">
                    contact@shibamemu.com
                  </a>
                </div>
                <div className="location">
                  <svg
                    width="21"
                    height="39"
                    viewBox="0 0 21 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_362_12627)">
                      <path
                        d="M13.5046 12.2122C13.0463 13.7083 11.8839 15.3124 10.1347 15.1881C7.8799 15.0273 6.80012 12.5642 7.62453 10.5865C8.20981 9.18267 10.6587 8.17409 12.0964 8.91173C12.5127 9.1261 12.7577 9.65757 13.1268 10.0305C13.6951 10.6044 14.459 11.112 13.5829 11.8787C12.6153 12.7258 14.0257 14.1378 14.9881 13.2959C15.879 12.5159 16.2443 11.2832 15.8288 10.1496C15.6059 9.53996 15.2162 9.26381 14.7926 8.8172C14.3416 8.34156 14.0161 7.62997 13.4714 7.24663C12.3791 6.47623 10.3007 6.69805 9.09917 7.01961C7.69834 7.39476 6.43478 8.3036 5.83031 9.65906C4.55863 12.5129 5.82293 15.855 8.72867 16.9053C11.8617 18.0382 14.5401 15.619 15.4206 12.7451C15.7985 11.5102 13.8811 10.9825 13.5046 12.2122Z"
                        fill="#AFFFF5"
                      ></path>
                      <path
                        d="M18.2832 13.5628C16.9075 20.8671 13.7707 26.964 9.94608 33.2143C10.3993 33.0944 10.8524 32.9746 11.3056 32.8548C8.74157 31.0654 7.22634 25.8631 5.94359 23.0986C4.15232 19.2377 2.83857 15.0835 2.72491 10.7827C2.58025 5.2976 6.24546 2.02099 11.6562 2.30905C18.3659 2.66559 19.9276 8.96201 18.3983 14.5885C18.0596 15.8338 19.9763 16.366 20.3143 15.1215C21.7735 9.75251 21.1602 4.11632 15.9332 1.15978C11.7595 -1.20203 5.81664 0.23679 2.75296 3.72852C-0.853936 7.83879 0.823673 14.9257 2.36548 19.5831C3.27255 22.323 4.6018 24.8821 5.85945 27.4694C7.05216 29.9235 7.98359 32.9679 10.3026 34.5861C10.7513 34.8995 11.3971 34.6598 11.6621 34.2266C15.5908 27.8059 18.788 21.5928 20.1999 14.0965C20.4369 12.8363 18.5223 12.2967 18.2839 13.5636V13.5621L18.2832 13.5628Z"
                        fill="#AFFFF5"
                      ></path>
                      <path
                        d="M2.00502 31.9085C1.35331 33.7827 0.701605 35.657 0.0498985 37.5313C-0.176686 38.1818 0.407857 38.7639 1.0079 38.7996C7.25852 39.1718 13.5815 38.912 19.8417 38.9083C20.6499 38.9083 21.0064 38.0709 20.6993 37.4002C19.7982 35.4292 18.6925 33.8467 17.1788 32.3067C16.2776 31.3897 14.8723 32.8061 15.7735 33.7239C17.1581 35.1322 18.1648 36.6231 18.9833 38.4118C19.2697 37.9094 19.5553 37.4069 19.841 36.9045C13.5807 36.9082 7.25705 37.168 1.00716 36.7958C1.32674 37.2186 1.64558 37.6414 1.96516 38.0642C2.61687 36.1899 3.26857 34.3157 3.92028 32.4414C4.34467 31.2222 2.42571 30.6974 2.00428 31.9085H2.00502Z"
                        fill="#AFFFF5"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_362_12627">
                        <rect width="21" height="39" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p>
                    Ajeltake Road Ajeltake Island, Majuro Marshall Islands MH
                    96960
                  </p>
                </div>
              </div>
            </div>
            <div className="footer__privacy">
              <nav className="footer-nav">
                <ul id="menu-privacy-menu" className="menu-list">
                  <li
                    id="menu-item-185"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-185"
                  >
                    <a href="https://shibamemu.com/terms-conditions/">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li
                    id="menu-item-187"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-187"
                  >
                    <a
                      rel="privacy-policy"
                      href="https://shibamemu.com/privacy-policy/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li
                    id="menu-item-1840"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1840"
                  >
                    <a href="https://shibamemu.com/cookie-policy/">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <p className="footer__copyright">
            © 2023 Shiba Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
