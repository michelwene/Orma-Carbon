import { Box } from "@components/Box";
import { Container } from "@components/Container";

interface MainProps {
  children: React.ReactNode;
}

export function Home() {
  return (
    <Container maxWidth="md">
      <Box
        margin="2rem 0 0 0"
        displayFlex
        alignItems="center"
        justifyContent="center"
        columnGap="1rem"
      >
        123
      </Box>
    </Container>
  );
}
