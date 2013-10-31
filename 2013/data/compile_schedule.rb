require 'yaml'
require 'json'
abort 'no support for legacy ruby' unless __dir__
y = YAML.load_file "#{__dir__}/schedules.yaml"
File.open("#{__dir__}/schedules.json", 'w') do |io|
  io.write y.to_json
end
