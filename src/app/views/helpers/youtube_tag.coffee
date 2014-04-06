dust.helpers.youtube = (chunk, context, bodies, params)->
  link = dust.helpers.tap params.link, chunk, context

  youtubeTag = link.split(/[\s/]+/)

  return chunk.write(youtubeTag[youtubeTag.length-2])