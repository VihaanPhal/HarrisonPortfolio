import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Bio } from "../../Data/Constants";
import TypeWriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import HeroImage from "../../Images/Image.png";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.12) 100%
  );
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1),
    0 24px 48px -12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15),
      0 30px 60px -12px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    height: 280px;
    border-radius: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; // This ensures the image is anchored to the top
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  background: ${({ theme }) => theme.bg};

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
    min-height: 100vh;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  @media (max-width: 640px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
  }
`;

const HeroInnerSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 30px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const HeroLeftSection = styled.div`
  width: 100%;
  order: 1;

  @media (max-width: 960px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: -60px;
  }
`;

const HeroRightSection = styled.div`
  padding-bottom: 30px;
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 640px) {
    font-size: 35px;
    line-height: 42px;
    margin-bottom: -15px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
  }

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 10px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 26px;
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id="About">
      <HeroSection>
        <motion.div {...headContainerAnimation}>
          <HeroInnerSection>
            <HeroLeftSection>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>
                <TextLoop>
                  I am a
                  <Span>
                    <TypeWriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <Subtitle>{Bio.description}</Subtitle>
              </motion.div>
            </HeroLeftSection>
            <HeroRightSection>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <ImageContainer>
                    <Image src={HeroImage} alt="Harrison Schulman" />
                  </ImageContainer>
                </Tilt>
              </motion.div>
            </HeroRightSection>
          </HeroInnerSection>
        </motion.div>
      </HeroSection>
    </div>
  );
};

export default Hero;
