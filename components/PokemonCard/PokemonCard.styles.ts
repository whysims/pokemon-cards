import { Card } from "antd";
import styled, { css } from "styled-components";

interface RarityProps {
  legend?: boolean;
  amazing?: boolean;
  rare?: boolean;
}

interface CardContainerProps {
  holo?: boolean;
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

export const CardContainer = styled.div<CardContainerProps>`
  border-radius: 14px;
  width: 300px;
  height: 419px;

  position: relative;
  overflow: hidden;

  transition: transform 0.5s ease, box-shadow 0.2s ease;
  will-change: transform, filter;

  background-color: #040712;
  background-image: var(--front);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transform-origin: center;

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
          var(rgb(0, 231, 255)) 25%,
          transparent 47%,
          transparent 53%,
          var(rgb(255, 0, 231)) 75%,
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

  .pokemon-content {
    transition: all 0.3s ease-out;

    position: absolute;
    opacity: 0;
    bottom: -500px;

    background: white;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    padding: 15px;
    width: 300px;

    box-shadow: 0px -6px 20px 0px rgb(0 0 0 / 50%);
  }
  &:hover {
    transform: scale(1.05);
    .pokemon-content {
      opacity: 1;
      bottom: 0px;
    }
  }
`;
