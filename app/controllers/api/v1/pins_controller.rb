class Api::V1::PinsController < ApplicationController
  before_action :set_user_name

  def index
    pins = @user.pins.order('created_at ASC')
    # render json: pins(include: :photos)
    # render :json => pins, :include => {:photo}
    # render pins.as_json(include: :photos)

    render :json => pins, :include => {:photo => {:only => :img_url}}, :except => [:created_at, :updated_at]
  end

  def create
  end

  private

  def set_user_name
    @user = User.find_by(user_name: params[:user_id])
  end
end
