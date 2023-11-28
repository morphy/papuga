import React, { useEffect, useState } from "react";
import { minidenticon } from "minidenticons";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Item from "./Item";

const ItemsScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" mt={4}>
        Przedmioty
      </Typography>

      <Stack spacing={2} sx={{ py: 8 }}>
        {posts.map((post) => (
          <Item
            key={post.id}
            name={post.title}
            description={post.body}
            img="https://cataas.com/cat"
          />
        ))}
      </Stack>
    </Container>
  );
};

export default ItemsScreen;
