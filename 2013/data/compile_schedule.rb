require 'yaml'
require 'json'
abort 'no support for legacy ruby' unless __dir__
y = YAML.load_file "#{__dir__}/schedules.yaml"
y["updated_at"] = Time.new.to_i
scheduled_at = 0
y["schedules"].each do |a|
	if scheduled_at == 0
		scheduled_at = a["scheduled_at"]
	else
		a["scheduled_at"] = scheduled_at
	end

	a["time"].match /(\d+) minutes/
	min = $1.to_i
	scheduled_at += min*60
end
File.open("#{__dir__}/schedules.json", 'w') do |io|
	io.write y.to_json
end
