class Geostory < ActiveRecord::Base
  attr_accessible :title, :author, :text, :latitude, :longitude
end