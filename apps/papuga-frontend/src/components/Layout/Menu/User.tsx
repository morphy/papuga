import React, { useMemo } from "react";
import { minidenticon } from "minidenticons";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useMinidenticon from "../../../utils/useMinidenticon";

type UserProps = {
  avatar?: string;
  name?: string;
  email?: string;
};

const User: React.FC<UserProps> = (props: UserProps) => {
  const { avatar, name, email } = props;

  const iconSrc = useMinidenticon(name);

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "stretch",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        p: 2,
        mt: "auto"
      }}
    >
      <Avatar
        src={avatar ?? iconSrc}
        sx={{
          width: "60px",
          height: "60px",
          mr: 2,
          backgroundColor: "white"
        }}
      />

      <Typography variant="h6" overflow="hidden" textOverflow="ellipsis">
        {name}
        <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
          {email}
        </Typography>
      </Typography>
    </Stack>
  );
};

export default User;
