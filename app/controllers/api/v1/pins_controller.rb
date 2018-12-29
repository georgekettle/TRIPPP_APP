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
end
