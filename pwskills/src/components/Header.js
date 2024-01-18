function Header() {
  return(
    <>    
    <div className="px-5 md:px-20 pt-4 shadow-md ">

    <div className="flex justify-between md:justify-between pb-8">

      <div className="">
    <svg className="text-black" width="141" height="45" viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.7972 39.3569C13.1903 39.3814 8.75663 37.5908 5.44391 34.3678C3.9909 32.958 2.80034 31.2978 1.92859 29.4656H3.14925C3.9432 30.9983 4.97874 32.3913 6.21557 33.5904C9.32357 36.6064 13.4787 38.2813 17.7955 38.2582C22.1123 38.2813 26.2674 36.6064 29.3754 33.5904C30.6135 32.3916 31.6502 30.9986 32.4451 29.4656H33.6658C32.7937 31.2979 31.6028 32.9582 30.1493 34.3678C26.8369 37.5905 22.4037 39.3811 17.7972 39.3569V39.3569ZM3.14869 15.1785H1.92859C2.80054 13.3458 3.9915 11.6851 5.44504 10.2751C8.75748 7.05244 13.1907 5.26184 17.7972 5.28601C22.4041 5.26154 26.8377 7.05216 30.1505 10.2751C31.6035 11.6844 32.7943 13.3441 33.6664 15.1757H32.4463C31.6519 13.6428 30.6157 12.2497 29.3782 11.0508C26.2702 8.03483 22.1151 6.35995 17.7983 6.3831C13.4802 6.35982 9.32391 8.03558 6.21557 11.0531C4.97795 12.252 3.94165 13.6451 3.14699 15.1779L3.14869 15.1785Z" fill="currentColor">
    </path>
    <path d="M17.7996 37.1593C15.7595 37.1642 13.738 36.7682 11.8486 35.9935C10.0425 35.2552 8.39333 34.1758 6.99023 32.8135C5.60154 31.4728 4.48836 29.8702 3.71407 28.097C2.81276 26.0249 2.40911 23.7683 2.53582 21.5099C2.66254 19.2515 3.31607 17.055 4.44342 15.0983C5.68974 12.9472 7.44247 11.1377 9.54719 9.82926V9.96952C9.8721 10.0178 10.179 10.0757 10.4593 10.1399C10.7247 10.1972 10.9668 10.3335 11.1542 10.5311C11.2412 10.6322 11.3005 10.7543 11.3263 10.8855C11.371 11.0646 11.4012 11.2471 11.4165 11.4312C11.434 11.6299 11.4464 11.844 11.4532 12.0672C11.46 12.2903 11.4617 12.5135 11.4617 12.7304V17.33C11.4617 17.6917 11.4588 18.05 11.4532 18.3941L11.4504 18.5514C11.4453 18.8353 11.4402 19.1034 11.4346 19.3464C11.4289 19.6354 11.4261 19.8677 11.4261 20.0375C11.4261 20.2266 11.4199 20.4282 11.4075 20.6371C11.3951 20.8461 11.381 21.038 11.3624 21.2192C11.3473 21.3843 11.3201 21.5481 11.2812 21.7092C11.2573 21.8277 11.208 21.9396 11.1368 22.0369C10.9649 22.2405 10.7398 22.3916 10.4869 22.473C10.2049 22.5712 9.91476 22.6442 9.61995 22.691V22.8728H13.5239C13.6069 22.8916 13.6878 22.9188 13.7654 22.954C13.914 23.0218 14.0531 23.1092 14.1788 23.214C14.2834 23.3008 14.3738 23.4035 14.4468 23.5184C14.515 23.632 14.5596 23.7143 14.5934 23.7785C14.6679 23.929 14.7299 24.0624 14.7824 24.176C14.8348 24.2895 14.8918 24.4287 14.9465 24.5735C15.0012 24.7183 15.0593 24.8773 15.1186 25.0277C15.1778 25.1782 15.2421 25.3497 15.334 25.6007C15.6097 26.3298 15.8855 27.0616 16.1615 27.796L16.2326 27.9857C16.4876 28.6656 16.7482 29.3619 17.0144 30.0748C17.2186 30.6195 17.4285 31.1798 17.6439 31.7556L17.926 32.5131C18.2757 33.4467 18.6029 34.3206 18.9346 35.1854H19.1416L19.8997 33.4853C20.0779 32.9901 20.2697 32.4524 20.5032 31.7931C20.6916 31.261 20.8947 30.679 21.1237 30.0146C21.3206 29.4422 21.5299 28.8431 21.7442 28.2355C21.9659 27.6109 22.1577 27.0629 22.3303 26.5615C22.5779 27.2264 22.8154 27.8891 23.0371 28.5302C23.2588 29.1713 23.4883 29.8363 23.7523 30.587C23.9977 31.2883 24.26 32.0299 24.5279 32.7908C24.7908 33.5347 25.0841 34.3405 25.3983 35.1854H25.4186C23.0862 36.4829 20.4644 37.1621 17.7996 37.1593V37.1593ZM25.6228 35.0701L26.2957 33.5216C26.5152 32.8595 26.7532 32.1559 27.0025 31.4302C27.2519 30.7045 27.5063 29.9612 27.7522 29.2349C27.9931 28.5246 28.2396 27.8091 28.4855 27.1095C28.7314 26.4099 28.9435 25.7813 29.1235 25.2265C29.2363 24.8932 29.3491 24.6104 29.4512 24.3849C29.5367 24.1933 29.6347 24.0076 29.7445 23.829C29.817 23.7101 29.8975 23.5962 29.9854 23.4883C30.0621 23.398 30.1089 23.3463 30.1411 23.3145C30.2476 23.2131 30.3664 23.1258 30.4947 23.0545C30.7182 22.9196 30.9687 22.8366 31.228 22.8114V22.6382H27.4352V22.8114C27.5918 22.826 27.7472 22.8522 27.9 22.8898C28.0671 22.9283 28.2292 22.9865 28.3828 23.063C28.5243 23.1326 28.6526 23.2266 28.7619 23.3407C28.8674 23.4563 28.9233 23.6091 28.9176 23.766C28.9176 23.8835 28.9057 24.0641 28.8826 24.3037C28.8251 24.6988 28.7328 25.088 28.6068 25.4667C28.4799 25.8852 28.3377 26.3378 28.1848 26.8119L27.9976 27.3917L27.7195 28.252C27.5762 28.696 27.4239 29.1605 27.2541 29.6665C27.0945 30.1435 26.9535 30.5546 26.8237 30.9243C26.694 31.2939 26.5834 31.6154 26.496 31.8788C26.4086 32.1423 26.3493 32.3104 26.3155 32.3899C26.2403 32.1874 26.1248 31.8701 25.9691 31.4382L25.9274 31.3246C25.7373 30.7982 25.5371 30.2377 25.3323 29.6591C25.118 29.0509 24.8861 28.3996 24.643 27.7239C24.3999 27.0481 24.1827 26.4292 23.9881 25.8585C23.7969 25.298 23.6344 24.8074 23.5053 24.4008C23.4218 24.1725 23.3582 23.9373 23.3152 23.6978C23.3148 23.6137 23.3341 23.5306 23.3716 23.4553C23.409 23.3801 23.4635 23.3147 23.5306 23.2646C23.6754 23.1483 23.8386 23.0574 24.0135 22.996C24.1864 22.9335 24.3655 22.8899 24.5477 22.8659C24.74 22.8404 24.8545 22.8239 24.9183 22.8137V22.6405H19.5223V22.8307C19.7619 22.8369 19.9995 22.8751 20.2291 22.9443C20.4047 22.9984 20.5706 23.0805 20.7204 23.1873C20.8386 23.2721 20.943 23.3748 21.0301 23.4917C21.0985 23.5848 21.1592 23.6834 21.2117 23.7864C21.3697 24.1169 21.5208 24.4639 21.663 24.8188C21.7984 25.1646 21.9501 25.5649 22.1278 26.0425C21.8762 26.8375 21.6201 27.6103 21.3697 28.3423C21.1209 29.0651 20.8885 29.7312 20.6798 30.3207C20.4711 30.9101 20.3007 31.3911 20.1625 31.7783C20.0368 32.1315 19.9426 32.3939 19.9042 32.4989C19.7778 32.1525 19.6148 31.7181 19.4044 31.1713C19.1867 30.6034 18.9481 29.9788 18.7411 29.4359C18.5064 28.8198 18.2689 28.1867 18.0343 27.553C17.7697 26.8375 17.5638 26.2776 17.3879 25.7926C17.1955 25.2645 17.0364 24.8034 16.9135 24.4218C16.826 24.1895 16.765 23.948 16.7318 23.7018C16.7231 23.5302 16.7821 23.362 16.896 23.2339C17.0042 23.1189 17.1366 23.0297 17.2835 22.9727C17.4227 22.9182 17.5668 22.8775 17.7139 22.8512C17.8107 22.8327 17.9087 22.8211 18.0072 22.8165V22.6433H14.8777C14.6554 22.6076 14.4406 22.5348 14.242 22.4281C14.0201 22.3183 13.8279 22.156 13.6819 21.9551C13.554 21.7474 13.4854 21.5084 13.4833 21.264C13.4709 20.9852 13.4591 20.6491 13.4466 20.2641C13.4466 20.0591 13.4438 19.8666 13.4382 19.6917C13.4325 19.5168 13.4292 19.3328 13.4292 19.1187V17.4061H14.4045C14.779 17.4061 15.1648 17.3907 15.5512 17.3601C15.9376 17.3294 16.3319 17.2846 16.716 17.2244C17.0847 17.1674 17.4473 17.076 17.7991 16.9512C18.1346 16.825 18.456 16.6636 18.758 16.4697C19.0664 16.2736 19.3433 16.0314 19.5793 15.7514C19.8197 15.4627 20.0119 15.1367 20.1484 14.786C20.2969 14.3974 20.3704 13.9838 20.365 13.5674C20.3806 12.899 20.1984 12.241 19.8416 11.677C19.5104 11.1616 19.0575 10.7369 18.5233 10.4408C17.9868 10.1404 17.398 9.94632 16.7888 9.86901C16.0876 9.78506 15.3819 9.74543 14.6758 9.75033H13.8629C13.5775 9.75033 13.2492 9.75317 12.8606 9.75942C12.5221 9.76566 12.1589 9.7685 11.7888 9.7685C11.4289 9.7685 11.0916 9.77134 10.7865 9.77702C10.492 9.78327 10.2224 9.78611 9.98322 9.78611H9.61657C11.7221 8.50225 14.0962 7.73103 16.5501 7.53386C19.0039 7.33669 21.4695 7.71903 23.7506 8.65041C25.5568 9.38865 27.2059 10.4681 28.609 11.8304C29.9975 13.1711 31.1105 14.7737 31.8846 16.5469C32.8025 18.657 33.2041 20.958 33.0556 23.2567C32.9071 25.5554 32.2128 27.7847 31.0312 29.7573C29.7059 31.9601 27.8467 33.7879 25.6279 35.0696L25.6228 35.0701ZM13.4303 17.1517V14.8235C13.4303 14.2227 13.4337 13.6231 13.4393 13.0422C13.445 12.451 13.454 11.9309 13.4664 11.4965C13.4777 11.2239 13.4895 11.007 13.5019 10.8514C13.5143 10.6958 13.5262 10.5805 13.5386 10.4965C13.5477 10.4258 13.5628 10.3561 13.5837 10.2881C13.6023 10.2252 13.6163 10.1611 13.6255 10.0962C13.7097 10.084 13.821 10.0689 13.9594 10.0507C14.1544 10.0293 14.3505 10.0202 14.5466 10.0235C14.8858 10.0228 15.2246 10.0471 15.5602 10.0962C16.0328 10.1627 16.4852 10.3321 16.886 10.5927C17.2868 10.8533 17.6263 11.1987 17.8809 11.6049C18.2386 12.1628 18.4239 12.8149 18.4133 13.4788C18.421 14.2132 18.207 14.9326 17.7996 15.5418C17.3717 16.167 16.7491 16.6309 16.0301 16.8604C15.6395 16.9968 15.2323 17.0793 14.8196 17.1057C14.392 17.1375 13.9244 17.1517 13.4303 17.1517Z" fill="currentColor">
    </path>
    <path d="M40.6205 32.5319C40.2064 32.022 39.9996 31.5639 40 31.1575C40.0004 30.7511 40.3425 30.2133 41.0262 29.544C41.4241 29.1614 41.8457 28.97 42.2912 28.97C42.7367 28.97 43.3573 29.3685 44.1529 30.1654C44.3756 30.4365 44.6939 30.6954 45.108 30.9421C45.5221 31.1888 45.904 31.3123 46.2538 31.3125C47.7334 31.3125 48.4733 30.7071 48.4735 29.4961C48.4735 29.1298 48.2706 28.8231 47.8649 28.5759C47.4592 28.3287 46.9542 28.1494 46.3499 28.0379C44.9816 27.7681 43.6619 27.2926 42.4354 26.6276C41.8303 26.2927 41.3254 25.7627 40.9205 25.0378C40.5156 24.3128 40.3128 23.4404 40.3119 22.4205C40.3119 21.0183 40.833 19.7952 41.8752 18.7511C42.9175 17.7071 44.3377 17.1852 46.1359 17.1854C47.0905 17.1854 47.9616 17.3089 48.7492 17.5558C49.5367 17.8028 50.0818 18.0538 50.3843 18.3088L50.9808 18.763C51.4739 19.2248 51.7206 19.6152 51.7208 19.9343C51.721 20.2533 51.5295 20.6913 51.1464 21.2483C50.6052 22.0454 50.0483 22.4439 49.4757 22.4436C49.1413 22.4436 48.7275 22.2843 48.2344 21.9657C48.1378 21.8922 48.0461 21.8123 47.9601 21.7266C47.8436 21.615 47.7199 21.5113 47.5899 21.4159C47.256 21.2087 46.8303 21.1052 46.3131 21.1052C45.7958 21.1052 45.3662 21.2286 45.0244 21.4756C44.6819 21.7229 44.5107 22.0655 44.5109 22.5033C44.5111 22.9411 44.714 23.2957 45.1195 23.567C45.5253 23.8382 46.0303 24.0214 46.6345 24.1169C47.3028 24.2266 47.9643 24.3743 48.6158 24.5592C49.2956 24.7453 49.9583 24.9892 50.5968 25.2881C51.2014 25.5751 51.7064 26.0731 52.1117 26.7823C52.517 27.4914 52.7199 28.3639 52.7203 29.3998C52.7203 30.4359 52.5135 31.3485 52.0998 32.1374C51.6862 32.9264 51.1452 33.5359 50.4769 33.966C49.1887 34.8109 47.8128 35.2333 46.349 35.2333C45.6318 35.2372 44.9173 35.1448 44.2247 34.9585C43.5566 34.7756 43.0155 34.5484 42.6014 34.2771C41.7581 33.7674 41.1694 33.2734 40.8352 32.7951L40.6205 32.5319Z" fill="currentColor">
    </path>
    <path d="M62.9611 26.1975C65.3956 28.5399 67.122 30.3008 68.1403 31.4801C68.6652 32.0698 68.9278 32.5679 68.928 32.9742C68.9283 33.3806 68.6099 33.8586 67.973 34.4083C67.3362 34.9581 66.8151 35.2329 66.4096 35.2329C66.0041 35.2329 65.5148 34.8983 64.9417 34.2289L59.6905 28.2292V32.8914C59.6905 33.2736 59.6786 33.5525 59.6549 33.7282C59.6312 33.9039 59.5555 34.1111 59.428 34.3496C59.2051 34.7797 58.5847 34.9949 57.5666 34.9951C56.4523 34.9951 55.7999 34.6923 55.6093 34.0868C55.5138 33.8317 55.4661 33.4249 55.4661 32.8664V19.5741C55.4661 19.208 55.478 18.9331 55.502 18.7495C55.5259 18.5659 55.6014 18.3548 55.7285 18.1162C55.9512 17.6859 56.5718 17.4707 57.5903 17.4707C58.7037 17.4707 59.364 17.7655 59.5713 18.355C59.651 18.6261 59.6907 19.0405 59.6905 19.5982V24.1654C61.8547 21.7272 63.6051 19.7272 64.9417 18.1654C65.4983 17.5123 65.9837 17.1856 66.3978 17.1854C66.8118 17.1852 67.3369 17.4601 67.973 18.01C68.6097 18.5597 68.928 19.0379 68.928 19.4445C68.928 19.851 68.6894 20.333 68.2121 20.8904C67.2899 21.9584 65.8577 23.4246 63.9155 25.2888L62.9611 26.1975Z" fill="currentColor">
    </path>
    <path d="M71.9111 19.5756C71.9111 19.2095 71.9231 18.9347 71.947 18.7511C71.971 18.5674 72.0465 18.3564 72.1736 18.1178C72.3965 17.6875 73.017 17.4723 74.0354 17.4723C75.1492 17.4723 75.8096 17.7671 76.0166 18.3566C76.0959 18.6277 76.1356 19.0421 76.1359 19.5997V32.8913C76.1359 33.2735 76.1239 33.5524 76.1 33.7281C76.076 33.9038 76.0005 34.111 75.8734 34.3495C75.6505 34.7796 75.03 34.9948 74.0116 34.995C72.8978 34.995 72.2454 34.6922 72.0544 34.0867C71.9589 33.8316 71.9111 33.4248 71.9111 32.8663V19.5756Z" fill="currentColor">
    </path>
    <path d="M83.4629 31.4563H89.9551C90.4801 31.4563 90.862 31.516 91.1009 31.6354C91.2151 31.6903 91.3166 31.7685 91.3988 31.8651C91.481 31.9617 91.542 32.0744 91.5781 32.1961C91.6576 32.4514 91.6973 32.79 91.6973 33.212C91.6973 33.6339 91.6576 33.9726 91.5781 34.2279C91.4984 34.4832 91.3631 34.6591 91.1723 34.7556C90.87 34.915 90.4562 34.9947 89.9311 34.9947H81.3387C80.2248 34.9947 79.5725 34.6919 79.3817 34.0864C79.286 33.8313 79.2382 33.4245 79.2382 32.866V19.5737C79.2339 19.2984 79.2459 19.023 79.2741 18.7491C79.2981 18.566 79.3729 18.3533 79.501 18.1158C79.7236 17.6855 80.3442 17.4703 81.3627 17.4703C82.4761 17.4703 83.1364 17.7651 83.3437 18.3546C83.4231 18.6271 83.4629 19.0419 83.4629 19.5991V31.4563Z" fill="currentColor">
    </path>
    <path d="M98.6669 31.4563H105.159C105.684 31.4563 106.066 31.516 106.305 31.6354C106.419 31.6903 106.52 31.7685 106.603 31.8651C106.685 31.9617 106.746 32.0744 106.782 32.1961C106.861 32.4514 106.901 32.79 106.901 33.212C106.902 33.6339 106.862 33.9726 106.782 34.2279C106.702 34.4832 106.567 34.6591 106.376 34.7556C106.074 34.915 105.66 34.9947 105.135 34.9947H96.5426C95.4288 34.9947 94.7764 34.6919 94.5854 34.0864C94.4899 33.8313 94.4421 33.4245 94.4421 32.866V19.5737C94.4421 19.2076 94.4541 18.9327 94.478 18.7491C94.502 18.5655 94.5775 18.3544 94.7046 18.1158C94.9273 17.6855 95.5478 17.4703 96.5664 17.4703C97.68 17.4703 98.3404 17.7651 98.5477 18.3546C98.6269 18.6257 98.6666 19.0401 98.6669 19.5978V31.4563Z" fill="currentColor">
    </path>
    <path d="M109.909 32.5319C109.495 32.022 109.288 31.5639 109.288 31.1575C109.288 30.7511 109.631 30.2133 110.314 29.544C110.712 29.1614 111.134 28.97 111.579 28.97C112.025 28.97 112.646 29.3685 113.441 30.1654C113.664 30.4365 113.982 30.6954 114.396 30.9421C114.81 31.1888 115.192 31.3123 115.54 31.3125C117.02 31.3125 117.76 30.7071 117.76 29.4961C117.76 29.1298 117.557 28.8231 117.151 28.5759C116.746 28.3287 116.241 28.1494 115.637 28.0379C114.268 27.7681 112.948 27.2926 111.722 26.6276C111.117 26.2927 110.612 25.7627 110.207 25.0378C109.802 24.3128 109.599 23.4404 109.598 22.4205C109.598 21.0183 110.12 19.7952 111.162 18.7511C112.204 17.7071 113.624 17.1852 115.422 17.1854C116.377 17.1854 117.248 17.3089 118.036 17.5558C118.824 17.8028 119.368 18.0538 119.671 18.3088L120.267 18.763C120.76 19.2248 121.007 19.6152 121.007 19.9343C121.008 20.2533 120.817 20.6913 120.434 21.2483C119.893 22.0454 119.336 22.4439 118.763 22.4436C118.429 22.4436 118.016 22.2843 117.522 21.9657C117.426 21.8922 117.334 21.8123 117.248 21.7266C117.131 21.6151 117.008 21.5113 116.878 21.4159C116.544 21.2087 116.118 21.1052 115.601 21.1052C115.084 21.1052 114.654 21.2286 114.312 21.4756C113.97 21.7229 113.799 22.0655 113.799 22.5033C113.799 22.9411 114.002 23.2957 114.407 23.567C114.813 23.8382 115.318 24.0214 115.922 24.1169C116.591 24.2266 117.252 24.3743 117.903 24.5592C118.583 24.7453 119.246 24.9891 119.885 25.2881C120.489 25.5751 120.994 26.0731 121.4 26.7823C121.805 27.4914 122.008 28.3639 122.008 29.3998C122.008 30.4359 121.801 31.3485 121.387 32.1374C120.974 32.9264 120.433 33.5359 119.764 33.966C118.477 34.8109 117.101 35.2333 115.637 35.2333C114.92 35.2372 114.205 35.1448 113.512 34.9585C112.844 34.7753 112.303 34.5481 111.889 34.2767C111.046 33.767 110.457 33.2731 110.123 32.7948L109.909 32.5319Z" fill="currentColor">
      </path>
      <path d="M62.1756 14.645C63.7964 14.645 65.1103 13.3291 65.1103 11.7059C65.1103 10.0826 63.7964 8.76672 62.1756 8.76672C60.5548 8.76672 59.2408 10.0826 59.2408 11.7059C59.2408 13.3291 60.5548 14.645 62.1756 14.645Z" fill="#F7871D">
        </path>
        <path d="M73.8586 14.645C75.4794 14.645 76.7933 13.3291 76.7933 11.7059C76.7933 10.0826 75.4794 8.76672 73.8586 8.76672C72.2378 8.76672 70.9238 10.0826 70.9238 11.7059C70.9238 13.3291 72.2378 14.645 73.8586 14.645Z" fill="#8DC63F"></path>
        </svg>
        </div>

        <div className="md:hidden flex justify-end pt-5 mr-4 absolute right-5">
          <div className="mr-2">
          <svg class="w-6 h-6 text-gray-650 text-slate-300" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z" fill="currentColor"></path></svg>
          </div>
          <div>
            <button id="menu-toggle" className="flex flex-col h-6 w-6 justify-around items-center border-1 rounded ">
            <span class="block w-6 h-0.5 bg-black"></span>
            <span class="block w-6 h-0.5 bg-black"></span>
            <span class="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
          </div>


        <div className="border border-slate-200 border-1 flex justify-start inline  p-3 w-3/4 hidden md:inline-flex">
          <div>
          <svg class="w-6 h-6 text-gray-650 text-slate-300" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z" fill="currentColor"></path></svg>
          </div>
          <div>
        <input placeholder="Search by product title" className="hidden md:inline-block"/>
        </div>
        </div>
        
        <div>
          <button className="bg-red-400 py-3 px-6 rounded-md text-white ml-5 hidden md:inline-block">Login/Register</button>
        </div>
        </div>
        
    <div>
    <nav>
      <ul className="flex justify-between py-7 hidden">
        <li>Courses</li>
        <li>PW Skills Lab</li>
        <li>Job Portal</li>
        <li>Experience Portal</li>
        <li>Become an affiliate</li>
        <li>Hall Of fame</li>
      </ul>
    </nav>
    </div>
    </div>
    </>
  );
};

export default Header;