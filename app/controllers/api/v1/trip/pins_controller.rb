class Api::V1::Trip::PinsController < ApplicationController
  before_action :set_trip

  def index
    pins = @trip.pins.order('created_at ASC')
    render json: pins, :include => {:photo => {:only => :img_url}, :user => {:only => [:user_name, :photo]}, :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}}
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end
end
