class AddLongitudeToDestinations < ActiveRecord::Migration[5.2]
  def change
    add_column :destinations, :longitude, :float
  end
end
