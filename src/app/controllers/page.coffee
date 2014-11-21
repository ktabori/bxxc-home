fs = require 'fs'

pageController = (name) ->
    (req, res) ->
      console.log 'pageController', req.originalUrl

      if req.originalUrl is '/'
        twitterResult         = JSON.parse fs.readFileSync 'src/app/controllers/json/twitter.json'
        youtubeResult         = JSON.parse fs.readFileSync 'src/app/controllers/json/youtube.json'
        instagramResult       = JSON.parse fs.readFileSync 'src/app/controllers/json/instagram.json'
        instagramTaggedResult = JSON.parse fs.readFileSync 'src/app/controllers/json/instagram_tagged.json'

        res.render name, { twitter: twitterResult, youtube: youtubeResult, instagram: instagramResult, instagramTagged: instagramTaggedResult}

      else if req.originalUrl is '/video'
        xbox = JSON.parse fs.readFileSync 'src/app/controllers/json/xbox.json'

        res.render name, xbox

      else
        twitterResult         = JSON.parse fs.readFileSync 'src/app/controllers/json/twitter.json'
        youtubeResult         = JSON.parse fs.readFileSync 'src/app/controllers/json/youtube.json'
        instagramResult       = JSON.parse fs.readFileSync 'src/app/controllers/json/instagram.json'
        instagramTaggedResult = JSON.parse fs.readFileSync 'src/app/controllers/json/instagram_tagged.json'

        res.render name, { twitter: twitterResult, youtube: youtubeResult, instagram: instagramResult, instagramTagged: instagramTaggedResult}