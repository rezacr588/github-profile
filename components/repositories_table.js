import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useGithubContext } from "../context"
import RepositoryItem from "./repository_item"
import RepositoryPagination from "./repository_pagination";
export default function RepositoriesTable() {
  const { state: { repositories } } = useGithubContext();
  return (
    <Grid>
      <GridItem padding="1rem" display="flex" alignItems="center">
        <Heading size="md">Repositories</Heading>
      </GridItem>
      <GridItem>
        <Grid templateColumns="1fr 1fr" gap="4">
          {
            repositories.items.map(
              (repo, index) =>
                <RepositoryItem
                  key={index}
                  repository={repo}
                />
            )
          }
        </Grid>
      </GridItem>
      <GridItem padding="2rem" display="flex" justifyContent="center" alignItems="center">
        <RepositoryPagination />
      </GridItem>
    </Grid>
  )
}