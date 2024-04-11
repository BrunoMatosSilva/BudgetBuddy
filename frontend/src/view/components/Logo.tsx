interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps){
  return (
    <svg
    viewBox="0 0 174 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    >
<path fillRule="evenodd" clipRule="evenodd" d="M24.5833 10.1143H12.5149C9.59615 10.1143 7.76562 12.1812 7.76562 15.1071V23.0014C7.76562 25.9274 9.58605 27.9942 12.5149 27.9942H24.5819C27.5121 27.9942 29.334 25.9274 29.334 23.0014V15.1071C29.334 12.1812 27.5121 10.1143 24.5833 10.1143Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.4961 16.0645H24.5963" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.1134 10.1119L21.999 6.58774C20.4841 4.09277 17.8637 3.25101 15.3486 4.76731L5.01695 10.9853C2.51187 12.4901 2.00741 15.2042 3.51218 17.7194L7.59409 24.4735C7.78435 24.8007 7.9948 25.0947 8.2355 25.3585V25.3686" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M52.6894 19.7403C52.6894 20.8942 52.4603 21.8274 52.0021 22.5401C51.561 23.2358 50.9586 23.7364 50.195 24.0418C49.4484 24.3473 48.6169 24.5 47.7006 24.5H42.5845C42.4148 24.5 42.33 24.4236 42.33 24.2709V7.59921C42.33 7.44649 42.4148 7.37013 42.5845 7.37013H46.4279C47.2424 7.37013 47.9975 7.41255 48.6932 7.4974C49.4059 7.56527 50.0253 7.73496 50.5513 8.00646C51.0943 8.26099 51.51 8.67672 51.7985 9.25365C52.087 9.81362 52.2312 10.5857 52.2312 11.5699C52.2312 12.0959 52.1633 12.6219 52.0276 13.148C51.8918 13.657 51.6797 14.1152 51.3913 14.5224C51.1198 14.9127 50.7804 15.2097 50.3731 15.4133C50.2883 15.4472 50.2459 15.5066 50.2459 15.5914C50.2628 15.6593 50.3138 15.7102 50.3986 15.7442C51.0434 16.0157 51.5864 16.5162 52.0276 17.2459C52.4688 17.9755 52.6894 18.807 52.6894 19.7403ZM50.2459 19.6894C50.2459 18.824 50.1101 18.1707 49.8386 17.7295C49.5671 17.2883 49.1769 16.9914 48.6678 16.8386C48.1587 16.6859 47.5479 16.6096 46.8352 16.6096H44.8244C44.7226 16.6096 44.6717 16.6605 44.6717 16.7623V22.6674C44.6717 22.7183 44.6802 22.7607 44.6971 22.7946C44.7141 22.8116 44.7565 22.8201 44.8244 22.8201H47.3697C47.6582 22.8201 47.9636 22.7862 48.286 22.7183C48.6254 22.6504 48.9393 22.5147 49.2278 22.311C49.5332 22.0904 49.7792 21.7765 49.9659 21.3693C50.1526 20.9451 50.2459 20.3851 50.2459 19.6894ZM49.8132 11.6462C49.8132 10.8657 49.6605 10.2887 49.355 9.91543C49.0496 9.54212 48.6254 9.30456 48.0824 9.20275C47.5563 9.10093 46.92 9.05003 46.1734 9.05003H44.8244C44.7226 9.05003 44.6717 9.10942 44.6717 9.2282V14.6242C44.6717 14.726 44.7226 14.777 44.8244 14.777H47.0897C47.7175 14.777 48.2266 14.6582 48.6169 14.4206C49.0241 14.1661 49.3211 13.8097 49.5077 13.3516C49.7114 12.8765 49.8132 12.308 49.8132 11.6462ZM60.1813 24.6018C58.8577 24.6018 57.8311 24.3473 57.1015 23.8382C56.3888 23.3292 55.8882 22.6419 55.5998 21.7765C55.3283 20.8942 55.1925 19.9354 55.1925 18.9003C55.1925 18.1537 55.201 17.4071 55.218 16.6605C55.2519 15.9139 55.2943 15.2097 55.3452 14.5479C55.3961 13.8861 55.4386 13.3346 55.4725 12.8934C55.4895 12.6898 55.5234 12.571 55.5743 12.5371C55.6422 12.5032 55.761 12.4862 55.9306 12.4862H57.3306C57.5002 12.4862 57.619 12.4947 57.6869 12.5116C57.7548 12.5286 57.7717 12.6389 57.7378 12.8425C57.7378 12.9443 57.7208 13.2074 57.6869 13.6316C57.6699 14.0558 57.6445 14.5733 57.6105 15.1842C57.5766 15.7951 57.5512 16.4399 57.5342 17.1186C57.5172 17.7804 57.5087 18.4082 57.5087 19.0022C57.5087 20.2069 57.7124 21.1402 58.1196 21.802C58.5438 22.4468 59.2395 22.7692 60.2067 22.7692C60.3255 22.7692 60.5037 22.7607 60.7413 22.7437C60.9788 22.7268 61.2249 22.6928 61.4794 22.6419C61.7339 22.591 61.946 22.5147 62.1157 22.4129C62.2854 22.311 62.3703 22.1753 62.3703 22.0056V12.7916C62.3703 12.7237 62.3787 12.6559 62.3957 12.588C62.4127 12.5201 62.4551 12.4862 62.523 12.4862H64.3556C64.4065 12.4862 64.4574 12.5032 64.5083 12.5371C64.5762 12.5541 64.6101 12.6134 64.6101 12.7153V23.2528C64.6101 23.4564 64.5507 23.6091 64.4319 23.711C64.3301 23.7958 64.1095 23.8976 63.7702 24.0164C63.6005 24.0673 63.312 24.1437 62.9048 24.2455C62.4975 24.3303 62.0479 24.4152 61.5558 24.5C61.0637 24.5679 60.6055 24.6018 60.1813 24.6018ZM67.2419 18.6458C67.2589 17.3562 67.4201 16.3126 67.7255 15.5151C68.031 14.7006 68.4297 14.0728 68.9218 13.6316C69.4139 13.1734 69.9569 12.8595 70.5508 12.6898C71.1447 12.5201 71.7301 12.4353 72.3071 12.4353C72.7143 12.4353 73.1131 12.4692 73.5034 12.5371C73.8936 12.588 74.2076 12.6474 74.4451 12.7153C74.6148 12.7492 74.7336 12.7662 74.8015 12.7662C74.8863 12.7492 74.9287 12.6644 74.9287 12.5116C74.9287 12.2232 74.9202 11.8753 74.9033 11.4681C74.9033 11.0608 74.8863 10.6451 74.8524 10.2209C74.8354 9.77968 74.8099 9.35547 74.776 8.94822C74.759 8.524 74.7421 8.15069 74.7251 7.82828C74.7081 7.50588 74.6912 7.2768 74.6742 7.14105C74.6403 6.9544 74.6487 6.8441 74.6996 6.81016C74.7506 6.75926 74.8269 6.73381 74.9287 6.73381H76.6341C76.702 6.73381 76.7613 6.75077 76.8122 6.78471C76.8801 6.80168 76.9141 6.85259 76.9141 6.93743C76.9819 7.71799 77.0328 8.58339 77.0668 9.53364C77.1177 10.4669 77.1516 11.4426 77.1686 12.4607C77.2025 13.4619 77.2195 14.48 77.2195 15.5151C77.2365 16.5332 77.228 17.5259 77.194 18.4931C77.1771 19.4433 77.1431 20.3342 77.0922 21.1657C77.0583 21.9971 76.9989 22.7353 76.9141 23.3801C76.8801 23.5158 76.8207 23.6346 76.7359 23.7364C76.668 23.8382 76.4898 23.94 76.2014 24.0418C75.8111 24.2115 75.2681 24.3643 74.5724 24.5C73.8936 24.6357 73.164 24.7036 72.3834 24.7036C71.6877 24.7036 71.0429 24.6188 70.449 24.4491C69.8551 24.2794 69.346 24.0079 68.9218 23.6346C68.3619 23.1595 67.9376 22.5062 67.6492 21.6747C67.3607 20.8433 67.225 19.8336 67.2419 18.6458ZM69.5327 18.6713C69.5327 19.8082 69.66 20.6736 69.9145 21.2675C70.186 21.8444 70.5423 22.2347 70.9835 22.4383C71.272 22.6589 71.6283 22.8031 72.0525 22.871C72.4768 22.9219 72.901 22.9219 73.3252 22.871C73.7664 22.8031 74.1482 22.7013 74.4706 22.5656C74.5384 22.5147 74.5978 22.4638 74.6487 22.4129C74.6996 22.3619 74.7251 22.2941 74.7251 22.2092C74.759 21.802 74.7845 21.3438 74.8015 20.8348C74.8354 20.3087 74.8524 19.7742 74.8524 19.2312C74.8693 18.6713 74.8863 18.1367 74.9033 17.6277C74.9202 17.1017 74.9287 16.6265 74.9287 16.2023C74.9287 15.7611 74.9287 15.4133 74.9287 15.1587C74.9287 15.006 74.8948 14.9042 74.8269 14.8533C74.776 14.7854 74.7081 14.743 74.6233 14.726C74.2839 14.6242 73.9106 14.5394 73.5034 14.4715C73.0961 14.4036 72.7398 14.3697 72.4343 14.3697C72.1459 14.3697 71.8319 14.4206 71.4926 14.5224C71.1532 14.6242 70.8308 14.8194 70.5254 15.1078C70.2369 15.3963 69.9993 15.829 69.8127 16.4059C69.643 16.9659 69.5497 17.721 69.5327 18.6713ZM79.6423 18.3404C79.6423 17.2035 79.795 16.1854 80.1005 15.286C80.4059 14.3697 80.9489 13.6485 81.7294 13.1225C82.51 12.5965 83.596 12.3335 84.9874 12.3335C85.6492 12.3335 86.3025 12.3844 86.9473 12.4862C87.5921 12.588 88.1606 12.7407 88.6527 12.9443C88.9751 13.0461 89.1787 13.1904 89.2635 13.377C89.3484 13.5467 89.4078 13.8182 89.4417 14.1915C89.5944 15.4812 89.6793 16.9574 89.6962 18.6204C89.7132 20.2663 89.6199 21.9547 89.4163 23.6855C89.2296 25.1448 88.6951 26.2138 87.8127 26.8926C86.9473 27.5713 85.751 27.9107 84.2238 27.9107C83.613 27.9107 82.9512 27.8259 82.2385 27.6562C81.5258 27.4865 80.8725 27.181 80.2786 26.7399C80.1938 26.672 80.1344 26.5956 80.1005 26.5108C80.0665 26.4259 80.075 26.3411 80.1259 26.2563C80.1768 26.1544 80.2532 26.0102 80.355 25.8236C80.4738 25.6369 80.5671 25.4927 80.635 25.3909C80.7028 25.2551 80.7707 25.1787 80.8386 25.1618C80.9065 25.1618 80.9913 25.1957 81.0931 25.2636C81.3307 25.4163 81.6192 25.5605 81.9585 25.6963C82.3149 25.849 82.6797 25.9678 83.053 26.0526C83.4433 26.1544 83.7996 26.2054 84.122 26.2054C84.5462 26.2054 84.962 26.1375 85.3692 26.0017C85.7765 25.866 86.1328 25.6284 86.4383 25.289C86.7607 24.9666 86.9643 24.517 87.0491 23.94C87.0491 23.9061 87.0491 23.8806 87.0491 23.8637C87.0661 23.8297 87.0746 23.8043 87.0746 23.7873C87.0915 23.6685 87.0661 23.5922 86.9982 23.5582C86.9303 23.5073 86.82 23.4988 86.6673 23.5328C86.3958 23.6007 86.0734 23.6685 85.7001 23.7364C85.3438 23.7873 84.9789 23.8128 84.6056 23.8128C83.6045 23.8128 82.7221 23.6007 81.9585 23.1764C81.2119 22.7522 80.635 22.1329 80.2277 21.3184C79.8205 20.5039 79.6253 19.5112 79.6423 18.3404ZM81.984 18.0349C81.984 18.8155 82.0688 19.5112 82.2385 20.1221C82.4082 20.733 82.7051 21.2166 83.1294 21.5729C83.5536 21.9123 84.1305 22.082 84.8602 22.082C85.1995 22.082 85.5304 22.065 85.8528 22.0311C86.1752 21.9802 86.4722 21.9038 86.7437 21.802C87.0831 21.6662 87.2697 21.4541 87.3037 21.1657C87.3376 20.7414 87.3546 20.2409 87.3546 19.6639C87.3546 19.07 87.3461 18.4761 87.3291 17.8822C87.3291 17.2713 87.3121 16.7114 87.2782 16.2023C87.2612 15.6763 87.2358 15.2521 87.2018 14.9297C87.2018 14.8279 87.1764 14.7006 87.1255 14.5479C87.0746 14.3952 86.9728 14.2849 86.82 14.217C86.6334 14.1152 86.3704 14.0388 86.031 13.9879C85.6916 13.937 85.3183 13.9116 84.9111 13.9116C84.1814 13.9116 83.6045 14.0897 83.1803 14.4461C82.7561 14.7854 82.4506 15.269 82.264 15.8969C82.0773 16.5078 81.984 17.2204 81.984 18.0349ZM91.9711 18.4676C91.9711 17.6701 92.0475 16.9065 92.2002 16.1769C92.3699 15.4472 92.6414 14.7939 93.0147 14.217C93.4049 13.6231 93.931 13.1649 94.5928 12.8425C95.2545 12.5032 96.103 12.3335 97.1381 12.3335C98.2071 12.3335 99.0555 12.4862 99.6834 12.7916C100.328 13.0971 100.812 13.5043 101.134 14.0134C101.474 14.5224 101.694 15.0824 101.796 15.6933C101.898 16.3041 101.949 16.915 101.949 17.5259C101.949 18.1877 101.881 18.6119 101.745 18.7985C101.609 18.9682 101.406 19.0531 101.134 19.0531H94.4909C94.4231 19.0531 94.3637 19.07 94.3128 19.104C94.2619 19.1379 94.2364 19.2312 94.2364 19.3839C94.2534 20.0797 94.3806 20.699 94.6182 21.242C94.8727 21.785 95.2461 22.2177 95.7381 22.5401C96.2472 22.8456 96.875 22.9983 97.6217 22.9983C98.1986 22.9983 98.7755 22.9219 99.3525 22.7692C99.9294 22.5995 100.388 22.4213 100.727 22.2347C100.897 22.1498 101.024 22.0989 101.109 22.082C101.211 22.065 101.304 22.1498 101.389 22.3365L101.796 23.1001C101.864 23.2189 101.881 23.3122 101.847 23.3801C101.813 23.431 101.728 23.4988 101.592 23.5837C101.032 23.94 100.354 24.2115 99.5561 24.3982C98.7755 24.5679 97.978 24.6527 97.1635 24.6527C96.0945 24.6527 95.2206 24.5 94.5419 24.1946C93.8801 23.8722 93.354 23.431 92.9638 22.871C92.5905 22.2941 92.3274 21.6323 92.1747 20.8857C92.039 20.1391 91.9711 19.333 91.9711 18.4676ZM99.6579 17.1695C99.6579 16.5926 99.5815 16.0751 99.4288 15.6169C99.2931 15.1587 99.0385 14.7939 98.6652 14.5224C98.3089 14.234 97.7829 14.0897 97.0872 14.0897C96.5781 14.0897 96.1454 14.1915 95.789 14.3952C95.4327 14.5818 95.1442 14.8279 94.9236 15.1333C94.72 15.4387 94.5673 15.7781 94.4655 16.1514C94.3637 16.5078 94.2958 16.8556 94.2619 17.195C94.2449 17.3986 94.2449 17.5344 94.2619 17.6022C94.2958 17.6531 94.3806 17.6786 94.5164 17.6786H99.2761C99.4288 17.6786 99.5306 17.6531 99.5815 17.6022C99.6494 17.5513 99.6749 17.4071 99.6579 17.1695ZM108.513 24.5C107.427 24.5 106.621 24.2709 106.095 23.8128C105.569 23.3546 105.229 22.7098 105.077 21.8783C104.924 21.1657 104.839 20.419 104.822 19.6385C104.822 18.8579 104.822 18.0604 104.822 17.2459C104.822 16.7029 104.831 16.1938 104.848 15.7187C104.865 15.2436 104.881 14.743 104.898 14.217C104.898 14.0643 104.831 13.9879 104.695 13.9879H103.473C103.388 13.9879 103.329 13.9709 103.295 13.937C103.261 13.9031 103.244 13.8352 103.244 13.7334V12.7407C103.244 12.6389 103.261 12.571 103.295 12.5371C103.329 12.5032 103.397 12.4862 103.499 12.4862H104.746C104.848 12.4862 104.907 12.4607 104.924 12.4098C104.958 12.3589 104.975 12.2741 104.975 12.1553L105.102 10.0681C105.102 9.91543 105.17 9.83907 105.306 9.83907H107.062C107.13 9.83907 107.189 9.86452 107.24 9.91543C107.308 9.94937 107.333 10.0003 107.316 10.0681L107.215 12.1553C107.198 12.291 107.198 12.3844 107.215 12.4353C107.249 12.4692 107.308 12.4862 107.393 12.4862H110.116C110.235 12.4862 110.303 12.5032 110.32 12.5371C110.354 12.5541 110.371 12.6304 110.371 12.7662V13.7334C110.371 13.8182 110.345 13.8861 110.294 13.937C110.261 13.9709 110.193 13.9879 110.091 13.9879H107.393C107.308 13.9879 107.24 14.0134 107.189 14.0643C107.155 14.0982 107.138 14.1746 107.138 14.2933C107.121 14.8024 107.104 15.32 107.087 15.846C107.07 16.372 107.053 16.9065 107.036 17.4495C107.036 18.1113 107.045 18.79 107.062 19.4858C107.079 20.1645 107.164 20.8178 107.316 21.4456C107.418 21.8868 107.588 22.2177 107.826 22.4383C108.08 22.6419 108.462 22.7437 108.971 22.7437C109.192 22.7437 109.412 22.7183 109.633 22.6674C109.87 22.5995 110.082 22.5316 110.269 22.4638C110.422 22.3789 110.515 22.3535 110.549 22.3874C110.6 22.4044 110.642 22.4722 110.676 22.591L111.007 23.6601C111.058 23.7619 111.041 23.8467 110.956 23.9146C110.888 23.9825 110.753 24.0588 110.549 24.1437C110.362 24.2115 110.142 24.2794 109.887 24.3473C109.633 24.3982 109.378 24.4406 109.124 24.4745C108.886 24.4915 108.682 24.5 108.513 24.5ZM123.605 19.7403C123.605 20.8942 123.376 21.8274 122.918 22.5401C122.476 23.2358 121.874 23.7364 121.11 24.0418C120.364 24.3473 119.532 24.5 118.616 24.5H113.5C113.33 24.5 113.245 24.4236 113.245 24.2709V7.59921C113.245 7.44649 113.33 7.37013 113.5 7.37013H117.343C118.158 7.37013 118.913 7.41255 119.609 7.4974C120.321 7.56527 120.941 7.73496 121.467 8.00646C122.01 8.26099 122.425 8.67672 122.714 9.25365C123.002 9.81362 123.147 10.5857 123.147 11.5699C123.147 12.0959 123.079 12.6219 122.943 13.148C122.807 13.657 122.595 14.1152 122.307 14.5224C122.035 14.9127 121.696 15.2097 121.289 15.4133C121.204 15.4472 121.161 15.5066 121.161 15.5914C121.178 15.6593 121.229 15.7102 121.314 15.7442C121.959 16.0157 122.502 16.5162 122.943 17.2459C123.384 17.9755 123.605 18.807 123.605 19.7403ZM121.161 19.6894C121.161 18.824 121.026 18.1707 120.754 17.7295C120.483 17.2883 120.092 16.9914 119.583 16.8386C119.074 16.6859 118.463 16.6096 117.751 16.6096H115.74C115.638 16.6096 115.587 16.6605 115.587 16.7623V22.6674C115.587 22.7183 115.596 22.7607 115.613 22.7946C115.63 22.8116 115.672 22.8201 115.74 22.8201H118.285C118.574 22.8201 118.879 22.7862 119.201 22.7183C119.541 22.6504 119.855 22.5147 120.143 22.311C120.449 22.0904 120.695 21.7765 120.881 21.3693C121.068 20.9451 121.161 20.3851 121.161 19.6894ZM120.729 11.6462C120.729 10.8657 120.576 10.2887 120.27 9.91543C119.965 9.54212 119.541 9.30456 118.998 9.20275C118.472 9.10093 117.835 9.05003 117.089 9.05003H115.74C115.638 9.05003 115.587 9.10942 115.587 9.2282V14.6242C115.587 14.726 115.638 14.777 115.74 14.777H118.005C118.633 14.777 119.142 14.6582 119.532 14.4206C119.94 14.1661 120.237 13.8097 120.423 13.3516C120.627 12.8765 120.729 12.308 120.729 11.6462ZM131.097 24.6018C129.773 24.6018 128.747 24.3473 128.017 23.8382C127.304 23.3292 126.804 22.6419 126.515 21.7765C126.244 20.8942 126.108 19.9354 126.108 18.9003C126.108 18.1537 126.116 17.4071 126.133 16.6605C126.167 15.9139 126.21 15.2097 126.261 14.5479C126.312 13.8861 126.354 13.3346 126.388 12.8934C126.405 12.6898 126.439 12.571 126.49 12.5371C126.558 12.5032 126.676 12.4862 126.846 12.4862H128.246C128.416 12.4862 128.534 12.4947 128.602 12.5116C128.67 12.5286 128.687 12.6389 128.653 12.8425C128.653 12.9443 128.636 13.2074 128.602 13.6316C128.585 14.0558 128.56 14.5733 128.526 15.1842C128.492 15.7951 128.467 16.4399 128.45 17.1186C128.433 17.7804 128.424 18.4082 128.424 19.0022C128.424 20.2069 128.628 21.1402 129.035 21.802C129.459 22.4468 130.155 22.7692 131.122 22.7692C131.241 22.7692 131.419 22.7607 131.657 22.7437C131.894 22.7268 132.14 22.6928 132.395 22.6419C132.649 22.591 132.861 22.5147 133.031 22.4129C133.201 22.311 133.286 22.1753 133.286 22.0056V12.7916C133.286 12.7237 133.294 12.6559 133.311 12.588C133.328 12.5201 133.371 12.4862 133.438 12.4862H135.271C135.322 12.4862 135.373 12.5032 135.424 12.5371C135.492 12.5541 135.526 12.6134 135.526 12.7153V23.2528C135.526 23.4564 135.466 23.6091 135.347 23.711C135.246 23.7958 135.025 23.8976 134.686 24.0164C134.516 24.0673 134.227 24.1437 133.82 24.2455C133.413 24.3303 132.963 24.4152 132.471 24.5C131.979 24.5679 131.521 24.6018 131.097 24.6018ZM138.157 18.6458C138.174 17.3562 138.336 16.3126 138.641 15.5151C138.946 14.7006 139.345 14.0728 139.837 13.6316C140.329 13.1734 140.872 12.8595 141.466 12.6898C142.06 12.5201 142.646 12.4353 143.222 12.4353C143.63 12.4353 144.029 12.4692 144.419 12.5371C144.809 12.588 145.123 12.6474 145.361 12.7153C145.53 12.7492 145.649 12.7662 145.717 12.7662C145.802 12.7492 145.844 12.6644 145.844 12.5116C145.844 12.2232 145.836 11.8753 145.819 11.4681C145.819 11.0608 145.802 10.6451 145.768 10.2209C145.751 9.77968 145.725 9.35547 145.691 8.94822C145.674 8.524 145.658 8.15069 145.641 7.82828C145.624 7.50588 145.607 7.2768 145.59 7.14105C145.556 6.9544 145.564 6.8441 145.615 6.81016C145.666 6.75926 145.742 6.73381 145.844 6.73381H147.55C147.617 6.73381 147.677 6.75077 147.728 6.78471C147.796 6.80168 147.829 6.85259 147.829 6.93743C147.897 7.71799 147.948 8.58339 147.982 9.53364C148.033 10.4669 148.067 11.4426 148.084 12.4607C148.118 13.4619 148.135 14.48 148.135 15.5151C148.152 16.5332 148.143 17.5259 148.109 18.4931C148.093 19.4433 148.059 20.3342 148.008 21.1657C147.974 21.9971 147.914 22.7353 147.829 23.3801C147.796 23.5158 147.736 23.6346 147.651 23.7364C147.583 23.8382 147.405 23.94 147.117 24.0418C146.727 24.2115 146.184 24.3643 145.488 24.5C144.809 24.6357 144.079 24.7036 143.299 24.7036C142.603 24.7036 141.958 24.6188 141.364 24.4491C140.771 24.2794 140.261 24.0079 139.837 23.6346C139.277 23.1595 138.853 22.5062 138.565 21.6747C138.276 20.8433 138.14 19.8336 138.157 18.6458ZM140.448 18.6713C140.448 19.8082 140.575 20.6736 140.83 21.2675C141.101 21.8444 141.458 22.2347 141.899 22.4383C142.187 22.6589 142.544 22.8031 142.968 22.871C143.392 22.9219 143.816 22.9219 144.241 22.871C144.682 22.8031 145.064 22.7013 145.386 22.5656C145.454 22.5147 145.513 22.4638 145.564 22.4129C145.615 22.3619 145.641 22.2941 145.641 22.2092C145.674 21.802 145.7 21.3438 145.717 20.8348C145.751 20.3087 145.768 19.7742 145.768 19.2312C145.785 18.6713 145.802 18.1367 145.819 17.6277C145.836 17.1017 145.844 16.6265 145.844 16.2023C145.844 15.7611 145.844 15.4133 145.844 15.1587C145.844 15.006 145.81 14.9042 145.742 14.8533C145.691 14.7854 145.624 14.743 145.539 14.726C145.199 14.6242 144.826 14.5394 144.419 14.4715C144.012 14.4036 143.655 14.3697 143.35 14.3697C143.061 14.3697 142.747 14.4206 142.408 14.5224C142.069 14.6242 141.746 14.8194 141.441 15.1078C141.152 15.3963 140.915 15.829 140.728 16.4059C140.558 16.9659 140.465 17.721 140.448 18.6713ZM150.685 18.6458C150.702 17.3562 150.863 16.3126 151.169 15.5151C151.474 14.7006 151.873 14.0728 152.365 13.6316C152.857 13.1734 153.4 12.8595 153.994 12.6898C154.588 12.5201 155.173 12.4353 155.75 12.4353C156.157 12.4353 156.556 12.4692 156.946 12.5371C157.337 12.588 157.651 12.6474 157.888 12.7153C158.058 12.7492 158.177 12.7662 158.245 12.7662C158.329 12.7492 158.372 12.6644 158.372 12.5116C158.372 12.2232 158.363 11.8753 158.346 11.4681C158.346 11.0608 158.329 10.6451 158.295 10.2209C158.278 9.77968 158.253 9.35547 158.219 8.94822C158.202 8.524 158.185 8.15069 158.168 7.82828C158.151 7.50588 158.134 7.2768 158.117 7.14105C158.083 6.9544 158.092 6.8441 158.143 6.81016C158.194 6.75926 158.27 6.73381 158.372 6.73381H160.077C160.145 6.73381 160.204 6.75077 160.255 6.78471C160.323 6.80168 160.357 6.85259 160.357 6.93743C160.425 7.71799 160.476 8.58339 160.51 9.53364C160.561 10.4669 160.595 11.4426 160.612 12.4607C160.646 13.4619 160.663 14.48 160.663 15.5151C160.68 16.5332 160.671 17.5259 160.637 18.4931C160.62 19.4433 160.586 20.3342 160.535 21.1657C160.501 21.9971 160.442 22.7353 160.357 23.3801C160.323 23.5158 160.264 23.6346 160.179 23.7364C160.111 23.8382 159.933 23.94 159.644 24.0418C159.254 24.2115 158.711 24.3643 158.015 24.5C157.337 24.6357 156.607 24.7036 155.827 24.7036C155.131 24.7036 154.486 24.6188 153.892 24.4491C153.298 24.2794 152.789 24.0079 152.365 23.6346C151.805 23.1595 151.381 22.5062 151.092 21.6747C150.804 20.8433 150.668 19.8336 150.685 18.6458ZM152.976 18.6713C152.976 19.8082 153.103 20.6736 153.358 21.2675C153.629 21.8444 153.985 22.2347 154.427 22.4383C154.715 22.6589 155.071 22.8031 155.496 22.871C155.92 22.9219 156.344 22.9219 156.768 22.871C157.209 22.8031 157.591 22.7013 157.914 22.5656C157.982 22.5147 158.041 22.4638 158.092 22.4129C158.143 22.3619 158.168 22.2941 158.168 22.2092C158.202 21.802 158.228 21.3438 158.245 20.8348C158.278 20.3087 158.295 19.7742 158.295 19.2312C158.312 18.6713 158.329 18.1367 158.346 17.6277C158.363 17.1017 158.372 16.6265 158.372 16.2023C158.372 15.7611 158.372 15.4133 158.372 15.1587C158.372 15.006 158.338 14.9042 158.27 14.8533C158.219 14.7854 158.151 14.743 158.066 14.726C157.727 14.6242 157.354 14.5394 156.946 14.4715C156.539 14.4036 156.183 14.3697 155.877 14.3697C155.589 14.3697 155.275 14.4206 154.936 14.5224C154.596 14.6242 154.274 14.8194 153.968 15.1078C153.68 15.3963 153.442 15.829 153.256 16.4059C153.086 16.9659 152.993 17.721 152.976 18.6713ZM165.885 22.4383C165.512 21.8444 165.156 21.1487 164.816 20.3512C164.477 19.5536 164.163 18.7137 163.874 17.8313C163.603 16.9489 163.365 16.0835 163.162 15.2351C162.975 14.3697 162.822 13.5722 162.704 12.8425C162.67 12.605 162.746 12.4862 162.933 12.4862H164.689C164.808 12.4862 164.901 12.5201 164.969 12.588C165.037 12.6389 165.079 12.7577 165.096 12.9443C165.147 13.3176 165.223 13.7758 165.325 14.3188C165.427 14.8448 165.554 15.4133 165.707 16.0242C165.877 16.635 166.055 17.2459 166.242 17.8568C166.428 18.4507 166.615 19.0022 166.802 19.5112C166.988 20.0033 167.166 20.4106 167.336 20.733C167.404 20.8517 167.472 20.9111 167.54 20.9111C167.608 20.8942 167.65 20.8517 167.667 20.7839C167.871 20.3427 168.083 19.7997 168.303 19.1549C168.541 18.4931 168.77 17.7889 168.99 17.0423C169.211 16.2956 169.398 15.5575 169.55 14.8279C169.72 14.0982 169.847 13.4279 169.932 12.8171C169.949 12.6813 169.983 12.5965 170.034 12.5625C170.102 12.5116 170.195 12.4862 170.314 12.4862H171.867C171.985 12.4862 172.07 12.5116 172.121 12.5625C172.189 12.5965 172.206 12.6983 172.172 12.868C172.087 13.4958 171.977 14.1067 171.841 14.7006C171.705 15.2945 171.544 15.8969 171.358 16.5078C171.188 17.1186 170.993 17.7634 170.772 18.4422C170.586 19.0022 170.348 19.6724 170.06 20.453C169.788 21.2335 169.449 22.0395 169.041 22.871C168.651 23.6855 168.184 24.4491 167.641 25.1618C167.098 25.8914 166.471 26.4768 165.758 26.918C165.045 27.3762 164.222 27.6053 163.289 27.6053C162.967 27.6053 162.678 27.5798 162.424 27.5289C162.186 27.495 161.974 27.4441 161.787 27.3762C161.533 27.2574 161.456 27.0962 161.558 26.8926L161.991 25.9763C162.042 25.8745 162.093 25.8151 162.144 25.7981C162.211 25.7981 162.296 25.8151 162.398 25.849C162.771 25.9169 163.17 25.8914 163.594 25.7726C164.036 25.6539 164.426 25.4587 164.765 25.1872C165.088 24.9836 165.334 24.78 165.503 24.5764C165.69 24.3727 165.851 24.1352 165.987 23.8637C166.089 23.6601 166.131 23.431 166.114 23.1764C166.097 22.9219 166.021 22.6759 165.885 22.4383Z" fill="currentColor"/>
</svg>
  )
}