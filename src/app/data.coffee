class DataProvider
    api: config.api

    endpoints:
        'frontpage'    : -> 'page/tv/front'

    get: (endpoint, params, cb) ->
        @doRequest @api + @endpoints[endpoint](params), (data) -> cb data

    doRequest: (url, cb) ->
        request.get url, (err, req_res, body) -> cb JSON.parse(body)