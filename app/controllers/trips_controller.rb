class TripsController < ApplicationController
  def show
    trip = Trip.find(params[:id])
    @trip = trip.to_json(:include => {
                              :user => {:only => [:user_name, :photo]}
                              })

    pins = trip.pins.order('created_at ASC')
    @pins = pins.to_json(:include => {:photo => {:only => :img_url},
                              :user => {:only => [:user_name, :photo]},
                              :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}
                              })
  end
end
