class Api::V1::TripsController < ApplicationController
  before_action :set_trip

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

  def update
  end

  private

  def set_trip
    @trip = Trip.find(params[:id])
  end
end

