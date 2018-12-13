class Photo < ApplicationRecord
  has_many :pins
  has_many :trips, through: :pins

  # mount_uploader :img_url, PhotoUploader
end
