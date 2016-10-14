'use strict'

class RecipeController {
    * index(request,response) {
        yield response.sendView('main', {
        name: 'Adonis',
        // ...
        });
    }
}

module.exports = RecipeController
