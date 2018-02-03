import React from 'react';
import glamorous from 'glamorous';

import image from '../../assets/images/splash.jpg';

const Svg = glamorous.svg('shadow-md', {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  opacity: 0.4,
});

const Splash = () => (
  <Svg>
    <defs>
      <filter id="nashville" colorInterpolationFilters="sRGB" >
        <feComponentTransfer in="SourceGraphic" result="source after curves" >
          <feFuncR type="table" tableValues="0 0.0002 0.0006 0.0013 0.0022 0.0033 0.0046 0.0061 0.0077 0.0094 0.0112 0.0131 0.0151 0.0171 0.0191 0.0212 0.0233 0.0253 0.0274 0.0294 0.0314 0.0333 0.0352 0.0371 0.0389 0.0407 0.0425 0.0441 0.0458 0.0474 0.0489 0.0504 0.0519 0.0534 0.0549 0.0569 0.0589 0.0608 0.0628 0.0647 0.0665 0.0683 0.07 0.0716 0.0731 0.0745 0.0752 0.0758 0.0763 0.0768 0.0771 0.0775 0.0778 0.0781 0.0784 0.0787 0.0792 0.0797 0.0804 0.0813 0.0825 0.084 0.0859 0.0882 0.0909 0.0941 0.1018 0.1103 0.1197 0.1299 0.1409 0.1525 0.1648 0.1777 0.191 0.2049 0.2191 0.2336 0.2484 0.2633 0.2783 0.2932 0.3081 0.3228 0.3373 0.347 0.3565 0.3657 0.3746 0.3833 0.3917 0.3999 0.4078 0.4155 0.423 0.4303 0.4374 0.4443 0.451 0.458 0.4648 0.4715 0.4781 0.4845 0.4909 0.497 0.5031 0.5091 0.5149 0.5206 0.5262 0.5318 0.5372 0.5425 0.5478 0.5529 0.5581 0.5632 0.5682 0.5731 0.578 0.5829 0.5877 0.5925 0.5973 0.602 0.6067 0.6115 0.6162 0.6209 0.6257 0.6305 0.6353 0.6407 0.6462 0.6517 0.6573 0.6628 0.6684 0.6739 0.6795 0.685 0.6906 0.6961 0.7015 0.7069 0.7123 0.7176 0.7221 0.7265 0.7308 0.735 0.739 0.743 0.7469 0.7508 0.7545 0.7582 0.7618 0.7653 0.7688 0.7722 0.7756 0.7789 0.7822 0.7855 0.7887 0.7919 0.7951 0.7983 0.8015 0.8047 0.8078 0.8116 0.8155 0.8193 0.823 0.8268 0.8306 0.8344 0.8381 0.8419 0.8456 0.8493 0.853 0.8567 0.8603 0.8639 0.8675 0.871 0.8745 0.8779 0.8812 0.8845 0.8877 0.8909 0.8941 0.8971 0.9002 0.9032 0.9061 0.909 0.9119 0.9146 0.9174 0.92 0.9226 0.9252 0.9276 0.9301 0.9324 0.9347 0.9369 0.9391 0.9412 0.9429 0.9446 0.9462 0.9478 0.9493 0.9508 0.9522 0.9536 0.9549 0.9562 0.9575 0.9588 0.96 0.9612 0.9624 0.9635 0.9647 0.9659 0.967 0.9682 0.9693 0.9705 0.9717 0.9729 0.9741 0.9753 0.9766 0.9779 0.9793 0.9807 0.9821 0.9836 0.9851 0.9867 0.9884 0.9901 0.9919 0.9938 0.9958 0.9978 1" />
          <feFuncG type="table" tableValues="0 0 0 0 0 0 0 0 0 0 0.0001 0.0008 0.0017 0.0029 0.0044 0.0061 0.0081 0.0105 0.0132 0.0162 0.0196 0.0233 0.0275 0.0319 0.0367 0.0419 0.0475 0.0534 0.0597 0.0663 0.0733 0.0805 0.0881 0.096 0.1041 0.1125 0.1212 0.13 0.1391 0.1483 0.1576 0.1671 0.1766 0.1862 0.1957 0.2053 0.2147 0.2241 0.2333 0.2422 0.251 0.2571 0.2631 0.2688 0.2744 0.2799 0.2851 0.2902 0.2952 0.3 0.3046 0.3091 0.3134 0.3176 0.3222 0.3266 0.3309 0.3352 0.3394 0.3436 0.3476 0.3516 0.3556 0.3595 0.3633 0.3671 0.3709 0.3746 0.3783 0.382 0.3857 0.3894 0.393 0.3967 0.4004 0.4042 0.4079 0.4118 0.4162 0.4207 0.4251 0.4296 0.4342 0.4387 0.4432 0.4478 0.4523 0.4569 0.4615 0.466 0.4706 0.4748 0.479 0.4832 0.4873 0.4914 0.4954 0.4995 0.5034 0.5074 0.5113 0.5152 0.519 0.5229 0.5267 0.5304 0.5342 0.5379 0.5416 0.5453 0.549 0.5526 0.5563 0.5599 0.5635 0.5671 0.5708 0.5744 0.578 0.5816 0.5852 0.5888 0.5924 0.5961 0.6002 0.6043 0.6084 0.6125 0.6165 0.6205 0.6246 0.6286 0.6325 0.6364 0.6403 0.6442 0.648 0.6518 0.6555 0.6591 0.6627 0.6658 0.6687 0.6716 0.6745 0.6773 0.68 0.6828 0.6854 0.6881 0.6907 0.6934 0.696 0.6986 0.7012 0.7039 0.7066 0.7093 0.712 0.7148 0.7176 0.7219 0.7262 0.7306 0.735 0.7395 0.744 0.7485 0.7531 0.7576 0.7622 0.7667 0.7712 0.7757 0.7801 0.7844 0.7887 0.7928 0.7969 0.8008 0.8046 0.8083 0.8118 0.8137 0.8155 0.8171 0.8186 0.82 0.8213 0.8225 0.8236 0.8246 0.8255 0.8264 0.8272 0.828 0.8287 0.8294 0.83 0.8307 0.8314 0.8332 0.8351 0.837 0.8389 0.8409 0.8429 0.8449 0.847 0.8491 0.8512 0.8533 0.8553 0.8574 0.8595 0.8616 0.8636 0.8656 0.8676 0.8695 0.8714 0.8733 0.875 0.8768 0.8784 0.88 0.8815 0.8829 0.8843 0.8855 0.8866 0.8876 0.8885 0.8893 0.8899 0.8904 0.8908 0.891 0.891 0.8909 0.8906 0.8901 0.8895 0.8886 0.8875 0.8863" />
          <feFuncB type="table" tableValues="0.2627 0.2628 0.263 0.2632 0.2636 0.2641 0.2647 0.2654 0.2662 0.2672 0.2683 0.2695 0.2708 0.2722 0.2738 0.2754 0.2772 0.2791 0.2811 0.2832 0.2854 0.2878 0.2902 0.2927 0.2953 0.2981 0.3009 0.3038 0.3067 0.3098 0.3129 0.316 0.3192 0.3225 0.3258 0.3292 0.3325 0.3359 0.3393 0.3428 0.3462 0.3496 0.3529 0.3556 0.3582 0.3607 0.3631 0.3655 0.3679 0.3701 0.3723 0.3745 0.3766 0.3787 0.3808 0.3828 0.3847 0.3867 0.3886 0.3905 0.3924 0.3943 0.3962 0.3981 0.4 0.4028 0.4057 0.4086 0.4115 0.4144 0.4174 0.4204 0.4234 0.4264 0.4294 0.4324 0.4354 0.4385 0.4414 0.4444 0.4474 0.4503 0.4532 0.456 0.4588 0.4609 0.4629 0.4649 0.4667 0.4686 0.4703 0.472 0.4737 0.4753 0.4769 0.4784 0.4799 0.4814 0.4828 0.4843 0.4857 0.4871 0.4885 0.4899 0.4913 0.4927 0.4941 0.4963 0.4985 0.5008 0.5031 0.5054 0.5078 0.5102 0.5126 0.5151 0.5176 0.5201 0.5227 0.5252 0.5278 0.5304 0.533 0.5356 0.5383 0.5409 0.5436 0.5462 0.5489 0.5516 0.5542 0.5569 0.5592 0.5616 0.564 0.5663 0.5687 0.571 0.5733 0.5757 0.578 0.5804 0.5827 0.585 0.5874 0.5897 0.5921 0.5944 0.5968 0.5992 0.6015 0.6039 0.6064 0.6088 0.6113 0.6138 0.6162 0.6187 0.6213 0.6238 0.6263 0.6289 0.6314 0.634 0.6366 0.6392 0.6418 0.6444 0.6471 0.65 0.6529 0.6559 0.6588 0.6618 0.6648 0.6678 0.6707 0.6737 0.6767 0.6796 0.6826 0.6855 0.6883 0.6912 0.694 0.6968 0.6995 0.7021 0.7048 0.7073 0.7098 0.7114 0.713 0.7145 0.716 0.7174 0.7187 0.72 0.7212 0.7224 0.7236 0.7247 0.7259 0.727 0.7281 0.7292 0.7303 0.7314 0.7325 0.7336 0.7348 0.736 0.7373 0.7395 0.7418 0.7441 0.7464 0.7488 0.7512 0.7536 0.7561 0.7585 0.7609 0.7634 0.7658 0.7682 0.7706 0.773 0.7753 0.7776 0.7799 0.7821 0.7842 0.7862 0.7882 0.7901 0.792 0.7937 0.7953 0.7968 0.7982 0.7995 0.8006 0.8016 0.8025 0.8032 0.8037 0.8041 0.8043 0.8043 0.8041 0.8037 0.8031 0.8023 0.8013 0.8" />
        </feComponentTransfer>
      </filter>
    </defs>
    <image
      x="-10"
      y="-10"
      width="110%"
      height="110%"
      href={image}
      preserveAspectRatio="xMinYMin slice"
      filter="url(#nashville)"
    />
  </Svg>
);

export default Splash;
