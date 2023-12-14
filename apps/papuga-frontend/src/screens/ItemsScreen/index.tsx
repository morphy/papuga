import React, { useEffect, useState } from "react";
import { minidenticon } from "minidenticons";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Item from "./Item";
import { Button } from "@mui/material";

const ItemsScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [reload, setReload] = useState(1);

  useEffect(() => {
    fetch("http://localhost:4000/items", { credentials: "include" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Response not ok");
      })
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [reload]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" mt={4}>
        Przedmioty
        <Button onClick={() => setReload((oldReload) => oldReload + 1)}>
          Reload
        </Button>
      </Typography>

      <Stack spacing={2} sx={{ py: 8 }}>
        {posts.map((post) => (
          <Item
            key={post.id}
            name={post.name}
            description={post.body}
            img="https://cataas.com/cat"
          />
        ))}
      </Stack>
    </Container>
  );
};

export default ItemsScreen;
