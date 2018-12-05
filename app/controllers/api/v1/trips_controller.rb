class Api::V1::TripsController < ApplicationController
  before_action :set_user_name

  def index
    trips = @user.trips.order('created_at ASC')
    # render :json => trips, :include => {:pins => {:only => :photo}}
    # render :json => trips, :include => :pins
    render :json => trips.to_json(:include => { :pins => {:include =>:photo} })
  end

  def create
  end

  private

  def set_user_name
    @user = User.find_by(user_name: params[:user_id])
  end
end
