class Api::V1::PinsController < ApplicationController
  def new
  end

  def create
    pin = Pin.create(
      photo_id: params[:photo_id],
      user_id: current_user.id,
      trip_id: params[:trip_id],
      destination_id: params[:destination_id],
      caption: params[:caption]
    )
    render json: pin, :include => {:photo => {:only => :img_url}}, :except => [:created_at, :updated_at]
  end

  def edit
  end

  def show
    pin = Pin.find(params[:id])
    render json: pin, :include => {:photo => {:only => :img_url}}, :except => [:created_at, :updated_at]
  end

  def update
  end
end
