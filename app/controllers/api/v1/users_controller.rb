class Api::V1::UsersController < ApplicationController
  before_action :set_user

  def show
    render json: @user  #, :include => {:photo => {:only => :img_url}, :user => {:only => [:user_name, :photo]}, :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}}
  end

  private

  def set_user
    @user = User.find_by(user_name: params[:user_name])
  end
end
