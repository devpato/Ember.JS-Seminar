import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        createPost: function (model) {
            // console.log(model.title, model.author);
            this.sendAction('createPost', model);

            // Clear each input field
            this.set('newPost.title', null);
            this.set('newPost.author', null);
            this.set('newPost.text', null);
        }
    }
});
