export const baseUrl = "https://api.github.com";

export async function getProfile(username) {
  const profileRequest = await fetch(`${baseUrl}/users/${username}`);
  const profileData = await profileRequest.json();
  return profileData
}

export async function getRepositories({username, fork, per_page, page, sort}) {
  const repositoriesRequest = await fetch(`${baseUrl}/search/repositories?q=user:${username} fork:${fork}&per_page=${per_page}&page=${page}&sort=${sort}`);
  const repositoriesData = await repositoriesRequest.json();
  return repositoriesData
}