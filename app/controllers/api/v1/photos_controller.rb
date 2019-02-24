class Api::V1::PhotosController < ApplicationController
  def create
    # img_upload = Cloudinary::Uploader.upload(params[:form])
    result = Cloudinary::Uploader.upload(params[:file], options = {})
    puts "THIS IS THE RESULT"
    puts result
    photo = Photo.create(
      img_url: result['secure_url']
    )
    puts "THIS IS THE NEW PHOTO OBJECT"
    puts photo
    puts photo.id
    render json: photo
  end
end
