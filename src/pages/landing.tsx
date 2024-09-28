import EtcBox from 'components/box/EtcBox';
import { LargeButton } from 'components/Button/Button';
import onBoarding from 'data/onBoarding';
import React from 'react';

const landing = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="absolute flex flex-col justify-center items-center min-h-[639px] gap-[30px] bottom-[44px]">
        <div className="flex flex-col justify-center items-center">
          <img className="mb-[-70px]" src="/assets/logo.svg" alt="logo" />
          <img
            className="w-[360px] h-[360px] mb-[-85px]"
            src="/assets/Char/smile.svg"
            alt="smile"
          />
          <EtcBox subject="onBoarding" color="white" onBoarding={onBoarding} />
        </div>
        <a href="/" className="text-center text-[13px] text-txt_secondary">
          카카오 X 구름톤 유니브 연합 해커톤 7팀
        </a>
        <LargeButton text="시작하기" />
      </div>
    </div>
  );
};

export default landing;
