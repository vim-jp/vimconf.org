
$ ->
  table = $('.timetable')
  $.getJSON './data/schedules.json', (data)->
    ((s)->
      t = new Date()
      time = new Date((s['scheduled_at'] + t.getTimezoneOffset()*60) * 1000)
      title = s['title']
      speakers = (speaker['name'] for speaker in s['speakers'] ?= []).join ', '
      theme = s['theme'] ?= 'default'


      hour = time.getHours() + 9
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

