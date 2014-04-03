linkify = require 'twitter-text'

dust.helpers.link = (chunk, context, bodies, params)->
  string = dust.helpers.tap params.string, chunk, context

  linkified = linkify.autoLink string

  return chunk.write(linkified)