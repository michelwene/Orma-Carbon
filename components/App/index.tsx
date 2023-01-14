import { Box } from "@components/Box";
import Button from "@components/Button";
import { Container } from "@components/Container";

interface MainProps {
  children: React.ReactNode;
}

export function App() {
  return (
    <Container maxWidth="md">
      <Box
        margin="2rem 0 0 0"
        displayFlex
        alignItems="center"
        justifyContent="center"
        columnGap="1rem"
      >
        <Button type="button" variant="outlined" color="primary">
          Deputados
        </Button>
        <Button type="button" variant="outlined">
          Senadores
        </Button>
        <Button type="button" variant="outlined">
          Favoritos
        </Button>
      </Box>
    </Container>
  );
}
