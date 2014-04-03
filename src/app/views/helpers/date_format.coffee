dust.helpers.formatDate = (chunk, context, bodies, params) ->
    date = dust.helpers.tap params.date, chunk, context
    format = dust.helpers.tap params.format, chunk, context

    m = moment(new Date(date))
    m.lang('da-DK')

    return chunk.write(m.format(format))

dust.helpers.formatDurationHuman = (chunk, context, bodies, params) ->
    durationMilisec = parseInt(dust.helpers.tap params.duration, chunk, context)

    m = moment.duration(durationMilisec, 'milliseconds');
    m.lang('da-DK')

    return chunk.write(m.humanize())