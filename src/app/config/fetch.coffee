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

  fetchData 'http://api.vulp.li/bxxc/instagram/timeline', 'src/app/controllers/json/', 'instagram.json' 
  fetchData 'http://api.vulp.li/bxxc/instagram/profile', 'src/app/controllers/json/', 'instagram_profile.json' 
  fetchData 'http://api.vulp.li/bxxc/instagram/tag', 'src/app/controllers/json/', 'instagram_tagged.json' 
  fetchData 'http://api.vulp.li/bxxc/twitter/timeline', 'src/app/controllers/json/', 'twitter.json' 
  fetchData 'http://api.vulp.li/bxxc/twitter/profile', 'src/app/controllers/json/', 'twitter_profile.json' 
  fetchData 'http://api.vulp.li/bxxc/youtube/uploads', 'src/app/controllers/json/', 'youtube.json' 
  fetchData 'http://api.vulp.li/bxxc/youtube/profile', 'src/app/controllers/json/', 'instagram_profile.json' 