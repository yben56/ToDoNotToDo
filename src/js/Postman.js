class Postman {
    constructor() {
        this.headers = {
            'cache-control': 'no-cache',
        }
    }

    async Send( method, url, format = 'json', headers = {}, body = {}, files = false ) {
        try {
            
            //1. headers
            headers = {...this.headers, ...headers}

            if ( format == 'json' ) { headers['Content-Type'] = 'application/json' }
            //if ( format == 'formdata' ) { } //formdata do not include content-type
            //if ( format == 'urlencoded' ) { headers['Content-Type'] = 'application/x-www-form-urlencoded' }
            //if ( format == 'multipart' ) { headers['Content-Type'] = 'multipart/form-data' }
                
            //2. get
            if ( method == 'GET' ) {
                url = url + '?' + new URLSearchParams(body).toString()
                //console.log(decodeURI(url))
            }

            //3. options
            const options = {
                method: method,
                headers: headers
            }

            //4. POST, PUT, DELETE
            if ( method != 'GET' ) {
                body = this.Body(format, body)
                options.body = body
            }

            //console.log(Array.from(body))

            //5. fetch api
            let response = await fetch(url, options)
            
            //6. api content type
            const contentType = response.headers.get('Content-Type');
            //console.log(contentType)

            if ( contentType.includes('application/json') ) { response = response.json() }
            //if ( contentType == 'application/xml' ) { }
            //if ( contentType == 'text/html' ) { }
            //if ( contentType == 'text/plain' ) { }

            return response
            
        } catch (e) {
            console.log(e)
        }
    }

    Body( format, data ) {
        let body

        //1. JSON
        if ( format == 'json' ) {
            body = JSON.stringify(data)
        }
        
        //2. FormData
        if ( format == 'formdata' ) {
            body = new FormData()

            for (const key in data) {
                body.append(key, data[key])
            }
        }
        
        return body
    }
}

export default Postman