class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :g_places_id

      t.timestamps
    end
  end
end
