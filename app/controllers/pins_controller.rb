class PinsController < ApplicationController
  def show
    pin = Pin.find(params[:pin_id])
    @pin = pin.to_json(:include => {:photo => {:only => :img_url},
                              :user => {:only => [:user_name, :photo]},
                              :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}
                              })
  end
end
