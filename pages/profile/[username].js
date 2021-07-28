import { Grid, useToast } from '@chakra-ui/react'
import { useEffect, useReducer } from 'react'
import { getProfile, getRepositories } from '../../api/gitApi'
import UserDetails from "../../components/user_details"
import RepositoriesTable from "../../components/repositories_table"
import { ACTIONS, GithubContext, reducer } from '../../context'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Profile = ({
  repositories,
  profile,
  error
}) => {
  const toast = useToast()
  const router = useRouter()
  
  const [gitState, gitDispatch] = useReducer(
    reducer,
    {
      repositories,
      profile,
    }
  );

  useEffect(() => {
    gitDispatch({type: ACTIONS.SET_REPOSITORIES , payload: repositories})
  } ,[router.query])

  useEffect(() => {
    if(error)
      toast({
        title: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
  }, [error, toast])

  if (error) return <p>This account not found</p>

  return (
    <GithubContext.Provider value={
      { 
        state: gitState,
        dispatch: gitDispatch
      }
    }>

      <Head>
        <title>{profile.login}</title>
        <meta name="description" content={profile.description} />
      </Head>
      <Grid templateColumns="30% 70%">
        <UserDetails />
        <RepositoriesTable />
      </Grid>
    </GithubContext.Provider>
  )
}

export default Profile

export async function getServerSideProps({ params, query }) {
  const { username } = params;
  const profileData = await getProfile(username)
  if (!profileData.message) {
    const repositoriesData = await getRepositories({
      username: username,
      page: query.page ? query.page : "1",
      sort: "stars",
      per_page: "6",
      fork: "true"
    })
    return {
      props: {
        repositories: repositoriesData,
        profile: profileData,
        error: false
      }
    }
  } else {
    return {
      props: {
        error: profileData.message
      }
    }
  }
}