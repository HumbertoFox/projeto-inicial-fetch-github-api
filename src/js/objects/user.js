const user = 
{
    avatarUrl:'',
    name: '',
    bio: '',
    login: '',
    followers: '',
    following: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser)
    {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.login = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
        this.userName = gitHubUser.login;
    },
    setRepositories(repositories)
    {
        this.repositories = repositories
    }
}

export { user };