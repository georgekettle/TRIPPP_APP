class Api::V1::PinsController < ApplicationController
  def new
  end

  def create
    pin = Pin.create(
      photo_id: params[:photo_id],
      user_id: current_user.id,
      trip_id: params[:trip_id],
      destination_id: params[:destination_id],
      title: params[:title],
      caption: params[:description],
      url: params[:pin_url]
    )
    render json: pin, :include => {:photo => {:only => :img_url}, :user => {:only => [:user_name, :photo]}, :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}}
  end

  def edit
  end

  def show
    @pin = Pin.find(params[:id])
    render json: @pin, :include => {:photo => {:only => :img_url}, :user => {:only => [:user_name, :photo]}, :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}}
  end

  def update
  end

  def add_pin_to_trip
    @pin = Pin.find(params[:pin_id])
    new_pin = @pin.dup
    new_pin.update(trip_id: params[:trip_id])
    # render current_user.trips to update select guide modal
    render :json => current_user.trips.to_json(:include => { :pins => {:include =>:photo} }, :photo_id => new_pin.photo_id)
  end

  # def remove_pin_from_trip
  #   @pin = Pin.find(params[:pin_id])
  #   photo_id = @pin.photo_id
  #   @pin.delete
  #   # render current_user.trips to update select guide modal
  #   render :json => current_user.trips.to_json(:include => { :pins => {:include =>:photo} }, :photo_id => photo_id)
  # end
end
