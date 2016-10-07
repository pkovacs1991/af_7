'use strict'

class PostController {
    * index(request,response) {
        yield response.sendView('teszt')
    }
}

module.exports = PostController
