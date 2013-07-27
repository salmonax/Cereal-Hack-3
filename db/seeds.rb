# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


stories = [
["Concert", "Jeebus", "The concert was really great, there were big rabbits.", 48.8742,  2.3470],



]

geostories.each { |title, author, text, latitude, longitude| 
  Geostory.create( title: title, author: author, text:text, latitude: latitude, longitude: longitude)