
$ ->
  table = $('.timetable')
  $.getJSON './data/schedules.json', (data)->
    ((s)->
      t = new Date()
      time = new Date((s['scheduled_at'] + t.getTimezoneOffset()*60) * 1000)
      title = s['title']
      speakers = (
        (
          (if speaker['avatar']  then '<img src="' + speaker['avatar'] + '" class="avatar" /> '      else '') +
          speaker['name'] +
          (if speaker['twitter'] then '<a class="btn btn-default btn-xs" href="https://twitter.com/' + speaker['twitter'] + '">twitter</a>' else '' ) +
          (if speaker['github']  then '<a class="btn btn-default btn-xs" href="https://github.com/' + speaker['github'] + '">github</a>' else '' )
        ) for speaker in s['speakers'] ?= []
      ).join ' / '
      theme = s['theme'] ?= 'default'


      hour = time.getHours() + 9
      min = time.getMinutes()
      min = '00' if min == 0
      th =  hour + ':' + min + ' JST'
      if s['type'] is 'presentation'
        td = '<strong>' + title + '</strong><span class="speaker">' + speakers + '</span>'
        if s['details']
          td += '<div class="panel panel-default"><div class="panel-body">'
          td += s['details']
          td += '<hr />' + s['details-i18n'] if s['details-i18n']
          td += '</div></div>'
      if s['type'] is 'interval'
        td = title
        if s['description']
          td += '<div class="panel panel-default"><div class="panel-body">'
          td += s['description']
          td += '<hr />' + s['description-i18n'] if s['description-i18n']
          td += '</div></div>'

      th = '<th>' + th + '</th>'
      td = '<td>' + td + '</td>'
      row = '<tr class="event event-' + theme + '">' + th + td + '</tr>'
      table.append row
    ) s for s in data['schedules']
    hide_details()

  hide_details = ->
    $('.show-details').show()
    $('.hide-details').hide()
    $('table .panel').hide()

  show_details = ->
    $('.show-details').hide()
    $('.hide-details').show()
    $('table .panel').show()

  $('.show-details').click show_details
  $('.hide-details').click hide_details

