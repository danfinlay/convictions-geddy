var Replies = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Reply.all(function(err, replies) {
      self.respond({params: params, replies: replies});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , reply = geddy.model.Reply.create(params);

    reply.save(function(err, data) {
      if (err) {
        params.errors = err;
        self.transfer('add');
      } else {
        self.redirect({controller: self.name});
      }
    });
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Reply.first(params.id, function(err, reply) {
      self.respond({params: params, reply: reply.toObj()});
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Reply.first(params.id, function(err, reply) {
      self.respond({params: params, reply: reply});
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Reply.first(params.id, function(err, reply) {
      reply.updateAttributes(params);

      reply.save(function(err, data) {
        if (err) {
          params.errors = err;
          self.transfer('edit');
        } else {
          self.redirect({controller: self.name});
        }
      });
    });
  };

  this.destroy = function (req, resp, params) {
    var self = this;

    geddy.model.Reply.remove(params.id, function(err) {
      if (err) {
        params.errors = err;
        self.transfer('edit');
      } else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.Replies = Replies;
