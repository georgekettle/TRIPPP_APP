class Pin < ApplicationRecord
  belongs_to :photo
  belongs_to :trip
  belongs_to :destination
  belongs_to :user
end
