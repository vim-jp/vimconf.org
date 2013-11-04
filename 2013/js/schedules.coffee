
$ ->
  table = $('.timetable')
  $.getJSON './data/schedules.json', (data)->
    ((s)->
      console.log s['type']
      time = new Date(s['scheduled_at'] * 1000)
      offset = time.getTimezoneOffset()
      title = s['title']
      speakers = (speaker['name'] for speaker in s['speakers'] ?= []).join ', '
      theme = s['theme'] ?= 'default'

      hour = time.getHours() + offset/60 + 9
      min = time.getMinutes()
      min = '00' if min == 0
      th =  hour + ':' + min + ' JST'
      td = '<strong>' + title + '</strong><span class="speaker">' + speakers + '</span>' if s['type'] is 'presentation'
      td = title if s['type'] is 'interval'

      th = '<th>' + th + '</th>'
      td = '<td>' + td + '</td>'
      row = '<tr class="event event-' + theme + '">' + th + td + '</tr>'
      table.append row
    ) s for s in data['schedules']

