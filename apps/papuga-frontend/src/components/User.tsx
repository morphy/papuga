import React, { useMemo } from "react";
import { minidenticon } from "minidenticons";

import Stack from "@mui/material/Stack";
import { Avatar, Typography } from "@mui/material";

type UserProps = {
  avatar?: string;
  name?: string;
  email?: string;
};

const User: React.FC<UserProps> = (props: UserProps) => {
  const { avatar, name, email } = props;

  const iconSrc = useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon(name ?? "", 93, 45)),
    [name]
  );

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        p: 2
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

      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{email}</Typography>
      </div>
    </Stack>
  );
};

export default User;
