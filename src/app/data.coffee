class DataProvider
    api: config.api

    endpoints:
        'frontpage'    : -> 'page/front'

    get: (endpoint, params, cb) ->
        @doRequest @api + @endpoints[endpoint](params), (data) -> cb data

    doRequest: (url, cb) ->
        request.get url, (err, req_res, body) -> cb JSON.parse(body)