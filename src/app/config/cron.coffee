cron        = require 'schedule'
mongodb     = require 'mongodb'
touch       = require 'touch'
fs          = require 'fs'
MongoClient = mongodb.MongoClient

if env == 'development'
  periode     = '30s'
else
  periode     = '30s'

cron.every(periode).do -> 
  console.log 'Fetching data from Vulp Mongo' 
  console.log 'From: ' + config.mongoURL
  console.log 'Periode: ' + periode + '(' + env + ')'
  MongoClient.connect config.mongoURL, (err, db)->
          
    # Fetching Twitter data
    collection = db.collection 'bxxc_twitter'
    collection.find().limit(10).toArray (err, results)->

      touch 'src/app/controllers/json/twitter.json'
      fs.writeFile 'src/app/controllers/json/twitter.json', JSON.stringify(results, null, 4), (err)-> 
        if err
          console.log err
        else
          console.log "The twitter.json was saved!"

    # Fetching Tumblr data
    collection = db.collection 'bxxc_tumblr'
    collection.find().limit(10).toArray (err, results)->

      touch 'src/app/controllers/json/tumblr.json'
      fs.writeFile 'src/app/controllers/json/tumblr.json', JSON.stringify(results, null, 4), (err)-> 
        if err
          console.log err
        else
          console.log "The tumblr.json was saved!"

    # Fetching YouTube data
    collection = db.collection 'bxxc_youtube'
    collection.find().limit(10).toArray (err, results)->

      touch 'src/app/controllers/json/youtube.json'
      fs.writeFile 'src/app/controllers/json/youtube.json', JSON.stringify(results, null, 4), (err)-> 
        if err
          console.log err
        else
          console.log "The youtube.json was saved!"

    # Fetching Instagram data
    collection = db.collection 'bxxc_instagram'
    collection.find().limit(10).toArray (err, results)->
      
      touch 'src/app/controllers/json/instagram.json'
      fs.writeFile 'src/app/controllers/json/instagram.json', JSON.stringify(results, null, 4), (err)-> 
        if err
          console.log err
        else
          console.log "The instagram.json was saved!"

    # Fetching tagged Instagram data
    collection = db.collection 'bxxc_instagram_tagged'
    collection.find().limit(10).toArray (err, results)->
      
      touch 'src/app/controllers/json/instagram_tagged.json'
      fs.writeFile 'src/app/controllers/json/instagram_tagged.json', JSON.stringify(results, null, 4), (err)-> 
        if err
          console.log err
        else
          console.log "The instagram_tagged.json was saved!"