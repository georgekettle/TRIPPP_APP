class Api::V1::TripsController < ApplicationController
  before_action :set_trip
  skip_before_action :set_trip, only: [:index]

  def new
  end

  def create
  end

  def edit
  end

  def show
    # render json: @trip
    render json: @trip, :include => {
                          :user => {:only => [:user_name, :photo]},
                        }
  end

  def index
    set_current_user
    trips = @user.trips.order('created_at ASC')
    render :json => trips.to_json(:include => { :pins => {:include =>:photo} })
  end

  def update
  end

  private

  def set_current_user
    @user = current_user
  end

  def set_trip
    @trip = Trip.find(params[:id])
  end
end

