import { styled } from "@mui/material";
import { Avatar } from "@mui/material";

export const Navigation = styled("nav")`
  background: ${({ theme }) => theme.colors.raisinBlack};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const Title = styled("h1")`
  margin: 0;
  color: ${({ theme }) => theme.colors.culturedWhite};
`;

export const AvatarCustom = styled(Avatar)`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.orangeYellow};
`;
