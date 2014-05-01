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

  fetchData 'http://api.ktabori.net/bxxc/instagram/timeline', 'src/app/controllers/json/', 'instagram.json' 
  fetchData 'http://api.ktabori.net/bxxc/instagram/profile', 'src/app/controllers/json/', 'instagram_profile.json' 
  fetchData 'http://api.ktabori.net/bxxc/instagram/tag', 'src/app/controllers/json/', 'instagram_tagged.json' 
  fetchData 'http://api.ktabori.net/bxxc/twitter/timeline', 'src/app/controllers/json/', 'twitter.json' 
  fetchData 'http://api.ktabori.net/bxxc/twitter/profile', 'src/app/controllers/json/', 'twitter_profile.json' 
  fetchData 'http://api.ktabori.net/bxxc/youtube/uploads', 'src/app/controllers/json/', 'youtube.json' 
  fetchData 'http://api.ktabori.net/bxxc/youtube/profile', 'src/app/controllers/json/', 'instagram_profile.json' 