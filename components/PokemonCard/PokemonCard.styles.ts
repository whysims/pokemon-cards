import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface RarityProps {
  legend?: boolean;
  amazing?: boolean;
  rare?: boolean;
}

export const RarityBadge = styled.div<RarityProps>`
  position: absolute;
  top: 5px;
  left: 5px;
  background: ${({ legend, amazing, rare }) =>
    !legend && !amazing && !rare ? "white" : legend ? "gold" : "cyan"};
  color: ${({ legend, amazing, rare }) =>
    !legend && !amazing && !rare ? "black" : legend ? "white" : "black"};
  padding: 5px;
  border-radius: 14px;
`;

export const CardContainer = styled.div`
  border-radius: 14px;

  width: 250px;
  height: 350px;

  position: relative;
  overflow: hidden;

  display: block;

  cursor: pointer;
`;

export const PriceBadge = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
  padding: 5px;
  border-radius: 14px;
`;

export const BackgroundTest = styled.div<{ card: string; holo?: boolean }>`
  width: 100%;
  height: 100%;

  background-image: url(${({ card }) => card});

  transition: transform 0.5s ease;
  will-change: transform, filter;

  background-color: #040712;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transform-origin: center;

  position: relative;

  ${({ holo }) =>
    holo &&
    css`
      &:hover:after {
        filter: brightness(1) contrast(1);
        opacity: 1;
      }
      &:after,
      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: no-repeat;
        opacity: 0.5;
        mix-blend-mode: color-dodge;
        transition: all 0.33s ease;
      }

      &:before {
        background-position: 50% 50%;
        background-size: 300% 300%;
        background-image: linear-gradient(
          115deg,
          transparent 0%,
          rgb(0, 231, 255) 25%,
          transparent 47%,
          transparent 53%,
          rgb(255, 0, 231) 75%,
          transparent 100%
        );
        opacity: 0.5;
        filter: brightness(0.5) contrast(1);
        z-index: 1;
      }

      &:after {
        opacity: 1;
        background-image: url("https://assets.codepen.io/13471/sparkles.gif"),
          url("https://assets.codepen.io/13471/holo.png"),
          linear-gradient(
            125deg,
            #ff008450 15%,
            #fca40040 30%,
            #ffff0030 40%,
            #00ff8a20 60%,
            #00cfff40 70%,
            #cc4cfa50 85%
          );
        background-position: 50% 50%;
        background-size: 160%;
        background-blend-mode: overlay;
        z-index: 2;
        filter: brightness(1) contrast(1);
        transition: all 0.33s ease;
        mix-blend-mode: color-dodge;
        opacity: 0.75;
      }
    `}
`;
