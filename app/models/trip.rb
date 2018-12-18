class Trip < ApplicationRecord
  belongs_to :user
  has_many :pins
  has_many :photos, through: :pins
end
