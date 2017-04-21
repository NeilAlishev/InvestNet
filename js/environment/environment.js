const Environments = {
  production: {
    BASE_URL: 'http://139.59.135.100:8080',

    githubOAuth: 'https://github.com/login/oauth/authorize?client_id=b78d49fc6fcc8b26132d&',
    vkOAuth: 'https://oauth.vk.com/authorize?client_id=5891582&redirect_uri=http://139.59.135.100:8080/api/oauth/vk&response_type=code&v=3.0&'
  },
  development: {
  	BASE_URL: 'http://192.168.0.6:8080',

  	githubOAuth: 'https://github.com/login/oauth/authorize?client_id=e6b01963ac747ecbd933&',
  	vkOAuth: 'https://oauth.vk.com/authorize?client_id=5814753&redirect_uri=http://192.168.0.6:8080/api/oauth/vk&response_type=code&v=5.62&'
  }
}

export default Environments.production