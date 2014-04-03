module.exports =
  export_mongohq:
    cmd: 'mongodump --host oceanic.mongohq.com:10022 -db vulp -u bxxc -pNNG7JJgo4b -o ~/Desktop'
  drop_local_mongo:
    cmd: 'mongo vulp --eval "db.dropDatabase();"'
  import_mongohq:
    cmd: 'mongorestore -h localhost:27017 -d vulp ~/Desktop/vulp/'