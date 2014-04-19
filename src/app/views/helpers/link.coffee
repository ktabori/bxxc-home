linkify = require 'twitter-text'

dust.helpers.link = (chunk, context, bodies, params)->
  string = dust.helpers.tap params.string, chunk, context

  linkified = linkify.autoLink string

  separator = '---'

  if separator.indexOf(linkified)
    splitDesc = linkified.split(separator)
    linkified = splitDesc[0]

  return chunk.write(linkified)