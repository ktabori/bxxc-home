fs          = require 'fs'

pageController = (name) ->
    (req, res) ->
      console.log 'pageController', req.originalUrl

      twitterResult         = JSON.parse fs.readFileSync 'src/app/controllers/json/twitter.json'
      tumblrResult          = JSON.parse fs.readFileSync 'src/app/controllers/json/tumblr.json'
      youtubeResult         = JSON.parse fs.readFileSync 'src/app/controllers/json/youtube.json'
      instagramResult       = JSON.parse fs.readFileSync 'src/app/controllers/json/instagram.json'
      instagramTaggedResult = JSON.parse fs.readFileSync 'src/app/controllers/json/instagram_tagged.json'

      res.render name, { twitter: twitterResult, tumblr: tumblrResult, youtube: youtubeResult, instagram: instagramResult, instagramTagged: instagramTaggedResult}