var Convictions = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Conviction.all(function(err, convictions) {
      self.respond({params: params, convictions: convictions});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , conviction = geddy.model.Conviction.create(params);

    conviction.save(function(err, data) {
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

    geddy.model.Conviction.first(params.id, function(err, conviction) {
      self.respond({params: params, conviction: conviction.toObj()});
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Conviction.first(params.id, function(err, conviction) {
      self.respond({params: params, conviction: conviction});
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Conviction.first(params.id, function(err, conviction) {
      conviction.updateAttributes(params);

      conviction.save(function(err, data) {
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

    geddy.model.Conviction.remove(params.id, function(err) {
      if (err) {
        params.errors = err;
        self.transfer('edit');
      } else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.Convictions = Convictions;
