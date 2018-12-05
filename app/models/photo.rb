class Photo < ApplicationRecord
  has_many :pins
  has_many :trips, through: :pins
end
