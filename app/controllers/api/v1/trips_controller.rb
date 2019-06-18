class Api::V1::TripsController < ApplicationController
  before_action :set_trip
  skip_before_action :set_trip, only: [:index, :index_w_ref_to_pin]

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

  def pins
    pins = @trip.pins.order('created_at ASC')
    render json: pins, :include => {:photo => {:only => :img_url}, :user => {:only => [:user_name, :photo]}, :trip => {:only => :title}, :destination => {:only => [:g_places_id, :latitude, :longitude]}}
  end

  def index_w_ref_to_pin
    set_current_user
    # @user = User.find(1)
    trips = @user.trips.order('created_at ASC')

    render :json => trips.to_json(:include => { :pins => {:include =>:photo} }, :pin_id => params[:pin_id])
    # render :json => trips.to_json(:include => { :pins => {:include =>:photo} })
  end

  private

  def set_current_user
    puts current_user
    @user = current_user
  end

  def set_trip
    @trip = Trip.find(params[:id])
  end
end

