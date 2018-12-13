class Api::V1::PhotosController < ApplicationController
  def create
    # img_upload = Cloudinary::Uploader.upload(params[:photo_url])
    photo = Photo.create(
      img_url: "https://i0.wp.com/www.bontraveler.com/wp-content/uploads/2018/07/DSC_0882.jpg?w=1200&ssl=1"
    )
    render json: photo
  end
end
