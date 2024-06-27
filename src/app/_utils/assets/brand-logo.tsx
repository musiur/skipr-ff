import Link from "next/link";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <svg
        width="172"
        height="29"
        viewBox="0 0 172 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M65.0559 25.2612L66.6236 21.8022C68.5708 23.3389 71.6689 24.4338 74.6613 24.4338C78.4562 24.4338 80.055 23.1025 80.055 21.3232C80.055 16.1535 65.5785 19.544 65.5785 10.6416C65.5785 6.77205 68.7077 3.4873 75.3954 3.4873C78.3193 3.4873 81.3801 4.24006 83.5077 5.6087L82.0831 9.06764C79.8933 7.79853 77.4919 7.18264 75.3643 7.18264C71.6067 7.18264 70.0763 8.61972 70.0763 10.4363C70.0763 15.5376 84.5218 12.2155 84.5218 21.0122C84.5218 24.8444 81.3552 28.1353 74.6737 28.1353C70.8726 28.1353 67.0778 26.972 65.0559 25.2612Z"
          // fill="white"
        />
        <path
          d="M97.387 17.764L93.5237 21.6647V27.7925H89.001V3.83496H93.5237V16.1217L105.568 3.83496H110.65L100.417 14.5477L111.273 27.7987H105.985L97.387 17.764Z"
          // fill="white"
        />
        <path
          d="M114.358 3.83496H118.881V27.7987H114.358V3.83496Z"
          // fill="white"
        />
        <path
          d="M145.856 12.3579C145.856 17.6334 141.887 20.8808 135.485 20.8808H129.986V27.7987H125.463V3.83496H135.485C141.887 3.83496 145.856 7.05127 145.856 12.3579ZM141.296 12.3579C141.296 9.34686 139.243 7.59873 135.274 7.59873H129.986V17.117H135.274C139.243 17.1108 141.296 15.3689 141.296 12.3579Z"
          // fill="white"
        />
        <path
          d="M166.311 27.7925L161.334 20.775C161.023 20.8061 160.706 20.8061 160.395 20.8061H154.895V27.7925H150.372V3.83496H160.395C166.802 3.83496 170.765 7.05127 170.765 12.3579C170.765 15.9848 168.886 18.6536 165.577 19.9227L171.182 27.7987H166.311V27.7925ZM160.183 7.59873H154.895V17.1481H160.183C164.146 17.1481 166.205 15.3627 166.205 12.3517C166.205 9.34064 164.152 7.59873 160.183 7.59873Z"
          // fill="white"
        />
        <path
          d="M24.998 9.65248C25.9063 9.65248 26.715 9.56539 27.2625 9.29788C27.2687 9.29788 27.2749 9.29166 27.2811 9.29166C27.25 8.99926 27.0759 8.73176 26.8021 8.51402C26.3542 8.15941 26.0556 7.64306 26.0494 7.07694C26.0494 7.05206 26.0494 7.02095 26.0494 6.98985C26.0494 6.95252 26.0494 6.91519 26.0494 6.87787C26.0556 6.56059 26.1302 6.24331 26.292 5.96959C26.6528 5.35992 26.8768 4.49518 26.8768 3.53713C26.8768 1.68324 26.0369 0.177734 25.0042 0.177734C23.9715 0.177734 23.1317 1.68324 23.1317 3.53713C23.1317 4.49518 23.3556 5.35992 23.7164 5.96959C23.8782 6.24331 23.9529 6.56059 23.9591 6.87787C23.9591 6.91519 23.9591 6.95252 23.9591 6.98985C23.9591 7.02095 23.9591 7.04584 23.9591 7.07694C23.9529 7.64306 23.6542 8.15941 23.2063 8.51402C22.9326 8.73176 22.7584 8.99926 22.7273 9.29166C22.7335 9.29166 22.7397 9.29788 22.746 9.29788C23.281 9.56539 24.0897 9.65248 24.998 9.65248Z"
          // fill="white"
        />
        <path
          d="M6.64585 18.2491C6.66451 18.5975 6.78271 18.8899 7.00667 19.089C7.01289 19.0827 7.01912 19.0827 7.01912 19.0765C7.55413 18.8028 8.10158 18.2056 8.6366 17.4777C9.16539 16.7561 9.56977 16.0531 9.66931 15.4683C9.66931 15.4621 9.67552 15.4558 9.67552 15.4496C9.41424 15.3065 9.09074 15.2879 8.7548 15.3812C8.1949 15.5305 7.6039 15.4683 7.12488 15.1386C7.09999 15.1199 7.08133 15.1075 7.05644 15.0888C7.02534 15.0639 6.99423 15.0453 6.96312 15.0204C6.70805 14.8275 6.49032 14.5849 6.35968 14.2925C6.06729 13.6455 5.4825 12.9674 4.69242 12.4075C3.16203 11.325 1.43256 11.1135 0.822889 11.9409C0.219441 12.7683 0.965976 14.3174 2.49637 15.3999C3.28645 15.9598 4.1263 16.2832 4.84173 16.3579C5.16523 16.389 5.47006 16.5134 5.73757 16.6938C5.76868 16.7125 5.79978 16.7374 5.83088 16.7561C5.85577 16.7747 5.87443 16.7872 5.89932 16.8058C6.35968 17.1418 6.61474 17.6768 6.64585 18.2491Z"
          // fill="white"
        />
        <path
          d="M42.4482 19.4562C42.6659 19.3007 42.6286 18.9834 42.3922 18.8652C41.9754 18.6537 41.5523 18.1934 41.1417 17.6335C40.7311 17.0736 40.4201 16.5323 40.3454 16.0782C40.3019 15.8169 40.0095 15.6863 39.7917 15.8418L38.8586 16.5012C35.8476 13.4342 31.7976 11.3626 27.2624 10.84V9.95039C27.2624 9.68911 26.9825 9.52736 26.7399 9.64556C26.323 9.85085 25.6947 9.91929 24.9917 9.91929C24.2887 9.91929 23.6604 9.85085 23.2436 9.64556C23.0072 9.52736 22.721 9.68289 22.721 9.95039V10.84C18.1858 11.3626 14.1359 13.4342 11.1249 16.5012L10.1917 15.8418C9.97396 15.6863 9.68157 15.8231 9.63802 16.0782C9.56337 16.5323 9.25232 17.0736 8.84172 17.6335C8.43113 18.1934 8.0081 18.6537 7.59128 18.8652C7.35488 18.9897 7.31756 19.3069 7.5353 19.4562L8.36892 20.0473C7.07493 22.1998 6.20398 24.626 5.86182 27.2202H10.5028C11.691 20.4081 17.7192 15.2197 24.9793 15.2197C32.2455 15.2197 38.2738 20.4081 39.4558 27.2202H44.0967C43.7546 24.6322 42.8836 22.206 41.5896 20.0473L42.4482 19.4562Z"
          // fill="white"
        />
        <path
          d="M49.1795 11.936C48.5761 11.1086 46.8404 11.3201 45.31 12.4026C44.5199 12.9625 43.9414 13.6468 43.6428 14.2876C43.5121 14.58 43.2944 14.8226 43.0393 15.0155C43.0082 15.0404 42.9771 15.059 42.946 15.0839C42.9211 15.1026 42.9024 15.115 42.8776 15.1337C42.4048 15.4572 41.8075 15.5256 41.2476 15.3763C40.9055 15.283 40.5882 15.3017 40.3269 15.4447C40.3269 15.451 40.3331 15.4572 40.3331 15.4634C40.4327 16.0544 40.8308 16.7512 41.3658 17.4728C41.8946 18.1945 42.4421 18.7917 42.9833 19.0716C42.9895 19.0716 42.9958 19.0779 42.9958 19.0841C43.2197 18.885 43.3379 18.5926 43.3566 18.2442C43.3877 17.6781 43.6365 17.1431 44.1031 16.8009C44.128 16.7823 44.1467 16.7698 44.1716 16.7512C44.2027 16.7263 44.2338 16.7076 44.2649 16.689C44.5324 16.5086 44.8372 16.3841 45.1607 16.353C45.8761 16.2846 46.716 15.9549 47.5061 15.395C49.0302 14.3125 49.783 12.7634 49.1795 11.936Z"
          // fill="white"
        />
      </svg>
    </Link>
  );
};

export default BrandLogo;