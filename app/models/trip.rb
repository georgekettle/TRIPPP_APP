class Trip < ApplicationRecord
  belongs_to :user
  has_many :pins
  has_many :photos, through: :pins

  def as_json(options = {})
      json = super(options)
      if options[:photo_id]
        json['contains_pin?'] = contains_pin?(options[:photo_id])
      end
      json
  end

  # To return true for all pins which contain the same photo_id (ie with identical pictures)
  def contains_pin?(photo_id)
    # pin = Pin.find(pin_id)
    !self.pins.where(photo_id: photo_id).blank?
  end
end
