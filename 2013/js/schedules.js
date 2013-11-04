(function() {
  $(function() {
    var table;
    table = $('.timetable');
    return $.getJSON('./data/schedules.json', function(data) {
      var s, _i, _len, _ref, _results;
      _ref = data['schedules'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        s = _ref[_i];
        _results.push((function(s) {
          var hour, min, offset, row, speaker, speakers, td, th, theme, time, title;
          console.log(s['type']);
          time = new Date(s['scheduled_at'] * 1000);
          offset = time.getTimezoneOffset();
          title = s['title'];
          speakers = ((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = s['speakers'] != null ? s['speakers'] : s['speakers'] = [];
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              speaker = _ref1[_j];
              _results1.push(speaker['name']);
            }
            return _results1;
          })()).join(', ');
          theme = s['theme'] != null ? s['theme'] : s['theme'] = 'default';
          hour = time.getHours() + offset / 60 + 9;
          min = time.getMinutes();
          if (min === 0) {
            min = '00';
          }
          th = hour + ':' + min + ' JST';
          if (s['type'] === 'presentation') {
            td = '<strong>' + title + '</strong><span class="speaker">' + speakers + '</span>';
          }
          if (s['type'] === 'interval') {
            td = title;
          }
          th = '<th>' + th + '</th>';
          td = '<td>' + td + '</td>';
          row = '<tr class="event event-' + theme + '">' + th + td + '</tr>';
          return table.append(row);
        })(s));
      }
      return _results;
    });
  });

}).call(this);
