class Trip < ApplicationRecord
  belongs_to :user
  has_many :pins
  has_many :photos, through: :pins

  def as_json(options = {})
      json = super(options)
      json['contains_pin?'] = contains_pin?(options[:pin_id])
      json
  end

  def contains_pin?(pin_id)
    !self.pins.where(id: pin_id).blank?
  end
end
