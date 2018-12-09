class Api::V1::PinsController < ApplicationController
  before_action :set_user_name

  def index
    pins = @user.pins.order('created_at ASC')
    render :json => pins, :include => {:photo => {:only => :img_url}}, :except => [:created_at, :updated_at]
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

  private

  def set_user_name
    @user = User.find_by(user_name: params[:user_id])
  end
end
