import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const Navigation = styled.nav`
  background: ${(props) => props.theme.colors.raisinBlack};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colors.culturedWhite};
`;

export const AvatarCustom = styled(Avatar)`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.orangeYellow};
`;
