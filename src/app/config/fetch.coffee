fetchSocialData = ()->
  console.log 'Fetching data from Vulp API'
  console.log 'ENV: (' + env + ')'

  fetchData = (url, filePath, fileName) ->
    console.log 'URL: ', url

    request.get url, (error, response, body) ->

      if !error
        touch filePath + fileName

        fs.writeFile filePath + fileName, body, (err) ->
          if err
            console.log err
          else
            console.log "The " + fileName + " was saved!"
      else
        console.log error

  apiRoute = 'http://vulp.herokuapp.com/'

  fetchData apiRoute + 'bxxc/instagram/timeline', 'src/app/controllers/json/', 'instagram.json' 
  fetchData apiRoute + 'bxxc/instagram/profile', 'src/app/controllers/json/', 'instagram_profile.json' 
  fetchData apiRoute + 'bxxc/instagram/tag', 'src/app/controllers/json/', 'instagram_tagged.json' 
  fetchData apiRoute + 'bxxc/twitter/timeline', 'src/app/controllers/json/', 'twitter.json' 
  fetchData apiRoute + 'bxxc/twitter/profile', 'src/app/controllers/json/', 'twitter_profile.json' 
  fetchData apiRoute + 'bxxc/youtube/uploads', 'src/app/controllers/json/', 'youtube.json' 
  fetchData apiRoute + 'bxxc/youtube/profile', 'src/app/controllers/json/', 'instagram_profile.json'
  fetchData apiRoute + 'bxxc/xbox', 'src/app/controllers/json/', 'xbox.json'