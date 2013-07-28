class HomeController < ApplicationController
  def index 
    @geostories = Geostory.all
  end
end